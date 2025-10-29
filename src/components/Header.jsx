"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import styles from "../style.css/header.module.css";

const links = [
    { href: "/", label: "Башкы бет" },
    { href: "/omur-bayany", label: "Өмүр баяны" },
    { href: "/yrlar", label: "Ырлар" },
    { href: "/oy-pikirler", label: "Ой-пикирлер" },
    { href: "/proza", label: "Проза" },
    { href: "/publitsistika", label: "Публицистика" },
    { href: "/kotormolor", label: "Котормолор" },
    { href: "/video", label: "Видео" },
    { href: "/eskeruulor", label: "Эскерүүлөр" },
];

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setIsScrolled((prev) => {
                if (!prev && y > 120) return true;
                if (prev && y < 80) return false;
                return prev;
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderLinks = (row) =>
        row.map(({ href, label }) => (
            <li key={href}>
                <Link
                    href={href}
                    className={`${styles.navLink} ${
                        pathname === href ? styles.navLinkActive : ""
                    }`}
                >
                    {label}
                </Link>
            </li>
        ));

    const firstRow = links.slice(0, 5);
    const secondRow = links.slice(5);

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
