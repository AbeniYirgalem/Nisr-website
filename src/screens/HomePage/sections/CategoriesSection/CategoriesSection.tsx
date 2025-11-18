import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
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

const categories = [
  { src: image35, alt: "Electronics", label: "Electronics" },
  { src: image58, alt: "Stationary", label: "Stationary" },
  { src: image59, alt: "Food and Drink", label: "Food and Drink" },
  { src: image61, alt: "Health and Beauty", label: "Health and Beauty" },
  { src: image38, alt: "Services", label: "Services" },
  { src: image60, alt: "Fashion", label: "Fashion" },
  { src: image63, alt: "Lost and Found", label: "Lost and Found" },
  { src: image65, alt: "Sport and Outdoor", label: "Sport and Outdoor" },
  { src: image64, alt: "Books and Art", label: "Books and Art" },
  { src: null, alt: "More", label: "More", isMore: true },
];

export const CategoriesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#ffe4f087] py-10 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-6">
          {topImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                className="w-full h-[295px] rounded-[20px] object-cover"
                alt={image.alt}
                src={image.src}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 mt-4">
          <h2 className="[font-family:'Nunito',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[normal]">
            Categories
          </h2>

          <div className="grid grid-cols-5 gap-6 max-w-[1000px] mx-auto">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="bg-white rounded-[10px] border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-0 flex flex-col items-center justify-center h-[120px] relative">
                  {category.isMore ? (
                    <MoreHorizontalIcon className="w-[91px] h-[91px] text-gray-700" />
                  ) : (
                    <img
                      className="w-full h-[90px] object-contain px-3 pt-2"
                      alt={category.alt}
                      src={category.src}
                    />
                  )}
                  <div className="absolute bottom-2 [font-family:'Nunito',Helvetica] font-semibold text-[#151414] text-sm tracking-[0] leading-[normal] text-center px-2">
                    {category.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
