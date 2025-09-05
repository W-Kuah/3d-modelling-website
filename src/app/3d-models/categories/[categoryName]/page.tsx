import ModelsGrid from "@/app/components/ModelsGrid";
import { getCategoryBySlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";
import { CategoriesPageProps } from "@/app/types";


export default async function CategoriesPage({ params }: CategoriesPageProps) {
    const { categoryName } = await params;
    const category = getCategoryBySlug(categoryName);
    const filteredModels = await getModels({category: categoryName});
    return (
        <ModelsGrid title={category.displayName} models={filteredModels} />
    )
}
