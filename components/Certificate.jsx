import Image from "next/image";
import React from "react";
import { BiSolidLock, BiCheck } from "react-icons/bi";

const Certificate = ({ certificate }) => {
    return (
        <div className="flex flex-col gap-6 items-start">
            <div className="relative">
                <div className="absolute z-10 -translate-x-2/4 -translate-y-2/4 left-2/4 -top-1/4 p-3 rounded-full border border-[rgba(255,255,255,0.2)] bg-[#131313] text-gray-600 text-2xl">
                    <BiCheck />
                </div>
                <div className="relative w-[160px] h-[180px] rounded-xl p-1.5 border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,.05)]">
                    <Image
                        src={certificate.img}
                        width={160}
                        height={180}
                        className="object-cover h-full rounded-xl"
                    />
                    <div className="z-10 absolute bottom-[-20px] right-[-20px] border p-3 rounded-full border-[rgba(255,255,255,0.2)] bg-[#131313] text-gray-600 text-2xl">
                        <BiSolidLock />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold text-[rgba(255,255,255,0.6)]">
                    {certificate.title}
                </div>
                <div className="text-[rgba(255,255,255,0.6)] text-sm max-w-[160px]">
                    {certificate.description}
                </div>
                <button className="w-[150px] h-[40px] border rounded-lg border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.4)] cursor-not-allowed ">
                    {certificate.buttonTxt}
                </button>
            </div>
        </div>
    );
};

export default Certificate;
