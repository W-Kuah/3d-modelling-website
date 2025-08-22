
import Link from "next/link";
import Image from "next/image";

import logo from "@/../public/printforge-logo.svg";
import logoIcon from "@/../public/printforge-logo-icon.svg";


export default function Navbar() {
  return (
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
              <li className=" text-sm uppercase cursor-pointer"><Link href="/3d-models">3D Models</Link></li>
              <li className=" text-sm uppercase cursor-pointer"><Link href="/about">About</Link></li> 
            </ul>
          </nav>
        </header>
  )
}
