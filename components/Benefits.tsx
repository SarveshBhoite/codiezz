// components/Benefits.tsx
'use client';

import Image from 'next/image';

const benefits = [
  {
    number: "01",
    icon: "https://cdn.prod.website-files.com/675aaa451de0011e537740d8/68623867a49835296c7e6d1b_bi-1.svg",
    alt: "Convert Focused Icon",
    title: "Convert Focused",
    description: "Speed means nothing without conversions. Our integrated design, development, and copy work together to drive revenue not just win design awards.",
  },
  {
    number: "02",
    icon: "https://cdn.prod.website-files.com/675aaa451de0011e537740d8/68623867f780921a67af7144_bi-2.svg",
    alt: "Quick Launch Or Retainer Icon",
    title: "Quick Launch Or Retainer",
    description: "Scale up for major launches or down for maintenance. Whether it's a quick landing page or complete rebrand, we adapt to your business needs.",
  },
  {
    number: "03",
    icon: "https://cdn.prod.website-files.com/675aaa451de0011e537740d8/68623867ac23a465a55b8320_bi-3.svg",
    alt: "Real-Time Collaboration Icon",
    title: "Real-Time Collaboration",
    description: "Daily check-ins and rapid iterations keep projects moving. You're always in the loop with feedback cycles that eliminate delays.",
  },
  {
    number: "04",
    icon: "https://cdn.prod.website-files.com/675aaa451de0011e537740d8/6862386740558de4936d3870_bi-4.svg",
    alt: "Complete Creative Solution Icon",
    title: "Complete Creative Solution",
    description: "While others just do design, we handle copy too. Your entire funnel works together cohesive messaging that actually converts.",
  },
  {
    number: "05",
    icon: "https://cdn.prod.website-files.com/675aaa451de0011e537740d8/68623868a56999a416fbc0da_bi-5.svg",
    alt: "Transparent Pricing Icon",
    title: "Transparent Pricing",
    description: "Fixed monthly rates or clear project fees. No surprise charges, no scope creep. You know exactly what you're investing.",
  },
  {
    number: "06",
    icon: "https://cdn.prod.website-files.com/675aaa451de0011e537740d8/686238670767022be4685316_bi-6.svg",
    alt: "Real Human Connection Icon",
    title: "Real Human Connection",
    description: "Bi-weekly video calls keep us aligned on your vision. Real conversations with real people, not just project management tools.",
  },
];

export default function Benefits() {
  return (
    <section 
      id="benefits" 
      className="relative" 
      role="region" 
      aria-label="Benefits of Partnering with Codiezz"
    >
      {/* Section Divider */}
      <div className="h-[64px] w-full border-y border-light-gray hidden md:block"></div>

      {/* Section Title */}
      <div className="container relative section-title-container">
        <div className="lg:py-[2rem] py-7 pl-5 lg:pl-[46px] section-title-wrap">
          {/* Subtitle */}
          <p className="font-suisseMono lg:text-xl text-base leading-[24px] tracking-[0.14px] text-[#8F8F8F] mb-2 uppercase font-normal">
            benefits
          </p>

          {/* Main Title Line 1 */}
          <div className="title-wrapper overflow-hidden">
            <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium lg:leading-[68px] lg:-tracking-[1.6px] -tracking-[1.2px] text-dark-gray">
              <span>Because Your</span>
            </h2>
          </div>

          {/* Main Title Line 2 */}
          <div className="title-wrapper overflow-hidden">
            <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium lg:leading-[68px] lg:-tracking-[1.6px] -tracking-[1.2px] text-dark-gray-50">
              <span>Success Matters</span>
            </h2>
          </div>
        </div>

        {/* Title Corner Circles */}
        <div className="circle -left-4 -bottom-5" aria-hidden="true"></div>
        <div className="circle -top-5 -left-4" aria-hidden="true"></div>
        <div className="circle -right-1 -bottom-5 lg:-right-4" aria-hidden="true"></div>
        <div className="circle -top-5 -right-4" aria-hidden="true"></div>
      </div>

      {/* Benefits Grid */}
      <div className="border-t border-b md:border-b-0 border-light-gray">
        <div className="container relative">
          {/* 3x2 Grid Layout */}
          <div className="grid lg:grid-cols-3 grid-cols-1">
            {benefits.map((benefit, index) => {
              // Determine if card is in the last row (indices 3-5)
              const isLastRow = index >= 3;
              
              return (
                <div
                  key={index}
                  className={`p-[10px] lg:p-[6px] border-light-gray border-r border-l lg:border-l-0 border-b ${
                    isLastRow ? 'lg:border-b-0' : ''
                  } flex relative`}
                >
                  {/* Card Inner Container */}
                  <div className="bg-F8F8F8 lg:p-10 px-6 py-5 lg:rounded-3xl rounded-[20px] w-full">
                    {/* Benefit Number */}
                    <p className="font-suisseMono text-base leading-[20px] -tracking-[0.5px] text-FB580D uppercase font-normal">
                      / {benefit.number}
                    </p>

                    {/* Benefit Icon */}
                    <Image
                      alt={benefit.alt}
                      loading={index < 2 ? "eager" : "lazy"}
                      width={46}
                      height={46}
                      className="mt-[40px] rounded-xl lg:mb-8 mb-6 shadow-[0px_1.095px_2.191px_0px_rgba(39,39,39,0.5)]"
                      src={benefit.icon}
                    />

                    {/* Benefit Title */}
                    <p className="font-suisse lg:text-[26px] text-[20px] leading-[28px] lg:leading-[36px] text-dark-gray font-medium mb-3">
                      {benefit.title}
                    </p>

                    {/* Benefit Description */}
                    <p className="font-suisse lg:text-lg text-base leading-[24px] text-stone-gray">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Per-Card Corner Circles */}
                  <div className="circle -right-5 -top-5" aria-hidden="true"></div>
                  <div className="circle -left-4 -bottom-5" aria-hidden="true"></div>
                </div>
              );
            })}
          </div>

          {/* Container Corner Circles */}
          <div className="circle -left-4 -bottom-5 hidden md:block" aria-hidden="true"></div>
          <div className="circle -right-4 -bottom-5 hidden md:block" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
