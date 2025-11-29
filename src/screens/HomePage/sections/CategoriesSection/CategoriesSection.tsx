import { useEffect, useState } from "react";
import displayElectronics from "../../../../assets/images/display-electronics-image.png";
import displayFashion from "../../../../assets/images/display-fashion-image-1.png";
import displayFurniture from "../../../../assets/images/display-furniture-image.png";
import { db } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  Category,
  CategoryCard,
  CategoryCardSkeleton,
  CategoryGridItem,
  ToggleItem,
} from "./components/categoryCard";

const BASE_COUNT = 9;

const topImages = [
  { src: displayElectronics, alt: "Display electronics", label: "Electronics" },
  { src: displayFashion, alt: "Display fashion", label: "Fashion" },
  { src: displayFurniture, alt: "Display furniture", label: "Furniture" },
];

export const CategoriesSection = (): JSX.Element => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const getCategories = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(db, "categories", "category_list");
        const snapShot = await getDoc(docRef);

        if (snapShot.exists() && isMounted) {
          const data = snapShot.data();
          setCategories(data?.list as Category[]);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    getCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  // rendering logic
  const baseCategories = categories.slice(0, BASE_COUNT);
  const extraCategories = categories.slice(BASE_COUNT);

  const displayedCategoryData = showAllCategories ? categories : baseCategories;
  const toggleHandler = () => setShowAllCategories((prev) => !prev);

  const categoryCards: CategoryGridItem[] = [
    ...displayedCategoryData,
    ...(extraCategories.length > 0
      ? [
          {
            isToggle: true,
            showAll: showAllCategories,
            onToggle: toggleHandler,
          } as ToggleItem,
        ]
      : []),
  ];

  // Define how many skeleton cards to show
  const skeletonCount = BASE_COUNT + (extraCategories.length > 0 ? 1 : 0);

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
              {isLoading
                ? // Show Skeleton Cards while loading
                  Array.from({ length: skeletonCount || BASE_COUNT }).map(
                    (_, index) => (
                      <CategoryCardSkeleton key={`skeleton-${index}`} />
                    )
                  )
                : // Show dynamic category cards
                  categoryCards.map((category, index) => (
                    <CategoryCard
                      key={index}
                      item={
                        "isToggle" in category
                          ? { ...category, onToggle: toggleHandler }
                          : category
                      }
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
