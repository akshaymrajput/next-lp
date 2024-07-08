import React from "react";
import {
    BiLogoTelegram,
    BiLogoSpotify,
    BiLogoTwitter,
    BiLogoDiscord,
} from "react-icons/bi";

const FooterLinkGroup = ({ title, links }) => (
    <div>
        <span className="uppercase font-bold text-[rgba(255,255,255,0.9)]">
            {title}
        </span>
        <div className="text-[#7d7d7d] flex flex-col mt-2">
            {links.map((link, index) => (
                <span
                    key={index}
                    className="capitalize text-sm hover:text-white cursor-pointer"
                >
                    {link}
                </span>
            ))}
        </div>
    </div>
);

const Footer = () => {
    const footerLinks = [
        {
            title: "interact",
            links: ["explore quests", "communities", "alpha hub"],
        },
        {
            title: "earn",
            links: ["refer & earn", "leaderboard", "achievements"],
        },
        {
            title: "about",
            links: [
                "product roadmap",
                "affiliate program",
                "sign up program",
                "growth community",
                "blogs",
            ],
        },
        {
            title: "support",
            links: [
                "help center",
                "create your quest",
                "terms of service",
                "privacy policy",
                "community guidelines",
            ],
        },
    ];

    const socialIcons = [
        { icon: <BiLogoTwitter />, color: "text-blue-500" },
        { icon: <BiLogoDiscord />, color: "text-blue-600" },
        { icon: <BiLogoTelegram />, color: "text-blue-400" },
        { icon: <BiLogoSpotify />, color: "text-green-600" },
    ];

    return (
        <footer className="text-[#7d7d7d] bg-black flex justify-center">
            <div className="w-full p-6 sm:p-12 flex flex-col gap-8 items-center justify-center max-w-7xl">
                <div className="gap-8 flex flex-col sm:flex-row sm:justify-between items-start w-full border-b border-[rgba(255,255,255,0.2)] pb-8">
                    <div className="max-w-[350px]">
                        <span className="text-2xl font-bold text-[rgba(255,255,255,0.9)]">
                            intract.
                        </span>
                        <p className="text-sm mt-2">
                            We are your personal guide for exploring web3
                            projects & earning 100x rewards
                        </p>
                    </div>
                    {footerLinks.map((group, index) => (
                        <FooterLinkGroup
                            key={index}
                            title={group.title}
                            links={group.links}
                        />
                    ))}
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
                <div className="flex justify-between items-center flex-wrap w-full">
                    <div>
                        Developed with passion by
                        <span className="font-bold"> Akshay</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {socialIcons.map((social, index) => (
                            <div
                                key={index}
                                className={`w-9 h-9 text-2xl flex justify-center items-center rounded-md bg-[#1a1a1a] ${social.color}`}
                            >
                                {social.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
