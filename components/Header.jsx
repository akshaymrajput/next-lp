import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="relative w-full min-h-screen overflow-hidden shadow-[inset_0_0px_4px_4px_black]">
            <Image
                src="/images/head/background.png"
                alt="header"
                fill={true}
                quality={100}
                priority="high"
                className="object-cover"
            />
            <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-1/3 mix-blend-screen w-full sm:w-auto p-4">
                <div className="flex flex-col gap-8 justify-center items-center text-white">
                    <Image
                        src="/images/head/academy-animated-logo.gif"
                        alt="academy logo"
                        width={250}
                        height={100}
                        unoptimized
                        className="bg-transparent"
                    />
                    <div className="max-w-[650px]">
                        <p className="text-xl text-center text-gray-200">
                            <span className="font-bold">Intract users</span>{" "}
                            have together made more than
                            <span className="font-bold"> $100 million</span> in
                            web3. Join them and{" "}
                            <span className="font-bold">
                                learn how to earn crypto!
                            </span>
                        </p>
                    </div>
                    <div className="w-full flex justify-center max-w-[300px]">
                        <button className="text-white w-full text-xs sm:text-base sm:w-52 bg-[#6435e9] bg-opacity-70 rounded-lg h-10 flex justify-center items-center gap-2 hover:pl-2 transition-all duration-150">
                            <span>Get Started</span>
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
