import React from "react";

const CustomHR = () => {
    return (
        <hr className="border-0 h-[1px] relative w-full before:content-[''] before:block before:w-full before:h-[5px] before:bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_6px,transparent_6px,transparent_12px)] before:absolute before:top-0 before:left-0"></hr>
    );
};

export default CustomHR;
