import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="relative w-full min-h-screen overflow-hidden shadow-[inset_0_0px_4px_4px_black]">
            <Image
                src="https://www.intract.io/assets/intract-academy-background-5547a705.png"
                alt="header"
                fill={true}
                quality={100}
                priority="high"
                className="object-cover"
            />
            <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-1/3 mix-blend-screen">
                <div className="flex flex-col gap-8 justify-center items-center text-white">
                    <Image
                        src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
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
                    <div className="max-w-[300px]">
                        <button className="text-white w-full bg-[#6435e9] bg-opacity-70 rounded-lg px-12 py-2 flex justify-center items-center gap-2 hover:translate-x-1 transition-transform duration-150">
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
