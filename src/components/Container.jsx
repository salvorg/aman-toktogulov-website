"use client";
import styles from "@/style.css/container.module.css";

export default function Container({ children }) {
    return <div className={styles.container}>{children}</div>;
}
