import Image from "next/image";
import React from "react";
import { BiMoviePlay, BiPlay } from "react-icons/bi";

const VideoCard = ({ videoCardDetail }) => {
    return (
        <div className="relative rounded-xl w-full min-h-[400px] h-auto md:w-[280px] md:h-[400px] overflow-hidden group cursor-pointer">
            <div className="absolute right-5 top-5 z-10 border rounded-full p-2 bg-[rgba(0,0,0,.4)] text-white text-2xl backdrop-blur-sm border-[rgba(255,255,255,0.2)]">
                <BiMoviePlay />
            </div>
            <div className="w-full min-h-fit h-full relative transition-all duration-300 group-hover:blur-sm">
                <Image
                    src={videoCardDetail.img}
                    fill={true}
                    className="rounded-xl z-0 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent z-10"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[120px] flex items-end p-2">
                <div className="text-ellipsis text-[#fff] font-extrabold z-20 tracking-wide text-xl leading-[30px]">
                    {videoCardDetail.title}
                </div>
            </div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 border rounded-full p-2 bg-[rgba(0,0,0,.4)] text-white text-4xl backdrop-blur-sm border-[rgba(255,255,255,0.2)] flex justify-center items-center opacity-0 group-hover:-translate-y-10 group-hover:opacity-100 transition-all duration-300 ">
                <BiPlay />
            </div>
        </div>
    );
};

export default VideoCard;
