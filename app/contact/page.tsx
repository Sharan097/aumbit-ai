import type { Metadata } from 'next';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Ready to transform your advertising? Join the waitlist or book a demo today.',
};

export default function ContactPage() {
  return (
    <div className="animate-fade-in min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your Advertising?
            </h1>
            <p className="text-indigo-100 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Let Aumbit AI handle the creative — you focus on growth. Join the
              waitlist or book a demo today.
            </p>

            {/* Feature List */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['No credit card required', 'Free 14-day trial', '24/7 Support'].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <CheckCircle size={18} />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-50 hover:shadow-2xl transition-all duration-200 active:scale-95">
                Get Started Now
                <ArrowRight size={20} />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200 active:scale-95">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
