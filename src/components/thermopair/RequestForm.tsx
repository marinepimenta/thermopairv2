"use client";

import { useRef, useState } from "react";
import { CircleAlert, CircleCheck, Clock, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { SERVICES as ALL_SERVICES } from "@/lib/services";
import { PHONE_DISPLAY, PHONE_HREF, SectionHeading, btnPrimary, container } from "./ui";

/**
 * The single conversion form (replaces the old quick form + long form).
 * - Visible labels, required markers, helper text.
 * - Validate on blur; on submit, an error summary receives focus and links
 *   to each invalid field; inline errors stay next to their fields.
 * - No backend exists in this project (static export), so submission is
 *   client-side only, as before. Wire it to a real endpoint before launch.
 */

type Values = {
  name: string;
  phone: string;
  email: string;
  location: string;
  property: string;
  service: string;
  urgency: string;
  details: string;
  consent: boolean;
};

const INITIAL: Values = {
  name: "",
  phone: "",
  email: "",
  location: "",
  property: "",
  service: "",
  urgency: "",
  details: "",
  consent: false,
};

export const FORM_SERVICES = [
  "Heating or cooling repair",
  ...ALL_SERVICES.map((s) => s.title),
  "Something else",
];

const PROPERTY = ["Home", "Business"];
const URGENCY = [
  { value: "emergency", label: "Emergency — system is down now" },
  { value: "soon", label: "Within the next few days" },
  { value: "planning", label: "Planning ahead" },
];

type Field = keyof Values;

function validate(v: Values): Partial<Record<Field, string>> {
  const e: Partial<Record<Field, string>> = {};
  if (!v.name.trim()) e.name = "Enter your name so we know who to ask for.";
  const digits = v.phone.replace(/\D/g, "");
  if (!digits) e.phone = "Enter a phone number so we can call you back.";
  else if (digits.length < 10) e.phone = "Enter a 10-digit phone number, for example (774) 498-0528.";
  if (v.email.trim() && !/^\S+@\S+\.\S+$/.test(v.email.trim()))
    e.email = "Enter an email like name@example.com, or leave it blank.";
  if (!v.location.trim()) e.location = "Enter your town or ZIP code so we can confirm we serve your area.";
  if (!v.property) e.property = "Choose home or business.";
  if (!v.service) e.service = "Choose the service that fits best — “Something else” is fine.";
  if (!v.urgency) e.urgency = "Tell us how soon you need help.";
  if (!v.consent) e.consent = "Check this box so we can text or email you about your request.";
  return e;
}

const ORDER: Field[] = ["name", "phone", "email", "location", "property", "service", "urgency", "consent"];

const inputBase =
  "block min-h-12 w-full rounded-md border bg-white px-3.5 font-body text-[16px] text-ink placeholder:text-steel-400 transition-colors duration-200 focus:border-cold";

export default function RequestForm({ defaultService }: { defaultService?: string }) {
  // Only one form per page, so stable ids keep the error-summary links simple.
  const id = (f: string) => `rf-${f}`;

  const [values, setValues] = useState<Values>({ ...INITIAL, service: defaultService ?? "" });
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [sent, setSent] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const errors = validate(values);
  const show = (f: Field) => (touched[f] || submitAttempted) && errors[f];

  function set<K extends Field>(key: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }
  const blur = (f: Field) => () => setTouched((t) => ({ ...t, [f]: true }));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setSent(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  const errorList = ORDER.filter((f) => errors[f]);

  function describedBy(f: Field, helper?: boolean) {
    return [helper ? id(`${f}-help`) : null, show(f) ? id(`${f}-error`) : null].filter(Boolean).join(" ") || undefined;
  }

  function fieldError(f: Field) {
    if (!show(f)) return null;
    return (
      <p id={id(`${f}-error`)} className="mt-1.5 flex items-start gap-1.5 font-body text-[15px] text-err">
        <CircleAlert aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
        {errors[f]}
      </p>
    );
  }

  const label = "mb-1.5 block font-body text-[15px] font-semibold text-ink";
  const req = (
    <span className="text-err" aria-hidden="true">
      {" "}*
    </span>
  );
  const border = (f: Field) => (show(f) ? "border-err" : "border-steel-300");

  return (
    <section id="request-service" aria-labelledby="request-title" className="border-t border-steel-200 bg-paper py-16 md:py-24">
      <div className={cn(container, "grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16")}>
        <div>
          <SectionHeading
            id="request-title"
            eyebrow="Request service"
            title="Tell us what’s going on"
            lead="Send a few details and we’ll contact you to confirm a time. Diagnosis first, price before work starts."
          />

          <div className="tp-dark mt-8 rounded-lg bg-steel-900 p-6 text-white">
            <p className="font-heading text-[18px] font-semibold">System down right now?</p>
            <p className="mt-1 font-body text-[15px] leading-[1.55] text-steel-300">
              Don’t wait for a reply — call our 24/7 line.
            </p>
            <a href={PHONE_HREF} className={cn(btnPrimary, "mt-4 w-full")}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Call <span className="tp-num">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <p className="mt-6 flex items-start gap-2 font-body text-[15px] text-steel-600">
            <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            <span className="tp-num">Office hours: Mon–Fri, 8 AM – 5 PM. Emergency service 24/7.</span>
          </p>
        </div>

        <div className="rounded-lg border border-steel-200 bg-white p-5 sm:p-8">
          {sent ? (
            <div role="status" className="py-8 text-center">
              <CircleCheck aria-hidden="true" className="mx-auto h-12 w-12 text-ok" />
              <h3 ref={successRef} tabIndex={-1} className="mt-4 font-heading text-[24px] font-semibold text-ink outline-none">
                Request received
              </h3>
              <p className="mx-auto mt-2 max-w-[44ch] font-body text-[16px] leading-[1.6] text-steel-600">
                Thanks, {values.name.split(" ")[0]}. We’ll call you at <span className="tp-num">{values.phone}</span> to confirm the details.
                If it’s an emergency, call us now at{" "}
                <a href={PHONE_HREF} className="tp-num font-semibold text-ink underline underline-offset-4">{PHONE_DISPLAY}</a>.
              </p>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit}>
              {submitAttempted && errorList.length > 0 && (
                <div
                  ref={summaryRef}
                  tabIndex={-1}
                  role="alert"
                  aria-labelledby={id("summary-title")}
                  className="mb-6 rounded-md border border-err bg-[#fef2f2] p-4 outline-none focus-visible:outline-3 focus-visible:outline-err"
                >
                  <p id={id("summary-title")} className="font-body text-[16px] font-semibold text-err">
                    Please fix {errorList.length === 1 ? "1 field" : `${errorList.length} fields`} before sending:
                  </p>
                  <ul className="mt-2 list-disc pl-5">
                    {errorList.map((f) => (
                      <li key={f} className="font-body text-[15px] text-err">
                        <a href={`#${id(f)}`} className="underline underline-offset-2">
                          {errors[f]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mb-5 font-body text-[14px] text-steel-600">
                Fields marked <span className="text-err">*</span> are required.
              </p>

              <fieldset>
                <legend className="mb-4 font-heading text-[18px] font-semibold text-ink">Your contact details</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={id("name")} className={label}>Full name{req}</label>
                    <input
                      id={id("name")}
                      type="text"
                      autoComplete="name"
                      required
                      aria-invalid={!!show("name")}
                      aria-describedby={describedBy("name")}
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      onBlur={blur("name")}
                      className={cn(inputBase, border("name"))}
                    />
                    {fieldError("name")}
                  </div>
                  <div>
                    <label htmlFor={id("phone")} className={label}>Phone{req}</label>
                    <input
                      id={id("phone")}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      aria-invalid={!!show("phone")}
                      aria-describedby={describedBy("phone")}
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      onBlur={blur("phone")}
                      className={cn(inputBase, "tp-num", border("phone"))}
                    />
                    {fieldError("phone")}
                  </div>
                  <div>
                    <label htmlFor={id("email")} className={label}>
                      Email <span className="font-normal text-steel-600">(optional)</span>
                    </label>
                    <input
                      id={id("email")}
                      type="email"
                      autoComplete="email"
                      aria-invalid={!!show("email")}
                      aria-describedby={describedBy("email")}
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      onBlur={blur("email")}
                      className={cn(inputBase, border("email"))}
                    />
                    {fieldError("email")}
                  </div>
                  <div>
                    <label htmlFor={id("location")} className={label}>Town or ZIP code{req}</label>
                    <input
                      id={id("location")}
                      type="text"
                      autoComplete="postal-code"
                      required
                      aria-invalid={!!show("location")}
                      aria-describedby={describedBy("location")}
                      value={values.location}
                      onChange={(e) => set("location", e.target.value)}
                      onBlur={blur("location")}
                      className={cn(inputBase, border("location"))}
                    />
                    {fieldError("location")}
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-8 border-t border-steel-200 pt-6">
                <legend className="mb-4 font-heading text-[18px] font-semibold text-ink">About the job</legend>

                <div className="grid gap-5 sm:grid-cols-2">
                  <fieldset
                    id={id("property")}
                    tabIndex={-1}
                    aria-describedby={describedBy("property")}
                    className="outline-none"
                  >
                    <legend className={label}>Property type{req}</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {PROPERTY.map((p) => (
                        <label
                          key={p}
                          className={cn(
                            "flex min-h-12 cursor-pointer items-center gap-2.5 rounded-md border px-3.5 font-body text-[16px] text-ink transition-colors duration-200 has-[:checked]:border-cold has-[:checked]:bg-cold-pale",
                            show("property") ? "border-err" : "border-steel-300",
                          )}
                        >
                          <input
                            type="radio"
                            name="property"
                            value={p}
                            checked={values.property === p}
                            onChange={() => set("property", p)}
                            onBlur={blur("property")}
                            className="h-4 w-4 accent-cold"
                          />
                          {p}
                        </label>
                      ))}
                    </div>
                    {fieldError("property")}
                  </fieldset>

                  <div>
                    <label htmlFor={id("service")} className={label}>Service needed{req}</label>
                    <select
                      id={id("service")}
                      required
                      aria-invalid={!!show("service")}
                      aria-describedby={describedBy("service")}
                      value={values.service}
                      onChange={(e) => set("service", e.target.value)}
                      onBlur={blur("service")}
                      className={cn(inputBase, "pr-9", border("service"), !values.service && "text-steel-600")}
                    >
                      <option value="">Choose a service</option>
                      {FORM_SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {fieldError("service")}
                  </div>
                </div>

                <fieldset
                  id={id("urgency")}
                  tabIndex={-1}
                  aria-describedby={describedBy("urgency")}
                  className="mt-5 outline-none"
                >
                  <legend className={label}>How soon do you need help?{req}</legend>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {URGENCY.map((u) => (
                      <label
                        key={u.value}
                        className={cn(
                          "flex min-h-12 cursor-pointer items-center gap-2.5 rounded-md border px-3.5 py-2 font-body text-[15px] leading-[1.35] text-ink transition-colors duration-200 has-[:checked]:border-cold has-[:checked]:bg-cold-pale",
                          show("urgency") ? "border-err" : "border-steel-300",
                        )}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={u.value}
                          checked={values.urgency === u.value}
                          onChange={() => set("urgency", u.value)}
                          onBlur={blur("urgency")}
                          className="h-4 w-4 shrink-0 accent-cold"
                        />
                        {u.label}
                      </label>
                    ))}
                  </div>
                  {fieldError("urgency")}
                  {values.urgency === "emergency" && (
                    <p className="mt-3 rounded-md bg-heat-pale p-3 font-body text-[15px] text-ink">
                      For the fastest response, also call{" "}
                      <a href={PHONE_HREF} className="tp-num font-semibold underline underline-offset-4">{PHONE_DISPLAY}</a>.
                    </p>
                  )}
                </fieldset>

                <div className="mt-5">
                  <label htmlFor={id("details")} className={label}>
                    What’s happening? <span className="font-normal text-steel-600">(optional)</span>
                  </label>
                  <textarea
                    id={id("details")}
                    rows={4}
                    aria-describedby={id("details-help")}
                    value={values.details}
                    onChange={(e) => set("details", e.target.value)}
                    className={cn(inputBase, "border-steel-300 py-3 leading-[1.5]")}
                  />
                  <p id={id("details-help")} className="mt-1.5 font-body text-[14px] text-steel-600">
                    For example: “Walk-in reading 48°F since this morning, compressor running nonstop.”
                  </p>
                </div>
              </fieldset>

              <div className="mt-6">
                <label className="flex cursor-pointer items-start gap-3 font-body text-[14px] leading-[1.55] text-steel-700">
                  <input
                    id={id("consent")}
                    type="checkbox"
                    required
                    aria-invalid={!!show("consent")}
                    aria-describedby={describedBy("consent")}
                    checked={values.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    onBlur={blur("consent")}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-cold"
                  />
                  <span>
                    I agree to receive text and email messages from Thermopair about this request. I can opt out
                    anytime per the{" "}
                    <a href="#" className="underline underline-offset-2">Privacy Policy</a>.{req}
                  </span>
                </label>
                {fieldError("consent")}
              </div>

              <button type="submit" className={cn(btnPrimary, "mt-7 w-full sm:w-auto sm:px-10")}>
                Send request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
