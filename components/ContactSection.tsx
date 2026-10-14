
"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";
import type { ConsultationFormData } from "../types";

interface ContactSectionProps {
  preselectedService?: string;
}

const initialFormData = (
  service = "Anxiety and Panic Therapy"
): ConsultationFormData => ({
  fullName: "",
  email: "",
  phone: "",
  serviceInterest: service,
  sessionPreference: "in-person",
  locationConfirm: false,
  notes: "",
});

const sessionOptions = [
  { value: "in-person", label: "In person" },
  { value: "telehealth", label: "Telehealth" },
  { value: "flexible", label: "Either format" },
] as const;

const serviceOptions = [
  "Anxiety and Panic Therapy",
  "Trauma and EMDR Therapy",
  "Burnout and Perfectionism",
  "General Psychotherapy / Unsure",
];

export const ContactSection = ({
  preselectedService = "",
}: ContactSectionProps) => {
  const [formData, setFormData] = useState<ConsultationFormData>(() =>
    initialFormData(preselectedService || undefined)
  );
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((current) => ({
        ...current,
        serviceInterest: preselectedService,
      }));
    }
  }, [preselectedService]);

  const updateField = <K extends keyof ConsultationFormData>(
    field: K,
    value: ConsultationFormData[K]
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    const email = formData.email.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter a contact phone number.";
    }

    if (!formData.locationConfirm) {
      nextErrors.locationConfirm =
        "Please confirm the California location requirement.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate()) {
      // Demonstration only: no data is sent to a server.
      setSubmitted(true);
    }
  };

  const inputClass =
    "w-full rounded-xl border bg-[#FBF9F5] px-4 py-3 text-sm text-[#26392F] placeholder:text-[#8A9188] outline-none transition focus:border-[#52685A] focus:ring-4 focus:ring-[#52685A]/10";

  const labelClass = "mb-2 block text-sm font-medium text-[#344E41]";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-y border-[#344E41]/10 bg-[#F8F5EF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-9 lg:grid-cols-12 lg:gap-12">
          {/* Contact information */}
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-2 text-[#52685A]">
              <Sparkles size={15} />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Begin your care
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#26392F] sm:text-5xl lg:text-[3.4rem]">
              A small first step can open up new possibilities.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#626D63] sm:text-base sm:leading-8">
              Reach out to explore whether working together feels right
              for you. Review the practice contact information and complete
              the form to preview a consultation request.
            </p>

            <div className="mt-8 rounded-[22px] border border-[#344E41]/10 bg-white p-5 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7C897B]">
                Practice information
              </p>

              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8DFD5] text-[#755648]">
                    <MapPin size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#26392F]">
                      Office location
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#737D73]">
                      {THERAPIST_PROFILE.office.address}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#8A776B]">
                      Please verify the practice address before visiting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9DDF8] text-[#675580]">
                    <Mail size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#26392F]">
                      Email
                    </p>
                    <a
                      href={`mailto:${THERAPIST_PROFILE.contact.email}`}
                      className="mt-1 block break-all text-sm text-[#737D73] transition hover:text-[#344E41] hover:underline"
                    >
                      {THERAPIST_PROFILE.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DDE8DD] text-[#344E41]">
                    <Phone size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#26392F]">
                      Phone
                    </p>
                    <a
                      href={`tel:${THERAPIST_PROFILE.contact.phone}`}
                      className="mt-1 block text-sm text-[#737D73] transition hover:text-[#344E41] hover:underline"
                    >
                      {THERAPIST_PROFILE.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F9EDC9] text-[#77683A]">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#26392F]">
                      Practice hours
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#737D73]">
                      {THERAPIST_PROFILE.contact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation form */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[22px] border border-[#344E41]/10 bg-white shadow-[0_12px_45px_rgba(38,57,47,0.06)]">
              <div className="border-b border-[#344E41]/10 bg-[#DDE8DD]/45 px-5 py-6 sm:px-8 sm:py-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#52685A]">
                  Let&apos;s connect
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#26392F] sm:text-4xl">
                  Tell me a little about yourself.
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#737D73]">
                  Fields marked with * are required. This demo does not
                  transmit your information.
                </p>
              </div>

              <div className="p-5 sm:p-8">
                {submitted ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="py-8 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE8DD] text-[#344E41]">
                      <CheckCircle2 size={32} />
                    </div>

                    <h3 className="mt-6 font-serif text-3xl text-[#26392F]">
                      Form completed
                    </h3>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#737D73]">
                      Thank you,{" "}
                      <strong className="text-[#26392F]">
                        {formData.fullName}
                      </strong>
                      . Your form passed validation.
                    </p>

                    <div className="mx-auto mt-5 max-w-md rounded-2xl border border-[#D9C8B7] bg-[#F8F5EF] p-4 text-left">
                      <p className="text-sm font-semibold text-[#594638]">
                        Demonstration notice
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#715F51]">
                        Your request has not been sent or stored. No
                        appointment has been booked and no email has been
                        sent.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setErrors({});
                        setFormData(
                          initialFormData(preselectedService || undefined)
                        );
                      }}
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#344E41]/20 px-5 py-3 text-sm font-medium text-[#344E41] transition hover:bg-[#DDE8DD]/50"
                    >
                      Submit another inquiry
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className={labelClass}>
                          Full name *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          autoComplete="name"
                          required
                          value={formData.fullName}
                          onChange={(event) =>
                            updateField("fullName", event.target.value)
                          }
                          aria-invalid={Boolean(errors.fullName)}
                          aria-describedby={
                            errors.fullName ? "fullName-error" : undefined
                          }
                          placeholder="Your name"
                          className={`${inputClass} ${
                            errors.fullName
                              ? "border-red-400"
                              : "border-[#344E41]/15"
                          }`}
                        />
                        {errors.fullName && (
                          <p id="fullName-error" className="mt-2 text-xs text-red-600">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={(event) =>
                            updateField("email", event.target.value)
                          }
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          placeholder="you@example.com"
                          className={`${inputClass} ${
                            errors.email
                              ? "border-red-400"
                              : "border-[#344E41]/15"
                          }`}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-2 text-xs text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          value={formData.phone}
                          onChange={(event) =>
                            updateField("phone", event.target.value)
                          }
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={
                            errors.phone ? "phone-error" : undefined
                          }
                          placeholder="Your phone number"
                          className={`${inputClass} ${
                            errors.phone
                              ? "border-red-400"
                              : "border-[#344E41]/15"
                          }`}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-2 text-xs text-red-600">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="serviceInterest" className={labelClass}>
                          Area of focus
                        </label>
                        <select
                          id="serviceInterest"
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={(event) =>
                            updateField("serviceInterest", event.target.value)
                          }
                          className={`${inputClass} border-[#344E41]/15`}
                        >
                          {!serviceOptions.includes(formData.serviceInterest) && (
                            <option value={formData.serviceInterest}>
                              {formData.serviceInterest}
                            </option>
                          )}
                          {serviceOptions.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <fieldset>
                      <legend className={labelClass}>
                        Preferred session format
                      </legend>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {sessionOptions.map((option) => {
                          const selected =
                            formData.sessionPreference === option.value;

                          return (
                            <button
                              type="button"
                              key={option.value}
                              aria-pressed={selected}
                              onClick={() =>
                                updateField("sessionPreference", option.value)
                              }
                              className={`rounded-xl border px-3 py-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52685A] focus-visible:ring-offset-2 ${
                                selected
                                  ? "border-[#344E41] bg-[#344E41] text-white"
                                  : "border-[#344E41]/15 bg-[#FBF9F5] text-[#52685A] hover:border-[#52685A]"
                              }`}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="notes" className={labelClass}>
                        What would you like support with?{" "}
                        <span className="font-normal text-[#8A9188]">
                          (Optional)
                        </span>
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={(event) =>
                          updateField("notes", event.target.value)
                        }
                        placeholder="Share general goals or questions you would like to discuss..."
                        className={`${inputClass} resize-y border-[#344E41]/15`}
                      />
                    </div>

                    <div className="rounded-2xl bg-[#F8F5EF] p-4 sm:p-5">
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          name="locationConfirm"
                          checked={formData.locationConfirm}
                          onChange={(event) =>
                            updateField("locationConfirm", event.target.checked)
                          }
                          aria-invalid={Boolean(errors.locationConfirm)}
                          aria-describedby={
                            errors.locationConfirm
                              ? "locationConfirm-error"
                              : undefined
                          }
                          className="mt-1 h-4 w-4 shrink-0 accent-[#344E41]"
                        />
                        <span className="text-sm leading-6 text-[#626D63]">
                          I confirm that I am an adult physically located in
                          California. *
                        </span>
                      </label>

                      {errors.locationConfirm && (
                        <p
                          id="locationConfirm-error"
                          className="mt-2 text-xs text-red-600"
                        >
                          {errors.locationConfirm}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#344E41] px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#26392F] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#52685A]/25"
                    >
                      Complete consultation form
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                    <p className="text-center text-xs leading-5 text-[#8A9188]">
                      Demo form only. Do not include sensitive medical or
                      emergency information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
