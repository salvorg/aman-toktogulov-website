"use client";

import Image from "next/image";

export default function HomePage() {
    return (
        <section
            className="relative w-full h-[45vh] md:h-[55vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
            <Image
                src="/aman-tok-portrait-wide.png"
                alt="Аман Токтогулов"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#f3f2e1]/70 via-transparent to-[#f3f2e1]/80"></div>

            <div className="relative z-10 w-full flex justify-end text-center px-46">
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
    );
}