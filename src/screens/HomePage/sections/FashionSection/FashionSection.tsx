import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const navigationItems = [
  {
    icon: "notification",
    label: "Notification",
    badge: "99",
    hasNotification: true,
  },
  {
    icon: "cart",
    label: "Cart",
    badge: null,
    hasNotification: false,
  },
  {
    icon: "chat",
    label: "Chat",
    badge: null,
    hasNotification: false,
  },
  {
    icon: "profile",
    label: "Abebe",
    badge: null,
    hasNotification: false,
  },
];

export const FashionSection = (): JSX.Element => {
  return (
    <header className="w-full bg-white py-5 px-8 relative">
      <div className="flex items-center justify-between gap-8">
        <div className="[font-family:'Montserrat',Helvetica] font-bold text-[#fe2188] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Nisr Market
        </div>

        <div className="flex-1 max-w-[532px] relative">
          <div className="relative flex items-center">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
              <SearchIcon className="w-6 h-6 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search"
              className="w-full h-[45px] pl-11 pr-[100px] rounded-[50px] border border-black bg-white [font-family:'Nunito',Helvetica] font-normal text-[#bcb8b8] text-2xl"
            />
            <Button className="absolute right-0 top-0 h-[45px] w-[89px] bg-[#fa6bad9e] hover:bg-[#fa6bad] rounded-[50px] [font-family:'Nunito',Helvetica] font-semibold text-black text-base">
              Search
            </Button>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <button className="flex flex-col items-center gap-1 relative">
              <img
                className="w-[34px] h-[33px]"
                alt="Notification"
                src="/iconamoon-notification.svg"
              />
            <span className="[font-family:'Nunito',Helvetica] font-normal text-black text-xs tracking-[0.40px] leading-4 whitespace-nowrap">
              Notification
            </span>
          </button>

          <button className="flex flex-col items-center gap-1">
            <img
              className="w-[34px] h-[30px]"
              alt="Shopping cart"
              src="/shopping-cart-2.svg"
            />
            <span className="[font-family:'Nunito',Helvetica] font-normal text-lightgray-11 text-xs text-center tracking-[0.40px] leading-4">
              Cart
            </span>
          </button>

          <button className="flex flex-col items-center gap-[5px]">
            <img
              className="w-[29px] h-[29px]"
              alt="Chat"
              src="/ph-chat-text.svg"
            />
            <span className="[font-family:'Nunito',Helvetica] font-normal text-black text-xs text-center tracking-[0.40px] leading-4 whitespace-nowrap">
              Chat
            </span>
          </button>

          <button className="flex flex-col items-center gap-1">
            <img
              className="w-[33px] h-[31px]"
              alt="Profile"
              src="/iconamoon-profile-bold.svg"
            />
            <span className="[font-family:'Nunito',Helvetica] font-normal text-black text-xs text-center tracking-[0.40px] leading-4 whitespace-nowrap">
              Abebe
            </span>
          </button>
        </nav>

        <Button className="h-[55px] w-[134px] bg-[#fe2188] hover:bg-[#fe2188]/90 rounded-[10px] [font-family:'Montserrat',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
          SELL
        </Button>
      </div>
    </header>
  );
};
