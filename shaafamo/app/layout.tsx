import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shaafamo Coffee | Premium Ethiopian Specialty Coffee from Sidama",
  description:
    "Discover the finest specialty coffee from the highlands of Sidama, Ethiopia. Hand-picked, sun-dried, and crafted with generations of expertise. Farm to cup excellence.",
  keywords: [
    "Ethiopian coffee",
    "Sidama coffee",
    "specialty coffee",
    "premium coffee",
    "single origin",
    "Shaafamo",
  ],
  openGraph: {
    title: "Shaafamo Coffee | Premium Ethiopian Specialty Coffee",
    description:
      "Discover the finest specialty coffee from the highlands of Sidama, Ethiopia.",
    type: "website",
  },
  icons: {
    // Use the site's logo as the favicon and app icon. Replace with /favicon.ico if you add an .ico file later.
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
