"use client";

import Image from "next/image";
import React, { useState } from "react";
import QuestTask from "./QuestTask";
import CustomHR from "./CustomHR";
import { AiFillCaretDown } from "react-icons/ai";

const QuestBox = ({ questImg, questDetails }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="max-w-[520px] rounded-2xl p-4 sm:p-0">
            <div className="relative">
                <div
                    className={`flex flex-col sm:flex-row w-full justify-center items-center gap-8 bg-[rgba(255,255,255,0.05)] ${
                        !expanded ? "rounded-2xl" : "rounded-t-2xl"
                    } py-8 px-2 sm:p-8 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[rgba(255,255,255,0.12)]`}
                    onClick={() => setExpanded(!expanded)}
                >
                    <div className="sm:w-1/3 relative max-w-[180px] h-[180px] rounded-xl p-1.5 border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,.05)]">
                        <Image
                            src={questImg}
                            alt={questDetails.title}
                            width={160}
                            height={180}
                            className="object-cover h-full rounded-xl"
                        />
                        <div className="absolute bottom-0 left-1/2 -translate-x-2/4 -translate-y-2/4 px-6 py-3 border border-gray-600 rounded-full text-xs bg-black bg-opacity-60 backdrop-blur-[5px] truncate">
                            <span className="whitespace-nowrap">
                                {questDetails.totalQuests} Quests
                            </span>
                        </div>
                    </div>
                    <div className="sm:w-2/3 flex flex-col items-center sm:items-start gap-4">
                        <div className="text-xl text-center sm:text-start sm:text-2xl font-bold sm:max-h-[35px] overflow-hidden">
                            {questDetails.title}
                        </div>
                        <div className="text-lg sm:text-sm text-center sm:text-start text-gray-500 font-bold sm:max-h-[40px] overflow-hidden">
                            {questDetails.description}
                        </div>
                        <CustomHR />

                        <div className="flex justify-center w-fit text-sm font-semibold gap-1 py-2 px-4 border border-gray-800 rounded-full bg-[rgba(255,255,255,0.07)]">
                            <Image
                                src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                                width={18}
                                height={16}
                                alt="xp"
                            />
                            {questDetails.totalXP} XPs
                        </div>
                    </div>
                    <div
                        className={`absolute top-1 right-1 sm:top-6 sm:right-6 text-[rgba(255,255,255,0.6)] text-2xl transform transition-transform duration-500 ease-in-out ${
                            expanded ? "rotate-180" : ""
                        }`}
                    >
                        <AiFillCaretDown />
                    </div>
                </div>
                {expanded && (
                    <div className="max-h-[350px] overflow-y-scroll px-2 py-6 sm:px-6 flex flex-col gap-2 bg-[#101010] w-full no-scrollbar">
                        {questDetails.tasks?.map((task, index) => (
                            <QuestTask task={task} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestBox;
