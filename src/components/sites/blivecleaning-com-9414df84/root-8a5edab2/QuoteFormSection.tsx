"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  desiredService: string;
  squareFootage: string;
  hearAboutUs: string;
  discountCode: string;
  consent: boolean;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  desiredService: "",
  squareFootage: "",
  hearAboutUs: "",
  discountCode: "",
  consent: false,
};

const desiredServiceOptions = [
  "Heating Installation",
  "Heating Repair",
  "AC Installation",
  "AC Repair",
  "Seasonal Maintenance",
  "Emergency Service",
  "Commercial HVAC",
  "System Inspection",
  "Other services",
];

const squareFootageOptions = [
  "900 or less",
  "901-1200",
  "1201-1500",
  "1501-1800",
  "1801-2100",
  "2101-2300",
  "2301-2600",
  "2601-2900",
  "2901-3500",
  "3501-4100",
  "4101-4700",
  "4701-5300",
  "5301-6000",
  "6000-Above",
];

const hearAboutUsOptions = [
  "Better Business Bureau",
  "Email",
  "Facebook",
  "Google",
  "Instagram",
  "Referral",
  "Yelp",
  "Other",
];

const fieldBaseClasses =
  "h-12 w-full rounded-xl border border-black/10 bg-thermo-paper px-4 font-body text-[15px] text-thermo-graphite outline-none transition-colors placeholder:text-thermo-slate focus:border-thermo-orange focus:bg-white focus:outline-none focus:ring-2 focus:ring-thermo-orange/25";

function SelectChevron() {
  return (
    <svg
      className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="#8F97A2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function QuoteFormSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="schedule-service"
      className="w-full scroll-mt-24 py-24 md:scroll-mt-28 md:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        <h2
          className="reveal mb-10 max-w-[22ch] text-balance font-heading text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.06] text-thermo-ink md:mb-14"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          Book a visit with a heating and cooling team you can trust
        </h2>

        <div
          className="reveal rounded-[28px] bg-white p-6 ring-1 ring-black/5 shadow-[0_1px_2px_rgba(19,19,19,0.04),0_12px_32px_-12px_rgba(19,19,19,0.10)] md:p-10 lg:p-12"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <h3 className="font-heading text-[28px] font-medium text-thermo-ink">Thank you!</h3>
              <p className="mt-3 font-body text-[17px] text-thermo-slate md:text-[19px]">
                We received your request and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
                {/* Row 1 */}
                <div className="md:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    aria-label="First Name (Required)"
                    value={form.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={fieldBaseClasses}
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    aria-label="Last Name (Required)"
                    value={form.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={fieldBaseClasses}
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    aria-label="Email (Required)"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={fieldBaseClasses}
                  />
                </div>

                {/* Row 2 */}
                <div className="md:col-span-2">
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    aria-label="Phone (Required)"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={fieldBaseClasses}
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="Address"
                    aria-label="Address (Required)"
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className={fieldBaseClasses}
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="Zip Code"
                    aria-label="Zip Code (Required)"
                    value={form.zipCode}
                    onChange={(e) => handleChange("zipCode", e.target.value)}
                    className={fieldBaseClasses}
                  />
                </div>

                {/* Row 3 */}
                <div className="relative md:col-span-3">
                  <select
                    required
                    aria-label="Desired Service (Required)"
                    value={form.desiredService}
                    onChange={(e) => handleChange("desiredService", e.target.value)}
                    className={cn(fieldBaseClasses, "appearance-none pr-9", form.desiredService === "" && "text-thermo-slate")}
                  >
                    <option value="" disabled hidden>
                      Desired Service
                    </option>
                    {desiredServiceOptions.map((option) => (
                      <option key={option} value={option} className="text-thermo-graphite">
                        {option}
                      </option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>
                <div className="relative md:col-span-3">
                  <select
                    required
                    aria-label="Square Footage (Required)"
                    value={form.squareFootage}
                    onChange={(e) => handleChange("squareFootage", e.target.value)}
                    className={cn(fieldBaseClasses, "appearance-none pr-9", form.squareFootage === "" && "text-thermo-slate")}
                  >
                    <option value="" disabled hidden>
                      Square Footage
                    </option>
                    {squareFootageOptions.map((option) => (
                      <option key={option} value={option} className="text-thermo-graphite">
                        {option}
                      </option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>

                {/* Row 4 */}
                <div className="relative md:col-span-6">
                  <select
                    required
                    aria-label="How did you hear about us? (Required)"
                    value={form.hearAboutUs}
                    onChange={(e) => handleChange("hearAboutUs", e.target.value)}
                    className={cn(fieldBaseClasses, "appearance-none pr-9", form.hearAboutUs === "" && "text-thermo-slate")}
                  >
                    <option value="" disabled hidden>
                      How did you hear about us?
                    </option>
                    {hearAboutUsOptions.map((option) => (
                      <option key={option} value={option} className="text-thermo-graphite">
                        {option}
                      </option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>

                {/* Row 5 */}
                <div className="md:col-span-6">
                  <input
                    type="text"
                    placeholder="Discount code (optional)"
                    aria-label="Discount code"
                    value={form.discountCode}
                    onChange={(e) => handleChange("discountCode", e.target.value)}
                    className={fieldBaseClasses}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-start gap-[10px]">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) => handleChange("consent", e.target.checked)}
                  className="mt-1 h-4 w-4 accent-thermo-orange"
                  aria-label="Consent to receive text and email messages (Required)"
                />
                <label className="font-body text-[13px] leading-[20px] text-thermo-slate">
                  I agree to receive text and email messages from this company. I understand I
                  can opt out anytime per their{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <div className="mt-7 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full bg-thermo-orange px-8 py-4 font-body text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-thermo-orange-deep"
                >
                  Schedule Service
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
