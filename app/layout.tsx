import "../styles/global.css";
import { Metadata } from "next";
import Script from "next/script";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export const metadata: Metadata = {
    title: {
        template: "%s | Next(16.1) Study",
        default: "Next(16.1) Study",
    },
    description: "Next(16.1) Study - 2026.02",
};

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                {/* <Script
                    src="../js/tailwindcss.js"
                    strategy="afterInteractive"
                    /> */}
            </head>
            <body className="dark:bg-obsidian transition-colors duration-500">
                {/* <Navigation /> */}
                {children}
                <Footer />
            </body>
        </html>
    );
}