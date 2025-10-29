"use client";

import Container from "./Container";
import styles from "../style.css/section.module.css";

export default function Section({ children, className = "", fullScreen = false }) {
    const sectionClass = `
    ${styles.section} 
    ${fullScreen ? styles.sectionFull : styles.sectionDefault} 
    ${className}
  `.trim();

    return (
        <section className={sectionClass}>
            {fullScreen ?
                children
             : (
                <Container>{children}</Container>
            )}
        </section>
    );
}
