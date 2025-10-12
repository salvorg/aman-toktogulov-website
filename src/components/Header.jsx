"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Container from "@/components/Container";
import {useEffect, useState} from "react";

const links = [
    {href: "/", label: "Башкы бет"},
    {href: "/omur-bayany", label: "Өмүр баяны"},
    {href: "/yrlar", label: "Ырлар"},
    {href: "/oy-pikirler", label: "Ой-пикирлер"},
    {href: "/proza", label: "Проза"},
    {href: "/publitsistika", label: "Публицистика"},
    {href: "/kotormolor", label: "Котормолор"},
    {href: "/video", label: "Видео"},
    {href: "/eskeruulor", label: "Эскерүүлөр"},
    {href: "/photo", label: "Фотогалерея"},
];

export default function Header() {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            setIsScrolled((prev) => {
                if (!prev && y > 120) return true;
                if (prev && y < 80) return false;
                return prev;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const firstRow = links.slice(0, 5);
    const secondRow = links.slice(5);
    const renderLinks = (row) =>
        row.map(({ href, label }) => (
            <li key={href}>
                <Link
                    href={href}
                    className={`uppercase tracking-widest text-xs ${
                        pathname === href
                            ? "text-[#6b4b3e]"
                            : "text-[#2c2a28]/70 hover:text-tolkien-accent"
                    } transition-colors`}
                >
                    {label}
                </Link>
            </li>
        ));

    return (
        <header className="backdrop-blur-sm sticky top-0 z-50 bg-white-chalk border-b border-[#dcd7c9]/60">
            <div className="py-4"></div>
            <div className={`${isScrolled ? 'py-3' : 'py-3'} bg-white transition-all duration-300`}>
                <Container>
                    <div className={'relative z-10 text-center px-6 transition-all duration-300'}>
                        <h1 className={`text-3xl ${isScrolled ? 'md:text-xl mb-1' : 'md:text-5xl mb-4'} font-serif text-tolkien-primary tracking-[0.12em] transition-all duration-300`}>
                            Аман Токтогулов
                        </h1>
                        <p className={`text-lg ${isScrolled ? 'md:text-sm' : 'md:text-xl'} text-[#4a4944]/80 font-serif tracking-widest italic transition-all duration-300`}>
                            Писатель • Поэт • Переводчик
                        </p>
                    </div>
                </Container>
            </div>
            <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
                <Container>
                    <ul className="flex justify-center gap-8 py-2">{renderLinks(firstRow)}</ul>
                    <ul className="flex justify-center gap-8 py-2 border-t border-[#dcd7c9]/60">{renderLinks(secondRow)}</ul>
                </Container>
            </nav>
        </header>
    );
}