import React from 'react'
import Image from 'next/image'
import heroImg from "../../../public/menu.webp"
import streetIcon from "../../../public/streeticon.svg"
import mexicanIcon from "../../../public/mexican.svg"
import loveIcon from "../../../public/firstlove.svg"
import vegstory from "../../../public/vegstory.svg"
import affair from "../../../public/affair.svg"
import wok from "../../../public/wok.svg"
import riceIcon from "../../../public/rice.svg"
import minimarvalIcon from "../../../public/mini.svg"
import breadIcon from "../../../public/bread.svg"
import sweetIcon from "../../../public/sweet.svg"
const page = () => {

    const menuData = [
        {
            category: "From The Streets",
            Icon: streetIcon,
            items: [
                { name: "PANI PURI PARADISE", desc: "Crispy puri shell filled with 3 flavors of water", price: "$10" },
                { name: "SEV PURI SENSATION", desc: "Crunchy wafer topped with mashed potatoes, chutney, onion and cilantro", price: "$11" },
                { name: "SWEET CORN CHAAT BITES", desc: "Sweet corn stuffed tart with chopped onion & pomegranate", price: "$11" },
                { name: "SPICY POTATO CRAVING", desc: "Crispy potato patties with tangy chutney, sweet yogurt & thin sev", price: "$11" },
                { name: "DAHI BHALLA DELIGHT", desc: "Soft lentil balls soaked in sweet yogurt with chutney and spices", price: "$11" },
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "Desi Mexican",
            Icon: mexicanIcon,
            items: [
                { name: "CHICKEN QUESADILLA", desc: "Grilled tortilla filled with spiced chicken and melted cheese, sliced into wedges", price: "$16" },
                { name: "DESI NACHOS FIESTA (PANEER/CHICKEN)", desc: "Tortilla chips topped with shahi paneer or butter chicken, cheese and flavorful toppings", price: "$16" },
                { name: "Crispy paneer taco", desc: "Soft taco filled with paneer, vegetables and chutney", price: "$16" },
                { name: "Chicken tikka tostada", desc: "Crispy base topped with smoky chicken tikka, fresh vegetables and chutneys", price: "$16" },
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "The Fresh Chapter",
            items: [
                { name: "Mango, cucumber, carrot salad", desc: "Julienne raw mango, cucumber & carrot tossed in a tangy sauce", price: "$15" },
                { name: "Caesar salad (veg/chicken)", desc: "Romaine lettuce, cherry tomato tossed in creamy caesar dressing topped with croutons & parmesan cheese", price: "$15/16" },
                { name: "Quinoa salad", desc: "Romaine lettuce, cherry tomato tossed in creamy caesar dressing topped with", price: "$15" },
                { name: "Cajun chicken salad", desc: "Grilled cajun spiced chicken, crisp green, juicy tomato tossed in zesty", price: "$16" },
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "First Love (VEG APPETIZERS)",
            Icon: loveIcon,
            items: [
                { name: "Beetroot hummus", desc: "Creamy dip made from mashed chickpeas, beetroot infused with smoky flavors topped with drizzle of olive oil served with bread sticks", price: "$16" },
                { name: "Crispy chilli potato", desc: "Crispy potato tossed in sweet & tangy sauce topped with sesame seed", price: "$16" },
                { name: "Veg keema tartlets", desc: "Vegetarian 'keema' made from soy granules seasoned with aromatic spices, baked in a flaky crust for a healthy appetizer", price: "$16" },
                { name: "Sweet chilli paneer bao", desc: "Soft steamed bao filled with sweet chilli paneer cubes, garnished with fresh herbs", price: "$17" },
                { name: "Tandoori achari paneer", desc: "Stuffed paneer cubes marinated in traditional pickling spices and grilled to smoky perfection", price: "$18" },
                { name: "Pao bhaji fingers", desc: "Spicy mashed vegetables cooked with butter and tomato served with mini bread sticks", price: "$15" },
                { name: "Paneer 65", desc: "Crispy spiced cubes of cottage cheese tossed with curry leaf and spices, served on bed of malabar parantha", price: "$17" },
                { name: "Veggie royalty burger", desc: "Indian twist on classic burger potato patty topped with cottage cheese slice and in-house sauce served with fries", price: "$16" },
                { name: "Achari soya bites", desc: "Spicy pickle flavoured soya chaap grilled to perfection", price: "$17" },
                { name: "Croissant vada", desc: "A fusion snack combining crispy vada inside a buttery croissant, offering a delightful blend of textures", price: "$15" },
                { name: "Malai cheese burst chaaр", desc: "Juicy chaap pieces stuffed with a creamy cheese filling topped with a layer of melted cheese for a luscious bite", price: "$18" },
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "Bold Affair (NON VEG APPETIZERS)",
            items: [
                { name: "Muglai chicken tikka", desc: "Juicy chicken marinated with saffron & aromatic spices, grilled to perfection for a fragrant flavor", price: "$21" },
                { name: "Bhatti chicken tikka", desc: "Tandoor grilled chicken cooked with hint of lemon juice & mustard oil", price: "$19" },
                { name: "Malai chicken tikka", desc: "Chicken pieces marinated in a rich blend of cream, cheese and green chillies", price: "$20" },
                { name: "Tandoori chicken", desc: "Classic marinated bone-in chicken cooked in tandoor, offering smoky flavor with a tender bite", price: "$18" },
                { name: "Ajwaini pomfret", desc: "Pomfret fish marinated with carrom seed and mustard oil, grilled to perfection & finished with hint of lemon", price: "$26" },
                { name: "king prawn with honey yogurt", desc: "Prawn marinated with kaffir lime leaves, grilled to perfection and served with honey yogurt dip", price: "$26" },
                { name: "Lamb chop", desc: "French lamb rack marinated with whole spice paste, cilantro & green chilli, cooked in clay oven for smoky flavor", price: "$32" },
                { name: "Cajun chicken tikka", desc: "Tender chicken pieces infused with cajun spices & herbs, grilled until well done", price: "$19" },
                { name: "Bharwi tangdi", desc: "Stuffed chicken drumsticks marinated with yogurt and green chilly, cooked to perfection", price: "$21" },
                { name: "Chef special reshmi seekh", desc: "Melting-in-mouth chicken skewer seasoned with aromatic spices, grilled to perfection and served with rumali roti", price: "$21" },
                { name: "Honey chilli chicken bao", desc: "Crispy fried chicken tossed in sweet & spicy chilly glaze, served inside a soft bao", price: "$18" },
                { name: "Bhuni mirch fish tikka", desc: "Fish fillet marinated with roasted chilli & mustard oil", price: "$19" },
                { name: "Fish fingers", desc: "Fish fingers marinated overnight with aromatic spices & gram flour", price: "$18" },
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "The Veg Story (VEG MAINS)",
            Icon: vegstory,
            items: [
                { name: "Purani delhi dal makhani", desc: "Black lentil cooked for 24 hours on slow heat, finished with butter and cream", price: "$19" },
                { name: "Methi malai paneer", desc: "Cottage cheese cooked in a creamy gravy finished with fresh fenugreek leaves", price: "$20" },
                { name: "Paneer tikka masala", desc: "Tandoor cooked paneer in spicy thick masala finalised with cilantro & cream", price: "$20" },
                { name: "Burrata makhani (gold dust)", desc: "Burrata cheese in rich tomato sauce", price: "$22" },
                { name: "Ghee dal tadka", desc: "Yellow lentil tempered with garlic and cumin, finished with ghee", price: "$18" },
                { name: "Tawa soya chaap", desc: "Chunks of soya chaap cooked with onion and bell peppers", price: "$19" },
                { name: "Navratan korma", desc: "Selection of choicest seasonal vegetables cooked in cashew gravy finished with makhana", price: "$20" },
                { name: "Paneer lababdar", desc: "Cubes of paneer in rich velvety gravy", price: "$20" },
                { name: "Mango bhindi masala", desc: "Fresh okra tossed with onion, tomatoes and raw mango", price: "$19" },
                { name: "Paneer pasanda", desc: "Paneer stuffed with nuts cooked in a mild rich gravy", price: "$20" },
                { name: "Shahi paneer", desc: "Paneer in a buttery tomato gravy", price: "$20" },
                { name: "Stuffed malai kofta", desc: "Stuffed balls of paneer in saffron infused gravy", price: "$22" },
                { name: "Lasooni palak burrata", desc: "Burrata cheese in fresh spinach purée", price: "$22" },
                { name: "Soya tikka masala", desc: "Tandoor grilled soya chaap in a spicy thick gravy", price: "$19" },
                { name: "Palak khumb masala", desc: "Mushroom tempered with garlic and tossed in spinach purée", price: "$19" },
                { name: "Veg jalfrezi", desc: "Seasonal vegetables in a zesty herb gravy", price: "$19" },
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "The Main Affair (NON VEG MAINS)",
            Icon: affair,
            items: [
                {
                    name: "GOLD BUTTER CHICKEN",
                    desc: "Tandoor cooked chicken in creamy tomato gravy finished with gold dust",
                    price: "$22"
                },
                {
                    name: "CHICKEN TIKKA MASALA",
                    desc: "Tandoor cooked chicken in spicy onion tomato masala",
                    price: "$22"
                },
                {
                    name: "KALI MIRCH CHICKEN",
                    desc: "Black pepper spiced chicken in a rich cashew gravy",
                    price: "$22"
                },
                {
                    name: "BHUNA CHICKEN",
                    desc: "Dry flavourful chicken cooked with spices and tomato",
                    price: "$22"
                },
                {
                    name: "ROYAL KIPTI MURG",
                    desc: "Flavourful chicken wrapped in fluffy egg served with spicy spinach puree and mild tomato sauce",
                    price: "$22"
                },
                {
                    name: "SIGNATURE CHICKEN CURRY",
                    desc: "Boneless chicken cooked with tomato and signature's special spices",
                    price: "$20"
                },
                {
                    name: "KASHMIRI LAMB ROGANJOSH",
                    desc: "Tender pieces of lamb in vibrant red curry finished with garam masala",
                    price: "$22"
                },
                {
                    name: "NALLI ROGANJOSH",
                    desc: "Slow cooked lamb in thick gravy",
                    price: "$30"
                },
                {
                    name: "LASOONI KARAHI CHICKEN",
                    desc: "Boneless chicken in onion tomato gravy tossed with onion, pepper and garlic",
                    price: "$22"
                },
                {
                    name: "SPICY CHICKEN KOFTA",
                    desc: "Minced chicken mixed with spices in a smooth spicy gravy",
                    "price": "$22"
                },
                {
                    name: "CHICKEN KORMA",
                    desc: "Mild aromatic chicken curry with cashew nuts finished with cream",
                    price: "$21"
                },
                {
                    name: "MURGH DO PYAZA",
                    desc: "Marinated chicken cooked with cashew and blend of spices",
                    price: "$22"
                },
                {
                    name: "LASOONI PALAK BURRATA",
                    desc: "Burrata cheese in fresh spinach puree",
                    price: "$22"
                },
                {
                    name: "HANDI LAMB",
                    desc: "Slow cooked lamb in a spicy aromatic gravy",
                    price: "$23"
                },
                {
                    name: "LAMB BHUNA",
                    desc: "Slow cooked lamb in thick gravy",
                    price: "$23"
                },
                {
                    name: "COCONUT SHRIMP CURRY",
                    desc: "Marinated shrimp cooked in a rich creamy coconut-based gravy",
                    price: "$22"
                }
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "The Wok Story (INDO-CHINESE)",
            Icon: wok,
            items: [
                {
                    name: "DESI CHOWMEIN (VEG/CHICKEN)",
                    desc: "Stir-fried noodles with vegetables, soy sauce and spices flavoured with garlic & spring onions",
                    price: "$16/$18"
                },
                {
                    name: "GREEN CHILLI CHICKEN",
                    desc: "Stir-fried chicken with fresh green chillies offering a fiery punch",
                    price: "$19"
                },
                {
                    name: "NELSON WANG'S VEG MANCHURIAN",
                    desc: "Crispy vegetable balls in a tangy, savoury Indo-Chinese sauce",
                    price: "$17"
                },
                {
                    name: "TANDOORI MOMOS (VEG/CHICKEN)",
                    desc: "Soft dumplings filled with vegetables or chicken, grilled to perfection",
                    price: "$18"
                },
                {
                    name: "CHILLI FISH",
                    desc: "Golden fried fish fingers in tangy hakka gravy with onion and bell peppers",
                    price: "$22"
                },
                {
                    name: "SCHEZWAN CORN",
                    desc: "Sweet corn tossed in spicy and savoury sauce with chopped bell pepper and onions",
                    price: "$20"
                },
                {
                    name: "CREAMY GARLIC PASTA (VEG/CHICKEN)",
                    desc: "Penne pasta tossed in a rich creamy garlic sauce & loaded with fresh vegetables",
                    price: "$22"
                },
                {
                    name: "SCHEZWAN NOODLES (VEG/CHICKEN)",
                    desc: "Spicy noodles cooked with schezwan sauce, vegetables and seasoning",
                    price: "$16/$18"
                },
                {
                    name: "TANGY CHILLI CHICKEN",
                    desc: "Sweet and spicy chicken in a tangy chilly sauce",
                    price: "$19"
                },
                {
                    name: "HAKKA FRIED RICE (VEG/CHICKEN)",
                    desc: "Fragrant stir-fried rice with vegetables, soy sauce and seasoning",
                    price: "$16/$18"
                },
                {
                    name: "CHILLI MOMOS (VEG/CHICKEN)",
                    desc: "Crispy momos tossed in sweet & spicy sauce, finished with green onion",
                    price: "$18"
                },
                {
                    name: "CHILLY PANEER",
                    desc: "Crispy paneer sautéed with onion, bell peppers, topped with sesame seeds & spring onion",
                    price: "$22"
                },
                {
                    name: "PENNE ALL' ARRABBIATA (VEG/CHICKEN)",
                    desc: "Penne pasta tossed in spicy arrabbiata sauce & fresh vegetables",
                    price: "$23"
                }
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "Perfect Companions (SIDES)",
            items: [
                {
                    name: "MASALA PAPAD",
                    price: "$10"
                },
                {
                    name: "LACCHA PYAAZ",
                    price: "$5"
                },
                {
                    name: "INDIAN GARDEN SALAD",
                    price: "$8"
                },
                {
                    name: "RAITA",
                    desc: "(plain/boondi/mint/pomegranate/mix veg)",
                    price: "$7"
                }
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "Royal Rice Tales",
            Icon: riceIcon,
            items: [
                {
                    name: "STEAM RICE",
                    desc: "Steamed basmati rice",
                    price: "$7"
                },
                {
                    name: "JEERA RICE",
                    desc: "Cumin flavoured basmati rice",
                    price: "$8"
                },
                {
                    name: "VEG BIRYANI",
                    desc: "Fragrant basmati rice tossed with fresh vegetables",
                    price: "$18"
                },
                {
                    name: "CHICKEN SHAWARMA BIRYANI",
                    desc: "Shawarma spiced chicken with Indian twist, fluffy basmati rice and aromatic spices",
                    price: "$20"
                },
                {
                    name: "MUTTON DUM BIRYANI",
                    desc: "Slow cooked tender pieces of mutton layered with basmati rice & saffron",
                    price: "$22"
                },
                {
                    name: "LAMB SHANK BIRYANI",
                    desc: "Fall-off-the-bone lamb shank with rice and fresh herbs",
                    price: "$32"
                }
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "Mini Marvels",
            Icon: minimarvalIcon,
            items: [
                {
                    name: "CHICKEN FINGER",
                    price: "$12"
                },
                {
                    name: "FRIES",
                    price: "$7"
                },
                {
                    name: "CHEESE NAAN WITH GRAVY",
                    price: "$12"
                },
                {
                    name: "CHICKEN NUGGET",
                    price: "$12"
                },
                {
                    name: "LOADED WAFFLE FRIES",
                    price: "$12"
                },
                {
                    name: "MAC & CHEESE BITES",
                    price: "$12"
                }
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },
        {
            category: "Breads & Beyond",
            Icon: breadIcon,
            items: [
                {
                    name: "RUMALI ROTI",
                    price: "$9"
                },
                {
                    name: "NAAN (PLAIN/BUTTER/GARLIC)",
                    price: "$5/$6"
                },
                {
                    name: "LACCHA PARANTHA",
                    desc: "(butter/green chilli/ajwain/mint)",
                    price: "$6"
                },
                {
                    name: "CHUR CHUR NAAN",
                    price: "$6"
                },
                {
                    name: "ROTI (PLAIN/BUTTER)",
                    price: "$3"
                }
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        },

        {
            category: "The Sweet Escape",
            Icon: sweetIcon,
            items: [
                {
                    name: "GULAB JAMUN KUNAFA",
                    desc: "Classic Indian dessert with a modern twist",
                    price: "$9"
                },
                {
                    name: "MANGO LASSI PANNA COTTA",
                    desc: "Creamy panna cotta infused with fresh mango puree topped with fresh mango chunks",
                    price: "$12"
                },
                {
                    name: "RASMALAI CHEESE CAKE",
                    desc: "A delightful blend of Indian rasmalai and creamy cheesecake with cardamom spiced sweetness in every bite",
                    price: "$12"
                },
                {
                    name: "KHEER BRULEE",
                    desc: "A decadent fusion of creamy rice pudding base infused with saffron, topped with caramelized sugar crust",
                    price: "$12"
                },
                {
                    name: "MANGO CHEESE CAKE",
                    desc: "Mango flavoured creamy cheesecake served with mango sauce and fresh fruits",
                    price: "$12"
                },
                {
                    name: "SIZZLING CHOCOLATE BROWNIE",
                    desc: "Experience the ultimate treat with our sizzling chocolate brownie served piping hot with melting",
                    price: "$15"
                },
                {
                    name: "LAVA CAKE",
                    desc: "Rich indulgent treat with molten chocolate core encased in soft fluffy cake, served with vanilla ice cream",
                    price: "$12"
                },
                {
                    name: "GAJAR HALWA RED VELVET CAKE",
                    desc: "A vibrant fusion of red velvet cake with carrot, spices and cream cheese blending in perfect harmony",
                    price: "$14"
                }
            ],
            note: (<>
                We have <span className='underline'> Jain</span> and <span className='underline'>Vegan options</span> available - please ask your server.
            </>)
        }

    ];


    return (
        <div className="w-full bg-background py-5 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Hero Image */}
                <div className="relative w-full lg:w-[1050px] h-[400px] sm:h-[400px] md:h-[750px] lg:h-[700px] xl:h-[1000px] rounded-[10px] overflow-hidden">
                    <Image
                        src={heroImg}
                        alt="Signature menu"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Menu Cards */}
                <div className="flex flex-col gap-6 items-center lg:items-end">
                    {menuData.map((section, index) => (
                        <div key={index} className="w-full sm:w-[95%] md:w-[700px] bg-menuCardsBgColor rounded-lg">
                            {/* Header */}
                            <div className='w-full bg-infoCardBg rounded-t-lg flex justify-between px-3 py-2 items-center'>
                                <h2 className="font-heading font-[400] text-menuCardsBgColor italic text-[24px] sm:text-[32px] md:text-[40px] lg:text-[53px]">
                                    {section.category.split('(')[0]}
                                    {section.category.includes('(') && (
                                        <span className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                                            ({section.category.split('(')[1]})
                                        </span>
                                    )}
                                </h2>

                                {/* Icon */}
                                {section.Icon && (
                                    <div className="w-14 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 relative">
                                        <Image
                                            src={section.Icon}
                                            alt='menuIcons'
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Items */}
                            {section.items.map((item, idx) => (
                                <div key={idx} className="flex flex-col py-2 px-3">
                                    <div className="flex items-center flex-wrap">
                                        {/* Name */}
                                        <h3 className="font-heading font-[400] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-menuCardsItemsColor uppercase">
                                            {item.name}
                                        </h3>

                                        {/* Dashed line */}
                                        <span className="flex-1 border-b border-dashed border-infoCardBg mx-3"></span>

                                        {/* Price */}
                                        <span className="font-[400] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-infoCardBg font-body">
                                            {item.price}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    {item.desc && (
                                        <p className="text-[14px] sm:text-[16px] md:text-[16px] text-infoCardBg font-[300] font-body mt-1">
                                            {item.desc}
                                        </p>
                                    )}
                                </div>
                            ))}


                            {/* Note */}
                            {section.note && (
                                <p className="bg-infoCardBg p-2 text-[14px] sm:text-[16px] text-menuCardstextColor font-[400] font-body text-center rounded-b-lg italic">
                                    {section.note}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page