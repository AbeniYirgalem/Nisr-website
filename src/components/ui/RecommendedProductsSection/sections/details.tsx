import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../utils";
import { Button } from "../../button";
import { Card, CardContent } from "../../card";

export const Details = ({ productDetail, setShowDownloadPopup }: any) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 sm:gap-6">
      <Card className="bg-white border-0 shadow-sm rounded-none sm:rounded-[15px]">
        <CardContent className="p-2 sm:p-6">
          <div className="text-right text-sm text-[#5A5A5A] pr-2">
            {formatDate(productDetail.postedDate)}
          </div>
          <h1 className="font-extrabold text-[#fc3850] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none">
            ETB {productDetail.price.toLocaleString()}
          </h1>
          <div className="text-sm text-[#5A5A5A] mb-6">
            {productDetail.negotiable ? "Negotiable" : "Fixed price"}
          </div>
          <p className="font-bold text-black text-xl leading-7 mb-4">
            {productDetail.name}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-2">
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="8"
                  cy="7"
                  r="2"
                  stroke="#313131"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium text-[#313131]">
                {productDetail.location}
              </span>
            </div>

            {productDetail.freeDelivery && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 17L16 20.5L10 17" />
                  <path d="M16 20.5V9" />
                  <path d="M22 6L22 17" />
                  <path d="M10 17V6" />
                  <path d="M22 6L16 2.5L10 6L16 9.5L22 6Z" />
                  <path d="M13 4.5L19 8" />
                  <path d="M2 10H8" />
                  <path d="M2 14H8" />
                </svg>
                <span className="text-sm font-medium text-[#313131]">
                  Free Delivery
                </span>
              </div>
            )}
          </div>

          <div className="text-sm text-[#313131] mb-8">
            {productDetail.views} views
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              className="h-14 bg-[#fe2188] hover:bg-[#fe2188]/90 rounded-[10px] text-white text-xl font-bold"
              onClick={() => setShowDownloadPopup(true)}
            >
              Chat
            </Button>
            <Button
              variant="outline"
              className="h-14 bg-[#ffc2d4] border-2 border-[#fe2188] hover:bg-[#ffe4f0] rounded-[10px] text-[#fe2188] text-xl font-bold"
              onClick={() => setShowDownloadPopup(true)}
            >
              Call
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Seller Card */}
      <Card className="bg-white border-0 shadow-sm rounded-none sm:rounded-[15px]">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="w-[60px] h-[60px] bg-[#fe2188] rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {productDetail.shopName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{productDetail.shopName}</h3>
              <p className="text-sm text-[#313131]">Active recently</p>
            </div>
            <Button
              onClick={() => navigate(`/seller/${productDetail.sellerId}`)}
              variant="outline"
              className="h-10 px-6 border-2 border-[#fe2188] rounded-[50px] text-[#fe2188] font-bold text-sm"
            >
              Shop
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6">
            <Button
              variant="outline"
              className="h-12 border-2 border-[#ffb800] text-[#ffb800] rounded-[10px]"
              onClick={() => setShowDownloadPopup(true)}
            >
              Feedback
            </Button>
            <Button
              variant="outline"
              className="h-12 border-2 border-[#fc3850] text-[#fc3850] rounded-[10px]"
              onClick={() => setShowDownloadPopup(true)}
            >
              Report this ad
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
