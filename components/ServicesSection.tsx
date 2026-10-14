
"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Brain,
  HeartPulse,
  RefreshCw,
  X,
  Leaf,
} from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";
import type { ServiceItem } from "../types";

interface ServicesSectionProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

const cardStyles = [
  {
    background: "bg-[#F8DFD5]",
    border: "border-[#EBD1C5]",
    icon: "bg-[#F4CFC0]",
    accent: "text-[#8B5C4B]",
  },
  {
    background: "bg-[#DDE8DD]",
    border: "border-[#D1DDCD]",
    icon: "bg-[#CEDDCA]",
    accent: "text-[#42634D]",
  },
  {
    background: "bg-[#E9DDF8]",
    border: "border-[#DDD0EE]",
    icon: "bg-[#DCCBF1]",
    accent: "text-[#67517E]",
  },
];

export const ServicesSection = ({
  onSelectServiceForConsult,
}: ServicesSectionProps) => {
  const [activeModalService, setActiveModalService] =
    useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "anxiety-panic":
        return <Brain size={24} strokeWidth={1.6} />;
      case "trauma-emdr":
        return <HeartPulse size={24} strokeWidth={1.6} />;
      case "burnout-perfectionism":
        return <RefreshCw size={24} strokeWidth={1.6} />;
      default:
        return <Sparkles size={24} strokeWidth={1.6} />;
    }
  };

  return (
    <section
      id="services"
      className="border-b border-[#344E41]/10 bg-[#F8F5EF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#78917D]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.19em] text-[#52685A] sm:text-[10px]">
              Areas of clinical specialization
            </span>
            <span className="h-px w-7 bg-[#78917D]" />
          </div>

          <h2 className="font-serif text-3xl font-medium leading-tight tracking-[-0.04em] text-[#26392F] sm:text-4xl lg:text-5xl">
            Support for where you are.
            <span className="mt-1 block italic text-[#607B66]">
              Space for where you&apos;re going.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#68766D] sm:text-base">
            Thoughtful, personalized therapy to help you navigate challenges,
            understand yourself more deeply, and build a more fulfilling life.
          </p>
        </div>

        {/* Pastel service cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {THERAPIST_PROFILE.services.map((service, index) => {
            const style = cardStyles[index % cardStyles.length];

            return (
              <article
                key={service.id}
                className={`group flex h-full flex-col rounded-[22px] border ${style.border} ${style.background} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(38,57,47,0.09)] sm:p-7`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon} ${style.accent} transition-transform duration-300 group-hover:rotate-[-5deg]`}
                  >
                    {getServiceIcon(service.id)}
                  </div>

                  <span className="font-serif text-3xl italic text-[#26392F]/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium leading-snug tracking-tight text-[#26392F]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#526257]">
                  {service.shortDesc}
                </p>

                <div className="mt-6 border-t border-[#344E41]/15 pt-5">
                  <p
                    className={`mb-4 text-[9px] font-bold uppercase tracking-[0.15em] ${style.accent}`}
                  >
                    Common focus areas
                  </p>

                  <ul className="space-y-3">
                    {service.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="flex items-start gap-2.5 text-sm leading-5 text-[#34443A]"
                      >
                        <Check
                          size={15}
                          className={`mt-0.5 shrink-0 ${style.accent}`}
                          strokeWidth={2.5}
                        />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-7">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForConsult(service.title)}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#344E41] px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#26392F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52685A] focus-visible:ring-offset-2"
                  >
                    Book a consultation
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className={`mt-4 inline-flex w-full items-center justify-center gap-2 text-xs font-semibold ${style.accent} transition hover:text-[#26392F]`}
                  >
                    Explore this service
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing call to action */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#E3E7DF] bg-white/80 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
          <div>
            <h3 className="font-serif text-xl text-[#26392F]">
              Not sure where to begin?
            </h3>
            <p className="mt-1 text-sm leading-6 text-[#68766D]">
              Start with a conversation about what you need.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onSelectServiceForConsult("General Psychotherapy / Unsure")
            }
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[#344E41]/25 px-5 py-3 text-xs font-semibold text-[#344E41] transition hover:bg-[#DDE8DD] sm:self-center"
          >
            Let&apos;s connect
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Service details modal */}
      {activeModalService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#26392F]/55 p-4 backdrop-blur-sm sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setActiveModalService(null);
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-[#E3E7DF] bg-[#F8F5EF] p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-[#344E41]/15 pb-5">
              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#607B66]">
                  Clinical specialization
                </p>
                <h3
                  id="service-modal-title"
                  className="font-serif text-3xl leading-tight text-[#26392F]"
                >
                  {activeModalService.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                aria-label="Close dialog"
                className="rounded-full border border-[#344E41]/15 p-2 text-[#344E41] transition hover:bg-[#DDE8DD]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 space-y-6 text-sm leading-7 text-[#526257]">
              <div>
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-[#344E41]">
                  Clinical overview
                </h4>
                <p>{activeModalService.fullDesc}</p>
              </div>

              <div className="rounded-2xl border border-[#D1DDCD] bg-[#DDE8DD] p-5">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-[#344E41]">
                  Who this may be suitable for
                </h4>
                <p>{activeModalService.idealFor}</p>
              </div>

              <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#344E41]">
                  Key focus areas
                </h4>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {activeModalService.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-[#607B66]"
                      />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-[#344E41]/15 pt-5 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForConsult(title);
                }}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#344E41] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#26392F]"
              >
                Request consultation
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="rounded-full border border-[#344E41]/20 px-5 py-3 text-sm font-medium text-[#344E41] transition hover:bg-[#DDE8DD]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
