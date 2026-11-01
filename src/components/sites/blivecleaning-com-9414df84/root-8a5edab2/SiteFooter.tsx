import Image from "next/image";
import Link from "next/link";

const ASSET_BASE =
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;

const SERVICES = [
  "Heating Installation",
  "Heating Repair",
  "AC Installation",
  "AC Repair",
  "Seasonal Maintenance",
  "Emergency Service",
  "Commercial HVAC",
  "Office Heating & Cooling",
  "Restaurant Climate Systems",
  "Retail Climate Systems",
];

const QUICK_LINKS = [
  "About Us",
  "Contact Us",
  "Blog",
  "Customer Policies and Guidelines",
  "Privacy Policy",
  "Service Areas",
  "Maintenance Plans",
];

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.06 5.66 21.2 10.44 21.95V14.9H7.9v-2.84h2.54v-2.17c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.84h2.78l-.44 2.84h-2.34v7.05C18.34 21.2 22 17.06 22 12.06z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.55.22.95.47 1.37.89.42.42.67.82.89 1.37.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.55-.47.95-.89 1.37-.42.42-.82.67-1.37.89-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.55-.22-.95-.47-1.37-.89a3.7 3.7 0 0 1-.89-1.37c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.55.47-.95.89-1.37.42-.42.82-.67 1.37-.89.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38A5.87 5.87 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.66.66 1.33 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.66 1.07-1.33 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.27.07-1.68.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#0b0b10] pb-10 pt-24 md:pt-32">
      <div className="mx-auto mb-16 w-full max-w-[1320px] px-5 md:mb-20 md:px-8">
        <Image
          src={`${ASSET_BASE}/logo-thermopair-horizontal-gradient.svg`}
          alt="Thermopair — Climate Care"
          width={340}
          height={57}
          className="h-[44px] w-auto"
        />
      </div>

      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 px-5 md:grid-cols-3 md:px-8">
        <div className="reveal" style={{ "--i": 0 } as React.CSSProperties}>
          <h2 className="font-heading text-[clamp(1.1rem,1.5vw,1.35rem)] font-medium text-white">
            Our Services
          </h2>
          <div className="mt-6 h-px w-full bg-white/10" />
          <ul className="mt-2">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link
                  href="#"
                  className="link-underline font-body text-[15px] leading-[2.1] text-thermo-mist/65 transition-colors hover:text-thermo-orange"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={{ "--i": 1 } as React.CSSProperties}>
          <h2 className="font-heading text-[clamp(1.1rem,1.5vw,1.35rem)] font-medium text-white">
            Quick Links
          </h2>
          <div className="mt-6 h-px w-full bg-white/10" />
          <ul className="mt-2">
            {QUICK_LINKS.map((s) => (
              <li key={s}>
                <Link
                  href="#"
                  className="link-underline font-body text-[15px] leading-[2.1] text-thermo-mist/65 transition-colors hover:text-thermo-orange"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={{ "--i": 2 } as React.CSSProperties}>
          <h2 className="font-heading text-[clamp(1.1rem,1.5vw,1.35rem)] font-medium text-white">
            Contact Us
          </h2>
          <div className="mt-6 h-px w-full bg-white/10" />
          <div className="mt-2 font-body text-[15px] leading-[2.1] text-thermo-mist/65">
            <p>
              <span className="font-semibold text-thermo-mist/80">Location:</span> 000 Example
              St, Boston, MA 00000
            </p>
            <p>
              <span className="font-semibold text-thermo-mist/80">Phone:</span>{" "}
              <a
                href="tel:+17744980528"
                className="link-underline transition-colors hover:text-thermo-orange"
              >
                (774) 498-0528
              </a>
            </p>
            <p>
              <span className="font-semibold text-thermo-mist/80">Email:</span>{" "}
              <a
                href="mailto:hello@thermopair.com"
                className="link-underline transition-colors hover:text-thermo-orange"
              >
                hello@thermopair.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-thermo-mist/80">Office Hours:</span> Mon –
              Fri: 8 AM – 5 PM
            </p>
            <p>
              <span className="font-semibold text-thermo-mist/80">Emergency Service:</span>{" "}
              24/7
            </p>
          </div>
          <div className="mt-5 flex flex-row gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-thermo-mist/80 transition-colors hover:border-thermo-orange hover:text-thermo-orange"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-thermo-mist/80 transition-colors hover:border-thermo-orange hover:text-thermo-orange"
            >
              <YoutubeIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-thermo-mist/80 transition-colors hover:border-thermo-orange hover:text-thermo-orange"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Linkedin"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-thermo-mist/80 transition-colors hover:border-thermo-orange hover:text-thermo-orange"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 w-full max-w-[1320px] border-t border-white/10 px-5 pt-8 md:px-8">
        <p className="font-body text-[13px] text-thermo-mist/45">
          Copyright 2026 by Thermopair. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
