"use client";

import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";
import Section from "@/components/Section";
import FeatureSection from "@/components/FeatureSection";
import styles from "../style.css/homePage.module.css";
import {sectionsData} from "@/util/mokData";
import {PAGES_URLS} from "@/util/constants";
import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />

            <Container>
                {sectionsData.map((item, i) =>
                    <FeatureSection key={item.title} data={item} index={(i + 1)} />
                )}
            </Container>

            <Section fullScreen={true}>
                <Container>
                    <div className={styles.aboutGrid}>
                        <Image
                            src="/aman-tok-portrait.png"
                            alt="Аман Токтогулов портрет"
                            width={400}
                            height={500}
                            className={styles.aboutImage}
                        />
                        <div className={styles.aboutText}>
                            <h2>Аман Токтогулов жөнүндө</h2>
                            <p>
                                Кыргыз адабиятынын көрүнүктүү өкүлдөрүнүн бири, акын, жазуучу жана
                                котормочу. Анын чыгармаларында адамдын ички дүйнөсү, жаратылышка
                                болгон сүйүү жана руханий изденүү темалары терең чагылдырылган.
                            </p>
                            <Link href="/omur-bayany" className={styles.galleryButton}>
                                Толук окуу →
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section fullScreen>
                <Container>
                    <h2 className={styles.categoriesTitle}>Рубрикалар</h2>
                    <div className={styles.categoryGrid}>
                        {[
                            { href: "/yrlar", title: "Ырлар", desc: "Жандуу жана терең поэзиянын жыйнагы." },
                            { href: "/proza", title: "Проза", desc: "Кыска жана узун прозалык чыгармалар." },
                            { href: "/publitsistika", title: "Публицистика", desc: "Коом жана маданият тууралуу ой-пикирлер." },
                            { href: "/kotormolor", title: "Котормолор", desc: "Дүйнөлүк адабияттан которулган чыгармалар." },
                            { href: "/video", title: "Видео", desc: "Жандуу сүйлөмдөр жана маектер." },
                            { href: "/gallery", title: "Фотогалерея", desc: "Жашоодон, чыгармачылыктан элестер." },
                        ].map(({ href, title, desc }) => (
                            <Link key={href} href={href} className={styles.categoryCard}>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            <section className={styles.quotes}>
                <Container>
                    <h2 className={styles.categoriesTitle}>Тандамал цитаталар</h2>
                    <div className={styles.quoteGrid}>
                        {[
                            "“Адамдын ички дүйнөсү — бул чексиз аалам, аны изилдөө жашоонун мааниси.”",
                            "“Сөз адамдын жүрөгүн ачат жана руханий дүйнөсүн кеңейтет.”",
                            "“Жаратылыш менен үндөшүү — эң чоң чыгармачылык деми.”",
                            "“Ар бир сөздө руханий тереңдик бар, аны сезүүнү үйрөнүү керек.”",
                        ].map((quote, idx) => (
                            <blockquote key={idx} className={styles.quote}>
                                {quote}
                            </blockquote>
                        ))}
                    </div>
                </Container>
            </section>

            <section className={styles.gallery}>
                <Container>
                    <h2 className={styles.categoriesTitle}>Фотогалерея</h2>

                    <div className={styles.galleryGrid}>
                        {["/aman-tok-portrait.png", "/aman-tok-portrait.png", "/aman-tok-portrait.png", "/aman-tok-portrait.png"].map(
                            (src, idx) => (
                                <div key={idx} className={styles.galleryItem}>
                                    <Image
                                        src={src}
                                        alt={`Фото ${idx + 1}`}
                                        width={300}
                                        height={300}
                                        className={styles.galleryImage}
                                    />
                                </div>
                            )
                        )}
                    </div>

                    <div className="text-center">
                        <Link href={PAGES_URLS.gallery.path} className={styles.galleryButton}>
                            Баарын көрүү →
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
}
