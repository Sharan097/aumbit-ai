import { Zap, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20 pb-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <Zap size={16} className="animate-pulse" />
          <span>The Future of Ad Creation is Here</span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Create High-Impact Ads{' '}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Instantly with Advertise AI
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Advertise AI helps businesses generate stunning ads — images, videos, and
          text — in minutes using AI.{' '}
          <span className="text-white font-medium">
            No design skills. No complex workflows.
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <Button href="/contact" className="text-base px-8 py-4">
            Get Started <ArrowRight size={20} />
          </Button>
          <Button variant="outline" href="/contact" className="text-base px-8 py-4">
            Book a Demo
          </Button>
        </div>

        {/* Social Proof */}
        <p
          className="mt-12 text-sm text-slate-400 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Trusted by 10,000+ businesses worldwide
        </p>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
