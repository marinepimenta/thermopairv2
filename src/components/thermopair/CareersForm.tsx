"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CircleAlert, CircleCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { EMAIL, SectionHeading, btnPrimary, container } from "./ui";

/**
 * Job application form. Same validation and error-summary pattern as
 * RequestForm: validate on blur, on submit focus a summary that links to each
 * invalid field, inline errors stay beside their field.
 *
 * No backend exists in this project (static export), so submission is
 * client-side only — wire it to a real endpoint before launch. That is also
 * why there is no résumé upload: a file picker with nowhere to send the file
 * would be a lie. We ask for the résumé by email instead, which works today.
 */

type Values = {
  name: string;
  phone: string;
  email: string;
  location: string;
  role: string;
  experience: string;
  certified: string;
  license: string;
  oncall: string;
  about: string;
  consent: boolean;
};

const INITIAL: Values = {
  name: "",
  phone: "",
  email: "",
  location: "",
  role: "",
  experience: "",
  certified: "",
  license: "",
  oncall: "",
  about: "",
  consent: false,
};

export const ROLES = [
  "Service technician (HVAC)",
  "Refrigeration technician",
  "Installation technician",
  "Apprentice / helper",
  "Not sure — happy to be placed",
];

const EXPERIENCE = [
  "No trade experience yet",
  "Less than 2 years",
  "2–5 years",
  "5–10 years",
  "More than 10 years",
];

const YES_NO = ["Yes", "No"];

type Field = keyof Values;

function validate(v: Values): Partial<Record<Field, string>> {
  const e: Partial<Record<Field, string>> = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  const digits = v.phone.replace(/\D/g, "");
  if (!digits) e.phone = "Enter a phone number so we can call you.";
  else if (digits.length < 10) e.phone = "Enter a 10-digit phone number.";
  if (!v.email.trim()) e.email = "Enter your email — it’s where we’ll reply.";
  else if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = "Enter an email like name@example.com.";
  if (!v.location.trim()) e.location = "Enter the town you’d travel from.";
  if (!v.role) e.role = "Choose the kind of work you’re after.";
  if (!v.experience) e.experience = "Tell us roughly how long you’ve been in the trade.";
  if (!v.certified) e.certified = "Let us know about EPA 608 certification.";
  if (!v.license) e.license = "Let us know about a driver’s licence.";
  if (!v.oncall) e.oncall = "Let us know about emergency rotation.";
  if (!v.about.trim()) e.about = "Tell us a little about the work you’ve done.";
  if (!v.consent) e.consent = "Check this box so we can contact you about your application.";
  return e;
}

const ORDER: Field[] = [
  "name", "phone", "email", "location", "role",
  "experience", "certified", "license", "oncall", "about", "consent",
];

const inputBase =
  "block min-h-12 w-full rounded-[4px] border bg-white px-3.5 font-body text-[16px] text-ink placeholder:text-steel-400 transition-colors duration-200 focus:border-ink";

const labelCls = "mb-1.5 block font-body text-[15px] font-semibold text-ink";

const ReqMark = () => (
  <span className="text-err" aria-hidden="true">
    {" "}*
  </span>
);

/**
 * Yes/No radio pair for the eligibility questions. Defined at module scope,
 * not inside CareersForm: a component created during render gets a fresh
 * identity each pass, so React remounts it and the radios lose focus as you
 * answer. It takes what it needs as props instead.
 */
