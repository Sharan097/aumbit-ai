import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/common/SectionHeading';

export const metadata: Metadata = {
  title: 'Industries & Use Cases',
  description: 'Built for every business, from startups to enterprises.',
};

const industries = [
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    title: 'E-Commerce & D2C',
    description: 'Generate endless product variations and seasonal campaigns instantly.',
    alt: 'E-commerce shopping and retail products',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    title: 'B2B & SaaS',
    description: 'Explain complex solutions with auto-generated infographics and explainer videos.',
    alt: 'Business analytics and SaaS dashboard',
  },
  {
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    title: 'Emerging Tech',
    description: 'AI, Web3, and Cloud providers use Advertise to visualize abstract concepts.',
    alt: 'Technology and innovation concept',
  },
];

export default function IndustriesPage() {
  return (
    <div className="animate-fade-in pt-32 pb-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Built for Every Business"
          subtitle="Scalable ad creation for any vertical."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-96"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 transform transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 transform transition-all duration-500 group-hover:scale-105">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-flex items-center text-indigo-400 text-sm font-semibold">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Top Corner Badge */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xs font-medium">View Case Studies</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 text-lg italic max-w-3xl mx-auto">
            "Whether you're launching, scaling, or advertising globally — Advertise AI adapts to your needs."
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '10,000+', label: 'Active Businesses' },
            { value: '50M+', label: 'Ads Generated' },
            { value: '50+', label: 'Languages' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
