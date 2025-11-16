"use client"
import React from 'react'
import Image from 'next/image'
import aboutImg from "../../../public/About.webp"
import history from "../../../public/history&goal.webp"
import Food from "../../../public/food.svg"
import Restaurant from "../../../public/Restaurent.jpg";
import Restaurant1 from "../../../public/Restaurent1.jpg";
import Restaurant2 from "../../../public/Restaurent2.jpg";
import Restaurant3 from "../../../public/Restaurent3.jpg";
import Restaurant4 from "../../../public/Restaurent4.jpg";
import Restaurant5 from "../../../public/Restaurent5.jpg";
import Restaurant6 from "../../../public/Restaurent6.jpg";
import Restaurant7 from "../../../public/Restaurent7.jpg";
import Restaurant8 from "../../../public/Restaurent8.jpg";
import Restaurant9 from "../../../public/Restaurent9.jpg";
import Restaurant10 from "../../../public/Restaurent10.jpg";
import Restaurant11 from "../../../public/Restaurent11.jpg";
import Restaurant12 from "../../../public/Restaurent12.jpg";
import StarIcon from "../../../public/stars.svg"
import foodItem from "../../../public/fooditem.webp"
import vivek from "../../../public/Vivek.webp"
import Imtiaz from "../../../public/Imtiaz.webp"
import riffat from "../../../public/riffat.webp"
import googleIcon from "../../../public/GoogleLogo.svg"
import reviewStar from "../../../public/yellowstar.svg"
import DarkFbIcon from "../../../public/redfacebook.svg"
import DarkInstaIcon from "../../../public/redinsta.svg"
// Add at the top with other imports
import { useState } from "react";
import { ChevronRight } from "lucide-react";


