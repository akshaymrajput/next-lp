import React from "react";
import VideoCard from "./VideoCard";
import { videoCardDetails } from "@/data/videoCardDetails";

const LearningHub = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-8 w-full container p-6 max-w-[1280px]">
            <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-2xl font-bold">
                    Top Crypto Creators and Projects to Follow
                </span>
                <span className="text-base text-[rgba(255,255,255,0.4)]">
                    Answers to your crypto doubts, straight from the experts
                </span>
            </div>
            <div className="w-full flex flex-wrap gap-6 justify-center xl:justify-between">
                {videoCardDetails.map((videoCardDetail, index) => (
                    <VideoCard key={index} videoCardDetail={videoCardDetail} />
                ))}
            </div>
        </div>
    );
};

export default LearningHub;
