/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Sorts Mill Goudy"', 'serif'],
        body: ['Figtree', 'sans-serif'],
        secondary:['Outfit', 'sans-serif'], 
      },
      colors: {
        primary: '#590224',
        secondary: '#FFFCF4',
        background: "#023435",
        bookTableBg:"#FFFCF3",
        bookTableText:"#0F110C",
        infoCardBg:"#3E0119",
        infocardText:"#FFFCF499",
        aboutCardBorder:"#FFFFFF08",
        aboutCardHeading:"#FFF2CC",
        aboutCardParagraph:"#EAEAEA",
        reviewCardHeading:"#EFE7D2",
        reviewCardParagraph:"#F5F2EAB2",
        cardGradient:"#E8CC77",
        menuCardsBgColor:"#FFFFF0",
        menuCardsBorderBottomColor:"#3E011933",
        menuCardsItemsColor:"#000000",
        menuCardstextColor:"#FFFFFF",
        contactFormInputColor:"#051D1D",
      },
      
    },
  },
  plugins: [],
};
