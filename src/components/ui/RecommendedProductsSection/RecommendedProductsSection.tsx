import { useEffect, useRef, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../card";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
type ProductData = {
  desc: string;
  id: string;
  img: string;
  name: string;
  price: number;
};

type pageData = {
  list: ProductData[];
  nextDocumentId: string | null;
};
export interface RecommendedProductsSectionProps {
  title?: ReactNode;
}

export const RecommendedProductsSection = ({
  title,
}: RecommendedProductsSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const heading = title ?? "Trending";
  const [products, setProducts] = useState<pageData | null>(null);
  const [page, setPage] = useState<number>(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && products?.nextDocumentId) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [products?.nextDocumentId]);

  const fetchPageProducts = async () => {
    try {
      const productsRef = doc(db, "recommended_product_list", `page_${page}`);
      const productsSnapshot = await getDoc(productsRef);
      if (productsSnapshot.exists()) {
        setProducts(prev=>prev?{...prev,...productsSnapshot.data()}:productsSnapshot.data() as pageData);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  useEffect(() => {
    fetchPageProducts();
  }, [page]);

  return (
    <section className="w-full bg-[#efefef] py-4 px-2 sm:py-6 sm:px-4 md:py-9 md:px-6">
      <div className="max-w-[1262px] mx-auto">
        <h2 className="[font-family:'Nunito',Helvetica] font-extrabold text-black text-[24px] sm:text-[28px] md:text-[32px] tracking-[0.40px] leading-4 mb-4 sm:mb-8 md:mb-10 px-1 sm:px-0">
          {heading}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-5 lg:gap-5 mb-14 lg:mb-0 auto-rows-auto justify-items-center">
          {products?.list.map((product) => (
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
                    src={product.img}
                  />
                </div>
                <div className="p-3">
                  <p className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-xs tracking-[0] leading-4 mb-2 line-clamp-2">
                    {product.desc}
                  </p>
                  <p className="[font-family:'Nunito',Helvetica] font-extrabold text-[#120b0b] text-base tracking-[0] leading-4 mb-2">
                    {product.price}
                  </p>
                  <p className="[font-family:'Nunito',Helvetica] font-medium text-[#313131] text-[11px] tracking-[0] leading-4">
                    {product.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* make a next prev buttons */}
        <div className="flex items-center gap-4 pt-6">
          {/* Previous */}
          <button
            className="
      inline-flex items-center gap-2
      bg-[#fa6bad]/80 hover:bg-[#fa6bad]
      text-white font-medium
      py-2.5 px-5 rounded-xl
      transition-all duration-200
      disabled:bg-[#fa6bad]/40 disabled:cursor-not-allowed
      hover:shadow-md active:scale-95
    "
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Next */}
          <button
            className="
      inline-flex items-center gap-2
      bg-[#fa6bad]/80 hover:bg-[#fa6bad]
      text-white font-medium
      py-2.5 px-5 rounded-xl
      transition-all duration-200
      disabled:bg-[#fa6bad]/40 disabled:cursor-not-allowed
      hover:shadow-md active:scale-95
    "
            onClick={() => setPage(page + 1)}
            disabled={!products?.nextDocumentId}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* <div className="w-full h-20" ref={loaderRef}>
          <Loader className="size-5" />
      </div> */}
    </section>
  );
};
