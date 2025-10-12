"use client";

import Container from "./Container";

export default function Section({ children, className = "", fullScreen = false }) {
    return (
        <section
            className={`relative w-full ${fullScreen ? "min-h-[calc(100vh-230px)]" : "py-16"} ${className}`}
        >
            <Container>{children}</Container>
        </section>
    );
}