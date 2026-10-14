
"use client";

import { Leaf, ArrowRight } from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";

interface AnnouncementBarProps {
  onOpenConsultation: () => void;
}

export const AnnouncementBar = ({
  onOpenConsultation,
}: AnnouncementBarProps) => {
  return (
    <aside
      aria-label="Practice announcement"
      className="relative z-50 bg-[#344E41] text-[#F8F5EF]"
    >
      <div className="mx-auto flex min-h-[30px] max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-1 px-4 py-2 sm:min-h-[34px] sm:justify-between sm:px-8 lg:px-12">
        {/* Announcement message */}
        <div className="flex items-center justify-center gap-2.5">
          <Leaf
            size={15}
            strokeWidth={1.5}
            className="shrink-0 text-[#DDE8DD]"
          />
          <p className="text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-[9px]">
            {THERAPIST_PROFILE.announcement.text ||
              "A kind, confidential space for healing and growth"}
          </p>
        </div>

        {/* Practice details */}
        <div className="hidden items-center gap-3 text-[8px] font-medium uppercase tracking-[0.12em] text-white/80 sm:flex">
          <span>In-person in Santa Monica</span>

          <span
            aria-hidden="true"
            className="h-3 w-px bg-white/35"
          />

          <span>Online across California</span>

          <button
            type="button"
            onClick={onOpenConsultation}
            aria-label="Book a consultation"
            className="ml-1 inline-flex items-center gap-1 text-white transition-colors hover:text-[#DDE8DD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </aside>
  );
};
