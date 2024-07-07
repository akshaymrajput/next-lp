import React from "react";
import { BiInfoCircle } from "react-icons/bi";

const RewardInfo = ({ info }) => {
    return (
        <div className="w-full border border-[rgba(255,255,255,0.2)] rounded-lg shadow-[0_2px_5px_#00000080]">
            <div className="flex items-center gap-2 text-[rgba(255,255,255,0.4)] border-b border-b-[rgba(255,255,255,0.05)] p-3">
                <span>{info.type}</span>
                <span className="text-lg">
                    <BiInfoCircle />
                </span>
            </div>
            <div className="p-3 flex flex-col gap-4">
                <div className="text-[#fffc] font-semibold text-sm">
                    {info.title}
                </div>
                <div className="text-[#7d7d7d] text-sm">{info.description}</div>
                <div className="text-[#7d7d7d] text-sm">{info.note}</div>
            </div>
        </div>
    );
};

export default RewardInfo;
