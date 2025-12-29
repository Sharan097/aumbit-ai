import type { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import LogoLoop from '@/components/ui/LogoLoop';
import { 
  Globe, 
  Languages,
  MapPin,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaXTwitter,
  FaTiktok
} from 'react-icons/fa6';


export const metadata: Metadata = {
  title: 'Global Reach & Platforms',
  description: 'Speak to your customers in their language. Optimized for every screen.',
};


const languageRegions = [
  {
    region: 'Europe',
    languages: ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese'],
    icon: '🇪🇺',
  },
  {
    region: 'Asia-Pacific',
    languages: ['Mandarin', 'Japanese', 'Korean', 'Hindi', 'Thai', 'Vietnamese'],
    icon: '🌏',
  },
  {
    region: 'Middle East & Africa',
    languages: ['Arabic', 'Hebrew', 'Swahili', 'Turkish', 'Persian', 'Urdu'],
    icon: '🌍',
  },
  {
    region: 'Americas',
    languages: ['English (US)', 'Spanish (LATAM)', 'Portuguese (BR)', 'French (CA)'],
    icon: '🌎',
  },
];


const features = [
  {
    title: 'Cultural Adaptation',
    description: 'Beyond translation—adapt visuals, tone, and messaging for local context',
    icon: MapPin,
  },
  {
    title: 'Native Language Detection',
    description: 'Automatically detect and serve content in the user\'s preferred language',
    icon: Languages,
  },
  {
    title: 'Right-to-Left Support',
    description: 'Full RTL layout support for Arabic, Hebrew, and Persian languages',
    icon: Globe,
  },
];


// Social Media Logos for Social Giants Section
const socialGiantsLogos = [
  {
    node: <FaFacebook className="text-[#1877F2]" />,
    title: 'Facebook',
    href: 'https://facebook.com',
  },
  {
    node: (
      <div className="relative">
        <FaInstagram className="text-[#E1306C]" />
        <div className="absolute inset-0">
          <FaInstagram 
            className="text-transparent" 
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          />
        </div>
      </div>
    ),
    title: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    node: <FaTiktok className="text-black dark:text-white" />,
    title: 'TikTok',
    href: 'https://tiktok.com',
  },
  {
    node: <FaXTwitter className="text-black dark:text-white" />,
    title: 'X (Twitter)',
    href: 'https://x.com',
  },
  {
    node: <FaFacebook className="text-[#1877F2]" />,
    title: 'Facebook',
    href: 'https://facebook.com',
  },
  {
    node: (
      <div className="relative">
        <FaInstagram className="text-[#E1306C]" />
        <div className="absolute inset-0">
          <FaInstagram 
            className="text-transparent" 
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          />
        </div>
      </div>
    ),
    title: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    node: <FaTiktok className="text-black dark:text-white" />,
    title: 'TikTok',
    href: 'https://tiktok.com',
  },
  {
    node: <FaXTwitter className="text-black dark:text-white" />,
    title: 'X (Twitter)',
    href: 'https://x.com',
  },
];


// Professional & Search Logos
const professionalLogos = [
  {
    node: <FaLinkedin className="text-[#0A66C2]" />,
    title: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    node: (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-auto">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    title: 'Google Ads',
    href: 'https://ads.google.com',
  },
  {
    node: <FaYoutube className="text-[#FF0000]" />,
    title: 'YouTube',
    href: 'https://youtube.com',
  },
  {
    node: <FaLinkedin className="text-[#0A66C2]" />,
    title: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    node: (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-auto">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    title: 'Google Ads',
    href: 'https://ads.google.com',
  },
  {
    node: <FaYoutube className="text-[#FF0000]" />,
    title: 'YouTube',
    href: 'https://youtube.com',
  },
];


export default function ReachPage() {
  return (
    <div className="animate-fade-in pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        {/* ===== Vertical Stack Wrapper ===== */}
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24">
          {/* ================= GLOBAL REACH ================= */}
          <section>
            <SectionHeading
              title="Global Reach"
              subtitle="Speak to your customers in their language, everywhere."
              centered={true}
            />


            {/* Hero Card with Gradient */}
            <div className="relative group mb-12 sm:mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden">
                {/* Header Section */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 sm:p-8 md:p-10 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Globe size={28} strokeWidth={2} className="sm:w-8 sm:h-8" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 mb-3">
                        <Sparkles
                          size={16}
                          className="text-indigo-600 dark:text-indigo-400 sm:w-[18px] sm:h-[18px]"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                          AI-Powered Localization
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        50+ Languages Supported
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300">
                        Don't just translate text—adapt your visuals and copy culturally. 
                        Reach the right audience anywhere in the world with intelligent localization.
                      </p>
                    </div>
                  </div>
                </div>


                {/* Language Regions Grid */}
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    {languageRegions.map((region, i) => (
                      <div
                        key={i}
                        className="group/card bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl sm:text-3xl">{region.icon}</span>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                            {region.region}
                          </h4>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {region.languages.map((lang, j) => (
                            <span
                              key={j}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium group-hover/card:border-indigo-300 dark:group-hover/card:border-indigo-600 transition-colors"
                            >
                              <CheckCircle size={12} className="text-green-500 sm:w-3.5 sm:h-3.5" />
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>


                  {/* Additional Languages Badge */}
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
                    <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg sm:text-xl">25+ additional languages</span> including Dutch, Polish, Swedish, Indonesian, and more
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-700 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>


          {/* ================= PLATFORMS & FORMATS ================= */}
          <section>
            <SectionHeading
              title="Platforms & Formats"
              subtitle="Optimized for every screen and every social network."
              centered={true}
            />


            <div className="space-y-8 sm:space-y-10">
              {/* Social Giants with Animated Logo Loop */}
              <div className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-700 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          Social Giants
                        </h4>
                        <span className="px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">
                          4 Platforms
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                        Facebook, Instagram, TikTok, X (Twitter) — Reach billions with platform-optimized content
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Animated Logo Loop */}
                <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-8">
                  <LogoLoop
                    logos={socialGiantsLogos}
                    speed={40}
                    direction="left"
                    logoHeight={56}
                    gap={48}
                    hoverSpeed={10}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="transparent"
                    ariaLabel="Social media platforms"
                  />
                </div>
              </div>


              {/* Professional & Search with Animated Logo Loop */}
              <div className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-700 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          Professional & Search
                        </h4>
                        <span className="px-2.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full">
                          3 Platforms
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                        LinkedIn, Google Ads, YouTube — Drive B2B growth and search visibility
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Animated Logo Loop */}
                <div className="bg-gradient-to-r from-purple-50 via-white to-purple-50 dark:from-purple-950/20 dark:via-slate-800 dark:to-purple-950/20 py-8">
                  <LogoLoop
                    logos={professionalLogos}
                    speed={35}
                    direction="right"
                    logoHeight={56}
                    gap={48}
                    hoverSpeed={8}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="transparent"
                    ariaLabel="Professional platforms"
                  />
                </div>
              </div>


              {/* Supported Ratios */}
              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                  Supported Aspect Ratios
                </h4>


                <div className="grid grid-cols-3 sm:flex sm:flex-row gap-6 sm:gap-10">
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-indigo-300 dark:border-indigo-600 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">1:1</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Square</p>
                    </div>
                  </div>


                  <div className="flex flex-col items-center gap-3 group">
                    <div className="relative">
                      <div className="w-12 h-20 sm:w-14 sm:h-24 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">9:16</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Stories</p>
                    </div>
                  </div>


                  <div className="flex flex-col items-center gap-3 group">
                    <div className="relative">
                      <div className="w-20 h-12 sm:w-24 sm:h-14 border-2 border-pink-300 dark:border-pink-600 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 group-hover:scale-110 transition-transform duration-300 mt-4 sm:mt-5"></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">16:9</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Landscape</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
