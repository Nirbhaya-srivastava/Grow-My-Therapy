
"use client";

import { useState } from "react";
import {
  MapPin,
  Eye,
  Check,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Heart,
} from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";

const featureIcons = [ShieldCheck, Clock, Sparkles, Heart];

const practiceFeatures = [
  "Convenient parking nearby",
  "Elevator and accessible building",
  "A welcoming private waiting area",
];

export const OfficeSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const gallery = THERAPIST_PROFILE.office.gallery;
  const activeImage = gallery[activeImageIndex];

  return (
    <section
      id="office"
      className="border-b border-[#344E41]/10 bg-[#F8F5EF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {/* Editorial heading */}
        <div className="mb-10 grid gap-5 lg:mb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#8AA38D]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#52685A]">
                {THERAPIST_PROFILE.office.eyebrow}
              </span>
            </div>

            <h2 className="max-w-[650px] font-serif text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#26392F] sm:text-5xl lg:text-[3.5rem]">
              {THERAPIST_PROFILE.office.heading}
            </h2>
          </div>

          <p className="max-w-[490px] text-sm leading-7 text-[#68766D] sm:text-base sm:leading-8 lg:justify-self-end">
            {THERAPIST_PROFILE.office.description}
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Interactive photo gallery */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-[22px] border border-[#E3E7DF] bg-white shadow-[0_8px_30px_rgba(38,57,47,0.05)]">
              <div className="relative overflow-hidden bg-[#DDE8DD]">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="h-[280px] w-full object-cover transition-opacity duration-300 sm:h-[390px] lg:h-[455px]"
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-[#FFFDF8]/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#344E41] shadow-sm backdrop-blur-sm sm:left-5 sm:top-5">
                  {activeImage.tag}
                </span>
              </div>

              <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#26392F]">
                    {activeImage.caption}
                  </h3>
                  <p className="mt-1 text-xs text-[#68766D]">
                    A look inside the practice
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#F8F5EF] px-3 py-2 text-xs text-[#526257] sm:self-center">
                  <Eye size={15} className="text-[#52685A]" />
                  Photo {activeImageIndex + 1} of {gallery.length}
                </div>
              </div>
            </div>

            {/* Gallery thumbnails */}
            <div className="mt-4 grid grid-cols-3 gap-2.5 sm:gap-3">
              {gallery.map((img, index) => {
                const isActive = activeImageIndex === index;

                return (
                  <button
                    key={img.tag}
                    type="button"
                    aria-label={`View ${img.tag}`}
                    aria-pressed={isActive}
                    onClick={() => setActiveImageIndex(index)}
                    className={`group min-w-0 overflow-hidden rounded-xl border-2 p-1.5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52685A] focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-[#52685A] bg-[#DDE8DD]"
                        : "border-transparent bg-white hover:border-[#A9C8BA]"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-16 w-full rounded-lg object-cover sm:h-24"
                      loading="lazy"
                    />
                    <span className="block truncate px-1 pb-1 pt-2 text-[9px] font-semibold text-[#344E41] sm:text-xs">
                      {img.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Practice location and details */}
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[22px] border border-[#D1DDCD] bg-[#DDE8DD]">
              <div className="p-5 sm:p-6 lg:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#42634D]">
                    <MapPin size={20} />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#607B66]">
                      Visit the practice
                    </p>
                    <h3 className="mt-1 font-serif text-2xl font-medium text-[#26392F]">
                      Office location
                    </h3>
                  </div>
                </div>

                <div className="rounded-xl border border-white/80 bg-white/80 p-4">
                  <p className="font-serif text-lg leading-snug text-[#26392F]">
                    {THERAPIST_PROFILE.office.address}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#68766D]">
                    Santa Monica, California 90401
                  </p>
                </div>

                <div className="mt-5 space-y-3 border-t border-[#344E41]/10 pt-5">
                  {practiceFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-xs leading-5 text-[#526257]"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-[#42634D]"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-[#344E41]/10 bg-white/50 px-5 py-4 sm:px-6 lg:px-7">
                <span className="text-xs font-medium text-[#526257]">
                  In-person &amp; online sessions
                </span>
                <ArrowUpRight size={16} className="text-[#52685A]" />
              </div>
            </div>

            {/* Supporting feature cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {THERAPIST_PROFILE.office.features.map((feature, index) => {
                const FeatureIcon = featureIcons[index % featureIcons.length];

                return (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-[#E3E7DF] bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                  >
                    <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8DD] text-[#607B66]">
                      <FeatureIcon size={18} strokeWidth={1.6} />
                    </span>

                    <h4 className="font-serif text-base font-medium text-[#26392F]">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-[#68766D]">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
