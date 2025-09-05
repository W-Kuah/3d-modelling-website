
"use client"

import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "@/../public/printforge-logo.svg";
import logoIcon from "@/../public/printforge-logo-icon.svg";
import NavLink from "./NavLink";


export default function Navbar() {
  const pathname = usePathname();
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
                <NavLink href="/" isActive={pathname === '/'}>Home</NavLink>
                <NavLink href="/3d-models" isActive={pathname.startsWith('/3d-models')}>3D Models</NavLink>
                <NavLink href="/about" isActive={pathname === '/about'}>About</NavLink>
            </ul>
          </nav>
        </header>
  )
}
