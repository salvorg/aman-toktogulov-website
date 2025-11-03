"use client";

import React from 'react';
import styles from "@/style.css/featureSection.module.css"
import Image from "next/image";

const FeatureSection = ({ data, index }) => {
    const { title, imgSource, description } = data;

    return (
        <section className={styles.container} data-index={index}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imgSource}
                    alt={title}
                    fill
                    className={styles.image}
                />
            </div>

            <div className={styles.textBlockWrapper}>
                <h2 className={styles.title}>
                    {title.toUpperCase()}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
                <button className={styles.button}>
                    Толук окуу
                </button>
            </div>
        </section>
    );
};

export default FeatureSection;