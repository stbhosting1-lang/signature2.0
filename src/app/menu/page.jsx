import React from "react";
import Image from "next/image";
import heroImg from "../../../public/menu.jpg";
import NewMenu from "./components/NewMenu";

const Page = () => {
  return (
    <div className="w-full bg-background py-5 px-4">
      <div className="relative xl:flex xl:gap-10">

        {/* Hero Image */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[800px] xl:w-[560px] 2xl:w-[1100px] 
                        xl:fixed xl:top-5 overflow-hidden">
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
