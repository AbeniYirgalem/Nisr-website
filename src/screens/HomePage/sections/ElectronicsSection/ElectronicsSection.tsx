import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";
import img19_2 from "../../../../assets/images/image-19-2.png";
import img23_1 from "../../../../assets/images/image-23-1.png";
import img21_2 from "../../../../assets/images/image-21-2.png";
import img24_1 from "../../../../assets/images/image-24-1.png";

const productData = [
  {
    id: 1,
    image: img19_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
  {
    id: 2,
    image: img23_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
  {
    id: 3,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
  {
    id: 4,
    image: img24_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
  {
    id: 5,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
  {
    id: 6,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
  {
    id: 7,
    image: img24_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
  {
    id: 8,
    image: img19_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
  {
    id: 9,
    image: img23_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
  {
    id: 10,
    image: img19_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
  },
];

export const ElectronicsSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#efefef] py-4 px-2 sm:py-6 sm:px-4 md:py-9 md:px-6">
      <div className="max-w-[1262px] mx-auto">
        <h2 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[24px] sm:text-[28px] md:text-[32px] tracking-[0.40px] leading-4 mb-4 sm:mb-8 md:mb-10 px-1 sm:px-0">
          Trending ads
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-5 lg:gap-5 mb-14 sm:mb-0 auto-rows-auto justify-items-center">
          {productData.map((product) => (
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
      </div>
    </section>
  );
};
