import Link from "next/link";
import { NavLinkProps } from "../types";

export default function NavLink({children, isActive, href}:NavLinkProps) {
  return (
    <li className="text-sm uppercase">
        <Link 
            href={href}
            className={`${isActive ? "is-active text-[var(--orange-color)]" : 'text-gray-700'} px-4 py-2  transition-colors rounded-md cursor-pointer hover:text-[var(--orange-color)]`}
        >
            {children}
        </Link>
    </li>
  )
}
