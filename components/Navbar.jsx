"use client";

import Image from "next/image";
import React, { useState } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import { FiSearch } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const links = ["Compass", "Explore", "Academy", "NFTs", "For Projects"];

const Navbar = () => {
    const { isMobile, isTablet, isDesktop } = useScreenSize();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            className={`sticky top-0 z-50 ${
                isMobile ? "" : "p-2"
            } bg-black bg-opacity-10 backdrop-blur-[5px] w-full h-[64px]`}
        >
            {!(isMobile || isTablet) && (
                <div className="flex justify-center items-center gap-4">
                    <div className="">
                        <Image
                            src="https://www.intract.io/logo/intract_text.svg"
                            alt="logo"
                            width={100}
                            height={50}
                        />
                    </div>
                    <div>
                        <div className="flex font-semibold gap-4 text-gray-300">
                            {links.map((link) => (
                                <div
                                    key={link}
                                    className="cursor-pointer hover:underline hover:text-gray-200"
                                >
                                    {link}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-start items-center w-full lg:w-[450px] gap-2 px-5 py-2.5 rounded-full bg-gray-300 bg-opacity-10">
                            <div className="text-gray-400 text-lg">
                                <FiSearch />
                            </div>
                            <input
                                className="w-full bg-transparent outline-none text-white"
                                type="text"
                                placeholder="Search for ecosystems, trending quests etc,."
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <div className="flex justify-center items-center">
                            <div className="w-12 h-12 border rounded-full flex justify-center items-center border-[#fa8922] cursor-pointer">
                                <Image
                                    src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
                                    alt="broadcast"
                                    width={16}
                                    height={16}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="bg-white text-black font-semibold px-6 py-1.5 border rounded-lg">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {(isMobile || isTablet) && !menuOpen && (
                <div className="flex h-[64px] justify-between items-center px-2">
                    <div className="relative">
                        <Image
                            src="https://www.intract.io/logo/intract_text.svg"
                            alt="logo"
                            width={100}
                            height={50}
                        />
                    </div>
                    <div
                        className="text-2xl cursor-pointer"
                        onClick={() => setMenuOpen(true)}
                    >
                        <BiMenu />
                    </div>
                </div>
            )}

            {(isMobile || isTablet) && menuOpen && (
                <div className="relative z-50 flex flex-col items-center gap-12 h-screen w-full px-2 py-24 backdrop-blur-3xl bg-opacity-100 bg-black shadow-[0px_0px_0px_50px_#000000]">
                    <div
                        className="absolute text-4xl right-6 top-6 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        <IoMdClose />
                    </div>
                    <div className="w-full max-w-[300px]">
                        <div className="flex justify-center items-center w-full gap-2 px-5 py-2.5 rounded-full bg-gray-300 bg-opacity-10">
                            <div className="text-gray-400 text-lg">
                                <FiSearch />
                            </div>
                            <input
                                className="w-full bg-transparent outline-none text-white"
                                type="text"
                                placeholder="Search for ecosystems, trending quests etc,."
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col font-semibold gap-4 text-gray-300 justify-center items-center">
                            {links.map((link) => (
                                <div
                                    key={link}
                                    className="cursor-pointer hover:underline hover:text-gray-200"
                                >
                                    {link}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full max-w-[300px] flex flex-col justify-center items-center gap-6">
                        <div className="w-full">
                            <button className="bg-white text-black font-semibold px-6 py-1.5 border rounded-lg w-full break-words">
                                Sign In
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-12 h-12 border rounded-full flex justify-center items-center border-[#fa8922] cursor-pointer">
                                <Image
                                    src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
                                    alt="broadcast"
                                    width={16}
                                    height={16}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Navbar;
