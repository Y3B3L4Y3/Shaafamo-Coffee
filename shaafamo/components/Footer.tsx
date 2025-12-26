"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CoffeeLeafSVG from "./CoffeeLeafSVG";
import Logo from "./Logo";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "Our Story" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  coffee: [
    { href: "/products", label: "Natural Process" },
    { href: "/products", label: "Washed Process" },
    { href: "/products", label: "Honey Process" },
    { href: "/about", label: "Our Farm" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4">
        <CoffeeLeafSVG className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
                <Logo isScrolled={true} />
              </motion.div>
            </Link>
            <p className="mt-6 text-cream/60 text-sm leading-relaxed max-w-xs">
              Premium specialty coffee from the highlands of Sidama, Ethiopia.
              Hand-picked with care, sun-dried to perfection on our family-owned farm.
            </p>
            
            {/* Sustainability Badge */}
            <div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-xl bg-leaf-olive/10 border border-leaf-olive/20 inline-flex">
              <div className="w-2 h-2 rounded-full bg-leaf-olive animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-leaf-olive-light uppercase">
                Direct Trade • Sustainable
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-leaf-olive-light transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-leaf-olive mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coffee Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">
              Our Selection
            </h4>
            <ul className="space-y-4">
              {footerLinks.coffee.map((link, index) => (
                <li key={link.label + index}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-leaf-olive-light transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-leaf-olive mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">
              Connect
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-coffee-bean/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-leaf-olive-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-cream/60 pt-1">Sidama, Ethiopia</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-coffee-bean/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-leaf-olive-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-cream/60 pt-1">
                  <p>+251 931 405 096</p>
                  <p>+251 912 680 223</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-coffee-bean/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-leaf-olive-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href="mailto:teshalelankamo@gmail.com"
                  className="text-cream/60 hover:text-leaf-olive-light transition-colors break-all pt-1"
                >
                  teshalelankamo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-cream/30 text-xs tracking-wider uppercase">
              © {new Date().getFullYear()} Shaafamo Coffee. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-cream/30 hover:text-cream/50 text-xs transition-colors">Privacy</Link>
              <Link href="/terms" className="text-cream/30 hover:text-cream/50 text-xs transition-colors">Terms</Link>
              <span className="text-leaf-olive/40 text-xs">•</span>
              <p className="text-cream/30 text-xs italic">Authentic Ethiopian Heritage</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
