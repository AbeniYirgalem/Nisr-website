import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { TrendingAdsSection } from "../../components/ui/TrendingAdsSection";
import { FashionSection } from "../../components/ui/FashionSection";
import AppDownloadPopup from "../../components/ui/AppDownloadPopup";
import WaitlistPopup from "../../components/ui/WaitlistPopup";
import img19_2 from "../../assets/images/image-19-2.png";
import img23_1 from "../../assets/images/image-23-1.png";
import img21_2 from "../../assets/images/image-21-2.png";
import img24_1 from "../../assets/images/image-24-1.png";

const mockProducts = [
  {
    id: 1,
    image: img19_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
  {
    id: 2,
    image: img23_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
  {
    id: 3,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
  {
    id: 4,
    image: img24_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
  {
    id: 5,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
  {
    id: 6,
    image: img24_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
  {
    id: 7,
    image: img19_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
  {
    id: 8,
    image: img23_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
];

export const SearchResultsPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedDelivery, setSelectedDelivery] = useState<string[]>([]);

  const categories = ["Electronics", "Fashion", "Foods and Drinks", "Stationary"];
  const conditions = ["Brand New", "Used", "Repacked"];
  const deliveryOptions = ["Free Delivery", "Paid Delivery", "No Delivery"];

  const toggleFilter = (
    value: string,
    selected: string[],
    setter: (value: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setter(selected.filter((item) => item !== value));
    } else {
      setter([...selected, value]);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
        <TrendingAdsSection
          onDownloadClick={() => setShowDownloadPopup(true)}
          onWaitlistClick={() => setShowWaitlistPopup(true)}
        />
        <FashionSection onShowDownloadPopup={() => setShowDownloadPopup(true)} />
      </div>

      <AppDownloadPopup
        isOpen={showDownloadPopup}
        onClose={() => setShowDownloadPopup(false)}
        onWaitlistClick={() => {
          setShowDownloadPopup(false);
          setShowWaitlistPopup(true);
        }}
      />
      <WaitlistPopup isOpen={showWaitlistPopup} onClose={() => setShowWaitlistPopup(false)} />

      <div className="max-w-[1440px] mx-auto px-8 py-8">
        <div className="grid grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-6">
            <div>
              <h3 className="[font-family:'Nunito',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] mb-4">
                Category Filters
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      toggleFilter(
                        category,
                        selectedCategories,
                        setSelectedCategories
                      )
                    }
                    className={`px-4 py-2 rounded-[50px] border [font-family:'Nunito',Helvetica] font-medium text-sm tracking-[0] leading-[normal] transition-colors ${
                      selectedCategories.includes(category)
                        ? "bg-[#fe2188] text-white border-[#fe2188]"
                        : "bg-[#f5f5f5] text-[#313131] border-[#e0e0e0] hover:border-[#fe2188]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="[font-family:'Nunito',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] mb-4">
                Price Filter
              </h3>
              <div className="flex items-center gap-3">
                <Input
                  type="text"
                  placeholder="min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="h-10 bg-[#f5f5f5] border-[#e0e0e0] rounded-md [font-family:'Nunito',Helvetica] font-normal text-[#313131] text-sm"
                />
                <span className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-lg">
                  —
                </span>
                <Input
                  type="text"
                  placeholder="max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="h-10 bg-[#f5f5f5] border-[#e0e0e0] rounded-md [font-family:'Nunito',Helvetica] font-normal text-[#313131] text-sm"
                />
              </div>
            </div>

            <div>
              <h3 className="[font-family:'Nunito',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] mb-4">
                Condition
              </h3>
              <div className="space-y-2">
                {conditions.map((condition) => (
                  <label
                    key={condition}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedConditions.includes(condition)}
                      onChange={() =>
                        toggleFilter(
                          condition,
                          selectedConditions,
                          setSelectedConditions
                        )
                      }
                      className="w-4 h-4 rounded border-[#e0e0e0] text-[#fe2188] focus:ring-[#fe2188]"
                    />
                    <span className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-base tracking-[0] leading-[normal]">
                      {condition}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="[font-family:'Nunito',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] mb-4">
                Delivery
              </h3>
              <div className="space-y-2">
                {deliveryOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDelivery.includes(option)}
                      onChange={() =>
                        toggleFilter(option, selectedDelivery, setSelectedDelivery)
                      }
                      className="w-4 h-4 rounded border-[#e0e0e0] text-[#fe2188] focus:ring-[#fe2188]"
                    />
                    <span className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-base tracking-[0] leading-[normal]">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <main>
            <div className="flex items-center justify-between mb-6">
              <h1 className="[font-family:'Nunito',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[normal]">
                Searched Results
              </h1>
              <div className="flex items-center gap-2">
                <span className="[font-family:'Nunito',Helvetica] font-semibold text-[#fe2188] text-base tracking-[0] leading-[normal]">
                  Sort
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10H7Z"
                    fill="#fe2188"
                  />
                </svg>
                <span className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-base tracking-[0] leading-[normal]">
                  Most viewed
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {mockProducts.map((product) => (
                <Card
                  key={product.id}
                  className="bg-white rounded-[15px] border border-[#e0e0e0] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-[4/3]">
                      <img
                        className="w-full h-full object-cover rounded-t-[15px]"
                        alt="Product"
                        src={product.image}
                      />
                    </div>
                    <div className="p-4">
                      <p className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-sm tracking-[0] leading-5 mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="[font-family:'Nunito',Helvetica] font-extrabold text-[#120b0b] text-lg tracking-[0] leading-5 mb-2">
                        {product.price}
                      </p>
                      <p className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-xs tracking-[0] leading-4">
                        {product.location} • {product.condition}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
