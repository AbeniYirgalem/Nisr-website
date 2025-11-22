import { Button } from "../button";

interface TrendingAdsSectionProps {
  onDownloadClick?: () => void;
  onWaitlistClick?: () => void;
}

export const TrendingAdsSection = ({ onDownloadClick, onWaitlistClick }: TrendingAdsSectionProps): JSX.Element => {
  return (
    <section className="w-full bg-[#ffd9eb] py-2"> {/* Slightly increased section height */}
      <div className="container mx-auto px-20 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            Get Nisr Market App
          </h2>
          <p className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-sm tracking-[0] leading-[normal]">
            More features, instant Notification and better experience
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button
            variant="outline"
            className="h-10 bg-[#ffc2d4] rounded-[40px] border-[2.5px] border-solid border-[#fe2188] [font-family:'Montserrat',Helvetica] font-bold text-[#fe2188] text-sm tracking-[0] leading-[normal] px-3 hover:bg-[#ffc2d4] hover:text-[#fe2188]"
            onClick={onWaitlistClick}
          >
            Join waitlist
          </Button>

          <Button
            className="h-10 bg-[#fe2188] rounded-[40px] [font-family:'Montserrat',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal] px-4 hover:bg-[#fe2188]/90"
            onClick={onDownloadClick}
          >
            Download App
          </Button>
        </div>
      </div>
    </section>
  );
};
