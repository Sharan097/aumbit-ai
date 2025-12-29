import { Video, CheckCircle, Sparkles } from 'lucide-react';
import ThreeDMediaRing from '@/components/ui/three-d-media-ring';
import type { MediaItem } from '@/components/ui/three-d-media-ring';


const features = [
  {
    title: 'Short Videos (5–10s)',
    description: 'Perfect for Stories, TikToks, and Reels.',
  },
  {
    title: 'Promotional Videos (60s)',
    description: 'Full-length explainers and feature highlights.',
  },
  {
    title: 'Live-stream Ads',
    description: 'Dynamic content generation for live environments.',
  },
];


// Your local videos - NOW WITH 7 VIDEOS
const mediaItems: MediaItem[] = [
  { type: 'video', src: '/videos/ai-loop-1.mp4', title: 'Product Demo' },
  { type: 'video', src: '/videos/ai-loop-2.mp4', title: 'Brand Story' },
  { type: 'video', src: '/videos/ai-loop-3.mp4', title: 'Social Ad' },
  { type: 'video', src: '/videos/ai-loop-4.mp4', title: 'Promo Video' },
  { type: 'video', src: '/videos/ai-loop-5.mp4', title: 'Tutorial' },
  { type: 'video', src: '/videos/ai-loop-6.mp4', title: 'Feature Highlight' },
  { type: 'video', src: '/videos/ai-loop-7.mp4', title: 'Campaign Ad' },
];


export default function VideoGeneration() {
  const displayMedia = mediaItems;


  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header Section with Features List and Gradient Box */}
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
        {/* Left Content - Features List */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-indigo-600 dark:text-indigo-400 shadow-md">
            <Video size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
          </div>


          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Video Generation
          </h2>


          <ul className="space-y-4 sm:space-y-5">
            {features.map((feature, i) => (
              <li key={i} className="flex gap-3 sm:gap-4">
                <CheckCircle
                  className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 sm:mt-1 w-5 h-5 sm:w-6 sm:h-6"
                  strokeWidth={2.5}
                />
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        
        {/* Right Gradient Box with Video */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 dark:from-indigo-900 dark:via-blue-900 dark:to-cyan-900 rounded-2xl sm:rounded-3xl overflow-hidden aspect-video flex items-center justify-center shadow-xl border-2 sm:border-4 border-white dark:border-slate-800">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/Adsvideogeneration.mp4" type="video/mp4" />
                {/* Fallback icon if video fails to load */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video
                    size={60}
                    className="text-indigo-500 dark:text-indigo-400 animate-float sm:w-20 sm:h-20"
                    strokeWidth={1.5}
                  />
                </div>
              </video>
            </div>
          </div>
        </div>
      </div>


      {/* 3D Horizontal Video Carousel - All Cards Visible */}
      <div className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-2xl sm:rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 mb-3 sm:mb-4">
              <Sparkles
                size={16}
                className="text-indigo-600 dark:text-indigo-400 sm:w-[18px] sm:h-[18px]"
              />
              <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                Interactive 3D Carousel
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 px-2">
              Explore AI-Generated Videos
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg mb-2 px-2">
              Browse through {displayMedia.length} video examples in 3D
              perspective
            </p>

          </div>


          {/* 3D Carousel Container */}
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-3xl"></div>


            {/* 3D Horizontal Carousel */}
            <div className="relative w-full h-full flex items-center justify-center">
              <ThreeDMediaRing
                media={displayMedia}
                cardWidth={250}
                cardHeight={350}
                gap={40}
                perspective={1200}
                rotateY={10}
                draggable={true}
              />
            </div>
          </div>


          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 px-2">
              All videos are AI-generated and optimized for various advertising
              platforms
            </p>
          </div>
        </div>
      </div>


      {/* Additional Features Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {[
          {
            title: 'Auto-Editing',
            description: 'AI-powered cuts, transitions, and effects',
            icon: '✂️',
          },
          {
            title: 'Multi-Platform Export',
            description: 'Automatically format for every platform',
            icon: '📤',
          },
          {
            title: 'Voice & Music',
            description: 'AI-generated voiceovers and background music',
            icon: '🎵',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
            <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2">
              {item.title}
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
