
"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export const FaqSection = ({
  onOpenConsultation,
}: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-[#493653]/10 bg-[#E9DDF8] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 h-64 w-64 rounded-full bg-white/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#F8DFD5]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[960px] px-5 sm:px-8">
        {/* Section heading */}
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#9B85B7]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#67517E]">
              Questions &amp; answers
            </span>
            <span className="h-px w-7 bg-[#9B85B7]" />
          </div>

          <h2 className="font-serif text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#26392F] sm:text-5xl lg:text-[3.5rem]">
            A little clarity
            <span className="mt-1 block italic text-[#67517E]">
              before we begin.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-[#5F5968] sm:text-base sm:leading-8">
            Transparent information about therapy, session formats, and
            getting started can help you feel more comfortable taking
            the next step.
          </p>
        </header>

        {/* Accessible FAQ accordion */}
        <div className="space-y-3">
          {THERAPIST_PROFILE.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-[18px] border transition-colors duration-200 ${
                  isOpen
                    ? "border-[#CBB9E1] bg-white shadow-[0_8px_24px_rgba(73,54,83,0.06)]"
                    : "border-white/80 bg-white/75 hover:border-[#CBB9E1] hover:bg-white"
                }`}
              >
                <button
                  id={triggerId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#67517E] sm:px-6 sm:py-6"
                >
                  <span className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-serif text-xs ${
                        isOpen
                          ? "bg-[#E9DDF8] text-[#67517E]"
                          : "bg-[#F8F5EF] text-[#68766D]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 font-serif text-base font-medium leading-snug text-[#26392F] sm:text-lg">
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#67517E] text-white"
                        : "bg-[#F0E9F7] text-[#67517E]"
                    }`}
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="px-4 pb-5 sm:pl-[4.75rem] sm:pr-8 sm:pb-6"
                  >
                    <div className="mb-4 h-px bg-[#493653]/10" />
                    <p className="text-sm leading-7 text-[#625E68] sm:text-[15px] sm:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Consultation call to action */}
        <div className="mt-8 overflow-hidden rounded-[22px] border border-white/80 bg-[#F8F5EF] sm:mt-10">
          <div className="flex flex-col gap-6 p-5 sm:p-7 md:flex-row md:items-center md:justify-between md:gap-8 lg:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#F8DFD5] text-[#8B5C4B]">
                <MessageCircle size={20} strokeWidth={1.7} />
              </span>

              <div>
                <h3 className="font-serif text-xl font-medium text-[#26392F] sm:text-2xl">
                  Still have questions?
                </h3>
                <p className="mt-2 max-w-[500px] text-sm leading-6 text-[#68766D]">
                  Discuss your questions, explore whether the approach
                  fits your needs, and learn about the next steps.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#344E41] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#26392F] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52685A] focus-visible:ring-offset-2"
            >
              Ask a question
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
