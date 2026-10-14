
"use client";

import {
  GraduationCap,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection = ({
  onOpenConsultation,
}: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[#344E41]/10 bg-[#F8DFD5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Portrait and credentials */}
          <div className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-[#B98773]/40 sm:-right-4 sm:-top-4 sm:h-32 sm:w-32"
              />

              <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-[#FFFDF8] p-2 shadow-[0_15px_45px_rgba(75,55,43,0.10)]">
                <img
                  src={THERAPIST_PROFILE.images.portrait}
                  alt={`Portrait of ${THERAPIST_PROFILE.name}`}
                  className="aspect-[4/4.4] w-full rounded-[18px] object-cover object-top"
                  loading="lazy"
                />

                <div className="flex items-center justify-between gap-3 px-3 py-4">
                  <div>
                    <p className="font-serif text-lg font-medium text-[#26392F]">
                      {THERAPIST_PROFILE.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#68766D]">
                      {THERAPIST_PROFILE.licenseTitle}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DDE8DD] text-[#344E41]">
                    <Sparkles size={19} />
                  </span>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-4 rounded-2xl border border-white/80 bg-[#FFFDF8]/90 p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDE8DD] text-[#344E41]">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#344E41]">
                    Professional details
                  </p>
                  <p className="mt-1 text-xs text-[#68766D]">
                    Education and practice information
                  </p>
                </div>
              </div>

              <dl className="space-y-3">
                {THERAPIST_PROFILE.about.credentialsList.map((cred) => (
                  <div
                    key={cred.label}
                    className="grid grid-cols-1 gap-1 border-b border-[#344E41]/10 pb-3 last:border-0 last:pb-0 sm:grid-cols-[0.8fr_1.2fr] sm:gap-4"
                  >
                    <dt className="text-xs leading-5 text-[#68766D]">
                      {cred.label}
                    </dt>
                    <dd className="text-sm font-medium leading-5 text-[#26392F] sm:text-right">
                      {cred.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-7 lg:pl-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#A66F5C]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#765648] sm:text-[10px]">
                {THERAPIST_PROFILE.about.eyebrow}
              </span>
            </div>

            <h2 className="max-w-[650px] font-serif text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#26392F] sm:text-5xl lg:text-[3.5rem]">
              {THERAPIST_PROFILE.about.heading}
            </h2>

            <div className="mt-6 max-w-[640px] space-y-4 text-sm leading-7 text-[#526257] sm:text-base sm:leading-8">
              {THERAPIST_PROFILE.about.bioParagraphs.map((paragraph, index) => (
                <p key={`${index}-${paragraph.slice(0, 20)}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Practice information */}
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/80 bg-white/50 p-4 sm:items-center sm:p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F5EF] text-[#8B5C4B]">
                <MapPin size={19} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#26392F]">
                  Practice location
                </p>
                <p className="mt-1 text-xs leading-5 text-[#68766D]">
                  Santa Monica office and California telehealth
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#344E41] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-[#26392F] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52685A] focus-visible:ring-offset-2"
            >
              Connect with Dr. Reynolds
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
