"use client";

import React, { useState } from 'react';
import Container from "@/components/Container";
import Link from "next/link";
import {PAGES_URLS} from "@/util/constants";
import {usePathname} from "next/navigation";
import styles from "@/style.css/navbar.module.css";
import {useWindowWidth} from "@/hooks/useWindowWidth";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const displayWidth = useWindowWidth();

    const pathsArray = Object.values(PAGES_URLS);
    const middle = Math.ceil(pathsArray.length / 2);
    const firstRow = pathsArray.slice(0, middle);
    const secondRow = pathsArray.slice(middle);

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

    const toggleBurger = () => {
        setIsOpen(prev => !prev);
    }

    return displayWidth < 768 ? (
        <nav className={styles.nav}>
            <button
                className={`${styles.burgerButton} ${isOpen ? styles.burgerOpen : ''}`}
                onClick={toggleBurger}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                <span className={styles.burgerIcon}></span>
                <span className={styles.burgerIcon}></span>
                <span className={styles.burgerIcon}></span>
            </button>
            {isOpen && (
                <div id="mobile-menu" className={styles.mobileMenu}>
                    <ul className={styles.mobileNavList}>
                        {renderLinks(pathsArray, true)}
                    </ul>
                </div>
            )}
        </nav>
    ) : (
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
    );
};

export default Navbar;