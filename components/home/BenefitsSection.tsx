import { Zap, CheckCircle, Globe, BarChart3 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import Card from '@/components/common/Card';

const benefits = [
  {
    icon: Zap,
    title: 'Speed',
    description:
      'Generate ads in minutes, not weeks. Launch campaigns faster than ever before.',
  },
  {
    icon: CheckCircle,
    title: 'Conversion Focused',
    description:
      'Product-centric creatives designed specifically to convert viewers into customers.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Cultural adaptation in 50+ languages to resonate with audiences everywhere.',
  },
  {
    icon: BarChart3,
    title: 'Optimized',
    description:
      'Automatically optimized formats for all major ad platforms and devices.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Key Benefits"
          subtitle="Why thousands of marketers are switching to Aumbit AI."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <Card key={i} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
