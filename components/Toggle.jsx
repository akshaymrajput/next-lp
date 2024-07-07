"use client";
import React, { useState } from "react";

const Toggle = () => {
    const [active, setActive] = useState("essentials");

    return (
        <div className="w-80 flex justify-center border border-[rgba(255,255,255,0.07)] rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md">
            <button
                className={`w-1/2 border-none rounded-2xl py-1.5 px-8 ${
                    active === "essentials"
                        ? "bg-[rgba(255,255,255,0.2)]"
                        : "hover:bg-[rgba(255,255,255,0.2)]"
                }`}
                onClick={() => setActive("essentials")}
            >
                Essentials
            </button>
            <button
                className={`w-1/2 border-none rounded-2xl py-1.5 px-8 ${
                    active === "alphaHub"
                        ? "bg-[rgba(255,255,255,0.2)]"
                        : "hover:bg-[rgba(255,255,255,0.2)]"
                }`}
                onClick={() => setActive("alphaHub")}
            >
                Alpha Hub
            </button>
        </div>
    );
};

export default Toggle;
