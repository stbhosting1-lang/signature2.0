import React from 'react'
import Image from 'next/image'

import drinkmenuhead from "../../../public/SignatureDrinkMenu.webp"
import drinkmenuhead2 from "../../../public/SignatureDrinkMenu2.webp"
import drinkmenu1 from "../../../public/SignatureDrinkMenu3.webp"
import drinkmenu2 from "../../../public/SignatureDrinkMenu4.webp"
import drinkmenu3 from "../../../public/SignatureDrinkMenu5.webp"
import drinkmenu4 from "../../../public/SignatureDrinkMenu6.webp"
import drinkmenu5 from "../../../public/SignatureDrinkMenu7.webp"
import drinkmenu6 from "../../../public/SignatureDrinkMenu8.webp"
import drinkmenu7 from "../../../public/SignatureDrinkMenu9.webp"
import drinkmenu8 from "../../../public/SignatureDrinkMenu10.webp"
import drinkmenu9 from "../../../public/SignatureDrinkMenu11.webp"
import drinkmenufooter from "../../../public/SignatureDrinkMenu12.webp"

export const metadata = {
    title: "Drinks Menu | Signature Restaurant",
    description: "Explore the exclusive drinks menu at Signature Restaurant, featuring handcrafted cocktails, premium beverages, and refreshing non-alcoholic options. Perfectly paired with our culinary delights for an unforgettable dining experience in Brampton.",
    keywords: [
        "Signature Restaurant Drinks Menu",
        "Cocktails Brampton",
        "Non-alcoholic Beverages",
        "Premium Drinks Brampton",
        "Indian Restaurant Drinks",
        "Fine Dining Drinks"
    ],
};
const NewMenu = () => {

    const menuCards = [

        { Image: drinkmenuhead },
        { Image: drinkmenuhead2 },
        { Image: drinkmenu1 },
        { Image: drinkmenu2 },
        { Image: drinkmenu3 },
        { Image: drinkmenu4 },
        { Image: drinkmenu5 },
        { Image: drinkmenu6 },
        { Image: drinkmenu7 },
        { Image: drinkmenu8 },
        { Image: drinkmenu9 },
        { Image: drinkmenufooter },

    ]

    return (
        <>
            <div className="flex flex-col gap-6 items-center lg:items-end">
                {menuCards.map((item, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[95%] md:w-[700px] rounded-lg"
                    >
                        <Image
                            src={item.Image}
                            alt={`menu-card-${index}`}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewMenu
