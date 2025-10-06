import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Аман Токтогулов",
    description: "Писатель, поэт, переводчик",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className="bg-tolkien-bg text-tolkien-primary font-serif antialiased"
        >
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}