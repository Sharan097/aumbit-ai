import type { Metadata } from 'next';
import ImageGeneration from '@/components/product/ImageGeneration';
import VideoGeneration from '@/components/product/VideoGeneration';
import ContentAnalysis from '@/components/product/ContentAnalysis';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import {
  Sparkles,
  Zap,
  Brain,
  Target,
  TrendingUp,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Clock,
  Globe,
  Award,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';


export const metadata: Metadata = {
  title: 'Product - Advertise AI',
  description:
    'The core engine of Aumbit AI that automates the entire ad creation lifecycle. Powerful generative models tailored for marketing.',
};


const benefits = [
  {
    icon: TrendingUp,
    title: '10x Faster Production',
    description:
      'Reduce ad creation time from weeks to hours with automated workflows.',
    stat: '95%',
    statLabel: 'Time Saved',
  },
  {
    icon: Users,
    title: 'Higher Engagement',
    description:
      'AI-optimized content drives 3x better click-through rates on average.',
    stat: '3x',
    statLabel: 'CTR Increase',
  },
  {
    icon: BarChart3,
    title: 'Better ROI',
    description:
      'Lower production costs and higher performance equals exceptional returns.',
    stat: '250%',
    statLabel: 'ROI Boost',
  },
];


const useCases = [
  {
    icon: Rocket,
    title: 'E-commerce Brands',
    description:
      'Generate product ads, social content, and seasonal campaigns at scale.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Marketing Agencies',
    description:
      'Serve more clients with automated creative production and A/B testing.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Startups',
    description:
      'Launch professional campaigns quickly without a full creative team.',
    color: 'from-orange-500 to-red-500',
  },
];


export default function ProductPage() {
  return (
    <div className="animate-fade-in pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 mb-4 sm:mb-6">
            <Sparkles
              size={16}
              className="text-indigo-600 dark:text-indigo-400 sm:w-[18px] sm:h-[18px]"
            />
            <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              Advertise AI Platform
            </span>
          </div>


          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-2">
            The Future of{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ad Creation
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 px-2">
            The core engine of Aumbit AI that automates the entire ad creation
            lifecycle. Powerful generative models tailored for marketing.
          </p>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button variant="primary" href="#image-generation" className="w-full sm:w-auto">
              Explore Features <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Button>
            <Button variant="secondary" href="/contact" className="w-full sm:w-auto">
              Get Started
            </Button>
          </div>
        </div>


        {/* Benefits Section */}
        <div className="mb-20 sm:mb-24 md:mb-32 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Transform Your Workflow
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Measurable results that impact your bottom line
            </p>
          </div>


          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 text-white group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
                </div>


                <div className="mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {benefit.statLabel}
                  </div>
                </div>


                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Product Sections with IDs for scrolling */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32">
          {/* Image Generation Section */}
          <div id="image-generation" className="scroll-mt-16 sm:scroll-mt-20">
            <ImageGeneration />
          </div>


          {/* Video Generation Section */}
          <div id="video-generation" className="scroll-mt-16 sm:scroll-mt-20">
            <VideoGeneration />
          </div>


          {/* Text Generation Section */}
          <div id="text-generation" className="scroll-mt-16 sm:scroll-mt-20">
            <ContentAnalysis />
          </div>
        </div>


        {/* Use Cases Section */}
        <div className="mt-20 sm:mt-24 md:mt-32 mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Built for Every Business
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Whether you're a startup or an enterprise, Advertise AI scales
              with you
            </p>
          </div>


          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="relative group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>


                <div
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${useCase.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <useCase.icon size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
                </div>


                <h3 className="relative text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  {useCase.title}
                </h3>
                <p className="relative text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
