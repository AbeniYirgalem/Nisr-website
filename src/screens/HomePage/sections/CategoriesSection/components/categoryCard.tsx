import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { categoryImageMap } from "../../../../../constants/imageMap";

export type Category = {
  img: string;
  id: string;
  name: string;
};

export type ToggleItem = {
  isToggle: true;
  showAll: boolean;
  onToggle: () => void;
};

export type CategoryGridItem = Category | ToggleItem;

export const CategoryCard = ({
  item,
}: {
  item: CategoryGridItem;
}): JSX.Element => {
  const isToggle = "isToggle" in item;

  const cardClasses =
    "bg-[#FAFEFF] rounded-none sm:rounded-[8px] border-0 shadow-none sm:shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-[90px] max-w-[110px] flex-shrink-0 lg:min-w-0 lg:max-w-[160px]";

  return (
    <Card className={cardClasses}>
      <CardContent className="p-1 flex flex-col items-center justify-center h-[90px] gap-1 sm:p-2 sm:h-[100px] md:h-[120px] sm:gap-2">
        {isToggle ? (
          <button
            type="button"
            className="w-full flex flex-col items-center justify-center text-[#151414]"
            onClick={item.onToggle}
          >
            {item.showAll ? (
              <ChevronUpIcon className="w-8 h-8 text-gray-700 mt-1 sm:w-[60px] sm:h-[60px] sm:mt-2" />
            ) : (
              <ChevronDownIcon className="w-10 h-10 text-gray-700 mt-1 sm:w-[70px] sm:h-[70px] sm:mt-3" />
            )}
          </button>
        ) : (
          <>
            <img
              className="w-full h-10 object-contain sm:h-[60px] md:h-[80px]"
              alt={item.name}
              src={
                categoryImageMap.find((cat) => cat.tag == item.img)?.location
              }
            />
            <div className="[font-family:'Nunito',Helvetica] font-semibold text-[#151414] text-xs sm:text-sm tracking-[0] leading-[normal] text-center px-1 line-clamp-2">
              {item.name}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export const CategoryCardSkeleton = (): JSX.Element => (
  <Card className="min-w-[90px] max-w-[110px] flex-shrink-0 lg:min-w-0 lg:max-w-[160px] shadow-none sm:shadow-sm">
    <CardContent className="p-1 flex flex-col items-center justify-center h-[90px] gap-1 sm:p-2 sm:h-[100px] md:h-[120px] sm:gap-2">
      <div className="w-full h-10 sm:h-[60px] md:h-[80px] bg-gray-200 rounded-lg animate-pulse"></div>
      <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
    </CardContent>
  </Card>
);
