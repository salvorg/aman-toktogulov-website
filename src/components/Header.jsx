"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Container from "@/components/Container";

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

    const firstRow = links.slice(0, 5);
    const secondRow = links.slice(5);
    const renderLinks = (row) =>
        row.map(({ href, label }) => (
            <li key={href}>
                <Link
                    href={href}
                    className={`uppercase tracking-widest text-sm ${
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
            <div className="py-4 bg-white">
                <Container>
                    <div className="relative z-10 text-center px-6">
                        <h1 className="text-3xl md:text-5xl font-serif text-tolkien-primary tracking-[0.12em] mb-4">
                            Аман Токтогулов
                        </h1>
                        <p className="text-lg md:text-xl text-[#4a4944]/80 font-serif tracking-widest italic">
                            Писатель • Поэт • Переводчик
                        </p>
                    </div>
                </Container>
            </div>
            <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
                <Container>
                    <ul className="flex justify-center gap-8 py-3">{renderLinks(firstRow)}</ul>
                    <ul className="flex justify-center gap-8 py-3 border-t border-[#dcd7c9]/60">
                        {renderLinks(secondRow)}
                    </ul>
                </Container>
            </nav>
        </header>
    );
}