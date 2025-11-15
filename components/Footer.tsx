// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative z-10 mt-16 md:mt-0"
      id="cal"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Background Images */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[#191B18]">
        <Image
          alt=""
          loading="lazy"
          decoding="async"
          fill
          className="mix-blend-soft-light object-cover"
          sizes="100vw"
          src="https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e6e0e9c2f96b2c68b0339_image%2010652.png"
        />
        <Image
          alt=""
          loading="lazy"
          decoding="async"
          fill
          className="opacity-15 object-cover"
          sizes="100vw"
          src="https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e76455d280cb73643dd43_footer-bg.png"
        />
      </div>

      {/* Top Border */}
      <div className="md:h-[64px] h-[30px] w-full border-y border-[#414141] block"></div>

      {/* Title Section */}
      <div className="container relative section-title-container z-50">
        <div className="lg:py-[2rem] py-7 pl-5 lg:pl-[46px]">
          <p className="font-suisseMono lg:text-xl text-base leading-20 lg:leading-24 tracking-0.14 text-[#FB580D] mb-2 uppercase font-normal">
            Get in touch.
          </p>
          <h2 className="section-title font-suisse lg:text-60 text-32 leading-42 font-medium lg:leading-60 text-[#DBDBDB]">
            Ready To Join
          </h2>
          <h2 className="section-title font-suisse lg:text-60 text-32 leading-42 font-medium lg:leading-60 text-[#848584]">
            The Winning Side?
          </h2>
        </div>
      </div>

      {/* CAL Embed Placeholder */}
      <div className="border-y border-[#414141] relative z-10">
        <div className="container relative px-0">
          <div className="border-x border-[#414141] max-w-[1210px] lg:mx-auto pt-4 lg:pt-[72px] mx-4 pb-4 lg:pb-0 min-h-[50px] lg:min-h-[72px]"></div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative border-x lg:border-x-0 mx-4 lg:mx-0 border-[#414141]">
        <div className="container relative">
          <div className="md:max-w-[475px] max-w-[320px] mx-auto flex justify-center items-center flex-col md:pt-10 pt-7 pb-7 md:pb-8">

            {/* ✅ CODIEZZ footer logo */}
            <Image
              alt="Codiezz Footer Logo"
              loading="lazy"
              width={240}
              height={90}
              className="opacity-90 bg-white rounded-2xl"
              src="/logoname.png"  // Ensure footer.svg exists in /public
            />

            {/* Social links */}
            <nav className="flex items-center w-full md:pt-[56px] pt-8 pb-12 justify-between">
              <Link className="footer-link" href="https://linkedin.com" target="_blank">LinkedIn</Link>
              <Link className="footer-link" href="https://instagram.com" target="_blank">Instagram</Link>
              <Link className="footer-link" href="https://x.com" target="_blank">Twitter</Link>
            </nav>

            <p className="font-suisseMono md:text-base text-12 text-center uppercase text-[#9f9f9f]">
              2025 — Codiezz. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
