import React from "react";
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
    className: "col-start-1 row-start-1",
  },
  {
    id: 2,
    image: img23_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
    className: "col-start-2 row-start-1",
  },
  {
    id: 3,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
    className: "col-start-3 row-start-1",
  },
  {
    id: 4,
    image: img24_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
    className: "col-start-4 row-start-1",
  },
  {
    id: 5,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
    className: "col-start-5 row-start-1",
  },
  {
    id: 6,
    image: img21_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
    className: "col-start-1 row-start-2",
  },
  {
    id: 7,
    image: img24_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
    className: "col-start-2 row-start-2",
  },
  {
    id: 8,
    image: img19_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
    className: "col-start-3 row-start-2",
  },
  {
    id: 9,
    image: img23_1,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
    className: "col-start-4 row-start-2",
  },
  {
    id: 10,
    image: img19_2,
    description: "Brand new Lamborghini 2025 made in USA high speed and ...",
    price: "ETB 1,000",
    location: "Addis Ababa • Brand New",
    className: "col-start-5 row-start-2",
  },
];

export const ElectronicsSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#efefef] py-9 px-6">
      <div className="max-w-[1262px] mx-auto">
        <h2 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[32px] tracking-[0.40px] leading-4 mb-12">
          Trending ads
        </h2>

        <div className="grid grid-cols-5 gap-6 auto-rows-auto">
          {productData.map((product) => (
            <Card
              key={product.id}
              className={`bg-[#fffdfd] rounded-[15px] border-0 shadow-none overflow-hidden cursor-pointer hover:shadow-md transition-shadow ${product.className}`}
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
