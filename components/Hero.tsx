
"use client";

import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Heart,
  Leaf,
} from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero = ({ onOpenConsultation }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#344E41]/10 bg-[#F8F5EF]"
    >
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        {/* Left: editorial introduction */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-14 xl:px-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 shrink-0 bg-[#78917D]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#52685A] sm:text-[10px]">
              {THERAPIST_PROFILE.hero.eyebrow}
            </span>
          </div>

          <h1 className="max-w-[570px] font-serif text-[2.65rem] font-medium leading-[1.04] tracking-[-0.045em] text-[#26392F] sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
            {THERAPIST_PROFILE.hero.heading}
          </h1>

          <p className="mt-5 max-w-[490px] text-sm leading-6 text-[#626D63] sm:text-[15px] sm:leading-7">
            {THERAPIST_PROFILE.hero.subheading}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#356B55] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#26392F] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52685A] focus-visible:ring-offset-2"
            >
              {THERAPIST_PROFILE.hero.primaryCta}
              <ArrowRight size={14} />
            </button>

            <a
              href="#services"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#78917D]/70 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-[#344E41] transition hover:bg-white"
            >
              {THERAPIST_PROFILE.hero.secondaryCta}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#344E41]/10 pt-5 sm:grid-cols-3 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDE8DD] text-[#52685A]">
                <ShieldCheck size={17} strokeWidth={1.6} />
              </span>
              <span className="text-[10px] leading-[1.5] text-[#526257]">
                Licensed
                <span className="block">Clinical Psychologist</span>
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8DFD5] text-[#986B56]">
                <MapPin size={17} strokeWidth={1.6} />
              </span>
              <span className="text-[10px] leading-[1.5] text-[#526257]">
                Santa Monica, CA
                <span className="block">In-person & online</span>
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDE8DD] text-[#52685A]">
                <Heart size={17} strokeWidth={1.6} />
              </span>
              <span className="text-[10px] leading-[1.5] text-[#526257]">
                Evidence-based
                <span className="block">Care & EMDR</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="relative min-h-[410px] overflow-hidden bg-[#E7E8DC] sm:min-h-[490px] lg:min-h-[500px] xl:min-h-[530px]">
          <img
            src={THERAPIST_PROFILE.images.portrait}
            alt="Portrait of Dr. Maya Reynolds"
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
          />

          {/* Soft transition along the text-facing edge */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-[#F8F5EF]/50 to-transparent lg:block" />

          {/* Floating credentials card */}
          <div className="absolute bottom-5 right-5 max-w-[245px] rounded-xl border border-white/80 bg-[#FFFDF8]/95 px-4 py-3.5 shadow-[0_8px_30px_rgba(38,57,47,0.12)] backdrop-blur-sm sm:bottom-7 sm:right-7 sm:px-5 sm:py-4">
            <p className="font-serif text-[15px] font-medium leading-snug text-[#26392F]">
              {THERAPIST_PROFILE.name}
            </p>
            <p className="mt-1 text-[10px] leading-4 text-[#737D73]">
              {THERAPIST_PROFILE.licenseTitle}
            </p>
            <span className="mt-3 block h-1 w-9 rounded-full bg-[#A9C8BA]" />
          </div>

          {/* Subtle botanical accent */}
          <div className="absolute right-5 top-5 hidden rounded-full border border-white/60 bg-[#FFFDF8]/75 p-3 text-[#52685A] sm:block">
            <Leaf size={20} strokeWidth={1.4} />
          </div>
        </div>
      </div>
    </section>
  );
};
