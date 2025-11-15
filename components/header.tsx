// components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  return (
    <header>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="border border-[#0000000A] mt-4 lg:max-w-[840px] w-[calc(100%-40px)] lg:w-full mx-auto p-[10px] rounded-full bg-white flex justify-between items-center sticky lg:top-9 top-5 z-50 bg-[url('https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685d298fd3a8eb308a6ff7a2_navbg.png')] bg-cover bg-center backdrop-blur-[15px] shadow-sm"
      >
        {/* Logo Section */}
        <div className="flex justify-start items-center overflow-hidden flex-grow">
          <Link
            href="/"
            className="flex items-center gap-4 lg:gap-6 flex-shrink-0"
            aria-label="Home"
          >
        <Image
  alt="Codiezz Logo"
  src="/logoname.png"
  width={120}
  height={50}
  className="ml-[14px] mb-[2px] h-[34px] lg:h-[42px] w-auto object-contain"
/>


            <div className="w-[1px] h-3 bg-[#93939333] lg:hidden"></div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex justify-center items-center pt-[5px] ml-8 flex-1 max-w-max">
            {navItems.map((item, index) => (
              <React.Fragment key={item.href}>
                {index > 0 && (
                  <div className="w-[1px] h-3 bg-[#93939333] mx-[6px]" />
                )}
                <Link
                  href={item.href}
                  className="px-3 py-2 font-sans text-xs leading-[16px] font-medium text-[#27272780] hover:bg-[#2727271A] hover:text-[#272727] bg-transparent rounded-full uppercase transition-all duration-300 ease-in-out whitespace-nowrap"
                  scroll={true}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* CTA Button */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://cal.com/prathamesh-gaikwad-63bhom"
          className="inline-flex gap-2 items-center py-[10px] lg:pl-[10px] pl-3 pr-3 lg:pr-4 bg-[#272727E5] rounded-full font-sans text-sm lg:text-base leading-6 font-normal text-white shadow-[inset_0_0_3px_2px_rgba(255,255,255,0.2),inset_0_0_12px_4px_rgba(255,255,255,0.13),0_4px_3px_-4px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0_3px_2px_rgba(255,255,255,0.25),inset_0_0_12px_4px_rgba(255,255,255,0.18),0_4px_3px_-4px_rgba(0,0,0,0.55)] transition-all duration-300 flex-shrink-0 whitespace-nowrap"
        >
          <span className="hidden lg:inline">Book a Call</span>
          <span className="lg:hidden text-xs sm:text-sm">Book a Call</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
