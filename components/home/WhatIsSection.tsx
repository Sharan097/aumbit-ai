import Image from 'next/image';
import { Zap, CheckCircle, Globe, Share2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { FeatureItem } from '@/lib/types';

const features: FeatureItem[] = [
  { label: 'Generate in minutes', icon: Zap },
  { label: 'Product-centric', icon: CheckCircle },
  { label: '50+ Languages', icon: Globe },
  { label: 'Multi-platform', icon: Share2 },
];

export default function WhatIsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                What is Advertise AI?
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                Advertise AI is an advertisement AI platform that automates ad
                creation for products, technologies, and solutions. From visuals
                to copy, Advertise AI handles everything — faster, smarter, and at
                scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors group"
                >
                  <div className="text-indigo-600 group-hover:scale-110 transition-transform">
                    <item.icon size={22} strokeWidth={2.5} />
                  </div>
                  <span className="font-semibold text-slate-700 group-hover:text-indigo-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 blur-3xl opacity-20 rounded-full scale-75"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Advertise AI Dashboard Preview"
                width={1000}
                height={667}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
