import { ImageIcon, CheckCircle, Sparkles } from 'lucide-react';
import { HoverExpand } from '@/components/ui/hover-expand';
import { ProductCarousel } from '@/components/product/ProductCarousel';


const features = [
  {
    title: 'Single Image Ads',
    description:
      'High-resolution visuals tailored to your brand identity and campaign goals.',
  },
  {
    title: 'Multi-image Carousels',
    description:
      'Cohesive storytelling across multiple swipeable cards with consistent branding.',
  },
  {
    title: 'Product-focused Visuals',
    description:
      'Place your product in any context instantly with AI-powered background generation.',
  },
];


const imageExamples = [
  {
    src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    alt: 'Product Photography Example',
    title: 'Product Showcase',
    description: 'Professional product photography with studio-quality lighting',
  },
  {
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    alt: 'Lifestyle Product Example',
    title: 'Lifestyle Context',
    description: 'Products placed in real-world lifestyle scenarios',
  },
  {
    src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
    alt: 'Fashion Product Example',
    title: 'Fashion & Apparel',
    description: 'Dynamic fashion photography with model integration',
  },
  {
    src: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&q=80&w=800',
    alt: 'Apple MacBook and iPhone tech advertisement',
    title: 'Tech Products',
    description: 'Sleek technology products with modern aesthetics',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    alt: 'Coffee beverage advertisement',
    title: 'Food & Beverage',
    description: 'Appetizing food photography with professional styling',
  },
];


export default function ImageGeneration() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-indigo-600 dark:text-indigo-400 shadow-md">
            <ImageIcon size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Image Generation
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            Create stunning, high-quality images for your advertising campaigns
            with AI-powered generation. From single product shots to complex
            multi-image carousels.
          </p>
          <ul className="space-y-4 sm:space-y-5">
            {features.map((feature, i) => (
              <li key={i} className="flex gap-3 sm:gap-4">
                <CheckCircle
                  className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 sm:mt-1 w-5 h-5 sm:w-6 sm:h-6"
                  size={20}
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


        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/50 dark:via-purple-900/50 dark:to-pink-900/50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-xl border-2 sm:border-4 border-white dark:border-slate-800">
              <ProductCarousel />
            </div>
          </div>
        </div>
      </div>


      {/* Interactive Hover Expand Gallery */}
      <div className="py-8 sm:py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-2xl sm:rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 mb-3 sm:mb-4">
              <Sparkles
                size={16}
                className="text-indigo-600 dark:text-indigo-400 sm:w-[18px] sm:h-[18px]"
              />
              <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                Interactive Gallery
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 px-2">
              See It In Action
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg px-2">
              Hover over each image to explore different ad generation styles
            </p>
          </div>


          <HoverExpand images={imageExamples} />


          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 px-2">
              All images are generated and optimized for various advertising
              platforms
            </p>
          </div>
        </div>
      </div>


      {/* Additional Features */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {[
          {
            title: 'Instant Generation',
            description: 'Generate high-quality images in seconds, not hours',
            icon: '⚡',
          },
          {
            title: 'Brand Consistency',
            description:
              'Maintain your brand guidelines across all generated images',
            icon: '🎨',
          },
          {
            title: 'Platform Optimization',
            description: 'Auto-resize and optimize for every ad platform',
            icon: '📱',
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
