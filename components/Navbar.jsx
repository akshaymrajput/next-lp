import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";

const links = ["Compass", "Explore", "Academy", "NFTs", "For Projects"];

const Navbar = () => {
    return (
        <div className="sticky top-0 z-20 p-2 bg-black bg-opacity-10 backdrop-blur-[5px]">
            <div className="flex justify-center items-center gap-4">
                <div className="">
                    <Image
                        src="https://www.intract.io/logo/intract_text.svg"
                        width={100}
                        height={50}
                    />
                </div>
                <div>
                    <div className="flex font-semibold gap-4 text-gray-300">
                        {links.map((link) => (
                            <div key={link}>{link}</div>
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
                        <div className="w-12 h-12 border rounded-full flex justify-center items-center border-[#fa8922]">
                            <Image
                                src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
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
        </div>
    );
};

export default Navbar;
