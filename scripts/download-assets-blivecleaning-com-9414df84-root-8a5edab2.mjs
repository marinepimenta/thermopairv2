import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = "public/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

const urls = [
  "https://blivecleaning.com/wp-content/uploads/2024/07/Logo-Blive-Horizontal-Cleaning-Tagline-Green-1.png",
  "https://blivecleaning.com/wp-content/uploads/2024/09/Logo-Blive-Horizontal-DarkGreen-1.png",
  "https://blivecleaning.com/wp-content/uploads/2024/09/Logo-Blive-Symbol-OffWhite-1.png",
  "https://blivecleaning.com/wp-content/uploads/2024/03/blive-favico.png",
  "https://blivecleaning.com/wp-content/uploads/2024/09/Character-05.png.webp",
  "https://blivecleaning.com/wp-content/uploads/2024/09/Character-5.png",
  "https://blivecleaning.com/wp-content/uploads/2024/09/Vector-1024x638.png.webp",
  "https://blivecleaning.com/wp-content/uploads/2024/09/Mock-Sofa.jpg",
  "https://blivecleaning.com/wp-content/uploads/2024/12/homepage-about-us.jpg",
  "https://blivecleaning.com/wp-content/uploads/2024/12/homepage-testimonials-924x1024.jpg",
  "https://blivecleaning.com/wp-content/uploads/2024/09/Hand-01.jpg",
  "https://blivecleaning.com/wp-content/uploads/2025/04/7127657-Crystal_Award-Copy.png",
  "https://blivecleaning.com/wp-content/uploads/2024/03/5-star-google-reviews-img.png",
  "https://blivecleaning.com/wp-content/uploads/2025/04/OSHA.png",
  "https://blivecleaning.com/wp-content/uploads/2024/03/blive-cleaning-certified-professional-house-logo.png",
  "https://blivecleaning.com/wp-content/uploads/2024/03/bbb-accredited-business.png",
  "https://blivecleaning.com/wp-content/uploads/2025/10/download.png",
  "https://blivecleaning.com/wp-content/uploads/2024/03/ncc-massachusetts-member.png",
  "https://blivecleaning.com/wp-content/uploads/2024/03/ahc-professional-cleaning-logo.png",
  "https://blivecleaning.com/wp-content/uploads/2024/03/certified-covid-19-infectious-logo.png",
  "https://blivecleaning.com/wp-content/uploads/2024/04/blive-scroll-to-top-button-2.png",
  "https://blivecleaning.com/wp-content/uploads/2024/03/blive-cleaning-experts-img.jpg",
  "https://blivecleaning.com/wp-content/uploads/2024/09/deep_cleaning-1.jpg",
  "https://blivecleaning.com/wp-content/uploads/2024/09/move_in_out_cleaning-1.jpg",
  "https://blivecleaning.com/wp-content/uploads/2024/09/one_time_cleaning-1.jpg",
  "https://blivecleaning.com/wp-content/uploads/2024/09/hp_grid_1-1.jpg",
  "https://blivecleaning.com/wp-content/uploads/2024/09/hp_grid_2-1.jpg",
  "https://blivecleaning.com/wp-content/uploads/2024/09/hp_grid_3-1.jpg",
];

await mkdir(OUT, { recursive: true });

const results = [];
for (let i = 0; i < urls.length; i += 4) {
  await Promise.all(
    urls.slice(i, i + 4).map(async (u) => {
      const name = decodeURIComponent(new URL(u).pathname.split("/").pop());
      try {
        const res = await fetch(u, { headers: { "user-agent": "Mozilla/5.0" } });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        await writeFile(path.join(OUT, name), buf);
        results.push(`OK   ${name} (${buf.length}b)`);
      } catch (e) {
        results.push(`FAIL ${name}: ${e.message}`);
      }
    }),
  );
}
console.log(results.join("\n"));
