// components/Hero.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="md:border-y border-light-gray mt-[-28px] lg:mt-[-14px] relative overflow-hidden" 
      aria-labelledby="hero-heading"
      role="banner"
    >
      <div className="container relative">
        <div className="lg:px-[46px] px-5 pt-[70px] pb-[46px] flex flex-col sm:flex-row justify-between items-start md:gap-[36px] gap-8">
          {/* Content Column */}
          <article className="flex flex-col w-full grow items-start md:gap-6 gap-5 max-w-[670px] pr-1">
            {/* Badge with Shine Effect */}
            <Link
              href="#cal"
              className="relative overflow-hidden flex items-center gap-1 py-1 px-2 rounded-full shine-effect bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors duration-300"
              aria-label="Book a call this week"
            >
              {/* Spinning Icon */}
              <svg
                width="16" 
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spinInfinity size-3 md:size-4 flex-shrink-0"
              >
                <path
                  d="M8.84166 0H7.15745V2.18947L7.7635 7.4356L4.48689 3.29601L2.9387 1.74781L1.74778 2.93873L3.29597 4.48692L7.44265 7.76915L2.18947 7.15787H0V8.84208H2.18947L7.44278 8.23078L3.29578 11.5133L1.74759 13.0615L2.93851 14.2524L4.4867 12.7042L7.76868 8.55781L7.15745 13.8105V16H8.84166V13.8105L8.23126 8.56486L11.5133 12.7042L13.0615 14.2524L14.2524 13.0615L12.7042 11.5133L8.57189 8.23689L13.8105 8.84208H16V7.15787H13.8105L8.57202 7.76304L12.704 4.48686L14.2522 2.93866L13.0613 1.74775L11.5131 3.29594L8.23642 7.42857L8.84166 2.18947V0Z"
                  fill="#272727"
                />
              </svg>

              <span className="text-xs sm:text-sm font-medium text-[#272727]">
                Book a call this week
              </span>
            
              {/* Arrow Icon */}
              <svg
                width="16" 
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M10.7807 7.33312L7.20468 3.75712L8.14735 2.81445L13.3327 7.99979L8.14735 13.1851L7.20468 12.2425L10.7807 8.66645H2.66602V7.33312H10.7807Z"
                  fill="#272727"
                />
              </svg>
            </Link>

            {/* Main Heading */}
            <div className="lg:max-w-[550px] max-w-[300px]">
              <h1 
                id="hero-heading"
                className="font-sans font-bold md:-tracking-[2.4px] -tracking-[1px] text-3xl lg:text-6xl leading-10 lg:leading-[68px]"
              >
                Full-Stack Digital Solutions
                <span className="text-[#939393]"> for </span>
                Startups &amp; Enterprises
              </h1>
            </div>

            {/* Description */}
            <p className="font-sans text-dark-gray max-w-[540px] text-base lg:text-lg leading-[24px]">
              Codiezz partners with founders and startups to build impactful web, mobile, AI, and automation solutions that turn ideas into growth and transform user experiences.
            </p>

            {/* Enhanced CTA Button */}
            <div className="flex gap-3">
              <Link
                href="#cal"
                className="relative rounded-full font-sans lg:text-lg text-base leading-5 lg:leading-6 font-medium text-white -tracking-[0.5px] lg:py-[14px] py-[10px] lg:px-6 px-4 bg-gradient-to-r from-[#272727] to-[#3a3a3a] group cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl transform-gpu"
                aria-label="Get Started"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                
                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full animate-ping bg-white/10 group-hover:animate-none" />
                
                {/* Button content with arrow */}
                <div className="relative flex items-center gap-2">
                  {/* Sparkle icon (visible by default, hidden on hover) */}
                  <svg 
                    className="w-5 h-5 group-hover:hidden transition-all duration-200"
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M10 2L11.5 7.5L17 9L11.5 10.5L10 16L8.5 10.5L3 9L8.5 7.5L10 2Z" 
                      fill="currentColor"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* Text container */}
                  <div className="lg:h-6 h-5 overflow-hidden relative flex items-center">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300 ease-out">
                      Get Started
                    </span>
                    <span className="absolute translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center gap-1">
                      Let's Talk
                      {/* <svg 
                        className="w-4 h-4" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.7807 7.33312L7.20468 3.75712L8.14735 2.81445L13.3327 7.99979L8.14735 13.1851L7.20468 12.2425L10.7807 8.66645H2.66602V7.33312H10.7807Z" fill="currentColor"/>
                      </svg> */}
                    </span>
                  </div>

                  {/* Arrow (hidden by default, visible on hover) */}
                  <svg 
                    className="w-5 h-5 hidden group-hover:block translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M13.477 10.484l-5.863 5.863-1.431-1.431L10.1 11H3v-2h7.1L6.183 5.084l1.431-1.431 5.863 5.863a.687.687 0 010 .968z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-blue-400/30 blur-lg" />
                </div>
              </Link>

              {/* Optional secondary button */}
              {/* <Link
                href="#learn-more"
                className="rounded-full font-sans lg:text-lg text-base leading-5 lg:leading-6 font-medium text-[#272727] -tracking-[0.5px] lg:py-[14px] py-[10px] lg:px-6 px-4 border-2 border-[#272727]/20 hover:border-[#272727]/40 hover:bg-[#272727]/5 transition-all duration-300"
                aria-label="Learn More"
              >
                Learn More
              </Link> */}
            </div>
          </article>

          {/* Video Column */}
          <div 
            data-lenis-prevent="true" 
            className="max-w-[616px] w-full grow lg:h-[451px] relative"
          >
            <video
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
              className="w-full md:h-auto relative -z-10 object-cover"
              poster="https://via.placeholder.com/560x410?text=Hero+Video"
            >
              <source
                src="https://cdn.prod.website-files.com/66fa53d02ce68041b486bfa6/67516598468e03952b828432_Big%20Video-transcode.mp4"
                type="video/mp4"
              />
              <p className="text-center text-gray-500">
                Your browser does not support the video tag. 
                <Link href="#cal" className="underline"> Get in touch</Link> to learn more.
              </p>
            </video>
          </div>
        </div>

        {/* Corner Circle Decorations */}
        <div className="circle left-[-4px] bottom-[-5px] hidden md:block" aria-hidden="true"></div>
        <div className="circle right-[-4px] bottom-[-5px] hidden md:block" aria-hidden="true"></div>
        <div className="circle top-[-4px] left-[-4px] hidden md:block" aria-hidden="true"></div>
        <div className="circle right-[-4px] top-[-5px] hidden md:block" aria-hidden="true"></div>
      </div>
    </section>
  );
}