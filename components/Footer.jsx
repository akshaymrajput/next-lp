import React from "react";

const Footer = () => {
    return (
        <footer className="text-white bg-black flex justify-center">
            <div className="w-full p-12 flex flex-col gap-8 items-center justify-center max-w-7xl">
                <div className="gap-8 flex flex-col sm:flex-row sm:justify-between items-start w-full">
                    <div className="max-w-[350px]">
                        <span className="text-2xl font-bold">intract.</span>
                        <p className="text-sm">
                            We are your personal guide for exploring web3
                            projects & earning 100x rewards
                        </p>
                    </div>
                    <div>
                        <span className="uppercase font-bold">interact</span>
                        <div className="text-gray-300 flex flex-col">
                            <span className="capitalize text-sm">
                                explore quests
                            </span>
                            <span className="capitalize text-sm">
                                comunities
                            </span>
                            <span className="capitalize text-sm">
                                alpha hub
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="uppercase font-bold">earn</span>
                        <div className="text-gray-300 flex flex-col">
                            <span className="capitalize text-sm">
                                refer & earn
                            </span>
                            <span className="capitalize text-sm">
                                leaderboard
                            </span>
                            <span className="capitalize text-sm">
                                achievements
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="uppercase font-bold">about</span>
                        <div className="text-gray-300 flex flex-col">
                            <span className="capitalize text-sm">
                                product roadmap
                            </span>
                            <span className="capitalize text-sm">
                                affiliate program
                            </span>
                            <span className="capitalize text-sm">
                                sign up program
                            </span>
                            <span className="capitalize text-sm">
                                growth community
                            </span>
                            <span className="capitalize text-sm">blogs</span>
                        </div>
                    </div>
                    <div>
                        <span className="uppercase font-bold">support</span>
                        <div className="text-gray-300 flex flex-col">
                            <span className="capitalize text-sm">
                                help center
                            </span>
                            <span className="capitalize text-sm">
                                create your quest
                            </span>
                            <span className="capitalize text-sm">
                                terms of service
                            </span>
                            <span className="capitalize text-sm">
                                privacy policy
                            </span>
                            <span className="capitalize text-sm">
                                community guidelines
                            </span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="text-justify text-sm">
                        <span className="font-bold">Disclaimer:</span> Crypto
                        Products, Virtual Digital Assets, and NFTs are
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
            </div>
        </footer>
    );
};

export default Footer;
