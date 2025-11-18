import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: 'Signature Restaurant',
  description: 'Indian Elegance on Every Plate',
  icons: { icon: '/logo.svg' },
  openGraph: {
    title: 'Signature Restaurant',
    description: 'Indian Elegance on Every Plate',
    url: 'https://signature.punjabland.ca',
    images: ['/logo.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signature Restaurant',
    description: 'Indian Elegance on Every Plate',
    images: ['/logo.svg'],
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
