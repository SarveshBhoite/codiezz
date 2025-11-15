// components/FAQ.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const faqItems = [
  {
    id: 1,
    question: "What does Codiezz specialize in?",
    answer:
      "We build high-quality websites and web applications using Next.js, MERN stack, and modern UI/UX. Our services include portfolio websites, business sites, landing pages, custom client projects, and full-stack development."
  },
  {
    id: 2,
    question: "How long does it take to build a website with Codiezz?",
    answer:
      "Simple websites (portfolio/landing pages) take 3–7 days. Full business websites or ecommerce platforms take 1–3 weeks depending on the features, integrations, and revisions."
  },
  {
    id: 3,
    question: "What do you need from me to get started?",
    answer:
      "We just need your basic requirements, content (if available), and design references. If you don’t have content or design, we will create everything for you — from branding to UI/UX to final development."
  },
  {
    id: 4,
    question: "Do you provide monthly maintenance or support?",
    answer:
      "Yes. Codiezz offers optional monthly support plans that include updates, bug fixes, improvements, new pages, and ongoing development support."
  },
  {
    id: 5,
    question: "Can you build custom features for my business?",
    answer:
      "Absolutely. Whether it's user login, dashboards, admin panels, payment gateways, carts, booking systems, or custom workflows — we develop everything from scratch according to your business needs."
  },
  {
    id: 6,
    question: "What is your pricing structure?",
    answer:
      "Pricing depends on the project type. Landing pages start at affordable rates, while full-stack websites and ecommerce platforms vary based on complexity and integrations. After understanding your requirements, we share a clear quotation with no hidden charges."
  },
  {
    id: 7,
    question: "How will we communicate during the project?",
    answer:
      "We stay connected through WhatsApp, Zoom/Google Meet calls, and regular project updates. You will get continuous progress reports and can request changes anytime during the project."
  }
];


// Accordion Toggle Icon
const AccordionIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={clsx(
      "transition-transform size-5 flex-shrink-0 duration-300",
      isOpen && "rotate-90"
    )}
    aria-hidden="true"
  >
    <path
      d="M12 5V19"
      stroke="#272727"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 12H19"
      stroke="#272727"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        isOpen && "opacity-0",
        "transition-opacity duration-300"
      )}
    />
  </svg>
);

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(faqItems[0]?.id ?? null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative" role="region" aria-label="Frequently Asked Questions">
      <div className="h-[64px] w-full border-y border-light-gray hidden md:block"></div>

      {/* Section Title */}
      <div className="container relative section-title-container">
        <div className="lg:py-8 py-7 pl-5 lg:pl-[46px]">
          <p className="font-suisseMono lg:text-xl text-base leading-[24px] tracking-[0.14px] text-[#8F8F8F] mb-2 uppercase font-normal">
            FAQ
          </p>
          <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium text-dark-gray">
            <span>Questions?</span>
          </h2>
          <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] mt-20px font-medium text-dark-gray-50">
            <span>Answers.</span>
          </h2>
        </div>
      </div>

      {/* FAQ List */}
      <div className="border-t border-light-gray">
        <div className="container grid lg:grid-cols-12 grid-cols-1 px-0">
          <div className="lg:col-span-9 relative border-r-0 lg:border-r border-light-gray">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={clsx(
                  "relative border-b border-light-gray",
                  index === faqItems.length - 1 && "lg:border-b-0"
                )}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-${item.id}`}
                  className="md:rounded-[24px] rounded-[14px] cursor-pointer md:m-5 m-3 block transition-all duration-300 w-[calc(100%-24px)] md:w-[calc(100%-40px)]"
                >
                  <div className="flex justify-between items-center gap-4 md:py-7 py-4 pl-4 pr-6">
                    <div className="flex md:gap-6 gap-4 items-center min-w-0 flex-1">
                      <p className="font-suisseMono font-normal md:text-xl text-xs text-[#8F8F8F] whitespace-nowrap flex-shrink-0">
                        / {String(item.id).padStart(2, '0')}
                      </p>
                      <p className="font-suisse font-normal md:text-xl lg:text-2xl text-base leading-[1.3] text-dark-gray">
                        {item.question}
                      </p>
                    </div>
                    <AccordionIcon isOpen={openId === item.id} />
                  </div>
                </button>

                <div
                  id={`faq-${item.id}`}
                  className={clsx(
                    "transition-all duration-500 ease-in-out overflow-hidden",
                    openId === item.id ? "max-h-[1000px] pb-7" : "max-h-0 pb-0"
                  )}
                >
                  <div className="md:ml-[90px] ml-16 md:pr-8 pr-4">
                    <p
                      className="font-suisse lg:text-xl md:text-base text-sm leading-relaxed font-normal text-dark-gray-50"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Fixed: correct logo reference */}
          <div className="lg:col-span-3 relative hidden lg:flex">
            <div className="bg-[url('/logobg.png')] bg-dark-gray p-8 rounded-[24px] m-5 flex flex-col gap-2 items-start w-full bg-cover bg-center">
              <div className="rounded-[13px] overflow-hidden size-16 relative">
                <Image
                  alt="Codiezz Logo"
                  fill
                  className="object-cover"
                  sizes="64px"
                  src="/logobg.png"
                />
              </div>
              <p className="font-suisse text-2xl leading-tight text-white max-w-[180px]">
                Feel free to reach out whenever you{" "}
                <span className="text-[#000] bg-teal-400">have questions.</span>
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto rounded-full px-5 py-3 text-white font-suisse text-base flex flex-col gap-4 bg-[#FFFFFF2E] border border-white/15 hover:bg-[#FFFFFF3F] transition-colors w-full"
                href="https://wa.me/"
              >
                <span>Ask a question</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
