import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { GetAppSection } from "../../components/ui/GetAppSection";
import { TopAppBarSection } from "../../components/ui/TopAppBarSection";
import AppDownloadPopup from "../../components/ui/AppDownloadPopup";
import WaitlistPopup from "../../components/ui/WaitlistPopup";
import img19_2 from "../../assets/images/image-19-2.png";
import img23_1 from "../../assets/images/image-23-1.png";
import img21_2 from "../../assets/images/image-21-2.png";
import img24_1 from "../../assets/images/image-24-1.png";

const shopProducts = [
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
  {
    id: 9,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
  {
    id: 10,
    image: img24_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa",
    condition: "Brand New",
  },
];

export const SellerShopPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });

  return (
    <div className="bg-[#f0f0f0] min-h-screen">
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

      <div className="max-w-[1440px] mx-auto px-0 sm:px-8 py-0 sm:py-8">
        <div className="flex flex-col gap-4 sm:gap-8 lg:grid lg:grid-cols-[280px_1fr]">
          <aside className="space-y-6">
            <Card className="bg-white border-0 shadow-sm rounded-none sm:rounded-[24px] p-0 overflow-hidden">
              <div className="relative">
                {/* Banner Image */}
                <div className="w-full h-56 bg-gradient-to-b from-[#e8e8e8] to-[#f5f5f5] relative overflow-hidden">
                  <img
                    src="https://tse2.mm.bing.net/th/id/OIP.U5nFcRcUdPctXJs_3ft2KQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Shop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="px-6 pb-6">
                  <div className="flex flex-col items-left -mt-16 mb-4">
                    <div className="w-[120px] h-[120px] bg-[#1E88E5] rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg relative z-10">
                      <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
                        alt="Seller"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    
                    <h2 className="[font-family:'Nunito',Helvetica] font-bold text-[#120b0b] text-2xl tracking-[0] leading-[normal] text-left mb-1">
                      Abebe Kebede Shop
                    </h2>
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#757575] text-sm tracking-[0] leading-[normal] text-left mb-1">
                      Last seen: 1 week ago
                    </p>
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#757575] text-sm tracking-[0] leading-[normal] text-left">
                      26 days in Nisr Market
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 flex flex-col items-center">
                    <Button 
                      className="w-full h-14 max-w-100 bg-[#FFC4D5] border-3 border-[#FF5252] hover:bg-[#FFF3E0] rounded-[16px] [font-family:'Nunito',Helvetica] font-bold text-[#FF5252] text-lg tracking-[0] leading-[normal] transition-colors"
                      onClick={() => setShowDownloadPopup(true)}
                    >
                      Call
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full h-14 max-w-100 bg-[#E4E4E4] border-0 hover:bg-[#D8D8D8] rounded-[16px] [font-family:'Nunito',Helvetica] font-bold text-[#120b0b] text-base tracking-[0] leading-[normal] gap-2 transition-colors"
                      onClick={() => setShowDownloadPopup(true)}
                    >
                      <span>Feedback</span>
                      <span className="w-full"></span>
                      <svg
                        style={{ width: '36px', height: '36px' }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 6L15 12L9 18"
                          stroke="#120b0b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          <main>
            <div className="mb-2 sm:mb-4">
              <h1 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[24px] sm:text-[28px] md:text-[32px] tracking-[0.40px] leading-4 mb-4 sm:mb-8 md:mb-10 px-1 sm:px-0">
                All items
              </h1>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-3 px-2 sm:px-0">
              {shopProducts.map((product) => (
                 <Card
                  key={product.id}
                  className="bg-[#fffdfd] rounded-[15px] border-0 shadow-none overflow-hidden cursor-pointer hover:shadow-md transition-shadow w-full max-w-[260px]"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-[4/3]">
                      <img
                        className="w-full h-full object-cover"
                        alt="Product"
                        src={product.image}
                      />
                    </div>
                    <div className="p-3">
                      <p className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-xs tracking-[0] leading-4 mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="[font-family:'Nunito',Helvetica] font-extrabold text-[#120b0b] text-base tracking-[0] leading-4 mb-2">
                        {product.price}
                      </p>
                      <p className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-[11px] tracking-[0] leading-4">
                        {product.location}
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
