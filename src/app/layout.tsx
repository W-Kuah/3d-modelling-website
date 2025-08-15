import type { Metadata } from "next";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import Image from "next/image";
import logo from "@/../public/printforge-logo.svg"
import logoIcon from "@/../public/printforge-logo-icon.svg"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export const metadata: Metadata = {
  title: "PrintHub",
  description: "3D printing library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${montserratAlternates.variable}`}
      >
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Image
              src={logo.src}
              alt="PrintForge Logo"
              className="hidden md:block"
              width={320}
              height={320}
            />
            <Image
              src={logoIcon.src}
              alt="PrintForge Logo"
              className="block md:hidden"
              width={40}
              height={40}
            />
            <ul className="flex items-center gap-2.5">
              <li className=" text-sm uppercase cursor-pointer"><Link href="/">Home</Link></li>
              <li className=" text-sm uppercase cursor-pointer"><Link href="/products">3D Models</Link></li>
              <li className=" text-sm uppercase cursor-pointer"><Link href="/about">About</Link></li> 
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
``