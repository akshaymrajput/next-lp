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
import second from "@/public/images/second.svg";
import third from "@/public/images/third.svg";
import fourth from "@/public/images/fourth.svg";
import fifth from "@/public/images/fifth.svg";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";

const Roadmap = () => {
    const { isMobile, isTablet, isDesktop } = useScreenSize();

    return (
        <section className="relative w-full h-[2100px] container xl:-top-44 xl:left-36">
            <div className="relative">
                <div className="absolute w-full">
                    <QuestBox
                        questImg={quests[0].questImg}
                        questDetails={quests[0].details}
                    />
                    <div className="absolute -top-[45px] bottom-full sm:top-28 sm:-left-[120px] sm:rotate-0 z-0">
                        <Image
                            src={isMobile ? mobilefirst : first}
                            className="stroke-dasharray-8 animate-draw"
                            alt="Roadmap"
                        />
                    </div>
                </div>
                {/* <div className="absolute top-[220px] rotate-2 left-52">
                    <Image src={second} alt="Roadmap" />
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
                </div> */}
            </div>
        </section>
    );
};

export default Roadmap;
