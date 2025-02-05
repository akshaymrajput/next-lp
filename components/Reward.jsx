"use client";
import React from "react";
import Timer from "./Timer";
import Image from "next/image";
import { BiLogoDiscordAlt, BiCheck } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomHR from "./CustomHR";
import RewardInfo from "./RewardInfo";
import pathlink from "@/public/images/pathlink.svg";
import useScreenSize, { isMobile } from "@/hooks/useScreenSize";

const Reward = ({ rewardDetails }) => {
    const reward = rewardDetails.reward;
    const { isMobile, isTablet, isDesktop } = useScreenSize();

    return (
        <div className="w-full p-6 sm:p-0 sm:w-[320px] flex flex-col gap-4 relative">
            <Timer
                timerData={rewardDetails.timer}
                days={0}
                hours={1}
                minutes={30}
                seconds={45}
            />
            <div>
                <div className="relative w-full rounded-xl p-3 border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,.05)]">
                    <Image
                        src={reward.img}
                        alt="reward img"
                        width={320}
                        height={300}
                        className="object-cover h-full w-full rounded-md"
                        unoptimized
                    />
                    <div className="absolute right-6 top-6 z-20 bg-[#0009] py-[2px] px-[4px] rounded-md text-[rgba(255,255,255,0.8)]">
                        {reward.type}
                    </div>
                    <div className="mt-4 flex flex-col gap-3 text-[rgba(255,255,255,0.4)]">
                        <div className="flex justify-between">
                            <div>{reward.heading}</div>
                            <div className="flex items-center gap-1 text-[rgba(255,255,255,0.8)]">
                                <span className="bg-blue-400 p-[2px] rounded-full">
                                    <BiLogoDiscordAlt />
                                </span>
                                <span className="font-semibold">
                                    {reward.social.name}
                                </span>
                            </div>
                        </div>
                        <CustomHR />
                        <div className="flex flex-col text-xs gap-4">
                            {reward.steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between"
                                >
                                    <span>{step.title}</span>
                                    <span className="rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] text-gray-600 text-xl">
                                        <BiCheck />
                                    </span>
                                </div>
                            ))}
                            <button className="w-full border rounded-lg text-xl p-1 font-semibold flex items-center justify-center gap-2 border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.07)] text-[rgba(255,255,255,0.6)]">
                                <span>{reward.buttonTxt}</span>
                                <span>
                                    <FaArrowRightLong />
                                </span>
                            </button>
                            {(isMobile || isTablet) && (
                                <RewardInfo info={rewardDetails.info} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isDesktop && (
                <div className="absolute left-[380px] top-[50px] w-full">
                    <RewardInfo info={rewardDetails.info} />
                    <div className="absolute left-[-60px]">
                        <Image
                            src={pathlink}
                            alt="path"
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reward;
