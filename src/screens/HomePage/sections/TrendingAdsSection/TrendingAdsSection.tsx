import React from "react";
import { Button } from "../../../../components/ui/button";

export const TrendingAdsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#ffd9eb] py-3"> {/* Reduced section height */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Get Nisr Market App
          </h2>
          <p className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
            More features, instant Notification and better experience
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            variant="outline"
            className="h-10 bg-[#ffc2d4] rounded-[50px] border-[4px] border-solid border-[#fe2188] [font-family:'Montserrat',Helvetica] font-bold text-[#fe2188] text-lg tracking-[0] leading-[normal] px-4 hover:bg-[#ffc2d4] hover:text-[#fe2188]"
          >
            Join the website waitlist
          </Button>

          <Button className="h-10 bg-[#fe2188] rounded-[50px] [font-family:'Montserrat',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal] px-5 hover:bg-[#fe2188]/90">
            Downaload the App
          </Button>
        </div>
      </div>
    </section>
  );
};
