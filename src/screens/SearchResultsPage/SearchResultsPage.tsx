import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { GetAppSection } from "../../components/ui/GetAppSection";
import { TopAppBarSection } from "../../components/ui/TopAppBarSection";
import AppDownloadPopup from "../../components/ui/AppDownloadPopup";
import WaitlistPopup from "../../components/ui/WaitlistPopup";
import { searchProducts } from "../../lib/algolia";

export const SearchResultsPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedDelivery, setSelectedDelivery] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const sortOptions = ["Most viewed", "Newest", "Lowest price", "Highest price"];
  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement | null>(null);
  const [queryResults, setQueryResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchQuery = (searchParams.get("q") ?? "").trim();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });

  useEffect(() => {
    const runSearch = async () => {
      if (!searchQuery) {
        setQueryResults([]);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const res = await searchProducts(searchQuery, { hitsPerPage: 40 });
        setQueryResults(res.hits ?? []);
      } catch (err: any) {
        setError(err?.message ?? "Search failed");
        setQueryResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    runSearch();
  }, [searchQuery]);

  useEffect(() => {
    if (!isSortMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSortMenuOpen]);

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

  const filterContent = (
    <>
      <Card className="bg-white rounded-[15px] border border-[#e0e0e0] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4">
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
        </CardContent>
      </Card>

      <Card className="bg-white rounded-[15px] border border-[#e0e0e0] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4">
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
        </CardContent>
      </Card>

      <Card className="bg-white rounded-[15px] border border-[#e0e0e0] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4">
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
        </CardContent>
      </Card>

      <Card className="bg-white rounded-[15px] border border-[#e0e0e0] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4">
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
        </CardContent>
      </Card>
    </>
  );

  return (
    <div className="bg-[#efefef] min-h-screen">
      <div className="overflow-hidden w-full flex flex-col">
        <GetAppSection
          onDownloadClick={() => setShowDownloadPopup(true)}
          onWaitlistClick={() => setShowWaitlistPopup(true)}
        />
        <TopAppBarSection onShowDownloadPopup={() => setShowDownloadPopup(true)} />
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

      <div className="max-w-[1440px] mx-auto px-2 sm:px-8 py-2 sm:py-8">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[280px_1fr]">
          <aside className="space-y-6 hidden lg:block">
            {filterContent}
          </aside>

          <main>
            <div className="flex flex-wrap items-center justify-between mb-4">

              <h1 className="my-0 [font-family:'Nunito',Helvetica] font-bold text-black text-[20px] sm:text-3xl md:text-4xl lg:text-3xl tracking-[0] leading-tight text-left lg:w-auto">
                Search results
              </h1>
              <div className="flex items-center gap-0">
                <div className="flex items-center gap-2">
                  <div className="relative" ref={sortDropdownRef}>
                    <button
                      type="button"
                      className="inline-flex items-center gap-0 rounded-full border border-[#fe2188] px-3 py-2 text-sm [font-family:'Nunito',Helvetica] text-[#fe2188] font-semibold text-base shadow-sm hover:bg-[#fe2188]/10 transition-colors"
                      onClick={() => setIsSortMenuOpen((prev) => !prev)}
                    >
                      <span>Sort</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1"
                      >
                        <path d="M7 10L12 15L17 10H7Z" fill="#fe2188" />
                      </svg>
                      <span className="ml-1 font-normal text-[#313131] hidden md:inline">{sortOption}</span>
                    </button>
                    {isSortMenuOpen && (
                      <ul className="absolute mt-2 w-48 rounded-xl border border-[#e0e0e0] bg-white shadow-lg z-20">
                        {sortOptions.map((option) => (
                          <li
                            key={option}
                            className={`px-4 py-2 cursor-pointer [font-family:'Nunito',Helvetica] text-sm ${
                              option === sortOption
                                ? "text-[#fe2188] font-semibold"
                                : "text-[#313131] hover:bg-[#fe2188]/10"
                            }`}
                            onClick={() => {
                              setSortOption(option);
                              setIsSortMenuOpen(false);
                            }}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-[#fe2188] px-3 py-2 text-sm font-semibold text-[#fe2188] [font-family:'Nunito',Helvetica] hover:bg-[#fe2188]/10 transition-colors lg:hidden"
                    onClick={() => setIsFilterOpen(true)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 4H13"
                        stroke="#fe2188"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5 8H11"
                        stroke="#fe2188"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 12H9"
                        stroke="#fe2188"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-5 mb-14 lg:mb-0 auto-rows-auto justify-items-center">
              {isLoading && (
                <div className="col-span-full text-center text-[#313131] [font-family:'Nunito',Helvetica]">Searching…</div>
              )}
              {!isLoading && error && (
                <div className="col-span-full text-center text-red-600 [font-family:'Nunito',Helvetica]">{error}</div>
              )}
              {!isLoading && !error && searchQuery === "" && (
                <div className="col-span-full text-center text-[#313131] [font-family:'Nunito',Helvetica]">
                  Enter a search to see products.
                </div>
              )}
              {!isLoading && !error && searchQuery !== "" && queryResults.length === 0 && (
                <div className="col-span-full text-center text-[#313131] [font-family:'Nunito',Helvetica]">
                  No products found for “{searchQuery}”.
                </div>
              )}

              {queryResults.map((product: any) => {
                // Normalize Algolia hit fields to our UI expectations
                const id = product.id;
                const name = product.name ?? "Product";
                const price = product.price ?? "0";
                const baseDescription = product.desc ?? "";
                const image = product.imgList?.[0] ?? "";

                // Derive a concise label from condition and delivery/negotiable flags
                const condition = product.condition ?? "";
                const freeDelivery = product.freeDelivery ?? null;
                const negotiable = product.negotiable ?? null;

                let otherDesc = "";
                if (freeDelivery === true) {
                  otherDesc = "Free delivery";
                } else if (negotiable === true) {
                  otherDesc = "Negotiable";
                } else if (freeDelivery === false) {
                  otherDesc = "Paid delivery";
                } else if (negotiable === false) {
                  otherDesc = "Fixed price";
                }

                const derivedDescription = condition
                  ? `${condition}${otherDesc ? ` • ${otherDesc}` : ""}`
                  : otherDesc;

                const cardDescription = derivedDescription || baseDescription;

                return (
                  <Card
                    key={id || name}
                    className="bg-[#fffdfd] rounded-[15px] border-0 shadow-none overflow-hidden cursor-pointer hover:shadow-md transition-shadow w-full max-w-[260px]"
                    onClick={() => id && navigate(`/product/${id}`)}
                  >
                    <CardContent className="p-0">
                      <div className="relative w-full aspect-[4/3]">
                        <img
                          className="w-full h-full object-cover"
                          alt={name}
                          src={image}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <p className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-xs tracking-[0] leading-4 mb-2 line-clamp-2">
                          {name}
                        </p>
                        <p className="[font-family:'Nunito',Helvetica] font-extrabold text-[#120b0b] text-base tracking-[0] leading-4 mb-2">
                          {price ? `ETB ${price}` : ""}
                        </p>
                        <p className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-[11px] tracking-[0] leading-4">
                          {cardDescription}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </main>
        </div>
      </div>
      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 px-4">
          <div className="w-full sm:max-w-md bg-white rounded-t-[30px] sm:rounded-[30px] p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="[font-family:'Nunito',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                Filters
              </h2>
              <button
                type="button"
                className="text-[#313131]"
                onClick={() => setIsFilterOpen(false)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#313131"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#313131"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-6">{filterContent}</div>
            <button
              type="button"
              className="mt-6 w-full rounded-[12px] bg-[#fe2188] py-3 text-white font-semibold [font-family:'Nunito',Helvetica]"
              onClick={() => setIsFilterOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
