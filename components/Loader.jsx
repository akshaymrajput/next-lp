"use client";
import React from "react";
import Image from "next/image";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="p-6 rounded-lg animate-pulse">
                <Image
                    src="https://www.intract.io/assets/wojack-loader-a996330d.gif"
                    alt="Loading..."
                    width={150}
                    height={150}
                />
            </div>
        </div>
    );
};

export default Loader;