function YesNoField({
  name,
  legend,
  help,
  value,
  error,
  invalid,
  onSelect,
  onBlur,
}: {
  name: string;
  legend: string;
  help?: string;
  value: string;
  error?: string;
  invalid: boolean;
  onSelect: (value: string) => void;
  onBlur: () => void;
}) {
  const fieldId = `cf-${name}`;
  const helpId = help ? `${fieldId}-help` : undefined;
  const errorId = invalid ? `${fieldId}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <fieldset id={fieldId} tabIndex={-1} aria-describedby={describedBy} className="outline-none">
      <legend className={labelCls}>
        {legend}
        <ReqMark />
      </legend>
      {help && (
        <p id={helpId} className="mb-2 font-body text-[14px] leading-[1.5] text-steel-600">{help}</p>
      )}
      <div className="grid grid-cols-2 gap-2">
        {YES_NO.map((o) => (
          <label
            key={o}
            className={cn(
              "flex min-h-12 cursor-pointer items-center gap-2.5 rounded-[4px] border px-3.5 font-body text-[16px] text-ink transition-colors duration-200 has-[:checked]:border-ink has-[:checked]:bg-heat-pale",
              invalid ? "border-err" : "border-steel-300",
            )}
          >
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onSelect(o)}
              onBlur={onBlur}
              className="h-4 w-4 accent-ink"
            />
            {o}
          </label>
        ))}
      </div>
      {invalid && error && (
        <p id={errorId} className="mt-1.5 flex items-start gap-1.5 font-body text-[15px] text-err">
          <CircleAlert aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function CareersForm() {
  const id = (f: string) => `cf-${f}`;

  const [values, setValues] = useState<Values>(INITIAL);
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

  const label = labelCls;
  const req = <ReqMark />;
  const border = (f: Field) => (show(f) ? "border-err" : "border-steel-300");

  /** Binds the module-scope YesNoField to this form's state. */
  const yesNoProps = (f: Field) => ({
    name: f,
    value: values[f] as string,
    error: errors[f],
    invalid: !!show(f),
    onSelect: (v: string) => set(f, v as never),
    onBlur: blur(f),
  });

  return (
    <section id="apply" aria-labelledby="apply-title" className="tp-dark tp-grad-form py-16 text-white md:py-24">
      <div className={cn(container, "grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16")}>
        <div>
          <SectionHeading
            id="apply-title"
            surface="dark"
            eyebrow="Apply"
            title="Tell us about yourself"
            lead="A few details is enough to start. If it looks like a fit, we’ll call you and talk properly."
          />
          <div className="tp-dark mt-8 border border-white/15 bg-ink/70 p-6 text-white">
            <p className="font-heading text-[18px] font-semibold">Got a résumé?</p>
            <p className="mt-1 font-body text-[15px] leading-[1.55] text-steel-300">
              Send it to{" "}
              <a href={`mailto:${EMAIL}?subject=Job%20application`} className="font-semibold text-white underline underline-offset-4">
                {EMAIL}
              </a>{" "}
              after you submit this form, or just mention it below. It’s helpful, not required — we care more about what
              you’ve actually worked on.
            </p>
          </div>
        </div>

        <div className="rounded-[4px] bg-white p-5 sm:p-8">
          {sent ? (
            <div role="status" className="py-8 text-center">
              <CircleCheck aria-hidden="true" className="mx-auto h-12 w-12 text-ok" />
              <h3 ref={successRef} tabIndex={-1} className="mt-4 font-heading text-[24px] font-semibold text-ink outline-none">
                Application received
              </h3>
              <p className="mx-auto mt-2 max-w-[46ch] font-body text-[16px] leading-[1.6] text-steel-600">
                Thanks, {values.name.split(" ")[0]}. We read every application ourselves and will get back to you at{" "}
                <span className="font-semibold text-ink">{values.email}</span>. If you want to send a résumé, email it to{" "}
                <a href={`mailto:${EMAIL}?subject=Job%20application`} className="font-semibold text-ink underline underline-offset-4">
                  {EMAIL}
                </a>
                .
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
                  className="mb-6 rounded-[4px] border border-err bg-[#fef2f2] p-4 outline-none focus-visible:outline-3 focus-visible:outline-err"
                >
                  <p id={id("summary-title")} className="font-body text-[16px] font-semibold text-err">
                    Please fix {errorList.length === 1 ? "1 field" : `${errorList.length} fields`} before sending:
                  </p>
                  <ul className="mt-2 list-disc pl-5">
                    {errorList.map((f) => (
                      <li key={f} className="font-body text-[15px] text-err">
                        <a href={`#${id(f)}`} className="underline underline-offset-2">{errors[f]}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mb-5 font-body text-[14px] text-steel-600">
                Fields marked <span className="text-err">*</span> are required.
              </p>

              <fieldset>
                <legend className="mb-4 font-heading text-[18px] font-semibold text-ink">How to reach you</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={id("name")} className={label}>Full name{req}</label>
                    <input
                      id={id("name")} type="text" autoComplete="name" required
                      aria-invalid={!!show("name")} aria-describedby={describedBy("name")}
                      value={values.name} onChange={(e) => set("name", e.target.value)} onBlur={blur("name")}
                      className={cn(inputBase, border("name"))}
                    />
                    {fieldError("name")}
                  </div>
                  <div>
                    <label htmlFor={id("phone")} className={label}>Phone{req}</label>
                    <input
                      id={id("phone")} type="tel" inputMode="tel" autoComplete="tel" required
                      aria-invalid={!!show("phone")} aria-describedby={describedBy("phone")}
                      value={values.phone} onChange={(e) => set("phone", e.target.value)} onBlur={blur("phone")}
                      className={cn(inputBase, "tp-num", border("phone"))}
                    />
                    {fieldError("phone")}
                  </div>
                  <div>
                    <label htmlFor={id("email")} className={label}>Email{req}</label>
                    <input
                      id={id("email")} type="email" autoComplete="email" required
                      aria-invalid={!!show("email")} aria-describedby={describedBy("email")}
                      value={values.email} onChange={(e) => set("email", e.target.value)} onBlur={blur("email")}
                      className={cn(inputBase, border("email"))}
                    />
                    {fieldError("email")}
                  </div>
                  <div>
                    <label htmlFor={id("location")} className={label}>Town you’d travel from{req}</label>
                    <input
                      id={id("location")} type="text" autoComplete="address-level2" required
                      aria-invalid={!!show("location")} aria-describedby={describedBy("location")}
                      value={values.location} onChange={(e) => set("location", e.target.value)} onBlur={blur("location")}
                      className={cn(inputBase, border("location"))}
                    />
                    {fieldError("location")}
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-8 border-t border-steel-300 pt-6">
                <legend className="mb-4 font-heading text-[18px] font-semibold text-ink">Your experience</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={id("role")} className={label}>What are you looking for?{req}</label>
                    <select
                      id={id("role")} required
                      aria-invalid={!!show("role")} aria-describedby={describedBy("role")}
                      value={values.role} onChange={(e) => set("role", e.target.value)} onBlur={blur("role")}
                      className={cn(inputBase, "pr-9", border("role"), !values.role && "text-steel-600")}
                    >
                      <option value="">Choose one</option>
                      {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    {fieldError("role")}
                  </div>
                  <div>
                    <label htmlFor={id("experience")} className={label}>Time in the trade{req}</label>
                    <select
                      id={id("experience")} required
                      aria-invalid={!!show("experience")} aria-describedby={describedBy("experience")}
                      value={values.experience} onChange={(e) => set("experience", e.target.value)} onBlur={blur("experience")}
                      className={cn(inputBase, "pr-9", border("experience"), !values.experience && "text-steel-600")}
                    >
                      <option value="">Choose one</option>
                      {EXPERIENCE.map((x) => <option key={x} value={x}>{x}</option>)}
                    </select>
                    {fieldError("experience")}
                  </div>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <YesNoField
                    {...yesNoProps("certified")}
                    legend="EPA Section 608 certified?"
                    help="Required for refrigerant work. We’ll help you get it if you don’t have it yet."
                  />
                  <YesNoField
                    {...yesNoProps("license")}
                    legend="Valid driver’s licence?"
                    help="You’ll be driving to sites across Worcester County."
                  />
                </div>

                <div className="mt-5">
                  <YesNoField
                    {...yesNoProps("oncall")}
                    legend="Open to the emergency rotation?"
                    help="We run a 24/7 line. The rotation is shared and paid — it isn’t every night."
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor={id("about")} className={label}>
                    What have you worked on?{req}
                  </label>
                  <textarea
                    id={id("about")} rows={5} required
                    aria-invalid={!!show("about")} aria-describedby={describedBy("about", true)}
                    value={values.about} onChange={(e) => set("about", e.target.value)} onBlur={blur("about")}
                    className={cn(inputBase, "py-3 leading-[1.5]", border("about"))}
                  />
                  <p id={id("about-help")} className="mt-1.5 font-body text-[14px] text-steel-600">
                    Equipment, systems, the kind of sites you’ve been on — or, if you’re starting out, what’s drawing
                    you to the trade.
                  </p>
                  {fieldError("about")}
                </div>
              </fieldset>

              <div className="mt-6">
                <label className="flex cursor-pointer items-start gap-3 font-body text-[14px] leading-[1.55] text-steel-700">
                  <input
                    id={id("consent")} type="checkbox" required
                    aria-invalid={!!show("consent")} aria-describedby={describedBy("consent")}
                    checked={values.consent} onChange={(e) => set("consent", e.target.checked)} onBlur={blur("consent")}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-ink"
                  />
                  <span>
                    I agree that Thermopair may contact me about this application and keep these details while it is
                    considered, as described in the{" "}
                    <Link href="/privacy-policy/" className="underline underline-offset-2">Privacy Policy</Link>.{req}
                  </span>
                </label>
                {fieldError("consent")}
              </div>

              <button type="submit" className={cn(btnPrimary, "mt-7 w-full sm:w-auto sm:px-10")}>
                Send application
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
