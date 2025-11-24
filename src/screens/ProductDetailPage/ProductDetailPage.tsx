import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { GetAppSection } from "../../components/ui/GetAppSection";
import { TopAppBarSection } from "../../components/ui/TopAppBarSection";
import AppDownloadPopup from "../../components/ui/AppDownloadPopup";
import WaitlistPopup from "../../components/ui/WaitlistPopup";
import img19_2 from "../../assets/images/image-19-2.png";
import img23_1 from "../../assets/images/image-23-1.png";
import img21_2 from "../../assets/images/image-21-2.png";
import img24_1 from "../../assets/images/image-24-1.png";

const discoverMoreProducts = [
  {
    id: 1,
    image: img19_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
  },
  {
    id: 2,
    image: img23_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
  },
  {
    id: 3,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
  },
  {
    id: 4,
    image: img24_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
  },
  {
    id: 5,
    image: img19_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
  },
];

export const ProductDetailPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [shouldShowDescriptionToggle, setShouldShowDescriptionToggle] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const descriptionText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  useEffect(() => {
    const handleViewportCheck = () => {
      const isMobile = window.innerWidth < 640;

      setIsMobileViewport((previousValue) => {
        if (!previousValue && isMobile) {
          setIsDescriptionExpanded(false);
        }
        if (!isMobile) {
          setIsDescriptionExpanded(true);
        }
        return isMobile;
      });

      if (!descriptionRef.current) {
        setShouldShowDescriptionToggle(false);
        return;
      }

      if (isMobile) {
        const lineHeight = parseFloat(
          getComputedStyle(descriptionRef.current).lineHeight || "24"
        );
        const lines = descriptionRef.current.scrollHeight / lineHeight;
        setShouldShowDescriptionToggle(lines > 3);
      } else {
        setShouldShowDescriptionToggle(false);
      }
    };

    handleViewportCheck();
    window.addEventListener("resize", handleViewportCheck);
    return () => window.removeEventListener("resize", handleViewportCheck);
  }, []);

  return (
    <div className="bg-[#F0F0F0] min-h-screen">
      <div className="bg-white overflow-hidden w-full flex flex-col">
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

      <div className="max-w-[1320px] mx-auto px-0 sm:px-8 py-0 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 sm:gap-8">
          <div className="rounded-none sm:rounded-[20px] overflow-hidden bg-gray-100">
            <img
              src={img19_2}
              alt="Product"
              className="w-full h-64 sm:h-[600px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 sm:gap-6">
            <Card className="bg-white border-0 shadow-sm rounded-none sm:rounded-[15px]">
              <CardContent className="p-2 sm:p-6">
                <div className="[font-family:'Nunito',Helvetica] font-normal text-[#5A5A5A] text-sm tracking-[0] leading-[normal] text-right pr-2">
                  03/12/2025
                </div>
                <h1 className="[font-family:'Nunito',Helvetica] font-extrabold text-[#fc3850] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-none">
                  ETB 1000
                </h1>
                <div className="[font-family:'Nunito',Helvetica] font-normal text-[#5A5A5A] text-sm tracking-[0] leading-[normal] mb-6">
                  Fixed price
                </div>

                <p className="[font-family:'Nunito',Helvetica] font-bold text-black text-xl tracking-[0] leading-7 mb-4">
                  Brand new Lamborghini 2025 made in USA high speed and
                  durability
                </p>

                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 15C10 12 12 9.5 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.5 6 12 8 15Z"
                        stroke="#313131"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="8"
                        cy="7"
                        r="2"
                        stroke="#313131"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-sm tracking-[0] leading-[normal]">
                      Sebeta, Addis Ababa
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={"w-6 h-6"}
                    >
                      {/* The Box Shape */}
                      <path d="M16.5 9.4 L 7.5 4.21 L 2.5 7.1 L 11.5 12.3" opacity="0" /> {/* Hidden guide path */}
                      <path d="M22 17L16 20.5L10 17" />
                      <path d="M16 20.5V9" />
                      <path d="M22 6L22 17" />
                      <path d="M10 17V6" />
                      <path d="M22 6L16 2.5L10 6L16 9.5L22 6Z" />
                      
                      {/* Tape Detail on Box */}
                      <path d="M13 4.5L19 8" />
                      <path d="M16 9.5V11.5" />

                      {/* Speed Lines (Left) */}
                      <path d="M2 10H8" />
                      <path d="M2 14H8" />
                      <path d="M5 18H8" />
                    </svg>
                    <span className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-sm tracking-[0] leading-[normal]">
                      Free Delivery
                    </span>
                  </div>
                </div>

                <div className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-sm tracking-[0] leading-[normal]">
                  52 views
                </div>

                <div className="grid grid-cols-2 gap-4 pt-10">
                  <Button 
                    className="h-14 bg-[#fe2188] hover:bg-[#fe2188]/90 rounded-[10px] [font-family:'Nunito',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]"
                    onClick={() => setShowDownloadPopup(true)}
                  >
                    Chat
                  </Button>
                  <Button
                    variant="outline"
                    className="h-14 bg-[#ffc2d4] border-2 border-[#fe2188] hover:bg-[#ffe4f0] rounded-[10px] [font-family:'Nunito',Helvetica] font-bold text-[#fe2188] text-[20px] tracking-[0] leading-[normal]"
                    onClick={() => setShowDownloadPopup(true)}
                  >
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm rounded-none sm:rounded-[15px]">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-[60px] h-[60px] bg-[#fe2188] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="[font-family:'Nunito',Helvetica] font-bold text-white text-2xl">
                      A
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="[font-family:'Nunito',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal] mb-1">
                      Abebe Kebede Seller
                    </h3>
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-sm tracking-[0] leading-[normal]">
                      Last seen 2 days ago
                    </p>
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-sm tracking-[0] leading-[normal]">
                      2y 6m on Nisr
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate("/seller/abebe-kebede")}
                    variant="outline"
                    className="h-10 px-6 border-2 border-[#fe2188] bg-white hover:bg-[#ffe4f0] rounded-[50px] [font-family:'Nunito',Helvetica] font-bold text-[#fe2188] text-sm tracking-[0] leading-[normal]"
                  >
                    Shop
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <Button
                    variant="outline"
                    className="h-12 border-2 border-[#ffb800] bg-white hover:bg-[#fff8e6] rounded-[10px] [font-family:'Nunito',Helvetica] font-semibold text-[#ffb800] text-base tracking-[0] leading-[normal]"
                    onClick={() => setShowDownloadPopup(true)}
                  >
                    Feedback
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 border-2 border-[#fc3850] bg-white hover:bg-[#ffe4f0] rounded-[10px] [font-family:'Nunito',Helvetica] font-semibold text-[#fc3850] text-base tracking-[0] leading-[normal]"
                    onClick={() => setShowDownloadPopup(true)}
                  >
                    Report this ad
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white border-0 shadow-sm rounded-none sm:rounded-[15px] mt-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-0 sm:mb-4">
                <h2 className="[font-family:'Nunito',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                  Description
                </h2>
                
              </div>
              <div>
                <p
                  ref={descriptionRef}
                  className={`[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-base tracking-[0] leading-6 transition-all duration-200 ${
                    isMobileViewport && !isDescriptionExpanded
                      ? "max-h-[4.5em] overflow-hidden"
                      : ""
                  }`}
                >
                  {descriptionText}
                </p>
                {isMobileViewport && shouldShowDescriptionToggle && (
                  <button
                    className="mt-2 text-[#fe2188] font-semibold text-sm focus:outline-none"
                    onClick={() => setIsDescriptionExpanded((prev) => !prev)}
                  >
                    {isDescriptionExpanded ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </CardContent>
          </Card>

        </div>

        <div className="mt-12">
          <h2 className="[font-family:'Nunito',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[normal] mb-8">
            Discover More
          </h2>
          <div className="grid grid-cols-5 gap-6">
            {discoverMoreProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-white rounded-[15px] border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
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
                  <div className="p-3">
                    <p className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-xs tracking-[0] leading-4 mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="[font-family:'Nunito',Helvetica] font-extrabold text-[#120b0b] text-base tracking-[0] leading-4">
                      {product.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
