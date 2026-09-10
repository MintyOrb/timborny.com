# timborny.com

Personal digital garden and archive built with [Astro](https://astro.build).

- **URL:** [https://mintyorb.github.io/timborny.com/](https://mintyorb.github.io/timborny.com/)
- **Repository:** [MintyOrb/timborny.com](https://github.com/MintyOrb/timborny.com)

---

## Tech Stack

- **Framework:** Astro v7 (Zero-JS static generation)
- **Typography:** Geist & Geist Mono (self-hosted variable woff2)
- **Styling:** Vanilla CSS with custom design tokens
- **Hosting:** GitHub Pages via GitHub Actions CI/CD

---

## Roadmap & To-Do

### Photography Pipeline (High-Res Originals & EXIF)
- [ ] **Batch EXIF Extraction:** Extract camera metadata (camera body, lens, focal length, aperture, shutter speed, ISO, date/time) from high-res original files.
- [ ] **Photo Metadata Model:** Extend `src/data/photos.ts` with optional EXIF fields:
  ```ts
  export interface Photo {
    id: string;
    src: string;
    width: number;
    height: number;
    camera?: string;    // e.g. "Sony α7 III"
    lens?: string;      // e.g. "35mm f/1.8"
    settings?: string;  // e.g. "1/500s · f/4.0 · ISO 100"
    date?: string;      // e.g. "October 2024"
  }
  ```
- [ ] **Multi-Resolution Generation:** Generate optimized responsive variants (WebP / AVIF at 400w, 800w, 1600w, 2400w) via `sharp`.
- [ ] **Lightbox Metadata Overlay:** Display clean, unobtrusive Geist Mono camera details inside the photo dialog when viewing a shot.
- [ ] **Placeholder Previews:** Generate tiny BlurHash or LQIP (low-quality image placeholder) strings for instant perceived loading.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
