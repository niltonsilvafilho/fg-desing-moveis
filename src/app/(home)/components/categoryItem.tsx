import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  BathIcon,
  BedDoubleIcon,
  BedIcon,
  CookingPotIcon,
  LayoutGridIcon,
  TvIcon,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    banheiro: <BathIcon size={16} />,
    cozinha: <CookingPotIcon size={16} />,
    dormitoriocasal: <BedDoubleIcon size={16} />,
    dormitoriosolteiro: <BedIcon size={16} />,
    outros: <LayoutGridIcon size={16} />,
    saladeestar: <TvIcon size={16} />,
  };
  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-semibold ">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
