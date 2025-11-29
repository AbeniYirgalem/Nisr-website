import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import displayElectronics from "../../../../assets/images/display-electronics-image.png";
import displayFashion from "../../../../assets/images/display-fashion-image-1.png";
import displayFurniture from "../../../../assets/images/display-furniture-image.png";
import image35 from "../../../../assets/images/image-35.png";
import image58 from "../../../../assets/images/image-58.png";
import image59 from "../../../../assets/images/image-59.png";
import image61 from "../../../../assets/images/image-61.png";
import image38 from "../../../../assets/images/image-38.png";
import image60 from "../../../../assets/images/image-60.png";
import image63 from "../../../../assets/images/image-63.png";
import image65 from "../../../../assets/images/image-65.png";
import image64 from "../../../../assets/images/image-64.png";


const topImages = [
  { src: displayElectronics, alt: "Display electronics", label: "Electronics" },
  { src: displayFashion, alt: "Display fashion", label: "Fashion" },
  { src: displayFurniture, alt: "Display furniture", label: "Furniture" },
];

type CategoryCard = {
  src: string;
  alt: string;
  label: string;
};

type CategoryGridItem = CategoryCard | { label: string; isToggle: true };

const baseCategories: CategoryCard[] = [
  { src: image35, alt: "Electronics", label: "Electronics" },
  { src: image58, alt: "Stationary", label: "Stationary" },
  { src: image59, alt: "Food and Drink", label: "Food and Drink" },
  { src: image61, alt: "Health and Beauty", label: "Health and Beauty" },
  { src: image38, alt: "Services", label: "Services" },
  { src: image60, alt: "Fashion", label: "Fashion" },
  { src: image63, alt: "Lost and Found", label: "Lost and Found" },
  { src: image65, alt: "Sport and Outdoor", label: "Sport and Outdoor" },
  { src: image64, alt: "Books and Art", label: "Books and Art" },
];

const extraCategories: CategoryCard[] = [
  { src: image64, alt: "Home Appliances", label: "Home Appliances" },
  { src: image60, alt: "Kids & Babies", label: "Kids & Babies" },
  { src: image58, alt: "Office Supplies", label: "Office Supplies" },
  { src: image35, alt: "Gaming", label: "Gaming" },
  { src: image63, alt: "Pets", label: "Pets" },
  { src: image59, alt: "Events", label: "Events" },
];

export const CategoriesSection = (): JSX.Element => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const navigate = useNavigate();
  const displayedCategories = showAllCategories
    ? [...baseCategories, ...extraCategories]
    : baseCategories;
  // Removed toggleLabel, only icon will be shown
  const categoryCards: CategoryGridItem[] = [
    ...displayedCategories,
    { label: "", isToggle: true },
  ];

  return (
    <section className="w-full bg-[#ffe4f087] py-0 sm:py-10 px-0 sm:px-4">
      <div className="max-w-screen-xl mx-auto px-0 sm:px-4 flex flex-col gap-2 sm:gap-6">
        <div className="flex gap-4 overflow-x-auto lg:grid lg:grid-cols-3 lg:gap-6 scrollbar-hide px-2 sm:px-5 pt-4 sm:pt-0">
          {topImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer min-w-[260px] max-w-[320px] flex-shrink-0 lg:min-w-0 lg:max-w-none"
            >
              <img
                className="w-full h-[200px] sm:h-[250px] rounded-[20px] object-cover"
                alt={image.alt}
                src={image.src}
              />
            </div>
          ))}
        </div>

        <div className="bg-[#FAFEFF] sm:bg-transparent flex flex-col gap-2 sm:gap-5">
          <h2 className="[font-family:'Nunito',Helvetica] font-bold text-black text-lg sm:text-[28px] tracking-[0] leading-[normal] px-2 ">
            Categories
          </h2>

          <div className="w-full overflow-x-auto pb-2 scrollbar-hide lg:max-w-4xl lg:mx-auto">
            <div className="flex lg:grid lg:grid-cols-5 gap-0 sm:gap-2 lg:gap-6 px-2">
              {categoryCards.map((category, index) => (
                <Card
                  key={index}
                  className="bg-[#FAFEFF] rounded-none sm:rounded-[8px] border-0 shadow-none sm:shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-[90px] max-w-[110px] flex-shrink-0 lg:min-w-0 lg:max-w-[160px]"
                  onClick={() => {
                    if (!("isToggle" in category)) {
                      navigate("/search");
                    }
                  }}
                >
                  <CardContent className="p-1 flex flex-col items-center justify-center h-[90px] gap-1 sm:p-2 sm:h-[100px] md:h-[120px] sm:gap-2">
                    {"isToggle" in category ? (
                      <button
                        type="button"
                        className="w-full flex flex-col items-center justify-center text-[#151414]"
                        onClick={(event) => {
                          event.stopPropagation();
                          setShowAllCategories((prev) => !prev);
                        }}
                      >
                        {showAllCategories ? (
                          <ChevronUpIcon className="w-8 h-8 text-gray-700 mt-1 sm:w-[60px] sm:h-[60px] sm:mt-2" />
                        ) : (
                          <ChevronDownIcon className="w-10 h-10 text-gray-700 mt-1 sm:w-[70px] sm:h-[70px] sm:mt-3" />
                        )}
                      </button>
                    ) : (
                      <img
                        className="w-full h-10 object-contain sm:h-[60px] md:h-[80px]"
                        alt={category.alt}
                        src={category.src}
                      />
                    )}
                    <div className="[font-family:'Nunito',Helvetica] font-semibold text-[#151414] text-xs sm:text-sm tracking-[0] leading-[normal] text-center px-1 line-clamp-2">
                      {category.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
