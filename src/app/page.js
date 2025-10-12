"use client";

import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <section
                className="relative w-full h-[45vh] md:h-[55vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/aman-tok-portrait-wide.png"
                    alt="Аман Токтогулов"
                    fill
                    priority
                    className="object-cover"
                />

                <div
                    className="absolute inset-0 bg-gradient-to-b from-[#f3f2e1]/70 via-transparent to-[#f3f2e1]/80"></div>

                <div className="relative z-10 w-full flex justify-end text-center px-50">
                    <p className="w-[40vh] text-lg md:text-3xl text-white-chalk/80 font-serif italic whitespace-pre-line">
                        {`«Өзүңдү изде!
                    Сен кимсиң, бу дүйнөдө?
                    Кеч эмес али дагы.
                    Сен, досум, өзүңдү тап!
                    Тойгузба сөзүң, менен.
                    Көргөз иш, бер ибарат!»`}
                    </p>
                </div>
            </section>
            <section className="py-16 bg-[#f3f2e1]">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <Image
                            src="/aman-tok-portrait.png"
                            alt="Аман Токтогулов портрет"
                            width={400}
                            height={500}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                        <div>
                            <h2 className="text-2xl font-serif text-tolkien-primary mb-4">
                                Аман Токтогулов жөнүндө
                            </h2>
                            <p className="text-[#4a4944]/80 leading-relaxed mb-6">
                                Кыргыз адабиятынын көрүнүктүү өкүлдөрүнүн бири, акын, жазуучу жана котормочу. Анын чыгармаларында адамдын ички дүйнөсү, жаратылышка болгон сүйүү жана руханий изденүү темалары терең чагылдырылган.
                            </p>
                            <Link
                                href="/omur-bayany"
                                className="inline-block px-6 py-3 bg-tolkien-primary text-white rounded-xl hover:bg-tolkien-accent transition"
                            >
                                Толук окуу →
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="py-20 bg-white-chalk border-t border-[#dcd7c9]/60">
                <Container>
                    <h2 className="text-3xl font-serif text-center mb-12 text-tolkien-primary">
                        Рубрикалар
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { href: "/yrlar", title: "Ырлар", desc: "Жандуу жана терең поэзиянын жыйнагы." },
                            { href: "/proza", title: "Проза", desc: "Кыска жана узун прозалык чыгармалар." },
                            { href: "/publitsistika", title: "Публицистика", desc: "Коом жана маданият тууралуу ой-пикирлер." },
                            { href: "/kotormolor", title: "Котормолор", desc: "Дүйнөлүк адабияттан которулган чыгармалар." },
                            { href: "/video", title: "Видео", desc: "Жандуу сүйлөмдөр жана маектер." },
                            { href: "/photo", title: "Фотогалерея", desc: "Жашоодон, чыгармачылыктан элестер." },
                        ].map(({ href, title, desc }) => (
                            <Link
                                key={href}
                                href={href}
                                className="block bg-[#faf8f0] rounded-2xl p-6 shadow-md hover:shadow-lg transition hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-serif text-tolkien-primary mb-2">{title}</h3>
                                <p className="text-[#4a4944]/80 text-sm leading-relaxed">{desc}</p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
            {/* Quotes Section */}
            <section className="py-20 bg-[#f3f2e1]">
                <Container>
                    <h2 className="text-3xl font-serif text-center mb-12 text-tolkien-primary">
                        Тандамал цитаталар
                    </h2>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            `“Адамдын ички дүйнөсү — бул чексиз аалам, аны изилдөө жашоонун мааниси.”`,
                            `“Сөз адамдын жүрөгүн ачат жана руханий дүйнөсүн кеңейтет.”`,
                            `“Жаратылыш менен үндөшүү — эң чоң чыгармачылык деми.”`,
                            `“Ар бир сөздө руханий тереңдик бар, аны сезүүнү үйрөнүү керек.”`,
                        ].map((quote, idx) => (
                            <blockquote
                                key={idx}
                                className="p-8 bg-white-chalk rounded-2xl shadow-md italic text-[#4a4944]/90 font-serif relative before:content-['“'] before:text-6xl before:absolute before:-top-4 before:-left-4"
                            >
                                {quote}
                            </blockquote>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Mini Photo Gallery Section */}
            <section className="py-20 bg-white-chalk border-t border-[#dcd7c9]/60">
                <Container>
                    <h2 className="text-3xl font-serif text-center mb-12 text-tolkien-primary">
                        Фотогалерея
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {[
                            "/aman-tok-portrait.png",
                            "/aman-tok-portrait.png",
                            "/aman-tok-portrait.png",
                            "/aman-tok-portrait.png",
                        ].map((src, idx) => (
                            <div key={idx} className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition">
                                <Image
                                    src={src}
                                    alt={`Фото ${idx + 1}`}
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-full transform hover:scale-105 transition"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/photo"
                            className="inline-block px-6 py-3 bg-tolkien-primary text-white rounded-xl hover:bg-tolkien-accent transition"
                        >
                            Баарын көрүү →
                        </Link>
                    </div>
                </Container>
            </section>

        </>
    );
}