// app/why-aumbit/page.tsx
import type { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import Card from '@/components/common/Card';
import {
  Zap,
  Layers,
  Monitor,
  Globe,
  Smartphone,
  CheckCircle,
  Activity,
  Database,
  Tv,
  UserCheck,
  ShieldCheck,
  Users,
  LineChart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Aumbit AI',
  description:
    'Purpose-built AI capabilities and competitive advantages designed for modern advertising.',
};

/* =======================
   WHY AUMBIT – ADVANTAGES
======================= */
const advantages = [
  {
    icon: Zap,
    title: 'Automates 90% of Creation',
    description:
      'Drastically reduce manual effort and creative costs. Let AI handle the heavy lifting while you focus on strategy.',
  },
  {
    icon: Layers,
    title: 'All Formats, One Platform',
    description:
      'Images, videos, carousels, reels, and text — all from one unified platform.',
  },
  {
    icon: Monitor,
    title: 'Live & Real-Time',
    description:
      'Generate ads dynamically based on live content, inventory, and trending signals.',
  },
  {
    icon: Globe,
    title: 'Multilingual & Global',
    description:
      'Create localized ads in 50+ languages with cultural intelligence.',
  },
  {
    icon: Smartphone,
    title: 'Platform-Optimized',
    description:
      'Ads automatically adapt to every platform’s size, format, and policy.',
  },
  {
    icon: CheckCircle,
    title: 'Brand Safe',
    description:
      'AI guardrails ensure generated content aligns with brand voice and compliance.',
  },
];

/* =======================
   WHAT MAKES US DIFFERENT
======================= */
const differentiators = [
  {
    icon: Activity,
    title: 'Real-Time Dynamic Ad Insertion for Live Streaming',
    description:
      'Generate and insert ads on-the-fly during live events without disrupting viewer experience.',
  },
  {
    icon: Globe,
    title: 'Language-Agnostic Generation with Cultural Adaptation',
    description:
      'Automatically generate culturally relevant ads based on viewer language and region.',
  },
  {
    icon: Database,
    title: 'Product-Centric AI Knowledge Graph',
    description:
      'AI deeply understands your product data to highlight features that convert.',
  },
  {
    icon: Tv,
    title: 'Seamless OTT Platform Integration APIs',
    description:
      'Plug-and-play APIs for OTT platforms with zero buffering and high retention.',
  },
  {
    icon: Layers,
    title: 'Multi-Modal Content Fusion',
    description:
      'Combine images, video, text, and audio into one synchronized ad experience.',
  },
  {
    icon: UserCheck,
    title: 'Viewer Behavior–Driven Personalization Engine',
    description:
      'Personalize ads in real time based on viewer engagement and behavior.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical & Bias-Free Ad Creation Algorithms',
    description:
      'Built-in audits ensure fairness, privacy compliance, and brand trust.',
  },
  {
    icon: Users,
    title: 'Collaborative Human–AI Workflow Tools',
    description:
      'Enable marketers to iterate and refine AI-generated ads in real time.',
  },
  {
    icon: LineChart,
    title: 'Performance Analytics & Self-Optimizing Loop',
    description:
      'AI continuously analyzes performance and auto-optimizes creatives.',
  },
];

export default function WhyAumbitPage() {
  return (
    <div className="animate-fade-in bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">

      {/* =======================
          WHY AUMBIT SECTION
      ======================= */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Why Aumbit AI?"
            subtitle="The competitive advantage your business needs."
          />

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          DIFFERENTIATORS SECTION
      ======================= */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="What Makes Aumbit AI Truly Different"
            subtitle="Purpose-built AI capabilities designed for modern advertising — scalable, intelligent, and real-time."
          />

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
