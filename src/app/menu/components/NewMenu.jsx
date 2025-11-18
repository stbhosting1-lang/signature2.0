import React from 'react'
import Image from 'next/image'

import updatemenu1 from "../../../../public/updatemenu1.webp"
import updatemenu2 from "../../../../public/updatemenu2.webp"
import updatemenu4 from "../../../../public/updatemenu4.webp"
import updatemenu5 from "../../../../public/updatemenu5.webp"
import updatemenu6 from "../../../../public/updatemenu6.webp"
import updatemenu7 from "../../../../public/updatemenu7.webp"
import updatemenu8 from "../../../../public/updatemenu8.webp"
import updatemenu9 from "../../../../public/updatemenu9.webp"
import updatemenu10 from "../../../../public/updatemenu10.webp"

const NewMenu = () => {

    const menuCards = [
        { Image: updatemenu4 },
        { Image: updatemenu6 },
        { Image: updatemenu7 },
        { Image: updatemenu8 },
        { Image: updatemenu9 },
        { Image: updatemenu10 },
        { Image: updatemenu1 },
        { Image: updatemenu2 },
        { Image: updatemenu5 },

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
