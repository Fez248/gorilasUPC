"use client"
import { Image } from "@nextui-org/image";
import React, { useState, useEffect } from 'react'

const bananaI = ({h}: {h: string}, {w}: {w: string}) => {
    return (
        <Image src="/images/banana.png" alt="Banana" width={w} height={h}></Image>
    );
};

const Section1 = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const enhance = ({dens}: {dens: number}) => {
        let bananas = [];
        for (let i = 0; i < dens; i++) {
            let rh = Math.floor(Math.random() * windowHeight);
            let rw = Math.floor(Math.random() * windowWidth);
            bananas.push (
                <div id={i.toString()} className={`absolute z-30 w-[50px] h-[50px]`} style={{top: `${rh}px`, left: `${rw}px`}}>
                    {bananaI({h: "50px"}, {w: "50px"})}
                </div>
            );
        }
        return bananas;
    }

    return (
        <div className="h-screen w-screen">
            {enhance({dens: 100})}
        </div>
    );
};

export default Section1;