const page = () => {

    const reviewCards = [
        {
            Star: StarIcon,
            name: "Trip Advisor",
            desc: "Authentic Taste"
        },
        {
            Star: StarIcon,
            name: "Michelin GUide",
            desc: "Quality Food"
        },
        {
            Star: StarIcon,
            name: "Start Dining",
            desc: "Cool Vibe"
        },
    ];

    const teamMembers = [
        {
            picture: vivek,
            name: "Vivek Luther",
            title: "Director",
            desc: (<>
                "A visionary entrepreneur and creative strategist, Vivek is the driving force behind Signature.
                With an eye for innovation and a passion for culinary artistry, he has successfully built and led multiple hospitality ventures,
                including <span className='font-[700] italic underline'> Dhaba Junction, </span> <span className='font-[700] italic underline'> Punjab Land,</span>
                <span className='font-[700] italic underline'> Chatori Gali, </span>  and  <span className='font-[700] italic underline'> Asian Food Center. </span>
            </>),
            desc2: "After launching several successful restaurants, they created Signature. Rooted in tradition and crafted with care, Signature brings authentic flavors and warm hospitality to the heart of Brampton."
        },
        {
            picture: Imtiaz,
            name: "Imtiaz Ali",
            title: "Group Director of Operations",
            desc: (<>
                With deep expertise in hospitality management, Imtiaz ensures that every aspect of
                the dining experience — from kitchen precision to guest service — meets the highest standards of excellence.
                His leadership and operational mastery are at the heart of the <span className='font-[700]'>Punjab Land Group’s</span> continued success,
                shaping <span className='font-[700]'>Signature</span> into a seamless blend of culinary innovation and warm hospitality.
            </>),
        },
        {
            picture: riffat,
            name: "Riffat Anwar",
            title: "Head of Operations",
            desc: (<>
                Riffat leads operations at <span className='font-[700]'>Signature</span> with a unique blend of creativity and precision.
                Drawing from her experience as the Founder of <span className='font-[700] italic underline'>Velvet Vows Events,</span>
                she brings an exceptional sense of aesthetics and organizational expertise to every
                detail of the restaurant’s environment. Working closely with chefs and hospitality consultants,
                Riffat ensures that <span className='font-[700]'>Signature</span> embodies refined elegance — from the ambience to the guest experience.
                Her vision and design sensibility have played a key role in curating the luxurious atmosphere that defines <span className='font-[700]'>Signature</span>.
            </>),
        },
    ];

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
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === restaurantImages.length - 1 ? 0 : prev + 1
        );
    };


    return (
        <div className="w-full bg-background py-3">

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 px-4">

                {/* ================= HERO IMAGE SECTION ================= */}
                <div className="relative w-full xl:w-[700px] 2xl:w-[1100px] h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[800px] overflow-hidden">
                    <Image
                        src={aboutImg}
                        alt="Signature Restaurant"
                        fill
                        className="object-cover rounded-[20px] rounded-tl-[40px]"
                        priority
                    />

                    {/* Desktop Card */}
                    <div className="hidden md:block absolute bottom-10 left-10 bg-infoCardBg p-5 rounded-lg max-w-[420px]">
                        <h2 className="text-[40px] lg:text-[48px] font-heading italic text-secondary">
                            From Punjab to the Heart of Brampton
                        </h2>
                        <p className="text-[15px] text-secondary/60 font-[400] mt-3">
                            Our journey has been built on flavor, community, and a deep love for food.
                            After the resounding success of <span className='font-[700]'>Dhaba Junction</span>, the soulful spices of <span className='font-[700]'> Punjab Land,</span>
                            and the vibrant chaos of <span className='font-[700]'>Chatori Gali,</span> we’re proud to introduce our newest chapter —
                            <span className='text-[18px] text-secondary'>Signature.</span>
                        </p>
                    </div>
                </div>

                {/* Mobile Info Card */}
                <div className="md:hidden w-full bg-infoCardBg p-6 rounded-lg">
                    <h2 className="text-[32px] sm:text-[40px] font-heading italic text-secondary">
                        From Punjab to the Heart of Brampton
                    </h2>
                    <p className="text-[15px] text-secondary/60 font-secondary mt-3">
                        Our journey has been built on flavor, community, and a deep love for food. <br /> <br />
                        After the resounding success of <span className='font-[700]'>Dhaba Junction</span>, the soulful spices of <span className='font-[700]'> Punjab Land,</span>
                        and the vibrant chaos of <span className='font-[700]'>Chatori Gali,</span> we’re proud to introduce our newest chapter —
                        <span className='text-[18px] text-secondary'>Signature.</span>
                    </p>
                </div>

                {/* ================= RIGHT CONTENT COLUMN ================= */}
                <div className="flex flex-col gap-6 items-center lg:items-end">

                    {/* History Card */}
                    <div className="w-full max-w-[700px] border-aboutCardBorder border bg-aboutCardBorder/5 p-4 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
                            <div>
                                <h3 className='text-[24px] font-heading italic text-aboutCardHeading'>Our History & Goals</h3>
                                <p className='text-[16px] font-body text-aboutCardParagraph'>
                                    This isn’t just a restaurant. It’s where years of culinary passion meet innovation.
                                    A space where every dish is carefully crafted, and every bite tells a story — of roots,
                                    reinvention, and refined Indian dining in Brampton.
                                </p>
                            </div>
                            <div className='w-full'>
                                <Image src={history} alt='history' className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Food Philosophy + Restaurant Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[700px]">
                        <div className='border-aboutCardBorder border bg-aboutCardBorder/5 p-3 rounded-xl flex flex-col items-center gap-3'>
                            <Image src={Food} alt='Food Philosophy' className="w-full h-auto" />

                            <div className='flex flex-col gap-2'>
                                <h3 className='text-[22px] font-heading italic text-aboutCardHeading'>Our Food Philosophy</h3>
                                <p className='text-[16px] font-body text-aboutCardParagraph'>
                                    At Signature, expert chefs skillfully blend <span className='font-[600]'>authentic Indian flavors</span> with creative innovation,
                                    transforming every dish into a unique culinary masterpiece.
                                </p>
                            </div>
                        </div>

                        <div className="relative w-full h-full rounded-xl overflow-hidden">

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

                        </div>

                    </div>

                    {/* Review Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[700px]">
                        {reviewCards.map((item, index) => (
                            <div key={index} className='border-aboutCardBorder border bg-aboutCardBorder/5 px-3 py-10 rounded-xl flex flex-col items-center gap-2 text-center'>
                                <Image src={item.Star} alt='Star' />
                                <h3 className='text-[20px] font-heading text-reviewCardHeading uppercase'>{item.name}</h3>
                                <p className='text-[12px] text-reviewCardParagraph'>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Opening Hours */}
                    <div className='w-full max-w-[700px] border-aboutCardBorder border bg-aboutCardBorder/5 p-4 rounded-xl flex flex-col lg:flex-row justify-between gap-5 lg:items-center'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-[24px] font-heading italic text-aboutCardHeading'>Opening Hours</h3>
                            <p className='text-[14px] font-body text-aboutCardParagraph'>Mon – Sun: 04:00 PM – 02:00 AM</p>
                        </div>

                        <button className='bg-background px-4 py-2 border-aboutCardHeading border rounded-lg w-[150px]'>
                            <p className='text-[16px] text-aboutCardHeading font-body'>See Our Menu</p>
                        </button>
                    </div>

                    {/* Fine Dining Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[700px]">
                        <div className='border-aboutCardBorder border bg-aboutCardBorder/5 p-4 rounded-xl flex flex-col gap-10'>
                            <h2 className='text-[32px] font-heading italic text-secondary'>Redefining the Art of Fine Dining</h2>
                            <p className='text-[15px] text-reviewCardHeading font-[300]'>
                                <span className='font-[700]'>Signature by</span> <span className='font-[600] underline'>Punjab Land </span>reimagines Indian Fusion through modern fine dining.
                                Each dish blends bold Indian flavors with global artistry, offering an indulgent
                                experience where tradition meets innovation and every bite tells a story of elevated taste.
                            </p>
                        </div>

                        <Image src={foodItem} alt='Dish' className="w-full h-auto rounded-xl" />
                    </div>

                    {/* Team Section */}
                    <div className='w-full max-w-[700px] flex flex-col gap-8'>
                        {teamMembers.map((item, index) => (
                            <div key={index} className='flex flex-col gap-4'>

                                {/* Image + Name Overlay */}
                                <div className='relative w-full'>
                                    <Image src={item.picture} alt={item.name}
                                        className='w-full h-[366px] sm:h-[400px] md:h-[450px] lg:h-auto object-cover rounded-lg'

                                    />

                                    <div className="absolute bottom-0 right-0 bg-background p-2 rounded-tl-2xl">
                                        <p className='text-secondary text-[15px]'>{item.name}</p>
                                    </div>
                                </div>

                                {/* Description Card */}
                                <div className='w-full bg-infoCardBg rounded-xl p-6 lg:py-10 lg:px-10  flex flex-col gap-3'>
                                    <h2 className='text-[32px] text-secondary font-heading italic'>{item.name}</h2>
                                    <p className='text-[14px] text-secondary uppercase'>{item.title}</p>
                                    <p className='text-[15px] text-infocardText/60'>{item.desc}</p>
                                    <p className='text-[15px] text-infocardText/60'>{item.desc2}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Review us on Google */}
                    <div className="w-full max-w-[700px] bg-infoCardBg rounded-xl p-4 
                                    flex flex-col sm:gap-6 gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-[24px] font-heading text-aboutCardHeading'>Review Us On</h3>
                            <Image src={googleIcon} alt='google Icon' />
                            <Image src={reviewStar} alt='star Icon' />
                        </div>

                        <div>
                            <button className='bg-background px-4 py-2 border-aboutCardHeading border rounded-lg lg:mt-20'>
                                <p className='text-[16px] text-aboutCardHeading'>Leave Us A Review</p>
                            </button>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className='w-full max-w-[700px] bg-gradient-to-r from-cardGradient to-bookTableBg rounded-[20px] p-4 flex justify-between items-center'>
                        <h3 className='text-[24px] text-bookTableText font-heading'>Our Socials</h3>

                        <div className='flex gap-3'>
                            <Image src={DarkFbIcon} alt='fbIcon' />
                            <Image src={DarkInstaIcon} alt='instaIcon' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page