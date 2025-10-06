"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const links = [
    { href: "/", label: "Башкы бет" },
    { href: "/omur-bayany", label: "Өмүр баяны" },
    { href: "/yrlar", label: "Ырлар" },
    { href: "/oy-pikirler", label: "Ой-пикирлер" },
    { href: "/proza", label: "Проза" },
    { href: "/publitsistika", label: "Публицистика" },
    { href: "/kotormolor", label: "Котормолор" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="backdrop-blur-sm sticky top-0 z-50">
            <div className="py-5 bg-white-chalk"></div>
            <div className="py-20 bg-white">
                <Container>
                    AMAN TOKTOGULOV
                </Container>
            </div>
            <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <Container>
                    <ul className="flex gap-8">
                        {links.map(({href, label}) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`uppercase tracking-wider text-sm ${
                                        pathname === href ? "text-[#6b4b3e]" : "text-[#2c2a28]/70 hover:text-[#6b4b3e]"
                                    } transition-colors`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </nav>
        </header>
    );
}