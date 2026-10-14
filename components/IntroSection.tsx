
"use client";

import React from "react";
import {
  HeartHandshake,
  Sprout,
  MessageCircleHeart,
} from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";

const benefits = [
  {
    icon: HeartHandshake,
    title: "A space to feel understood",
    description:
      "Explore what you're experiencing without pressure or judgment.",
    color: "bg-[#F8DFD5]",
    iconColor: "text-[#946B58]",
  },
  {
    icon: Sprout,
    title: "Growth at your own pace",
    description:
      "Build practical skills while honoring your individual journey.",
    color: "bg-[#DDE8DD]",
    iconColor: "text-[#52685A]",
  },
  {
    icon: MessageCircleHeart,
    title: "Care shaped around you",
    description:
      "Work together on an approach that reflects your needs and goals.",
    color: "bg-[#F9EDC9]",
    iconColor: "text-[#887441]",
  },
];

export const IntroSection: React.FC = () => {
  return (
    <section
      id="intro"
      className="border-b border-[#344E41]/10 bg-[#E9DDF8] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: main statement */}
          <div className="lg:col-span-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#8B7BA0]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#675580] sm:text-[10px]">
                {THERAPIST_PROFILE.intro.eyebrow}
              </span>
            </div>

            <h2 className="max-w-[610px] font-serif text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[#26392F] sm:text-4xl lg:text-[3.25rem]">
              {THERAPIST_PROFILE.intro.heading}
            </h2>

            <div className="mt-6 max-w-[570px] space-y-4 text-sm leading-7 text-[#505A52] sm:text-base sm:leading-8">
              {THERAPIST_PROFILE.intro.paragraphs.map((paragraph, index) => (
                <p key={`${index}-${paragraph.slice(0, 20)}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8B7BA0]" />
              <span className="font-serif text-sm italic text-[#675580]">
                A thoughtful place to begin again.
              </span>
            </div>
          </div>

          {/* Right: three benefit points */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/60 bg-[#F8F5EF]/65 p-5 sm:p-7 lg:p-8">
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.17em] text-[#675580]">
                What you can expect
              </p>

              <div className="divide-y divide-[#344E41]/10">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${benefit.color} ${benefit.iconColor}`}
                      >
                        <Icon size={20} strokeWidth={1.6} />
                      </span>

                      <div>
                        <h3 className="font-serif text-lg font-medium text-[#26392F]">
                          {benefit.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-[#687168]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
