import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Cinzel,
  Crimson_Pro,
} from "next/font/google";
import "./globals.css";

// Display font
const cormorant = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

// Label/UI font
const cinzel = Cinzel({
  variable: "--font-serif-label",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Body font
const crimson = Crimson_Pro({
  variable: "--font-serif-body",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Blue Moon Wuppertal – The Color of the Night",
  description:
    "Café Blue Moon Wuppertal – Seit 1995. Über 133 Cocktails, internationale Küche, Live Musik am Wochenende.",
  metadataBase: new URL("https://smart259.github.io/blue-moon"),
  openGraph: {
    title: "Blue Moon Wuppertal – The Color of the Night",
    description:
      "Café Blue Moon Wuppertal – Seit 1995. Über 133 Cocktails, internationale Küche, Live Musik am Wochenende.",
    type: "website",
    locale: "de_DE",
  },
  icons: {
    icon: "/ms-icon-310x310.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${cinzel.variable} ${crimson.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#02040c" />
      </head>
      <body className="bg-brand-bg text-brand-cream font-serif-body antialiased">
        {children}
      </body>
    </html>
  );
}
