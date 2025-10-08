"use client";

export default function Container({ children }) {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}