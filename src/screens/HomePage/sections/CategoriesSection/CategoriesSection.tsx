import { useState } from "react";
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
  const displayedCategories = showAllCategories
    ? [...baseCategories, ...extraCategories]
    : baseCategories;
  // Removed toggleLabel, only icon will be shown
  const categoryCards: CategoryGridItem[] = [
    ...displayedCategories,
    { label: "", isToggle: true },
  ];

  return (
    <section className="w-full bg-[#ffe4f087] py-10 px-6">
      <div className="max-w-[80%] mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-6">
          {topImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                className="w-full h-[250px] rounded-[20px] object-cover"
                alt={image.alt}
                src={image.src}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="[font-family:'Nunito',Helvetica] font-bold text-black text-[28px] tracking-[0] leading-[normal] px-22">
            Categories
          </h2>

          <div className="grid grid-cols-5 gap-6 max-w-[1000px] mx-auto">
            {categoryCards.map((category, index) => (
              <Card
                key={index}
                className="bg-white rounded-[10px] border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-2 flex flex-col items-center justify-center h-[120px] gap-2">
                  {"isToggle" in category ? (
                    <button
                      type="button"
                      className="w-full flex flex-col items-center justify-center text-[#151414]"
                      onClick={() => setShowAllCategories((prev) => !prev)}
                    >
                      {showAllCategories ? (
                        <ChevronUpIcon className="w-[60px] h-[60px] text-gray-700 mt-2" />
                      ) : (
                        <ChevronDownIcon className="w-[70px] h-[70px] text-gray-700 mt-3" />
                      )}
                    </button>
                  ) : (
                    <img
                      className="w-full h-[80px] object-contain"
                      alt={category.alt}
                      src={category.src}
                    />
                  )}
                  <div className="[font-family:'Nunito',Helvetica] font-semibold text-[#151414] text-sm tracking-[0] leading-[normal] text-center px-1 line-clamp-2">
                    {category.label}
                  </div>
                  {/* No toggle label button below icon, icon only */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
