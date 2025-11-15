'use client'; // Added for potential future interactivity (e.g., pause on hover)

import Image from 'next/image';

const clients = [
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735cb4304bd8429822f9_Clients%20logo.svg', alt: 'OrixCreative Client Logo' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e92012003ed7a9e37e76c_Real%20Client%20Logo.svg', alt: 'Real Client Logo' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/68e2355758b60449ec2cf824_pwc1.svg', alt: 'PwC Logo' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ce9ca59885cb34fba_Clients%20logo-1.svg', alt: 'OrixCreative Client Logo 1' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e92cd5d45334030f890f7_Real%20Client%20Logo.svg', alt: 'Real Client Logo 2' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ebd5c953f4af1197b_Real%20Client%20Logo.svg', alt: 'Real Client Logo 3' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735c13b9da3bb2208ecf_Clients%20logo-2.svg', alt: 'OrixCreative Client Logo 2' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735cde21abbe3109671d_Clients%20logo-3.svg', alt: 'OrixCreative Client Logo 3' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ee25aa9a3bf7f48b1_Clients%20logo-4.svg', alt: 'OrixCreative Client Logo 4' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735e40d8d0a39f8bd8c7_Real%20Client%20Logo-3.svg', alt: 'Real Client Logo 4' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ed0325c275dd4e73a_Real%20Client%20Logo-4.svg', alt: 'Real Client Logo 5' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e7361ed621a1c51b3b9fa_Real%20Client%20Logo-5.svg', alt: 'Real Client Logo 6' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735e092d5c8c7d2d46ad_Real%20Client%20Logo-6.svg', alt: 'Real Client Logo 7' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735e7754917678068182_Real%20Client%20Logo-7.svg', alt: 'Real Client Logo 8' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e960282df0411e92ef4c9_Real%20Client%20Logo.svg', alt: 'Real Client Logo 9' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735e21f41aa17cd34b49_Real%20Client%20Logo-9.svg', alt: 'Real Client Logo 10' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ece3d8e79f494952e_Real%20Client%20Logo-1.svg', alt: 'Real Client Logo 11' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d6ca0deeacf8c544d_Real%20Client%20Logo-11.svg', alt: 'Real Client Logo 12' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d608c6953a04cab67_Real%20Client%20Logo-12.svg', alt: 'Real Client Logo 13' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ce8da41cacf80a1b9_Real%20Client%20Logo-13.svg', alt: 'Real Client Logo 14' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e99f93f7544b2eda3f6db_Real%20Client%20Logo.svg', alt: 'Real Client Logo 15' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735cb23566f9b0c44b6e_Real%20Client%20Logo-14.svg', alt: 'Real Client Logo 16' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d3f0912b6a3299912_Real%20Client%20Logo-15.svg', alt: 'Real Client Logo 17' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d776fe93c795a5931_Real%20Client%20Logo-16.svg', alt: 'Real Client Logo 18' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735cd1615d56ca50dbb9_Real%20Client%20Logo-17.svg', alt: 'Real Client Logo 19' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d776fe93c795a59bc_Real%20Client%20Logo-18.svg', alt: 'Real Client Logo 20' },
  { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ea3cd368917f23a7b_Real%20Client%20Logo-10.svg', alt: 'Real Client Logo 21' },
];

const duplicatedClients = [...clients, ...clients]; // For seamless mobile marquee loop

export default function Clients() {
  return (
    <section 
      className="pb-6 lg:pb-0 border-b md:border-b-0" 
      role="region" 
      aria-label="Trusted clients"
    >
      {/* Top Border & Text */}
      <div className="lg:border-b border-t md:border-t-0">
        <div className="container">
          <p className="font-suisseMono lg:text-base text-14 leading-20 uppercase text-center text-[#9F9F9F] py-[22px]">
            Trusted by 120+ high-growth startups
          </p>
        </div>
      </div>

      {/* Logos Container */}
      <div className="w-full overflow-hidden lg:overflow-visible">
        <div className="container relative lg:py-[50px]">
          {/* Desktop: Static Flex Wrap */}
          <div className="max-w-[1210px] mx-auto hidden lg:flex lg:flex-wrap justify-center clients-img gap-[18px]">
            {clients.map((client, index) => (
              <Image
                key={`desktop-${index}`}
                src={client.src}
                alt={client.alt}
                width={100}
                height={50}
                className="h-auto w-auto max-h-[50px] opacity-70 hover:opacity-100 focus:opacity-100 transition-opacity duration-300" // Added focus for accessibility
                loading={index < 3 ? "eager" : "lazy"} // Priority for first few
                unoptimized // SVGs don't need Next.js optimization
              />
            ))}
          </div>

          {/* Mobile: Animated Marquee */}
          <div data-animated="true" className="lg:hidden">
            <div 
              data-type="marquee-inner" 
              className="w-full flex clients-img gap-[18px] flex-nowrap marquee-track" // Added marquee-track for CSS animation; flex-nowrap for horizontal
            >
              {duplicatedClients.map((client, index) => (
                <Image
                  key={`mobile-${index}`}
                  src={client.src}
                  alt={client.alt}
                  width={80}
                  height={40}
                  className="h-auto w-auto max-h-[40px] opacity-70 flex-shrink-0" // flex-shrink-0 prevents compression
                  loading="lazy"
                  unoptimized
                />
              ))}
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="circle -left-1 -bottom-5" aria-hidden="true"></div>
          <div className="circle -right-1 -bottom-5" aria-hidden="true"></div>
          <div className="circle -left-1 -top-5" aria-hidden="true"></div>
          <div className="circle -right-1 -top-5" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}