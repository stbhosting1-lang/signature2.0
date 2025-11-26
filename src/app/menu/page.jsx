export const dynamic = "force-static";
import React from "react";
import Image from "next/image";
import heroImg from "../../../public/menu.jpg";
import NewMenu from "./components/NewMenu";


export const metadata = {
  title: "Menu",
  description: "Explore the Signature Restaurant menu, featuring authentic Indian dishes, fine-dining specialties, and a curated selection of drinks crafted for an exceptional culinary experience.",
  keywords: [
    "Signature Restaurant menu",
    "Indian cuisine menu",
    "fine dining menu",
    "Indian dishes Brampton",
    "authentic Indian food",
    "restaurant drinks menu"
  ],
};

const Page = () => {
  return (
    <div className="w-full bg-background py-5 px-4">
      <div className="relative xl:flex xl:gap-10">

        {/* Hero Image */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[800px] xl:w-[560px] 2xl:w-[1100px] 
                        xl:fixed xl:top-5
                         overflow-hidden">
          <Image
            src={heroImg}
            alt="Signature menu"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right Menu Section */}
        <div className="xl:ml-[560px] 2xl:ml-[1100px] mt-10 xl:mt-0 px-4 xl:px-6">
          <NewMenu />
        </div>



      </div>
    </div>
  );
};

export default Page;
