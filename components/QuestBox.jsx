import Image from "next/image";
import React from "react";

const QuestBox = ({ questImg, questDetails, questTasks }) => {
    return (
        <div className="max-w-[520px] rounded-2xl">
            <div>
                <div className="flex justify-center items-center gap-4 bg-[rgba(255,255,255,0.05)] rounded-2xl p-8">
                    <div className="relative w-[180px] h-[180px]">
                        <Image
                            src={questImg}
                            alt={questDetails.title}
                            fill={true}
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-1/2 -translate-x-2/4 -translate-y-2/4 px-6 py-3 border rounded-full text-xs bg-black bg-opacity-60 backdrop-blur-[5px]">
                            <span className="w-full whitespace-nowrap">
                                {questDetails.totalQuests} Quests
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-2xl font-bold">
                            {questDetails.title}
                        </div>
                        <div className="text-sm text-gray-500 font-bold">
                            {questDetails.description}
                        </div>
                        <hr className="border-0 h-[1px] relative w-full before:content-[''] before:block before:w-full before:h-[5px] before:bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_6px,transparent_6px,transparent_12px)] before:absolute before:top-0 before:left-0"></hr>

                        <div className="flex justify-center w-fit text-sm font-semibold gap-1 py-2 px-4 border rounded-full bg-[rgba(255,255,255,0.07)]">
                            <Image
                                src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                                width={18}
                                height={16}
                                alt="xp"
                            />
                            {questDetails.totalXP} XPs
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default QuestBox;
