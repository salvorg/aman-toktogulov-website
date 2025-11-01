"use client";

import React from 'react';
import Section from "../../components/Section";
import Image from "next/image";
import styles from "@/style.css/heroSection.module.css";

const HeroSection = () => {
    return (
        <Section fullScreen={true}>
            <div className={styles.hero}>
                <Image
                    src="/images/aman-tok-portrait-wide.png"
                    alt="Аман Токтогулов"
                    fill
                    priority
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay}></div>

                <div className={styles.heroTextWrapper}>
                    <p>«Өзүңдү изде!</p>
                    <p>Сен кимсиң, бу дүйнөдө?</p>
                    <p>Кеч эмес али дагы.</p>
                    <p>Сен, досум, өзүңдү тап!</p>
                    <p>Тойгузба сөзүң, менен.</p>
                    <p>Көргөз иш, бер ибарат!»</p>
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;