"use client";
import Image from "next/image";
import heroImg from "../../../public/hero.jpg";
import menu from "../../../public/homemenu.jpg";
import Location from "../../../public/location.jpg";
import google from "../../../public/facebook.svg";
import Insta from "../../../public/instagram.svg";
import Link from "next/link";
const HomeSection = () => {
    return (
        <div className="w-full bg-background py-5 overflow-x-hidden">

            {/* GRID WRAPPER */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 px-4 relative">

                {/* LEFT SIDE HERO */}
                <div className="relative w-full xl:w-[740px] 2xl:w-[1300px] h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[800px] overflow-hidden">

                    {/* Hero Image */}
                    <Image
                        src={heroImg}
                        alt="Signature Restaurant Hero"
                        fill
                        className="object-cover rounded-[20px] rounded-tl-[40px]"
                        priority
                    />

                    {/* Large screen Info Card */}
                    <div className="hidden md:block absolute bottom-10 md:bottom-20 left-5 sm:left-10 lg:left-28 bg-infoCardBg p-5 md:p-8 rounded-lg w-[90%] max-w-[420px]">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-heading italic text-secondary">
                            “Brampton’s First Premium Fine-Dine Experience”
                        </h2>
                        <p className="text-[13px] sm:text-[14px] md:text-[15px] text-secondary/60 font-secondary mt-3">
                            Indulge in a world where luxury meets culinary artistry.
                            At Signature, every plate is a masterpiece—crafted with the richness of authentic Indian flavours and elevated with modern fusion techniques.
                            Enjoy an ambiance designed for elegance, a service crafted for comfort, and a dining journey that celebrates taste, culture, and sophistication.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-0 right-0 flex justify-end gap-2 bg-background p-1 sm:p-2 rounded-tl-full w-[90px] sm:w-[100px]">

                        {/* Instagram */}
                        <Link
                            href="https://www.instagram.com/signaturebypunjabland/"
                            target="_blank"
                            className="w-6 h-6 sm:w-8 sm:h-8 relative"
                        >
                            <Image
                                src={Insta}
                                alt="Instagram icon"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>

                        {/* Google Maps */}
                        <Link
                            href="https://share.google/VmLnsVhRoQBREFzDe"
                            target="_blank"
                            className="w-6 h-6 sm:w-8 sm:h-8 relative"
                        >
                            <Image
                                src={google}   // replace with a Google icon when you add one
                                alt="Google Maps icon"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>

                    </div>

                </div>

                {/* Small screen Info Card */}
                <div className="md:hidden w-full max-w-[420px] bg-infoCardBg p-6 sm:p-10 rounded-lg mx-auto">
                    <h2 className="text-[28px] sm:text-[38px] font-heading italic text-secondary">
                        “Brampton’s First Premium Fine-Dine Experience”
                    </h2>
                    <p className="text-[13px] sm:text-[15px] text-secondary/60 font-secondary mt-3">
                        Indulge in a world where luxury meets culinary artistry.
                        At Signature, every plate is a masterpiece—crafted with the richness of authentic Indian flavours and elevated with modern fusion techniques.
                        Enjoy an ambiance designed for elegance, a service crafted for comfort, and a dining journey that celebrates taste, culture, and sophistication.
                    </p>
                </div>

                {/* RIGHT SIDE CARDS */}
                <div className="flex flex-col gap-4 sm:gap-6 items-center lg:items-end w-full">

                    {/* Menu Card */}
                    <Link href="/menu" className="block w-full max-w-[520px] relative">
                        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-xl">

                            {/* Image */}
                            <Image
                                src={menu}
                                alt="Menu"
                                fill
                                className="object-cover rounded-xl rounded-tl-[30px]"
                                priority
                            />

                            {/* Label (clickable as part of the card) */}
                            <div className="absolute top-0 bg-background w-[100px] h-[30px] flex justify-center items-center rounded-tl-[80px] rounded-br-full cursor-pointer">
                                <p className="text-[14px] sm:text-[15px] text-secondary font-body">
                                    Menu
                                </p>
                            </div>

                        </div>
                    </Link>


                    {/* Restaurant Card */}
                    <Link href="https://share.google/VmLnsVhRoQBREFzDe" className="block w-full max-w-[520px]">

                        <div className="relative w-full max-w-[520px] h-[200px] sm:h-[250px] md:h-[300px] xl:sticky overflow-hidden rounded-xl">
                            <Image
                                src={Location}
                                alt="Location"
                                fill
                                className="object-cover rounded-xl rounded-tl-[30px]"
                                priority
                            />
                            <div className="absolute top-0 bg-background w-[140px] sm:w-[160px] h-[30px] flex justify-center items-center rounded-tl-[80px] rounded-br-full">
                                <p className="text-[14px] sm:text-[15px] text-secondary font-body">
                                    Our Location
                                </p>
                            </div>
                        </div>
                    </Link>
                    {/* Book Table Button */}
                    <Link href="tel:+19054595559" className="block w-full max-w-[520px]">
                        <button className="bg-bookTableBg w-full p-4 sm:p-5 rounded-2xl">
                            <p className="text-[14px] sm:text-[16px] text-bookTableText font-body text-start">
                                Book a Table
                            </p>
                        </button>
                    </Link>

                    {/* Info Card */}
                    <div className="w-full max-w-[520px] h-auto bg-infoCardBg rounded-xl p-4 sm:p-8">
                        <div className="flex flex-col gap-4 sm:gap-8">

                            {/* Opening Hours */}
                            <div>
                                <p className="text-infocardText/60 text-[12px] sm:text-[14px] font-body">
                                    Opening Hours
                                </p>
                                <div className="flex justify-between mt-1">
                                    <p className="text-[14px] sm:text-[15px] font-body text-secondary">Mon - Sun</p>
                                    <p className="text-[14px] sm:text-[15px] font-body text-secondary">
                                        4:00 PM - 2:00 AM
                                    </p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div>
                                <p className="text-infocardText/60 text-[12px] sm:text-[14px] font-body">
                                    Contact #
                                </p>
                                <p className="text-[14px] sm:text-[15px] font-body text-secondary">
                                    +1 905-459-5559
                                </p>
                            </div>

                            {/* Location */}
                            <div>
                                <p className="text-infocardText/60 text-[12px] sm:text-[14px] font-body">
                                    Location
                                </p>
                                <p className="text-[14px] sm:text-[15px] font-body text-secondary">
                                    378 Queen St E, Brampton, ON L6V 1C3, Canada
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeSection;
