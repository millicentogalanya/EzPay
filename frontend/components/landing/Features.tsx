'use client';

import { useState, useEffect } from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Instant Settlement',
    description: 'Receive payments directly to your Stellar wallet with near-zero transaction times.',
  },
  {
    icon: '🔐',
    title: 'Secure & Transparent',
    description: 'Leverage blockchain immutability and smart contract verification for every transaction.',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'Accept payments from anywhere in the world without traditional banking restrictions.',
  },
  {
    icon: '💰',
    title: 'Minimal Fees',
    description: 'Enjoy ultra-low transaction costs compared to traditional payment processors.',
  },
];

export function Features() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Stagger animation for cards
    features.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => new Set([...prev, index]));
      }, index * 150);
    });
  }, []);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose EzPay?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for merchants who demand speed, security, and simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-500 transform cursor-pointer group ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
