'use client';

import { useEffect, useState } from 'react';

const steps = [
  {
    number: 1,
    title: 'Connect Wallet',
    description: 'Link your Stellar wallet in seconds with Freighter, Lobstr, or Albedo.',
  },
  {
    number: 2,
    title: 'Configure Business',
    description: 'Set up your merchant profile and payment preferences in our dashboard.',
  },
  {
    number: 3,
    title: 'Start Accepting',
    description: 'Embed our payment widget or redirect customers to a hosted checkout.',
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Get up and running in three simple steps</p>
        </div>

        <div className="relative">
          {/* Step indicator line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-border hidden md:block">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`cursor-pointer transform transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                onClick={() => setActiveStep(index)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-accent text-accent-foreground scale-110 shadow-lg shadow-accent/50'
                      : 'bg-card border-2 border-border text-foreground hover:border-accent'
                  }`}
                >
                  {step.number}
                </div>

                {/* Step content */}
                <div
                  className={`text-center transition-all duration-300 ${
                    activeStep === index ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                  }`}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Animated indicator dot */}
                {activeStep === index && (
                  <div className="flex justify-center mt-4">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Ready to start accepting blockchain payments?</p>
          <a
            href="/register"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Begin Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
