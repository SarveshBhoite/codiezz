// components/ProjectShowcase.tsx
"use client";

import Image from "next/image";

const projects = [
  {
    src: "/careerpath.png",
    alt: "careerpath site",
    caption: "Career Path Website",
    url: "https://sihproject-xi.vercel.app/", 
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370,
  },
  {
    src: "/doda1.png",
    alt: "Doda Properties Website",
    caption: "Doda Properties Website",
    url: "https://dodaproperties.in",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370,
  },
  {
    src: "/mess1.png",
    alt: "Suvarna Mess Services",
    caption: "Suvarna Mess Services",
    url: "https://messservice.vercel.app/",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370,
  },
  {
    src: "/shravan1.png",
    alt: "Shravan Electricals Website",
    caption: "Shravan Electricals Website",
    url: "https://shravanelectricals.com",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370,
  },
  {
    src: "/preplyte1.png",
    alt: "Preplyte",
    caption: "Preplyte",
    url: "https://sih25106-inky.vercel.app/",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370,
  },
  {
    src: "/evenisers1.png",
    alt: "Evenisers",
    caption: "Event Management Site",
    url: "https://eventmanagment-ashen.vercel.app/",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370,
  },
  {
    src: "/aiassistent1.png",
    alt: "AI content creator",
    caption: "AI Content Generator",
    url: "https://ai-creativity-assistant.vercel.app/",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370,
  },
];

// Duplicate list for infinite loop effect
const duplicatedProjects = [...projects, ...projects];

export default function ProjectShowcase() {
  return (
    <section id="work" className="relative">
      {/* Section Divider */}
      <div className="h-[48px] w-full border-y border-light-gray hidden md:block"></div>

      {/* Title */}
      <div className="container relative section-title-container">
        <div className="lg:py-[2rem] py-7 pl-5 lg:pl-[46px] section-title-wrap">
          <p className="font-suisseMono lg:text-xl text-base text-[#8F8F8F] mb-2 uppercase">
            Want to see our work?
          </p>

          <div className="title-wrapper overflow-hidden">
            <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium text-dark-gray">
              <span>Projects</span>
            </h2>
            <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[52px] mt-20px font-medium text-dark-gray-50">
              <span>Showcase</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Showcase Section */}
      <div className="border-t w-full border-b md:border-b-0 border-light-gray">
        <div className="container relative">
          <div className="overflow-hidden lg:border-x border-light-gray relative px-0">
            {/* Desktop Slider */}
            <div className="hidden md:block overflow-hidden w-full">
              <div className="project-slider-track flex gap-6 w-max">
                {duplicatedProjects.map((project, index) => (
                  <div
                    key={`desktop-${index}`}
                    className="flex-shrink-0 my-8"
                    style={{ width: `${project.widthLarge}px` }}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative rounded-xl overflow-hidden shadow-sm bg-F1F5F9 h-[333px] md:h-[445px]">
                        <Image
                          alt={project.alt}
                          loading={index < 3 ? "eager" : "lazy"}
                          width={project.widthLarge}
                          height={project.heightLarge}
                          className="object-cover w-full h-full"
                          src={project.src}
                        />
                      </div>

                      <p className="font-suisse text-sm text-[#6B7280] mt-3 text-center">
                        {project.caption}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="flex overflow-x-auto scrollbar-none gap-4 md:hidden -mx-5 px-5 py-4">
              {projects.map((project, index) => (
                <div
                  key={`mobile-${index}`}
                  className="h-auto flex-shrink-0 flex flex-col gap-3 my-4"
                  style={{ width: `${project.widthSmall}px` }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="h-[333px] overflow-hidden shadow-sm rounded-xl bg-F1F5F9 relative">
                      <Image
                        alt={project.alt}
                        loading="lazy"
                        width={project.widthSmall}
                        height={project.heightSmall}
                        className="object-cover w-full h-full"
                        src={project.src}
                      />
                    </div>

                    <p className="font-suisse text-xs text-dark-gray-50 text-center">
                      {project.caption}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slider Animation */}
      <style jsx>{`
        @keyframes project-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .project-slider-track {
          animation: project-slide 58s linear infinite;
        }

        .project-slider-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
