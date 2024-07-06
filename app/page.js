import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import QuestBox from "@/components/QuestBox";

const questDetails = {
    title: "Basics of Crypto",
    description: "The safest and easiest place to start your crypto journey!",
    totalXP: 1490,
    totalQuests: 6,
};

export default function Home() {
    return (
        <main className="flex flex-col bg-[#090908] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] text-white">
            <div className="flex-1">
                <Navbar />
                <Header />
                <QuestBox
                    questImg="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
                    questDetails={questDetails}
                    questTasks={[]}
                />
                <Footer />
            </div>
        </main>
    );
}
