"use client";

import React from "react";
import QuestBox from "@/components/QuestBox";
import Certificate from "./Certificate";
import Reward from "@/components/Reward";
import { quests } from "@/data/questDetails";
import { certificates } from "@/data/certificateDetails";
import { rewardDetails } from "@/data/rewardDetails";
import first from "@/public/images/first.svg";
import mobilefirst from "@/public/images/mobilefirst.svg";
import mobilesecond from "@/public/images/mobilesecond.svg";
import mobilethird from "@/public/images/mobilethird.svg";
import mobilefourth from "@/public/images/mobilefourth.svg";
import mobilefifth from "@/public/images/mobilefifth.svg";
import second from "@/public/images/second.svg";
import third from "@/public/images/third.svg";
import fourth from "@/public/images/fourth.svg";
import fifth from "@/public/images/fifth.svg";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";

const Roadmap = () => {
    const { isMobile, isTablet, isDesktop } = useScreenSize();

    return (
        <section className="relative w-full h-[4500px] sm:h-[2300px] container xl:-top-44 md:left-0 xl:left-36 overflow-x-hidden lg:overflow-x-visible no-scrollbar">
            <div className="relative">
                <div className="relative w-full">
                    <div className="relative pt-14 sm:pt-0">
                        <QuestBox
                            questImg={quests[0].questImg}
                            questDetails={quests[0].details}
                        />
                        {isMobile && (
                            <>
                                <div className="flex justify-center w-full">
                                    <div className="absolute top-full left-[40%]">
                                        <Image
                                            src={mobilesecond}
                                            alt="Roadmap second"
                                            style={{
                                                width: "auto",
                                                height: "auto",
                                            }}
                                        />
                                    </div>
                                    <div className="absolute top-[calc(100%+310px)]">
                                        <Certificate
                                            certificate={certificates[0]}
                                        />
                                    </div>
                                    <div className="absolute top-[calc(100%+630px)] left-1/3">
                                        <Image
                                            src={mobilethird}
                                            alt="Roadmap third"
                                            className=""
                                            style={{
                                                width: "auto",
                                                height: "auto",
                                            }}
                                        />
                                    </div>
                                    <div className="absolute w-full top-[calc(100%+840px)]">
                                        <div className="relative">
                                            <QuestBox
                                                questImg={quests[1].questImg}
                                                questDetails={quests[1].details}
                                            />
                                            <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[calc(100%+140px)] scale-150">
                                                <Image
                                                    src={mobilefourth}
                                                    alt="Roadmap fourth"
                                                    className=""
                                                    style={{
                                                        width: "auto",
                                                        height: "auto",
                                                    }}
                                                />
                                            </div>
                                            <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[calc(100%+500px)]">
                                                <div className="flex justify-center w-screen">
                                                    <Certificate
                                                        certificate={
                                                            certificates[1]
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="absolute -translate-x-2/4 -translate-y-2/4 left-[35%] top-[calc(100%+750px)]">
                                                <Image
                                                    src={mobilefifth}
                                                    alt="Roadmap fifth"
                                                    className=""
                                                    style={{
                                                        width: "auto",
                                                        height: "auto",
                                                    }}
                                                />
                                            </div>
                                            <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[calc(100%+1400px)] w-full">
                                                <Reward
                                                    rewardDetails={
                                                        rewardDetails
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="absolute top-3 sm:top-28 sm:-left-[120px] sm:rotate-0 z-0">
                        <Image
                            src={isMobile ? mobilefirst : first}
                            className="stroke-dasharray-8 animate-draw"
                            alt="Roadmap first"
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                </div>
                {(isDesktop || isTablet) && (
                    <>
                        <div className="absolute bottom-0 sm:top-[220px] sm:rotate-2 sm:left-52">
                            <Image
                                src={second}
                                alt="Roadmap second"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </div>
                        <div className="absolute xl:top-72 xl:right-80">
                            <Certificate certificate={certificates[0]} />
                        </div>

                        <div className="absolute top-[410px]  right-[50px] scale-105">
                            <Image
                                src={third}
                                alt="Roadmap third"
                                className=""
                                style={{ width: "auto", height: "auto" }}
                            />
                        </div>
                        <div className="absolute top-[720px] left-[450px]">
                            <QuestBox
                                questImg={quests[1].questImg}
                                questDetails={quests[1].details}
                            />
                        </div>
                        <div className="absolute top-[820px]  left-[160px] scale-105">
                            <Image
                                src={fourth}
                                alt="Roadmap fourth"
                                className=""
                                style={{ width: "auto", height: "auto" }}
                            />
                        </div>
                        <div className="absolute xl:top-[1150px] xl:left-[-10px]">
                            <Certificate certificate={certificates[1]} />
                        </div>
                        <div className="absolute xl:top-[1250px] left-[-280px] scale-105">
                            <Image
                                src={fifth}
                                alt="Roadmap fifth"
                                className=""
                                style={{ width: "auto", height: "auto" }}
                            />
                        </div>
                        <div className="absolute xl:top-[1580px] xl:left-[450px]">
                            <Reward rewardDetails={rewardDetails} />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Roadmap;

/*

"use client";

import React from "react";
import QuestBox from "@/components/QuestBox";
import Certificate from "./Certificate";
import Reward from "@/components/Reward";
import { quests } from "@/data/questDetails";
import { certificates } from "@/data/certificateDetails";
import { rewardDetails } from "@/data/rewardDetails";
import first from "@/public/images/first.svg";
import mobilefirst from "@/public/images/mobilefirst.svg";
import mobilesecond from "@/public/images/mobilesecond.svg";
import second from "@/public/images/second.svg";
import third from "@/public/images/third.svg";
import fourth from "@/public/images/fourth.svg";
import fifth from "@/public/images/fifth.svg";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";

const Roadmap = () => {
    const { isMobile, isTablet, isDesktop } = useScreenSize();

    return (
        <section className="relative w-full h-[2100px] container xl:-top-44 md:left-0 xl:left-36">
            <div className="relative">
                <div className="absolute w-full">
                    <QuestBox
                        questImg={quests[0].questImg}
                        questDetails={quests[0].details}
                    />
                    <div className="absolute -top-11 sm:top-28 sm:-left-[120px] sm:rotate-0 z-0">
                        <Image
                            src={isMobile ? mobilefirst : first}
                            className="stroke-dasharray-8 animate-draw"
                            alt="Roadmap"
                        />
                    </div>
                </div>
                <div className="absolute top-[400px] sm:top-[220px] sm:rotate-2 sm:left-52">
                    <Image
                        src={isMobile ? mobilesecond : second}
                        alt="Roadmap"
                    />
                </div>
                <div className="absolute xl:top-72 xl:right-80">
                    <Certificate certificate={certificates[0]} />
                </div>
                <div className="absolute top-[410px]  right-[50px] scale-105">
                    <Image src={third} className="" />
                </div>
                <div className="absolute top-[720px] left-[450px]">
                    <QuestBox
                        questImg={quests[1].questImg}
                        questDetails={quests[1].details}
                    />
                </div>
                <div className="absolute top-[820px]  left-[160px] scale-105">
                    <Image src={fourth} className="" />
                </div>
                <div className="absolute xl:top-[1150px] xl:left-[-10px]">
                    <Certificate certificate={certificates[1]} />
                </div>
                <div className="absolute xl:top-[1250px] left-[-280px] scale-105">
                    <Image src={fifth} className="" />
                </div>
                <div className="absolute xl:top-[1580px] xl:left-[450px]">
                    <Reward rewardDetails={rewardDetails} />
                </div>
            </div>
        </section>
    );
};

export default Roadmap;


*/
