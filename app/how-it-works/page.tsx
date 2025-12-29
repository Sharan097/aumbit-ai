import type { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import { Briefcase, Cpu, Layers, Zap, BarChart3 } from 'lucide-react';


export const metadata: Metadata = {
  title: 'How It Works',
  description: 'From idea to ad campaign in 5 simple steps with Aumbit AI.',
};


const steps = [
  {
    step: 1,
    title: 'Drop Your URL',
    desc: 'Holo analyzes your website, learns your tone, style, and audience.',
    icon: Briefcase,
    videoSrc:
      'https://framerusercontent.com/assets/xraB9gTdokcD9EEBke0DIbvXzXU.mp4',
  },
  {
    step: 2,
    title: 'Generate Instantly',
    desc: 'Facebook, TikTok, and Instagram ads in seconds.',
    icon: Cpu,
    videoSrc:
      'https://framerusercontent.com/assets/s9If74dnp3LTbVF2LYWmlmvaN8.mp4',
  },
  {
    step: 3,
    title: 'Customize Easily',
    desc: 'Edit copy, visuals, and hooks right in the platform.',
    icon: Layers,
    videoSrc:
      'https://framerusercontent.com/assets/0uCEojyWXbdNzE6zejj75lnC4.mp4',
  },
  {
    step: 4,
    title: 'AI Analysis & Optimization',
    desc: 'Aumbit AI analyzes performance and suggests improvements in real-time.',
    icon: Zap,
    videoSrc:
      'https://framerusercontent.com/assets/xraB9gTdokcD9EEBke0DIbvXzXU.mp4',
  },
  {
    step: 5,
    title: 'Optimize & Scale',
    desc: 'Reuse, refine, and scale ads across platforms effortlessly.',
    icon: BarChart3,
    videoSrc:
      'https://framerusercontent.com/assets/s9If74dnp3LTbVF2LYWmlmvaN8.mp4',
  },
];


export default function HowItWorksPage() {
  return (
    <div className="animate-fade-in pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="How It Works"
          subtitle="From idea to ad campaign in 5 simple steps."
        />


        <div className="relative max-w-7xl mx-auto">
          {/* Vertical Line - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 -translate-x-1/2 rounded-full opacity-30"></div>

          {/* Mobile Vertical Line - Visible only on mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>


          {steps.map((item, index) => {
            const isEven = index % 2 === 0;


            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24 last:mb-0"
              >
                {/* Mobile Layout - Stacked vertically with step circle on left */}
                <div className="md:hidden w-full flex gap-4">
                  {/* Mobile Step Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg border-4 border-white dark:border-slate-900 shadow-xl z-10">
                    {item.step}
                  </div>

                  {/* Mobile Content Stack */}
                  <div className="flex-1 flex flex-col gap-4">
                    {/* Card */}
                    <div className="group bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="p-2 sm:p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg sm:rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                          <item.icon size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Video */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 dark:border-slate-700">
                        <video
                          src={item.videoSrc}
                          loop
                          preload="auto"
                          muted
                          playsInline
                          autoPlay
                          className="w-full h-full object-cover"
                          style={{
                            aspectRatio: '4/3',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop/Tablet Layout - Original alternating design */}
                {/* Left Side Content */}
                <div className="hidden md:block w-full md:w-5/12">
                  {isEven ? (
                    // Video on Left (for even steps: 1, 3, 5)
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 dark:border-slate-700">
                        <video
                          src={item.videoSrc}
                          loop
                          preload="auto"
                          muted
                          playsInline
                          autoPlay
                          className="w-full h-full object-cover"
                          style={{
                            aspectRatio: '4/3',
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    // Card on Left (for odd steps: 2, 4)
                    <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                          <item.icon size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>


                {/* Center Circle (Step Number) - Desktop/Tablet only */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white items-center justify-center font-bold text-xl z-20 border-4 border-white dark:border-slate-900 shadow-xl shrink-0">
                  {item.step}
                </div>


                {/* Right Side Content - Desktop/Tablet only */}
                <div className="hidden md:block w-full md:w-5/12">
                  {isEven ? (
                    // Card on Right (for even steps: 1, 3, 5)
                    <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                          <item.icon size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ) : (
                    // Video on Right (for odd steps: 2, 4)
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 dark:border-slate-700">
                        <video
                          src={item.videoSrc}
                          loop
                          preload="auto"
                          muted
                          playsInline
                          autoPlay
                          className="w-full h-full object-cover"
                          style={{
                            aspectRatio: '4/3',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>


        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl sm:rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 max-w-full mx-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Ready to Get Started?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl px-2">
              Join thousands of businesses automating their ad creation with
              Aumbit AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
