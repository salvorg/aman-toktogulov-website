"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import styles from "../style.css/header.module.css";
import {PAGES_URLS} from "@/util/constants";

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setIsScrolled((prev) => {
                if (!prev && y > 120) return true;
                if (prev && y === 0) return false;
                return prev;
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderLinks = (row) =>
        row.map(({ path, label }) => (
            <li key={path}>
                <Link
                    href={path}
                    className={`${styles.navLink} ${
                        pathname === path ? styles.navLinkActive : ""
                    }`}
                >
                    {label}
                </Link>
            </li>
        ));

    const pathsArray = Object.values(PAGES_URLS);
    const middle = Math.ceil(pathsArray.length / 2);
    const firstRow = pathsArray.slice(0, middle);
    const secondRow = pathsArray.slice(middle);

    return (
        <header className={styles.header}>
            <div className={styles.headerSpacer}></div>
            <div className={styles.headerInner}>
                <Container>
                    <div className={styles.titleWrapper}>
                        <h1
                            className={`${styles.title} ${
                                isScrolled ? styles.titleSmall : styles.titleLarge
                            }`}
                        >
                            Аман Токтогулов
                        </h1>
                        <p
                            className={`${styles.subtitle} ${
                                isScrolled ? styles.subtitleSmall : styles.subtitleLarge
                            }`}
                        >
                            Писатель • Поэт • Переводчик
                        </p>
                    </div>
                </Container>
            </div>

            <nav className={styles.nav}>
                <Container>
                    <ul className={styles.navList}>
                        {renderLinks(firstRow)}
                    </ul>
                    <ul className={`${styles.navList} ${styles.navListSecond}`}>
                        {renderLinks(secondRow)}
                    </ul>
                </Container>
            </nav>
        </header>
    );
}
