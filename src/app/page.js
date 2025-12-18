// src/app/page.js
import Home from './components/Home'

// ⭐ ADD THIS METADATA FOR HOMEPAGE ⭐
export const metadata = {
  title: 'Signature by Punjabland | Fine Dining Indian Restaurant Brampton',
  description: 'Experience luxury Indian fine dining in Brampton at Signature by Punjabland. Rich flavours, premium ingredients, and an elegant dining atmosphere.',
  keywords: ['Indian restaurant Brampton', 'best Indian food', 'Signature Restaurant', 'authentic Indian cuisine', 'Brampton dining', 'Indian food delivery', 'halal food Brampton'],
  
  openGraph: {
    title: 'Signature by Punjabland - Authentic Indian Cuisine in Brampton',
    description: 'Indian Elegance on Every Plate. Experience the finest Indian dining in Brampton.',
    url: 'https://signature.punjabland.ca',
    siteName: 'Signature Restaurant',
    images: [
      {
        url: 'https://signature.punjabland.ca/_next/static/media/location.2e39211b.jpg', // Replace with actual image
        width: 1200,
        height: 630,
        alt: 'Signature by Punjabland - Indian dining experience',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Signature by Punjabland - Best Indian Food in Brampton',
    description: 'Experience authentic Indian cuisine with traditional flavors.',
    images: ['https://signature.punjabland.ca/_next/static/media/location.2e39211b.jpg'],
  },
  
  alternates: {
    canonical: 'https://signature.punjabland.ca',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return <Home />
}
