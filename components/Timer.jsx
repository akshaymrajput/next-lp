"use client";

import React, { useEffect, useState } from "react";
import CustomHR from "./CustomHR";
import Image from "next/image";
import { countdown } from "../utils/timer";
import { BiSolidTimeFive } from "react-icons/bi";

const Timer = ({ timerData, days, hours, minutes, seconds }) => {
    const [time, setTime] = useState({ days, hours, minutes, seconds });

    useEffect(() => {
        const intervalId = countdown(
            hours,
            minutes,
            seconds,
            (remainingTime) => setTime(remainingTime),
            () => console.log("Countdown complete!")
        );

        return () => clearInterval(intervalId);
    }, [hours, minutes, seconds]);
    return (
        <div className="p-4 rounded-xl bg-[rgba(255,255,255,.05)] flex flex-col gap-4 w-full">
            <div className="flex items-center gap-2">
                <span className="text-[#fa8922] p-1 text-lg rounded-full bg-[rgba(250,137,34,.1)]">
                    <BiSolidTimeFive />
                </span>
                <span>{timerData.title}</span>
            </div>
            <CustomHR />
            <div className="relative w-full h-fit border border-[rgba(255,255,255,.05)] rounded-xl p-4">
                <Image src={timerData.backgroundImg} fill={true} />
                <div className="flex justify-between">
                    <div className="flex flex-col items-center z-10">
                        <div className="font-extrabold text-2xl text-[rgba(255,255,255,.6)]">
                            {time.days}
                        </div>
                        <div className="text-[rgba(255,255,255,.2)]">Days</div>
                    </div>
                    <div className="flex flex-col items-center z-10">
                        <div className="font-extrabold text-2xl text-[rgba(255,255,255,.6)]">
                            {time.hours}
                        </div>
                        <div className="text-[rgba(255,255,255,.2)]">Hrs</div>
                    </div>
                    <div className="flex flex-col items-center z-10">
                        <div className="font-extrabold text-2xl text-[rgba(255,255,255,.6)]">
                            {time.minutes}
                        </div>
                        <div className="text-[rgba(255,255,255,.2)]">Mins</div>
                    </div>
                    <div className="flex flex-col items-center z-10">
                        <div className="font-extrabold text-2xl text-[rgba(255,255,255,.6)]">
                            {time.seconds}
                        </div>
                        <div className="text-[rgba(255,255,255,.2)]">Secs</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
