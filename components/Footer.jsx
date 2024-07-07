import React from "react";
import {
    BiLogoTelegram,
    BiLogoSpotify,
    BiLogoTwitter,
    BiLogoDiscord,
} from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="text-[#7d7d7d] bg-black flex justify-center">
            <div className="w-full p-12 flex flex-col gap-8 items-center justify-center max-w-7xl">
                <div className="gap-8 flex flex-col sm:flex-row sm:justify-between items-start w-full border-b border-[rgba(255,255,255,0.2)] pb-8">
                    <div className="max-w-[350px]">
                        <span className="text-2xl font-bold text-[rgba(255,255,255,0.9)]">
                            intract.
                        </span>
                        <p className="text-sm">
                            We are your personal guide for exploring web3
                            projects & earning 100x rewards
                        </p>
                    </div>
                    <div>
                        <span className="uppercase font-bold text-[rgba(255,255,255,0.9)]">
                            interact
                        </span>
                        <div className="text-[#7d7d7d] flex flex-col">
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                explore quests
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                comunities
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                alpha hub
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="uppercase font-bold text-[rgba(255,255,255,0.9)]">
                            earn
                        </span>
                        <div className="text-[#7d7d7d] flex flex-col">
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                refer & earn
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                leaderboard
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                achievements
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="uppercase font-bold text-[rgba(255,255,255,0.9)]">
                            about
                        </span>
                        <div className="text-[#7d7d7d] flex flex-col">
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                product roadmap
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                affiliate program
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                sign up program
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                growth community
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                blogs
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="uppercase font-bold text-[rgba(255,255,255,0.9)]">
                            support
                        </span>
                        <div className="text-[#7d7d7d] flex flex-col">
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                help center
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                create your quest
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                terms of service
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                privacy policy
                            </span>
                            <span className="capitalize text-sm hover:text-white cursor-pointer">
                                community guidelines
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.2)] pb-8">
                    <p className="text-justify text-sm">
                        <span className="font-bold text-[rgba(255,255,255,0.9)]">
                            Disclaimer:
                        </span>{" "}
                        Crypto Products, Virtual Digital Assets, and NFTs are
                        unregulated and can be highly risky. There may be no
                        regulatory recourse for any loss from such transactions.
                        We advise the viewer to proceed with caution. Nothing in
                        this website or any communication published by us
                        amounts to, is intended to be, or should be construed as
                        investment or purchase advice of any kind or financial
                        advice or promotion under any applicable laws. Any
                        decision made based on the content provided on this
                        website or any communication published by us shall not
                        be attributable to us.
                    </p>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div>
                        Developed with passion by
                        <span className="font-bold"> Akshay</span>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-9 h-9 text-2xl flex justify-center items-center rounded-md bg-[#1a1a1a] text-blue-500">
                            <BiLogoTwitter />
                        </div>
                        <div className="w-9 h-9 text-2xl flex justify-center items-center rounded-md bg-[#1a1a1a] text-blue-600">
                            <BiLogoDiscord />
                        </div>
                        <div className="w-9 h-9 text-2xl flex justify-center items-center rounded-md bg-[#1a1a1a] text-blue-400">
                            <BiLogoTelegram />
                        </div>
                        <div className="w-9 h-9 text-2xl flex justify-center items-center rounded-md bg-[#1a1a1a] text-green-600">
                            <BiLogoSpotify />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
