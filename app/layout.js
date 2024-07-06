import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Intract Quests - Learn & Earn Web3",
    description:
        "Embark on epic quests on Intract in the world of Web3 and unlock exciting rewards!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
