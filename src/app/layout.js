import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: {
    default: "Signature Restaurant | Indian Elegance on Every Plate",
    template: "%s - Signature Restaurant"
  },
  description: `Signature Restaurant brings authentic Indian cuisine to the heart of Brampton. 
    Experience a fine-dining journey where traditional flavors meet modern culinary artistry. 
    From carefully curated spices to elegantly presented dishes, every meal is a celebration of culture, taste, and hospitality.`,
  keywords: [
    "Indian restaurant Brampton",
    "fine dining Indian cuisine",
    "authentic Indian food",
    "Signature Restaurant Brampton",
    "Indian fusion restaurant",
    "best Indian food Brampton",
    "Punjabi cuisine",
    "restaurant near me",
    "luxury dining Brampton"
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: 'Signature Restaurant',
    description: `Signature Restaurant brings authentic Indian cuisine to the heart of Brampton. 
      Experience a fine-dining journey where traditional flavors meet modern culinary artistry. 
      Every dish tells a story of culture, taste, and hospitality.`,
    url: 'https://signature.punjabland.ca',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Signature Restaurant - Indian Elegance on Every Plate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signature Restaurant',
    description: `Signature Restaurant brings authentic Indian cuisine to the heart of Brampton. 
      Experience a fine-dining journey where traditional flavors meet modern culinary artistry.`,
    images: ['/og-image.png'],
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:wght@400;700&family=Outfit:wght@400;500;600&family=Figtree:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Signature Restaurant",
              "image": "https://signature.punjabland.ca/logo.jpg",  // Logo for Google
              "logo": "https://signature.punjabland.ca/logo.jpg",   // Very important
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "378 Queen St E",
                "addressLocality": "Brampton",
                "addressRegion": "ON",
                "postalCode": "L6V 1C3",
                "addressCountry": "CA"
              },
              "telephone": "+1 905-459-5559",
              "url": "https://signature.punjabland.ca",
              "servesCuisine": "Indian",
              "menu": "https://signature.punjabland.ca/menu",
              "priceRange": "$$",
              "openingHours": ["Mo-Su 16:00-02:00"]
            })
          }}
        />



      </head>
      <body className="font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
