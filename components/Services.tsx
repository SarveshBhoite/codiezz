'use client';

import Image from 'next/image';
import clsx from 'clsx';

// --- Helper Function for Icons ---
const ServiceIcon = ({ iconKey }: { iconKey: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    brand: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6265 4.74701C11.5804 4.83917 11.5057 4.91389 11.4135 4.95997L10.1851 5.57417C9.83413 5.74967 9.83413 6.25053 10.1851 6.42601L11.4135 7.04023C11.5057 7.08629 11.5804 7.16103 11.6265 7.25319L12.2407 8.4816C12.4162 8.83257 12.917 8.83257 13.0925 8.4816L13.7067 7.25319C13.7528 7.16103 13.8275 7.08629 13.9197 7.04023L15.1481 6.42601C15.4991 6.25053 15.4991 5.74967 15.1481 5.57417L13.9197 4.95997C13.8275 4.91389 13.7528 4.83917 13.7067 4.74701L13.0925 3.5186C12.917 3.16763 12.4162 3.16763 12.2407 3.5186L11.6265 4.74701Z" fill="#FB580D" />
      </svg>
    ),
    website: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H28V24H4V8Z" stroke="#FB580D" strokeWidth="1.5" />
      </svg>
    ),
    product: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="#FB580D" strokeWidth="1.5" />
      </svg>
    ),
    nocode: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 16L6 12M22 16L26 20" stroke="#FB580D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    marketing: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#FB580D" strokeWidth="1.5" />
      </svg>
    ),
    pitch: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H28V24H4V8Z" stroke="#FB580D" strokeWidth="1.5" />
        <line x1="16" y1="8" x2="16" y2="24" stroke="#FB580D" strokeWidth="1.5" />
      </svg>
    ),
  };
  return icons[iconKey] || (
    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">Icon</div>
  );
};

// --- Services Data ---
const services = [
  {
    icon: 'website',
    title: 'Website Development',
    images: [
      {
        src: '/careerpath.png',
        alt: 'Website Development Showcase 1',
        rotation: '-rotate-4',
        zIndex: 'z-20',
      },
      {
        src: '/preplyte1.png',
        alt: 'Website Development Showcase 2',
        rotation: 'rotate-4',
        zIndex: 'z-10',
        top: '-top-6',
        left: 'left-[22%]',
      },
    ],
  },
  {
    icon: 'product',
    title: 'Mobile App Development',
    images: [
      {
        src: '/careerpath2.png',
        alt: 'Mobile App Development 1',
        rotation: '-rotate-4',
        zIndex: 'z-20',
      },
      {
        src: '/preplyte2.png',
        alt: 'Mobile App Development 2',
        rotation: 'rotate-4',
        zIndex: 'z-10',
        top: 'bottom-7',
        left: 'left-[25%]',
      },
    ],
  },
  {
    icon: 'brand',
    title: 'UI/UX Design',
    images: [
      {
        src: '/careerpath3.png',
        alt: 'UI/UX Design Showcase 1',
        rotation: '-rotate-4',
        zIndex: 'z-20',
      },
      {
        src: '/preplyte3.png',
        alt: 'UI/UX Design Showcase 2',
        rotation: 'rotate-4',
        zIndex: 'z-10',
        top: 'bottom-2',
        left: 'left-[14%]',
      },
    ],
  },
  {
    icon: 'nocode',
    title: 'AI & Automation',
    images: [
      {
        src: '/mess1.png',
        alt: 'AI Automation Showcase 1',
        rotation: '-rotate-4',
        zIndex: 'z-20',
      },
      {
        src: '/doda1.png',
        alt: 'AI Automation Showcase 2',
        rotation: 'rotate-4',
        zIndex: 'z-10',
        top: 'bottom-7',
        left: 'left-[25%]',
      },
    ],
  },
  {
    icon: 'marketing',
    title: 'IT & Cloud Solutions',
    images: [
      {
        src: '/shravan1.png',
        alt: 'Cloud Solutions Showcase 1',
        rotation: '-rotate-4',
        zIndex: 'z-20',
      },
      {
        src: '/mess3.png',
        alt: 'Cloud Solutions Showcase 2',
        rotation: 'rotate-4',
        zIndex: 'z-10',
        top: '-top-6',
        left: 'left-[22%]',
      },
    ],
  },
  {
    icon: 'website',
    title: 'E-Commerce Platforms',
    images: [
      {
        src: '/shravan2.png',
        alt: 'Ecommerce Showcase 1',
        rotation: '-rotate-4',
        zIndex: 'z-20',
      },
      {
        src: '/mess2.png',
        alt: 'Ecommerce Showcase 2',
        rotation: 'rotate-4',
        zIndex: 'z-10',
        top: '-top-6',
        left: 'left-[22%]',
      },
    ],
  },
];


