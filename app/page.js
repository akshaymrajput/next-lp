import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import LearningHub from "@/components/LearningHub";
import Dictionary from "@/components/Dictionary";
import Toggle from "@/components/Toggle";
import Roadmap from "@/components/Roadmap";

export default function Home() {
    return (
        <main className="flex flex-col bg-[#090908] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] text-white">
            <div className="flex-1 flex flex-col justify-center items-center w-full">
                <Navbar />
                <Header />
                <Roadmap />
                <section className="w-full flex justify-center gap-8 mt-24 border-t border-[rgba(255,255,255,0.05)]">
                    <LearningHub />
                </section>
                <section className="w-full flex justify-center gap-8  my-24 border-t border-[rgba(255,255,255,0.05)]">
                    <Dictionary />
                </section>
                <div className="sticky bottom-8 z-40 mb-12">
                    <Toggle />
                </div>
                <div className="w-full">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
