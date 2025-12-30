import Link from 'next/link';
import { Zap, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-2xl text-white mb-4 hover:text-indigo-400 transition-colors"
            >
              <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                <Zap size={20} fill="currentColor" />
              </div>
              <span>Advertise AI</span>
            </Link>
            <p className="max-w-xs text-slate-400 leading-relaxed mb-6">
              Automating creative workflows for modern businesses. Design better,
              faster, and smarter with AI-powered advertising.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/product"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-indigo-400 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/reach"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Supported Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Aumbit AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500">
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              Status
            </Link>
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
