import type { Metadata } from "next";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
              src="/printforge-logo.svg"
              alt="PrintForge Logo"
              className="hidden md:block"
              width={320}
              height={320}
            />
            <Image
              src="/printforge-logo-icon.svg"
              alt="PrintForge Logo"
              className="block md:hidden"
              width={40}
              height={40}
            />
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p> 
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
``