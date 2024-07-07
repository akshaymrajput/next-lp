import Image from "next/image";
import React from "react";
import { IoBookOutline } from "react-icons/io5";

const Dictionary = () => {
    return (
        <div className="w-full container p-6 max-w-[1280px]">
            <div className="flex flex-col justify-center  items-center gap-4 mb-4">
                <div className="text-2xl font-bold">Crypto Dictionary</div>
                <div className="text-base text-[rgba(255,255,255,0.4)]">
                    Your one-stop to catch up on all crypto terms
                </div>
            </div>
            <div className="relative w-full h-[450px] rounded-2xl">
                <Image
                    src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
                    fill={true}
                    alt="Crypto Dictionary"
                    className="object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 flex flex-col gap-8 md:flex-row justify-between items-center w-full p-6 rounded-2xl">
                    <div>
                        <div className="text-[#fff9] text-2xl leading-[30px] mix-blend-plus-lighter ">
                            Web3 + Degen Glossary
                        </div>
                        <div className="text-[rgba(255,255,255,0.4)] text-base leading-5 mix-blend-plus-lighter">
                            Your own crypto dictionary
                        </div>
                    </div>
                    <div className="border rounded-full p-5 bg-[rgba(0,0,0,.2)] text-white text-2xl backdrop-blur-sm border-[rgba(255,255,255,0.2)]">
                        <IoBookOutline />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dictionary;
