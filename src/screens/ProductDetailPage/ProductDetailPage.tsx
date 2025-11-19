import { MessageSquareIcon, PhoneIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { TrendingAdsSection } from "../../components/ui/TrendingAdsSection";
import { FashionSection } from "../../components/ui/FashionSection";
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

  return (
    <div className="bg-[#F0F0F0] min-h-screen">
      <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
        <TrendingAdsSection />
        <FashionSection />
      </div>

      <div className="max-w-[1320px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
          <div className="rounded-[20px] overflow-hidden bg-gray-100">
            <img
              src={img19_2}
              alt="Product"
              className="w-full h-[600px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <Card className="bg-white border-0 shadow-sm rounded-[15px]">
              <CardContent className="p-6">
                <h1 className="[font-family:'Nunito',Helvetica] font-extrabold text-[#fc3850] text-5xl tracking-[0] leading-none">
                  ETB 1000
                </h1>
                <div className="[font-family:'Nunito',Helvetica] font-normal text-[#120b0b] text-sm tracking-[0] leading-[normal] mb-6">
                  Fixed price
                </div>

                <p className="[font-family:'Nunito',Helvetica] font-bold text-black text-xl tracking-[0] leading-7 mb-4">
                  Brand new Lamborghini 2025 made in USA high speed and
                  durability
                </p>

                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.58862 0 0 3.58862 0 8C0 12.4114 3.58862 16 8 16C12.4114 16 16 12.4114 16 8C16 3.58862 12.4114 0 8 0ZM8 3.2C8.88366 3.2 9.6 3.91634 9.6 4.8C9.6 5.68366 8.88366 6.4 8 6.4C7.11634 6.4 6.4 5.68366 6.4 4.8C6.4 3.91634 7.11634 3.2 8 3.2ZM10.4 12H5.6V11.2C5.6 10.7582 5.95817 10.4 6.4 10.4H6.8V8H6.4C5.95817 8 5.6 7.64183 5.6 7.2V6.4H8.8V10.4H9.6C10.0418 10.4 10.4 10.7582 10.4 11.2V12Z"
                        fill="#313131"
                      />
                    </svg>
                    <span className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-sm tracking-[0] leading-[normal]">
                      Sebeta, Addis Ababa
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 7H14V5C14 2.79 12.21 1 10 1H8C5.79 1 4 2.79 4 5V7H2C1.45 7 1 7.45 1 8V16C1 16.55 1.45 17 2 17H16C16.55 17 17 16.55 17 16V8C17 7.45 16.55 7 16 7ZM6 5C6 3.9 6.9 3 8 3H10C11.1 3 12 3.9 12 5V7H6V5Z"
                        fill="#00B207"
                      />
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
                  <Button className="h-14 bg-[#fe2188] hover:bg-[#fe2188]/90 rounded-[10px] [font-family:'Nunito',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                    <MessageSquareIcon className="w-5 h-5 mr-2" />
                    Chat
                  </Button>
                  <Button
                    variant="outline"
                    className="h-14 bg-white border-2 border-[#fe2188] hover:bg-[#ffe4f0] rounded-[10px] [font-family:'Nunito',Helvetica] font-bold text-[#fe2188] text-lg tracking-[0] leading-[normal]"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm rounded-[15px]">
              <CardContent className="p-6">
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
                  >
                    Feedback
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 border-2 border-[#fc3850] bg-white hover:bg-[#ffe4f0] rounded-[10px] [font-family:'Nunito',Helvetica] font-semibold text-[#fc3850] text-base tracking-[0] leading-[normal]"
                  >
                    Report this ad
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-white border-0 shadow-sm rounded-[15px] mt-12">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="[font-family:'Nunito',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                Description
              </h2>
              <span className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-sm tracking-[0] leading-[normal]">
                27/10/2025
              </span>
            </div>
            <p className="[font-family:'Nunito',Helvetica] font-normal text-[#313131] text-base tracking-[0] leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </p>
          </CardContent>
        </Card>

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
