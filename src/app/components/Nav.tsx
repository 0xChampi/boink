import Image from "next/image";
import React from "react";
import '../globals.css';
import { Antonio } from "next/font/google";

const Nav = () => {
    return (
        <div>
            <div className="flex flexbox flex-row justify-center gap-8 mx-4">
                <div className="flex rounded-lg p-4 gap-4 text-4xl border-2 bg-green-700/90 max-w-[1400px] items-center">
                <Image src="/deez.png" width={100} height={50} alt="Yoda Peepo" />
                    <div>home</div>
                    <div>about</div>
                    <div>how to buy</div>
                    <div>tokenomics</div>
                    <div>roadmap</div>
                </div>
            </div>
            </div>
    );
};

export default Nav;
