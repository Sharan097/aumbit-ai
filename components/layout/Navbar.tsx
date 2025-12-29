'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import {
  Image as ImageIcon,
  Video,
  FileText,
  Sparkles,
} from 'lucide-react';

const productMenuItems = {
  imageGeneration: {
    icon: ImageIcon,
    title: 'Image Generation',
    color: 'from-blue-500 to-cyan-500',
    items: [
      {
        name: 'Single Image Generation',
        description: 'Create stunning single image advertisements',
        sectionId: 'image-generation',
      },
      {
        name: 'AI Carousels',
        description: 'Generate complete carousel campaigns with AI',
        sectionId: 'image-generation',
      },
      {
        name: 'Background Image Carousels',
        description: 'Create carousels with gradient backgrounds',
        sectionId: 'image-generation',
      },
    ],
  },
  videoGeneration: {
    icon: Video,
    title: 'Video Generation',
    color: 'from-purple-500 to-pink-500',
    items: [
      {
        name: 'Video60',
        description: 'Generate 60-second video advertisements',
        sectionId: 'video-generation',
      },
      {
        name: 'QuickVideo',
        description: 'Create quick video ads in minutes',
        sectionId: 'video-generation',
      },
      {
        name: 'LiveStreamingAds',
        description: 'Real-time streaming ad generation',
        sectionId: 'video-generation',
      },
    ],
  },
  textGeneration: {
    icon: FileText,
    title: 'Text Generation',
    color: 'from-orange-500 to-red-500',
    items: [
      {
        name: 'Ad Copy Generator',
        description: 'AI-powered advertising copy creation',
        sectionId: 'text-generation',
      },
      {
        name: 'Campaign Scripts',
        description: 'Generate complete campaign narratives',
        sectionId: 'text-generation',
      },
      {
        name: 'Social Media Captions',
        description: 'Platform-optimized social content',
        sectionId: 'text-generation',
      },
    ],
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    'imageGeneration'
  );
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const productButtonRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    setIsProductOpen(false);
    setIsOpen(false);

    if (pathname !== '/product') {
      window.location.href = `/product#${sectionId}`;
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Handle hash on page load
  useEffect(() => {
    if (pathname === '/product' && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        productButtonRef.current &&
        !productButtonRef.current.contains(event.target as Node)
      ) {
        setIsProductOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsProductOpen(false);
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsProductOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Clear hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Handle mouse enter with delay
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProductOpen(true);
    }, 150);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProductOpen(false);
    }, 200);
  };

  // Handle Product link click
  const handleProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProductOpen(false);
    router.push('/product');
  };

  // Handle chevron click
  const handleChevronClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProductOpen(!isProductOpen);
  };

  const navLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Why Aumbit', href: '/why-aumbit' },
    { name: 'Industries', href: '/industries' },
    { name: 'Reach & Platforms', href: '/reach' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl backdrop-saturate-150 border-b border-white/20 dark:border-slate-700/50 shadow-lg shadow-black/5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              ⚡
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Aumbit AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Product Dropdown */}
            <div
              className="relative"
              ref={productButtonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`flex items-center gap-1 rounded-lg font-medium transition-all duration-200 ${
                  pathname.startsWith('/product')
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-900/40 backdrop-blur-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:backdrop-blur-sm'
                }`}
              >
                <Link
                  href="/product"
                  onClick={handleProductClick}
                  className="px-4 py-2"
                  aria-label="Navigate to Product page"
                >
                  Product
                </Link>
                <button
                  onClick={handleChevronClick}
                  className="px-2 py-2 hover:bg-white/40 dark:hover:bg-slate-700/60 rounded-lg transition-all duration-200"
                  aria-expanded={isProductOpen}
                  aria-haspopup="true"
                  aria-label="Toggle product dropdown menu"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isProductOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Menu - Glassmorphism Style */}
              {isProductOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl backdrop-saturate-150 border border-white/30 dark:border-slate-700/50 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden animate-fade-in"
                  role="menu"
                >
                  <div className="flex">
                    {/* Left Sidebar - Categories */}
                    <div className="w-1/3 bg-gradient-to-br from-slate-50/80 to-white/50 dark:from-slate-900/60 dark:to-slate-800/40 backdrop-blur-sm p-4 border-r border-white/30 dark:border-slate-700/50">
                      {Object.entries(productMenuItems).map(
                        ([key, category]) => {
                          const Icon = category.icon;
                          return (
                            <button
                              key={key}
                              onClick={() => setActiveCategory(key)}
                              onMouseEnter={() => setActiveCategory(key)}
                              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 mb-2 ${
                                activeCategory === key
                                  ? 'bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg shadow-indigo-500/10'
                                  : 'hover:bg-white/50 dark:hover:bg-slate-800/50 hover:backdrop-blur-sm'
                              }`}
                            >
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${category.color} text-white shadow-md`}
                              >
                                <Icon size={20} strokeWidth={2} />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900 dark:text-white text-sm">
                                  {category.title}
                                </div>
                              </div>
                              <ArrowRight
                                size={16}
                                className={`text-slate-400 transition-transform ${
                                  activeCategory === key
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-2 opacity-0'
                                }`}
                              />
                            </button>
                          );
                        }
                      )}
                    </div>

                    {/* Right Content - Sub-items */}
                    <div className="w-2/3 p-6 bg-gradient-to-br from-white/40 to-slate-50/30 dark:from-slate-800/40 dark:to-slate-900/30 backdrop-blur-sm">
                      {activeCategory &&
                        productMenuItems[
                          activeCategory as keyof typeof productMenuItems
                        ] && (
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Sparkles
                                size={18}
                                className="text-indigo-600 dark:text-indigo-400"
                              />
                              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                {
                                  productMenuItems[
                                    activeCategory as keyof typeof productMenuItems
                                  ].title
                                }
                              </h3>
                            </div>

                            <div className="space-y-2">
                              {productMenuItems[
                                activeCategory as keyof typeof productMenuItems
                              ].items.map((item, index) => (
                                <button
                                  key={index}
                                  onClick={() =>
                                    scrollToSection(item.sectionId)
                                  }
                                  className="w-full block p-3 rounded-xl hover:bg-white/70 dark:hover:bg-slate-700/70 hover:backdrop-blur-sm hover:shadow-md transition-all duration-200 group text-left"
                                  role="menuitem"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {item.description}
                                      </p>
                                    </div>
                                    <ArrowRight
                                      size={16}
                                      className="text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1"
                                    />
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>

                  {/* Bottom CTA - Glassmorphism */}
                  <div className="border-t border-white/30 dark:border-slate-700/50 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 backdrop-blur-sm p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          Explore All Features
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Discover the full power of Aumbit AI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                  pathname === link.href
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-900/40 backdrop-blur-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:backdrop-blur-sm'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-200 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-800/60 hover:backdrop-blur-sm transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} className="text-slate-900 dark:text-white" />
            ) : (
              <Menu size={24} className="text-slate-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Glassmorphism */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 dark:border-slate-800/50 animate-fade-in">
            {/* Mobile Product Dropdown */}
            <div className="mb-4">
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:backdrop-blur-sm transition-all duration-200"
              >
                <Link
                  href="/product"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="flex-1 text-left"
                >
                  Product
                </Link>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isProductOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isProductOpen && (
                <div className="mt-2 space-y-4 pl-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-lg p-4">
                  {Object.entries(productMenuItems).map(([key, category]) => {
                    const Icon = category.icon;
                    return (
                      <div key={key} className="space-y-2">
                        <div className="flex items-center gap-2 px-2 py-1">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${category.color} text-white shadow-md`}
                          >
                            <Icon size={16} strokeWidth={2} />
                          </div>
                          <span className="font-semibold text-sm text-slate-900 dark:text-white">
                            {category.title}
                          </span>
                        </div>
                        <div className="space-y-1 pl-10">
                          {category.items.map((item, index) => (
                            <button
                              key={index}
                              onClick={() => scrollToSection(item.sectionId)}
                              className="w-full text-left block px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:backdrop-blur-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Other Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-900/40 backdrop-blur-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:backdrop-blur-sm'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block mt-4 mx-4 text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
