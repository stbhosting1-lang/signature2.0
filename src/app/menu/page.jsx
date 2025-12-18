import React from "react";
import Image from "next/image";
import heroImg from "../../../public/menu.jpg";
import NewMenu from "./components/NewMenu";
import Link from "next/link";
export const dynamic = "force-static";
// ⭐ IMPROVED METADATA FOR MENU PAGE ⭐
export const metadata = {
  // Basic SEO (Shows in Google & Browser)
  title: "Menu - Signature by Punjabland | Indian Fine Dining Brampton",
  description: "Explore the Signature by Punjabland menu in Brampton. Delicious Indian fine dining with handcrafted starters, mains, desserts and chef’s specials.",
  keywords: [
    "Indian menu Brampton",
    "Signature Restaurant menu",
    "Indian food menu",
    "tandoori dishes",
    "curry menu",
    "biryani Brampton",
    "naan bread",
    "Indian appetizers",
    "Indian desserts",
    "vegetarian Indian food",
    "halal menu Brampton",
    "Indian restaurant menu prices"
  ],
  
  // OpenGraph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Signature by Punjabland - Indian Fine Dining Brampton",
    description: "Explore the Signature by Punjabland menu in Brampton. Delicious Indian fine dining with handcrafted starters, mains, desserts and chef’s specials.",
    url: "https://signature.punjabland.ca/menu",
    siteName: "Signature Restaurant",
    images: [
      {
        url: "https://signature.punjabland.ca/_next/static/media/homemenu.8493e32d.jpg", // Your hero image
        width: 1200,
        height: 630,
        alt: "Signature Restaurant Indian menu dishes",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Signature by Punjabland - Indian Fine Dining Brampton",
    description: "Explore the Signature by Punjabland menu in Brampton. Delicious Indian fine dining with handcrafted starters, mains, desserts and chef’s specials.",
    images: ["https://signature.punjabland.ca/_next/static/media/homemenu.8493e32d.jpg"],
  },
  
  // Canonical URL (Prevents duplicate content)
  alternates: {
    canonical: "https://signature.punjabland.ca/menu",
  },
  
  // Robot Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Page = () => {
  return (
    <div className="w-full bg-background py-5 px-4">
      <div className="relative xl:flex xl:gap-10">
      <h1 className="sr-only">
  Signature by Punjabland Menu – Indian Fine Dining in Brampton
</h1>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[800px] xl:w-[560px] 2xl:w-[1100px] 
                        xl:fixed xl:top-5
                         overflow-hidden">
          <Image
            src={heroImg}
            alt="Signature by punjabland Restaurant authentic Indian menu with tandoori, curries, and traditional dishes"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right Menu Section */}
        <div className="xl:ml-[560px] 2xl:ml-[1100px] mt-10 xl:mt-0 px-4 xl:px-6">
          <div className='w-full max-w-[700px] border-aboutCardBorder border bg-aboutCardBorder/5 p-4 rounded-xl flex flex-col lg:flex-row justify-between gap-5 lg:items-center mb-5'>
            <h2 className='text-[24px] font-heading italic text-aboutCardHeading'>Explore Our Drinks menu</h2>
            <Link href="/drinks-menu" className="block">
              <button className='bg-background px-4 py-2 border-aboutCardHeading border rounded-lg w-[150px]'>
                <p className='text-[16px] text-aboutCardHeading font-body'>Drinks Menu</p>
              </button>
            </Link>
          </div>
          <NewMenu />
        </div>

      </div>
    </div>
  );
};

export default Page;