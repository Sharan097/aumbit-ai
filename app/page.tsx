import HeroSection from '@/components/home/HeroSection';
import WhatIsSection from '@/components/home/WhatIsSection';
import BenefitsSection from '@/components/home/BenefitsSection';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <WhatIsSection />
      <BenefitsSection />
    </div>
  );
}
