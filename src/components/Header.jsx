"use client";

import {useEffect, useState} from "react";
import Container from "@/components/Container";
import styles from "@/style.css/header.module.css";
import Navbar from "@/components/Navbar";

export default function Header() {
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

            <Navbar />
        </header>
    );
}
