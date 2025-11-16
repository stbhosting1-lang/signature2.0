"use client";
import Image from "next/image";
import heroImg from "../../../public/hero.webp";
import menu from "../../../public/menu.svg";
import Restaurant from "../../../public/restaurent.webp";
import Fcaebook from "../../../public/facebook.svg";
import Insta from "../../../public/instagram.svg";
const HomeSection = () => {
    return (
        <div className="w-full bg-background py-5 overflow-x-hidden">

            {/* GRID WRAPPER */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 relative">

                {/* LEFT SIDE HERO */}
                <div className="relative w-full lg:w-[1300px] h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px]">

                    {/* Hero Image */}
                    <Image
                        src={heroImg}
                        alt="Signature Restaurant Hero"
                        fill
                        className="object-cover rounded-[20px] rounded-tl-[40px]"
                        priority
                    />

                    {/* Large screen Info Card */}
                    <div className="hidden md:block absolute bottom-20 left-28 bg-infoCardBg p-5 rounded-lg w-[420px]">
                        <h2 className="text-[48px] font-heading italic text-secondary">
                            “Indian Elegance on Every Plate”
                        </h2>
                        <p className="text-[15px] text-secondary/60 font-secondary mt-3">
                            Came in for lunch and was pleasantly surprised. Ravi’s (our server)
                            service was exceptional. The organic salmon, shrimp winter salad, and
                            blueberry tart were all delicious. A memorable meal!
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-0 right-0 flex justify-end gap-2 bg-background p-2 rounded-tl-full w-[100px]">
                        <div className="w-8 h-8 relative">
                            <Image
                                src={Fcaebook}
                                alt="Facebook icon"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="w-8 h-8 relative">
                            <Image
                                src={Insta}
                                alt="Instagram icon"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Small screen Info Card */}
                <div className="md:hidden w-full max-w-[420px] bg-infoCardBg p-10 rounded-lg">
                    <h2 className="text-[38px] sm:text-[40px] font-heading italic text-secondary">
                        “Indian Elegance on Every Plate”
                    </h2>
                    <p className="text-[15px] text-secondary/60 font-secondary mt-3">
                        Came in for lunch and was pleasantly surprised. Ravi’s (our server)
                        service was exceptional. The organic salmon, shrimp winter salad, and
                        blueberry tart were all delicious. A memorable meal!
                    </p>
                </div>

                {/* RIGHT SIDE CARDS */}
                <div className="flex flex-col gap-6 items-center lg:items-end">

                    {/* Menu Card */}
                    <div className="relative w-full max-w-[520px] h-[250px] sm:h-[300px] overflow-hidden rounded-xl">
                        <Image
                            src={menu}
                            alt="Menu"
                            fill
                            className="object-cover rounded-xl rounded-tl-[30px] mt-1"
                            priority
                        />
                        <div className="absolute top-0 bg-background w-[100px] h-[30px] flex justify-center items-center rounded-tl-[80px] rounded-br-full">
                            <p className="text-[14px] sm:text-[15px] text-secondary font-body">
                                Menu
                            </p>
                        </div>
                    </div>

                    {/* Restaurant Card */}
                    <div className="relative w-full max-w-[520px] h-[250px] sm:h-[300px] overflow-hidden rounded-xl">
                        <Image
                            src={Restaurant}
                            alt="Restaurant"
                            fill
                            className="object-cover rounded-xl rounded-tl-[30px] mt-1 "
                            priority
                        />
                        <div className="absolute top-0 bg-background w-[160px] h-[30px] flex justify-center items-center rounded-tl-[80px] rounded-br-full">
                            <p className="text-[14px] sm:text-[15px] text-secondary font-body">
                                Our Restaurant
                            </p>
                        </div>
                    </div>

                    {/* Book Table Button */}
                    <button className="bg-bookTableBg w-full max-w-[520px] p-5 rounded-2xl">
                        <p className="text-[16px] text-bookTableText font-body flex items-start">
                            Book a Table
                        </p>
                    </button>

                    {/* Info Card */}
                    <div className="w-full max-w-[520px] h-auto bg-infoCardBg rounded-xl p-8">
                        <div className="flex flex-col gap-8">

                            {/* Opening Hours */}
                            <div>
                                <p className="text-infocardText/60 text-[14px] sm:text-[15px] font-body">
                                    Opening Hours
                                </p>
                                <div className="flex justify-between mt-1">
                                    <p className="text-[15px] font-body text-secondary">Mon - Sun</p>
                                    <p className="text-[15px] font-body text-secondary">
                                        4:00 PM - 2:00 AM
                                    </p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div>
                                <p className="text-infocardText/60 text-[14px] sm:text-[15px] font-body">
                                    Contact #
                                </p>
                                <p className="text-[15px] font-body text-secondary">
                                    +1 905-459-5559
                                </p>
                            </div>

                            {/* Location */}
                            <div>
                                <p className="text-infocardText/60 text-[14px] sm:text-[15px] font-body">
                                    Location
                                </p>
                                <p className="text-[15px] font-body text-secondary">
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
