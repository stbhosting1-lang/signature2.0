import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: 'Signature Restaurant',
  description: 'Indian Elegance on Every Plate',
  icons: {
    icon: '/logo.svg', // Browser tab icon
  },
  openGraph: {
    title: 'Signature Restaurant',
    description: 'Indian Elegance on Every Plate',
    url: 'https://https://signature.punjabland.ca', // optional
    images: ['/Restaurent.jpg'], // Preview image for social and Vercel
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:wght@400;700&family=Outfit:wght@400;500;600&family=Figtree:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
