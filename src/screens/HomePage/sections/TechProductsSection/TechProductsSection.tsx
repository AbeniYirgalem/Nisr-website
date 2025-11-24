import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";
import unsplashPdds9_1 from "../../../../assets/images/unsplash-pdds9xswyom-1.png";
import unsplashYtb from "../../../../assets/images/unsplash-ytbmycczqrs.png";
import unsplash9u18_1 from "../../../../assets/images/unsplash-9u18fiowwbw-1.png";
import unsplashNovn from "../../../../assets/images/unsplash-novnxxmdni0.svg";
import unsplash9u18 from "../../../../assets/images/unsplash-9u18fiowwbw.png";
import unsplashYtb_1 from "../../../../assets/images/unsplash-ytbmycczqrs-1.png";
import rectangle8 from "../../../../assets/images/rectangle-8.png";
import unsplash0vsk2 from "../../../../assets/images/unsplash-0vsk2-9dkqo.png";
import unsplashPdds9 from "../../../../assets/images/unsplash-pdds9xswyom.png";
import unsplashPdds9_2 from "../../../../assets/images/unsplash-pdds9xswyom-2.png";
import image18 from "../../../../assets/images/image-18.png";
import unsplash0vsk2_1 from "../../../../assets/images/unsplash-0vsk2-9dkqo-1.png";

const techProducts = [
  { id: 1, image: unsplashPdds9_1, price: "ETB 1,000" },
  { id: 2, image: unsplashYtb, price: "ETB 1,000" },
  { id: 3, image: unsplash9u18_1, price: "ETB 1,000" },
  { id: 4, image: unsplashNovn, price: "ETB 1,000" },
  { id: 5, image: unsplash9u18, price: "ETB 1,000" },
  { id: 6, image: unsplashYtb_1, price: "ETB 1,000" },
];

const fashionProducts = [
  { id: 7, image: rectangle8, price: "ETB 1,000" },
  { id: 8, image: unsplash0vsk2, price: "ETB 1,000" },
  { id: 9, image: unsplashPdds9, price: "ETB 1,000" },
];

const stationaryProducts = [
  { id: 10, image: unsplashPdds9_2, price: "ETB 1,000" },
  { id: 11, image: image18, price: "ETB 1,000" },
  { id: 12, image: unsplash0vsk2_1, price: "ETB 1,000" },
];

export const TechProductsSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 py-6">
      <div className="flex flex-col gap-6 lg:flex-row max-w-[1320px] mx-auto">
        <Card className="bg-[#ffc2d3] border-0 rounded-[10px] w-full lg:w-1/2">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[28px] tracking-[0.40px] leading-none">
                Tech Products
              </h2>
              <ChevronRightIcon className="w-5 h-5 text-black mt-1" />
            </div>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pt-8 lg:grid lg:grid-cols-3 lg:gap-4 lg:gap-y-10">
              {techProducts.map((product) => (
                <Card
                  key={product.id}
                  className="bg-white border-0 overflow-hidden cursor-pointer hover:shadow-md transition-shadow min-w-[180px] flex-shrink-0 lg:min-w-0"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt="Product"
                      className="w-full h-[157px] object-cover rounded-t-lg"
                    />
                    <div className="p-2 text-center">
                      <span className="[font-family:'Nunito',Helvetica] font-extrabold text-[#fc3850] text-[18px] tracking-[0] leading-4">
                        {product.price}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <Card className="bg-[#abcfff] border-0 rounded-[10px]">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[26px] tracking-[0.40px] leading-none">
                  Fashion
                </h2>
                <ChevronRightIcon className="w-5 h-5 text-black mt-1" />
              </div>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4">
                {fashionProducts.map((product) => (
                  <Card
                  key={product.id}
                  className="bg-white border-0 overflow-hidden cursor-pointer hover:shadow-md transition-shadow min-w-[180px] flex-shrink-0 lg:min-w-0"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt="Product"
                      className="w-full h-[157px] object-cover rounded-t-lg"
                    />
                    <div className="p-2 text-center">
                      <span className="[font-family:'Nunito',Helvetica] font-extrabold text-[#fc3850] text-[18px] tracking-[0] leading-4">
                        {product.price}
                      </span>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#b7ffcf] border-0 rounded-[10px]">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[26px] tracking-[0.40px] leading-none">
                  Stationary
                </h2>
                <ChevronRightIcon className="w-5 h-5 text-black mt-1" />
              </div>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4">
                {stationaryProducts.map((product) => (
                  <Card
                  key={product.id}
                  className="bg-white border-0 overflow-hidden cursor-pointer hover:shadow-md transition-shadow min-w-[180px] flex-shrink-0 lg:min-w-0"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt="Product"
                      className="w-full h-[157px] object-cover rounded-t-lg"
                    />
                    <div className="p-2 text-center">
                      <span className="[font-family:'Nunito',Helvetica] font-extrabold text-[#fc3850] text-[18px] tracking-[0] leading-4">
                        {product.price}
                      </span>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
