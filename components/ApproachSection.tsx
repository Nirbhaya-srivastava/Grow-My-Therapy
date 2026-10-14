
"use client";

import {
  ShieldCheck,
  Compass,
  HeartHandshake,
  Sparkles,
  ArrowUpRight,
  Leaf,
} from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";

const iconStyles = [
  {
    bg: "bg-[#DDE8DD]",
    color: "text-[#42634D]",
  },
  {
    bg: "bg-[#E9DDF8]",
    color: "text-[#67517E]",
  },
  {
    bg: "bg-[#F8DFD5]",
    color: "text-[#8B5C4B]",
  },
  {
    bg: "bg-[#F9EDC9]",
    color: "text-[#82682E]",
  },
];

const modalities = [
  {
    title: "Cognitive Behavioral (CBT)",
    description:
      "Explore unhelpful thought patterns and develop more constructive ways to respond.",
  },
  {
    title: "EMDR Therapy",
    description:
      "A structured therapeutic approach for processing distressing experiences.",
  },
  {
    title: "Mindfulness-Based",
    description:
      "Develop present-moment awareness and a more balanced relationship with your thoughts.",
  },
  {
    title: "Somatic Regulation",
    description:
      "Explore body awareness and regulation strategies as part of your therapeutic work.",
  },
];

export const ApproachSection = () => {
  const getPillarIcon = (index: number) => {
    const iconClass = "h-5 w-5";

    switch (index) {
      case 0:
        return <ShieldCheck className={iconClass} strokeWidth={1.6} />;
      case 1:
        return <HeartHandshake className={iconClass} strokeWidth={1.6} />;
      case 2:
        return <Compass className={iconClass} strokeWidth={1.6} />;
      default:
        return <Sparkles className={iconClass} strokeWidth={1.6} />;
    }
  };

  return (
    <section
      id="approach"
      className="relative overflow-hidden border-b border-[#344E41]/10 bg-[#F9EDC9] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="mb-10 grid gap-5 lg:mb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#9A986B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6B704F]">
                {THERAPIST_PROFILE.approach.eyebrow}
              </span>
            </div>

            <h2 className="max-w-[680px] font-serif text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#26392F] sm:text-5xl lg:text-[3.5rem]">
              {THERAPIST_PROFILE.approach.heading}
            </h2>
          </div>

          <p className="max-w-[490px] text-sm leading-7 text-[#626957] sm:text-base sm:leading-8 lg:justify-self-end lg:pb-1">
            {THERAPIST_PROFILE.approach.subheading}
          </p>
        </div>

        {/* Approach pillars */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {THERAPIST_PROFILE.approach.pillars.map((pillar, index) => {
            const style = iconStyles[index % iconStyles.length];

            return (
              <article
                key={pillar.title}
                className="group flex min-h-[240px] flex-col rounded-[20px] border border-white/80 bg-[#FFFDF8] p-5 shadow-[0_4px_18px_rgba(38,57,47,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(38,57,47,0.08)] sm:p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${style.bg} ${style.color} transition-transform duration-300 group-hover:rotate-[-5deg]`}
                  >
                    {getPillarIcon(index)}
                  </span>

                  <span className="font-serif text-sm italic text-[#8A8B78]">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium leading-snug text-[#26392F]">
                  {pillar.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#687066]">
                  {pillar.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#344E41]/10 pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#60735E]">
                    Personalized care
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[#60735E] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Therapeutic methods */}
        <div className="mt-6 rounded-[22px] border border-[#DADAB8] bg-[#F4E8B9]/70 p-5 sm:mt-8 sm:p-7 lg:p-8">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[#6B704F]">
                <Leaf size={15} strokeWidth={1.7} />
                <span className="text-[9px] font-bold uppercase tracking-[0.17em]">
                  Therapeutic methods
                </span>
              </div>

              <h3 className="max-w-xl font-serif text-2xl font-medium leading-tight text-[#26392F] sm:text-3xl">
                Thoughtful tools for meaningful change.
              </h3>
            </div>

            <p className="max-w-sm text-xs leading-6 text-[#626957]">
              The approach is adapted to each person&apos;s needs, goals, and
              preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {modalities.map((modality, index) => (
              <article
                key={modality.title}
                className="border-t border-[#8E906C]/35 pt-4"
              >
                <span className="font-serif text-sm italic text-[#8A8B78]">
                  0{index + 1}
                </span>

                <h4 className="mt-2 font-serif text-lg font-medium leading-snug text-[#344E41]">
                  {modality.title}
                </h4>

                <p className="mt-2 text-xs leading-6 text-[#626957]">
                  {modality.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
