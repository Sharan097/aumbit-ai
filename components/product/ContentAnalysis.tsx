import { Type, Cpu, Sparkles, Zap, Brain, CheckCircle } from 'lucide-react';


const textFeatures = [
  {
    title: 'AI-Powered Ad Copy',
    description:
      'Generate high-converting headlines, CTAs, and body copy in seconds.',
  },
  {
    title: 'Campaign Scripts',
    description:
      'Generate complete campaign narratives and more.',
  },
  {
    title: 'Social Media Captions',
    description:
      'Platform-optimized social content.',
  },
];


const analysisFeatures = [
  {
    title: 'URL Intelligence',
    description:
      'Extract key product features, benefits, and specs from any link.',
  },
  {
    title: 'Competitive Analysis',
    description:
      'Identify gaps and opportunities by analyzing competitor messaging.',
  },
  {
    title: 'Fact Verification',
    description:
      'Ensure accuracy with AI-powered content validation and source checking.',
  },
];


export default function ContentAnalysis() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Text Generation Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
        {/* Left Content - Features List */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-800/30 rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-orange-600 dark:text-orange-400 shadow-md">
            <Type size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
          </div>


          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700">
            <Sparkles
              size={16}
              className="text-orange-600 dark:text-orange-400 sm:w-[18px] sm:h-[18px]"
            />
            <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">
              AI Text Intelligence
            </span>
          </div>



          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Text & Copy Generation
          </h2>


          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            Generate intelligent ad messages, brand awareness copy, and
            persuasive product descriptions that align perfectly with your
            visual assets. Powered by advanced language models trained on
            high-converting advertising content.
          </p>


          <ul className="space-y-4 sm:space-y-5">
            {textFeatures.map((feature, i) => (
              <li key={i} className="flex gap-3 sm:gap-4">
                <CheckCircle
                  className="text-orange-600 dark:text-orange-400 shrink-0 mt-0.5 sm:mt-1 w-5 h-5 sm:w-6 sm:h-6"
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


        {/* Right Gradient Box with Animation */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 dark:from-orange-900 dark:via-red-900 dark:to-pink-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl border-2 sm:border-4 border-white dark:border-slate-800">
              {/* Animated Content Preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white">
                    <Zap size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">
                      AI Writing Assistant
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">
                      Real-time generation
                    </p>
                  </div>
                </div>


                {/* Simulated Text Lines */}
                <div className="space-y-3">
                  <div className="h-3 sm:h-4 bg-gradient-to-r from-orange-300 to-orange-200 dark:from-orange-600 dark:to-orange-700 rounded-full w-full animate-pulse"></div>
                  <div className="h-3 sm:h-4 bg-gradient-to-r from-red-300 to-red-200 dark:from-red-600 dark:to-red-700 rounded-full w-5/6 animate-pulse delay-75"></div>
                  <div className="h-3 sm:h-4 bg-gradient-to-r from-orange-300 to-orange-200 dark:from-orange-600 dark:to-orange-700 rounded-full w-4/6 animate-pulse delay-150"></div>
                </div>


                <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm text-orange-700 dark:text-orange-300 font-semibold">
                  <Brain size={16} className="sm:w-5 sm:h-5 animate-pulse" />
                  <span>Generating optimized copy...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Smart Content Analysis Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 lg:gap-16">
        {/* Right Content - Features List */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-800/30 rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 shadow-md">
            <Cpu size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
          </div>


          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700">
            <Brain
              size={16}
              className="text-blue-600 dark:text-blue-400 sm:w-[18px] sm:h-[18px]"
            />
            <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">
              Intelligent Analysis
            </span>
          </div>


          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Smart Content Analysis
          </h2>


          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            Analyze product URLs, app links, and websites to automatically
            extract features, benefits, and key selling points. Our AI ensures
            every ad is factually accurate and contextually relevant.
          </p>


          <ul className="space-y-4 sm:space-y-5">
            {analysisFeatures.map((feature, i) => (
              <li key={i} className="flex gap-3 sm:gap-4">
                <CheckCircle
                  className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 sm:mt-1 w-5 h-5 sm:w-6 sm:h-6"
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


        {/* Left Gradient Box with Analysis Visualization */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl border-2 sm:border-4 border-white dark:border-slate-800">
              {/* Analysis Interface Mockup */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                    <Brain size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">
                      Content Analyzer
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">
                      Extracting insights
                    </p>
                  </div>
                </div>


                {/* Analysis Cards */}
                <div className="space-y-3">
                  <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-blue-200 dark:border-blue-700">
                    <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">
                      KEY FEATURES DETECTED
                    </p>
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-[9px] sm:text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-0.5 sm:py-1 rounded-full">
                        ✓ Premium Quality
                      </span>
                      <span className="text-[9px] sm:text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-0.5 sm:py-1 rounded-full">
                        ✓ Fast Delivery
                      </span>
                    </div>
                  </div>


                  <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-cyan-200 dark:border-cyan-700">
                    <p className="text-[10px] sm:text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-1">
                      AUDIENCE INSIGHTS
                    </p>
                    <div className="h-2 sm:h-3 bg-gradient-to-r from-cyan-400 to-cyan-200 dark:from-cyan-600 dark:to-cyan-700 rounded-full w-4/5"></div>
                  </div>
                </div>


                <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-semibold">
                  <Cpu size={16} className="sm:w-5 sm:h-5 animate-pulse" />
                  <span>Analyzing content...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Additional Features Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {[
          {
            title: 'SEO Optimized',
            description: 'Auto-optimized for search and discoverability',
            icon: '🔍',
            color: 'from-orange-500 to-red-500',
          },
          {
            title: 'A/B Testing',
            description: 'Generate multiple copy variations instantly',
            icon: '📊',
            color: 'from-blue-500 to-cyan-500',
          },
          {
            title: 'Tone Control',
            description: 'Professional, casual, or persuasive styles',
            icon: '🎯',
            color: 'from-purple-500 to-pink-500',
          },
          {
            title: 'Real-Time Edit',
            description: 'Refine and adjust AI suggestions on the fly',
            icon: '✏️',
            color: 'from-green-500 to-teal-500',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative group p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            ></div>
            <div className="relative">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
              <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
