import { useState } from "react";
import { CategoriesSection } from "./sections/CategoriesSection";
import { ElectronicsSection } from "./sections/ElectronicsSection";
import { FashionSection } from "../../components/ui/FashionSection";
import { TechProductsSection } from "./sections/TechProductsSection";
import { TrendingAdsSection } from "../../components/ui/TrendingAdsSection";
import AppDownloadPopup from "../../components/ui/AppDownloadPopup";
import WaitlistPopup from "../../components/ui/WaitlistPopup";

export const HomePage = (): JSX.Element => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <TrendingAdsSection
        onDownloadClick={() => setShowDownloadPopup(true)}
        onWaitlistClick={() => setShowWaitlistPopup(true)}
      />
      <FashionSection onShowDownloadPopup={() => setShowDownloadPopup(true)} />
      <CategoriesSection />
      <TechProductsSection />
      <ElectronicsSection />
      <AppDownloadPopup 
        isOpen={showDownloadPopup} 
        onClose={() => setShowDownloadPopup(false)} 
        onWaitlistClick={() => {
          setShowDownloadPopup(false);
          setShowWaitlistPopup(true);
        }}
      />
      <WaitlistPopup isOpen={showWaitlistPopup} onClose={() => setShowWaitlistPopup(false)} />
    </div>
  );
};
