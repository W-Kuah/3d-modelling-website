
import { getAllCategories } from "../lib/categories";
import type { ReactNode } from "react";
import { Category } from "../types";
import ModelNav from "../components/ModelNav";


export default function ModelsLayout({children}: {children: ReactNode}) {
    return (
        <div className="relative flex flex-col min-h-screen md:flex-row">
            <ModelNav />
            <main className="flex-1 p-4 md:ml-64">{children}</main>
        </div>
        
    )
}
