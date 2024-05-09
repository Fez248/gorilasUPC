"use client"
import { Image } from "@nextui-org/image";
import React, { useState, useEffect } from 'react'

const images = [
    "/images/heroImage0.JPG",
    "/images/heroImage1.JPG",
    "/images/heroImage2.JPG",
    "/images/heroImage3.JPG",
    "/images/heroImage4.JPG",
];

export default function HeroLayout() {
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 20000); // change image every 10 seconds

        return () => clearInterval(intervalId); // clean up on component unmount
    }, []);

    return (
        <div className="w-screen h-3/4 overflow-hidden flex items-center z-10 relative">
            <Image src={currentImage} alt="Hero Image relative"></Image>
            <div className={`absolute w-screen h-[150px] -top-[25px] bg-gradient-to-b from-black via-black to-transparent z-10`}></div>
            <div className={`absolute w-screen h-1/3 -bottom-[50px] bg-gradient-to-t from-black via-black to-transparent z-10`}></div>
        </div>
    );
}
