'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-muted px-4 py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffd700_1px,transparent_1px),linear-gradient(to_bottom,#ffd700_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated heading */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            <span className="inline-block animate-pulse">Lightning</span>
            <span className="block text-accent mt-2">Fast Payments</span>
          </h1>
        </div>

        {/* Subtitle with stagger animation */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            EzPay brings seamless Stellar blockchain payments to merchants. Connect your wallet, accept payments globally, and settle instantly.
          </p>
        </div>

        {/* CTA Buttons with animation */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link
            href="/register"
            className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Get Started
          </Link>
          <button className="px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95">
            Learn More
          </button>
        </div>

        {/* Stats section with fade-in animation */}
        <div
          className={`mt-16 grid grid-cols-3 gap-4 md:gap-8 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors duration-300">
            <div className="text-2xl md:text-3xl font-bold text-accent">100%</div>
            <div className="text-sm text-muted-foreground mt-1">Decentralized</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors duration-300">
            <div className="text-2xl md:text-3xl font-bold text-accent">&lt;2s</div>
            <div className="text-sm text-muted-foreground mt-1">Settlement Time</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors duration-300">
            <div className="text-2xl md:text-3xl font-bold text-accent">∞</div>
            <div className="text-sm text-muted-foreground mt-1">Scalability</div>
          </div>
        </div>
      </div>

      {/* Floating accent orbs */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}
