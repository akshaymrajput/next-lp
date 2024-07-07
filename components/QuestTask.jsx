import Image from "next/image";
import React from "react";
import { BiCheck } from "react-icons/bi";
import CustomHR from "./CustomHR";

const QuestTask = ({ task }) => {
    return (
        <div className="relative border border-[rgba(255,255,255,0.05)] rounded-xl p-2 bg-[rgba(255,255,255,0.05)] w-full">
            <div className="flex sm:items-start flex-col items-center sm:flex-row gap-3 w-full">
                <div className="relative w-full max-w-[160px] aspect-square sm:w-[120px] sm:h-[80px]">
                    <Image
                        src={task.img}
                        fill={true}
                        className="rounded-xl object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4 w-3/4 sm:w-3/5 text-[rgba(255,255,255,.6)]">
                    <div className="truncate text-center sm:text-start text-[rgba(255,255,255,0.8)] font-bold">
                        {task.title}
                    </div>
                    <CustomHR />
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        <div className="whitespace-nowrap">
                            {task.totalTasks}
                        </div>
                        <div className="flex-grow bg-[rgba(255,255,255,0.1)] shadow-[0_-0.5px_0.5px_#fff3_inset,0_0.5px_0.5px_#fff3_inset] rounded-xl h-4 w-full p-[2px]">
                            <div className="w-full h-full border rounded-xl border-[color:#000] shadow-[0_-2px_2px_#0006_inset,0_2px_2px_#0006_inset]"></div>
                        </div>
                    </div>
                    <div className="absolute right-2 bottom-2 w-6 h-6 p-1 flex justify-center items-center border rounded-full bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] text-[#fff3]">
                        <BiCheck />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestTask;
