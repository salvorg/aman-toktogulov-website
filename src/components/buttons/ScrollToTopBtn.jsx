"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "./ScrollToTopButton.module.css";

// SVG-иконка стрелки
const ChevronUpIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="18 15 12 9 6 15" />
    </svg>
);

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Функция для плавного скролла наверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Обработчик скролла: показываем/скрываем кнопку
    const handleScroll = useCallback(() => {
        // Показываем кнопку, если прокрутка превышает 300px
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <button
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : styles.hidden}`}
            onClick={scrollToTop}
            aria-label="Вернуться наверх"
            title="Вернуться наверх"
        >
            <ChevronUpIcon className={styles.icon} />
        </button>
    );
}