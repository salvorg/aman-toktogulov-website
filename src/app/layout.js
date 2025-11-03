import "@/style.css/globals.css";
import {Geist, Geist_Mono} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/style.css/rootLayout.module.css"

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


export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={styles.layoutBody}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        </body>
        </html>
    );
}