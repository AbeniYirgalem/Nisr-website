import { Button } from "../button";

interface TrendingAdsSectionProps {
  onDownloadClick?: () => void;
  onWaitlistClick?: () => void;
}

export const TrendingAdsSection = ({ onDownloadClick, onWaitlistClick }: TrendingAdsSectionProps): JSX.Element => {
  return (
    <section className="w-full bg-[#ffd9eb] py-2 shadow-sm">
      
        <div className="container mx-auto px-4 flex flex-row items-center justify-between gap-4 md:gap-8">
            
            <div className="flex flex-col gap-1 flex-1 min-w-0">
                <h2 className="font-bold text-black text-lg sm:text-xl tracking-normal leading-tight">
                    Get Nisr Market App
                </h2>
                <p className="font-semibold text-black text-xs sm:text-sm tracking-normal leading-snug">
                    More features, instant Notification and better experience
                </p>
            </div>

            
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-end md:items-center shrink-0">
                
                <button onClick={onWaitlistClick} className="cursor-pointer transition-colors duration-200 h-8 sm:h-10 bg-[#ffc2d4] rounded-[40px] border-[2.5px] border-solid border-[#fe2188] font-bold text-[#fe2188] text-sm sm:text-base tracking-normal leading-normal px-3 sm:px-4 hover:bg-[#ffb0c9] whitespace-nowrap w-full md:w-auto min-w-[120px] sm:min-w-[160px] flex items-center justify-center">
                    Join waitlist
                </button>

                <button onClick={onDownloadClick} className="cursor-pointer transition-colors duration-200 h-8 sm:h-10 bg-[#fe2188] rounded-[40px] border-[2.5px] border-[#fe2188] font-bold text-white text-sm sm:text-base tracking-normal leading-normal px-4 hover:bg-[#d61b72] whitespace-nowrap w-full md:w-auto min-w-[120px] sm:min-w-[160px] flex items-center justify-center shadow-sm">
                    Download App
                </button>
            </div>

        </div>
    </section>
  );
};