export default function Services() {
  return (
    <section id="services" className="relative" role="region" aria-label="Our Services">
      {/* Section Divider */}
      <div className="h-[64px] w-full border-y border-light-gray hidden md:block"></div>

      {/* Section Title */}
      <div className="container relative section-title-container">
        <div className="lg:py-8 py-7 pl-5 lg:pl-[46px] section-title-wrap">
          <p className="font-suisseMono lg:text-xl text-base leading-[24px] tracking-[0.14px] text-[#8F8F8F] mb-2 uppercase font-normal">
            Our Services
          </p>
          <div className="title-wrapper overflow-hidden">
            <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium lg:leading-[68px] lg:-tracking-[1.6px] -tracking-[1.2px] text-dark-gray">
              <span>We Excel In</span>
            </h2>
          </div>
        </div>
        {/* Circles for decoration */}
        <div className="circle -left-4 -bottom-5" aria-hidden="true"></div>
        <div className="circle -top-5 -left-4" aria-hidden="true"></div>
        <div className="circle -right-1 -bottom-5 lg:-right-4" aria-hidden="true"></div>
        <div className="circle -top-5 -right-4" aria-hidden="true"></div>
      </div>

      {/* Service Cards */}
      <div className="border-b md:border-b-0 border-light-gray">
        <div className="border-t border-light-gray">
          <div className="container relative px-0">
            {/* Background pattern line */}
            <div className="bg-[url('https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685d3f64f0209252bd7c37e5_line-border.png')] w-full absolute inset-y-0 left-0 hidden md:block pointer-events-none"></div>
            
            {/* Grid */}
            <div className="max-w-[1104px] mx-auto divide-x divide-y divide-light-gray grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative px-4 lg:px-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={clsx(
                    "p-[10px] lg:p-[6px] relative group",
                    "first:lg:border-l-0 last:border-r-0",
                    "lg:last:border-b-0"
                  )}
                >
                  <div className="bg-F8F8F8 rounded-[24px] p-8 h-[232px] flex flex-col justify-end overflow-hidden group-hover:bg-[#F0F0F0] transition-colors duration-300">
                    {/* Images Container */}
                    <div className="relative h-[86px] mb-7">
                      {service.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={clsx(
                            "rounded-[8px] bg-white shadow-[0_0.7px_1.4px_0_rgba(0,0,0,0.12),_0_1.4px_5.7px_0_rgba(0,0,0,0.08)] overflow-hidden absolute transition-all duration-300 hover:-translate-y-3 group-hover:-translate-y-3",
                            img.rotation,
                            img.zIndex || 'z-0',
                            img.top || 'top-0',
                            img.left || 'left-0',
                            imgIndex === 0 ? 'animate-bounce-down' : 'animate-bounce-down-2'
                          )}
                          style={{ width: '86px', height: '86px' }}
                        >
                          <Image
                            alt={img.alt}
                            fill
                            className="object-contain"
                            src={img.src}
                            sizes="86px"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Title and Icon */}
                    <div className="flex justify-between items-center">
                      <p className="font-suisse text-xl leading-[20px] text-dark-charcoal font-semibold">
                        {service.title}
                      </p>
                      <ServiceIcon iconKey={service.icon} />
                    </div>
                  </div>

                  {/* Per-Card Circles */}
                  <div className="circle -right-5 -bottom-5 hidden lg:block" aria-hidden="true"></div>
                  <div className="circle -left-5 -bottom-5 hidden lg:block" aria-hidden="true"></div>
                </div>
              ))}
            </div>

            {/* Container Circles */}
            <div className="circle -left-4 -bottom-5 hidden md:block" aria-hidden="true"></div>
            <div className="circle -right-4 -bottom-5 hidden md:block" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
