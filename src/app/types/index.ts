import type { ReactNode } from "react";

// Data Types
export type Model = {
  id: number,
  name: string,
  description: string,
  likes: number,
  image: string,
  category: string,
  dateAdded: string,
}

export type Category = {
  displayName: string,
  slug: string
}

export type CategoriesData = {
  categories: Category[]
}

export type GetModelsParams = {
  category?: string
}

// Page Types
export type RootLayoutProps = Readonly<{
    children: React.ReactNode,
}>

export type ModelPageProps = Readonly<{
    searchParams: {
      query?: string
    }
}>

export type ModelDetailPageProps = Readonly<{
    params: Promise<{
      id: string,
    }>,
}>

export type CategoriesPageProps = Readonly<{
    params: Promise<{
      categoryName: string,
    }>,
}>

// Components Types
export type ModelCardProps = {
  model: Model,
}

export type ModelGridProps = {
  title: string,
  models: Model[]
}

export type PillProps = {
  children: ReactNode,
  className?: string,
}

export type NavLinkProps = {
  children: ReactNode,
  isActive?: boolean,
  href: string
}
