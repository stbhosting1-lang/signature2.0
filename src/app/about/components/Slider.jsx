"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import React from 'react'
import Restaurant from "../../../../public/Restaurent.jpg";
import Restaurant1 from "../../../../public/Restaurent1.jpg";
import Restaurant2 from "../../../../public/Restaurent2.jpg";
import Restaurant3 from "../../../../public/Restaurent3.jpg";
import Restaurant4 from "../../../../public/Restaurent4.jpg";
import Restaurant5 from "../../../../public/Restaurent5.jpg";
import Restaurant6 from "../../../../public/Restaurent6.jpg";
import Restaurant7 from "../../../../public/Restaurent7.jpg";
import Restaurant8 from "../../../../public/Restaurent8.jpg";
import Restaurant9 from "../../../../public/Restaurent9.jpg";
import Restaurant10 from "../../../../public/Restaurent10.jpg";
import Restaurant11 from "../../../../public/Restaurent11.jpg";
import Restaurant12 from "../../../../public/Restaurent12.jpg";
import Image from "next/image";

const Slider = () => {

    const restaurantImages = [
        Restaurant,
        Restaurant1,
        Restaurant2,
        Restaurant3,
        Restaurant4,
        Restaurant5,
        Restaurant6,
        Restaurant7,
        Restaurant8,
        Restaurant9,
        Restaurant10,
        Restaurant11,
        Restaurant12,
    ];

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === restaurantImages.length - 1 ? 0 : prev + 1
        );
    };

    const [currentIndex, setCurrentIndex] = useState("");

    return (
        <>
            {/* Slider Images */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {restaurantImages.map((img, index) => (
                    <div key={index} className="min-w-full">
                        <Image
                            src={img}
                            alt={`Restaurant ${index + 1}`}
                            className="w-full rounded-xl h-[370px]"
                        />
                    </div>
                ))}
            </div>

            {/* Next Arrow Button */}
            <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md transition"
            >
                <ChevronRight size={20} />
            </button>
        </>
    )
}

export default Slider