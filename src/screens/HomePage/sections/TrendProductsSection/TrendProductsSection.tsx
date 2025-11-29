import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
type ProductsList = {
  category_id: string;
  color: string,
  list: {
    id: string;
    img: string;
    name: string;
    price: number;
  }[];
  title: string;
};


export const TrendProductsSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [techProducts, setTechProducts] = useState<ProductsList | null>(null);
  const [fashionProducts, setFashionProducts] = useState<ProductsList | null>(null);
  const [stationaryProducts, setStationaryProducts] = useState<ProductsList | null>(null);
  useEffect(() => {
    // fetch the data from the API
    const getProducts = async () => {
      try {
        const docRef = doc(db, "trends", "home_trend_list");
        const snapShot = await getDoc(docRef);

        if (snapShot.exists()) {
          const data = snapShot.data();
          setTechProducts(data?.list[0]);
          setFashionProducts(data?.list[1]);
          setStationaryProducts(data?.list[2]);
        }
      } catch (error) {

      }
    };
    getProducts();
  }, []);

  return (
    <section className="w-full px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex flex-col gap-0 sm:gap-3 md:gap-5 lg:flex-row max-w-[1320px] mx-auto">
        <Card className="bg-[#ffc2d3] border-0 rounded-none sm:rounded-[10px] w-full lg:w-1/2">
          <CardContent className="px-0 sm:px-5 py-2 sm:py-5 ">
            <div className="flex items-center gap-0 sm:gap-2 mb-2">
              <h2 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[22px] sm:text-[26px] md:text-[30px] tracking-[0.40px] leading-none px-2">
                Tech products
              </h2>
              <ChevronRightIcon className="w-5 h-5 text-black mt-0 sm:mt-1" />
            </div>
            <div className="flex gap-x-4 sm:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-0 pt-0 sm:pt-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:gap-y-10">
              {techProducts?.list.slice(0, 6).map((product) => (
                <Card
                  key={product.id}
                  className="bg-white border-0 overflow-hidden cursor-pointer hover:shadow-md transition-shadow w-40 sm:min-w-[180px] flex-shrink-0 lg:min-w-0"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardContent className="p-0">
                    <img
                      src={product.img}
                      alt="Product"
                      className="w-full h-32 sm:h-[157px] object-cover rounded-t-lg"
                    />
                    <div className="p-2">
                      <span className="[font-family:'Nunito',Helvetica] font-extrabold text-[#fc3850] text-[16px] sm:text-[18px] tracking-[0] leading-4">
                        {product.price} ETB
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-0 sm:gap-6 w-full lg:w-1/2">
          <Card className="bg-[#abcfff] border-0 rounded-none sm:rounded-[10px]">
            <CardContent className="px-0 sm:px-5 py-2 sm:py-5">
              <div className="flex items-center gap-0 sm:gap-2 mb-4">
                <h2 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[22px] sm:text-[26px] md:text-[30px] tracking-[0.40px] leading-none px-2">
                  Fashion
                </h2>
                <ChevronRightIcon className="w-5 h-5 text-black mt-0 sm:mt-1" />
              </div>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4 px-4 sm:px-0">
                {fashionProducts?.list.slice(0, 3).map((product) => (
                  <Card
                    key={product.id}
                    className="bg-white border-0 overflow-hidden cursor-pointer hover:shadow-md transition-shadow w-40 sm:min-w-[180px] flex-shrink-0 lg:min-w-0"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <CardContent className="p-0">
                      <img
                        src={product.img}
                        alt="Product"
                        className="w-full h-32 sm:h-[157px] object-cover rounded-t-lg"
                      />
                      <div className="p-2">
                        <span className="[font-family:'Nunito',Helvetica] font-extrabold text-[#fc3850] text-[16px] sm:text-[18px] tracking-[0] leading-4">
                          {product.price} ETB
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#b7ffcf] border-0 rounded-none sm:rounded-[10px]">
            <CardContent className="px-0 sm:px-5 py-2 sm:py-5">
              <div className="flex items-center gap-0 sm:gap-2 mb-4">
                <h2 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[22px] sm:text-[26px] md:text-[30px] tracking-[0.40px] leading-none px-2">
                  Stationery
                </h2>
                <ChevronRightIcon className="w-5 h-5 text-black mt-0 sm:mt-1" />
              </div>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4 px-4 sm:px-0">
                {stationaryProducts?.list.slice(0, 3).map((product) => (
                  <Card
                    key={product.id}
                    className="bg-white border-0 overflow-hidden cursor-pointer hover:shadow-md transition-shadow w-40 sm:min-w-[180px] flex-shrink-0 lg:min-w-0"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <CardContent className="p-0">
                      <img
                        src={product.img}
                        alt="Product"
                        className="w-full h-32 sm:h-[157px] object-cover rounded-t-lg"
                      />
                      <div className="p-2">
                        <span className="[font-family:'Nunito',Helvetica] font-extrabold text-[#fc3850] text-[16px] sm:text-[18px] tracking-[0] leading-4">
                          {product.price} ETB
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
