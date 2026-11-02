# DESIGN_SYSTEM.md — Gaurav Gupta Personal Portfolio
**Version:** 2.1.3-final  
**Status:** Approved Creative Direction & Master Design System Specification  
**Author:** Product Design, Creative Direction & UI Architecture  
**Role:** Computer Science Undergraduate & Aspiring Software Development Engineer (IIIT Kota)  

---

## 1. Creative Direction: "Engineered Editorial"

### 1.1 Design Philosophy & Vision
The visual identity for Gaurav Gupta’s portfolio is defined as **Engineered Editorial**.

Most software engineering portfolios fall into one of two extremes:
1. **The Sterile CV:** A generic, text-heavy resume template with little character, visual hierarchy, or design sensibility.
2. **The Hyper-Gimmick Tech Showcase:** An overwhelming gaming-style page saturated with unreadable purple/cyan neon glows, spinning 3D floating primitives, gratuitous animations, and fake HUD dashboards.

**Engineered Editorial** strikes an elevated balance:
- **Sophisticated Editorial Design:** Inspired by premium, design-forward publications and brands (*Stripe Press, Monocle, Linear, Vercel, Bloomberg Markets*), featuring curated typography, generous whitespace, asymmetric column composition, and rhythmic visual pacing.
- **Engineering Rigor & Credibility:** Grounded in genuine computer science foundations—incorporating clean monospace typography for technical data, crisp hairline borders, structured architecture breakdowns, and deterministic micro-interactions.
- **Warm, Expressive & Welcoming:** Crucially, the interface is **not** a cold, sterile corporate telemetry dashboard or server monitoring portal. It conveys Gaurav’s passion for software craftsmanship, intellectual curiosity, and approachable personality. It feels like the digital workshop of an ambitious, articulate software engineer.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                            ENGINEERED EDITORIAL                              │
├──────────────────────────────────────┬───────────────────────────────────────┤
│        EDITORIAL SOPHISTICATION      │        SOFTWARE ENGINEERING RIGOR     │
│  • Curated typography (Geist Sans)   │  • Precise technical accent (Geist)   │
│  • Asymmetric, art-directed layouts  │  • Structural hairline dividers       │
│  • Balanced negative space & rhythm  │  • Accurate architecture breakdowns   │
│  • Authentic photographic anchors    │  • Smooth, purposeful interactions    │
│  • Dual-theme editorial elegance     │  • Atmospheric, lightweight 3D depth  │
└──────────────────────────────────────┴───────────────────────────────────────┘
```

### 1.2 Core Brand Attributes
1. **Deliberate & Architectural:** Every visual detail serves a functional or communicative purpose. Spacing follows a strict 4px/8px baseline grid.
2. **Deep Obsidian Canvas (with Warm Editorial Light Counterpart):** A rich, dark theme calibrated to avoid OLED eye strain, paired with a warm, paper-inspired light theme.
3. **Electric Mint Precision:** An energetic accent (`#65E6CF` in dark mode, balanced to `#0B7C68` in light mode) deployed with strict restraint—under 3% total visual area—to guide eye gaze to key interactions.
4. **Human & Authentic:** Grounded by real photographic assets (`/assets/My_image1.jpg` and `/assets/My_image2.png`), strictly preserving Gaurav’s authentic identity without synthetic AI replacements or heavy-handed distortions.

### 1.3 Anti-Patterns vs. Elevated Standards

| Anti-Pattern (To Strictly Avoid) | Elevated Standard (Engineered Editorial) |
| :--- | :--- |
| **Purple/Cyan Neon Overload** | Deep obsidian `#090B0F` paired with Electric Mint `#65E6CF` in an 85-12-3 distribution. |
| **Rigid Corporate Dashboard / Telemetry** | Human, editorial narrative layout with expressive typography and approachable tone. |
| **Fabricated Coordinates / Unverified Status** | Factual, grounded engineering statements without decorative geolocation or fake badges. |
| **Random 3D Floating Geometry** | Purposeful, low-overhead Three.js System Lattice providing subtle atmospheric depth in the hero. |
| **Excessive Glassmorphism Everywhere** | Crisp, solid matte surfaces with 1px hairline borders; backdrop blur reserved for sticky navigation. |
| **Skill Percentage Sliders (e.g., "Java 90%")** | Structured competency matrix categorized by verified languages, backend, databases, and core concepts. |
| **Intrusive Scroll Jacking & Parallax Fatigue** | Native browser inertia with hardware-accelerated Framer Motion transitions and full `prefers-reduced-motion` support. |
| **Facial Modification / AI Avatars** | 100% preservation of original photography (`/assets/My_image1.jpg` and `/assets/My_image2.png`). |

---

## 2. Color System: Dark & Light Dual Themes

The color system delivers two first-class, meticulously calibrated themes:
1. **Dark Theme (Default):** Deep obsidian canvas with crisp off-white text and vibrant Electric Mint highlights.
2. **Light Theme:** Warm, editorial off-white paper canvas with deep slate typography, soft borders, and contrast-adjusted Deep Teal-Mint highlights.

Light mode is **not** a crude color inversion; it is an intentionally art-directed editorial theme providing equivalent visual dignity, readability, and contrast.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                          DUAL THEME COLOR PALETTE                            │
├──────────────────────────────────────┬───────────────────────────────────────┤
│ DARK THEME (Default)                 │ LIGHT THEME (Editorial Light)         │
│ • Canvas:   #090B0F (Deep Obsidian)  │ • Canvas:   #F8F9FA (Warm Alabaster)  │
│ • Surface:  #11151C (Layer 1 Card)   │ • Surface:  #FFFFFF (Pure White Card) │
│ • Elevated: #1C232D (Modal/Dropdown) │ • Elevated: #FFFFFF (Soft Shadow)     │
│ • Text 1:   #F4F5F7 (High Contrast)  │ • Text 1:   #0F141C (Deep Charcoal)   │
│ • Text 2:   #929AA8 (Neutral Prose)  │ • Text 2:   #525866 (Muted Slate)     │
│ • Text 3:   #7D889E (Refined Slate)  │ • Text 3:   #59606D (Refined Slate)   │
│ • Accent:   #65E6CF (Electric Mint)  │ • Accent:   #0B7C68 (Deep Teal-Mint)  │
│ • Border:   rgba(255,255,255,0.08)   │ • Border:   #E2E4E9 (Soft Hairline)   │
└──────────────────────────────────────┴───────────────────────────────────────┘
```

### 2.1 Complete Token Specification Table

| Token Variable | Dark Theme Value | Light Theme Value | Semantic Role & Context |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#090B0F` | `#F8F9FA` | Main viewport canvas; fundamental page background. |
| `--bg-surface` | `#11151C` | `#FFFFFF` | Primary component background: cards, panels, containers. |
| `--bg-surface-elevated`| `#1C232D` | `#FFFFFF` | Elevated components: modals, command palette, dropdowns. |
| `--bg-surface-subtle` | `#141A23` | `#F1F3F5` | Secondary fills, hover backgrounds, subtle code blocks. |
| `--text-primary` | `#F4F5F7` | `#0F141C` | Headings, hero display title, primary button labels. |
| `--text-secondary` | `#929AA8` | `#525866` | Body paragraphs, project descriptions, role summaries. |
| `--text-tertiary` | `#7D889E` | `#59606D` | Metadata, tags, secondary mono labels, timestamps. |
| `--text-inverse` | `#090B0F` | `#FFFFFF` | Text rendered on solid accent backgrounds. |
| `--accent-primary` | `#65E6CF` | `#0B7C68` | Primary accent; CTA buttons, active tabs, focus rings. |
| `--accent-hover` | `#85EED9` | `#0E947D` | Hover state for accent buttons and interactive links. |
| `--accent-muted` | `rgba(101,230,207,0.10)` | `rgba(11,124,104,0.08)`| Subtle pill fills, active tab indicators, tag backgrounds. |
| `--accent-glow` | `rgba(101,230,207,0.20)` | `rgba(11,124,104,0.15)`| Soft glow for keyboard focus and subtle hero highlights. |
| `--border-subtle` | `rgba(255,255,255,0.08)` | `#E2E4E9` | Standard hairline card borders, section divider lines. |
| `--border-medium` | `rgba(255,255,255,0.16)` | `#CDD0D5` | Card hover states, input borders, interactive chips. |
| `--border-accent` | `rgba(101,230,207,0.35)` | `rgba(11,124,104,0.40)` | Active input borders, highlighted card boundaries. |
| `--color-success` | `#4ADE80` | `#15803D` | Success feedback, live deployment markers. |
| `--color-warning` | `#FBBF24` | `#B45309` | Active project indicators, work-in-progress tags. |
| `--color-error` | `#F87171` | `#DC2626` | Form validation error states, critical log alerts. |
| `--color-info` | `#60A5FA` | `#2563EB` | Documentation notes, external resource links. |

### 2.2 Calculated Contrast Targets (WCAG 2.1 AA Requirements)
Every color combination has been mathematically recalculated using standard WCAG relative luminance equations. Contrast thresholds apply as follows:
- **Normal Body & UI Text:** Minimum **4.5:1** for WCAG AA; **7:1** for WCAG AAA.
- **Large Text (≥ 18pt or 14pt bold):** Minimum **3:1** for WCAG AA; **4.5:1** for WCAG AAA.
- **Non-Text UI Components & Graphical Objects:** Minimum **3:1** for WCAG AA.

| Element Combination | Colors Evaluated | Recalculated Ratio | Compliance Level Target |
| :--- | :--- | :--- | :--- |
| **Dark Primary Text on Canvas** | `#F4F5F7` on `#090B0F` | **18.05 : 1** | WCAG AAA Target (> 7.0:1) |
| **Dark Secondary Text on Canvas** | `#929AA8` on `#090B0F` | **6.95 : 1** | WCAG AA Target (> 4.5:1; near AAA) |
| **Dark Tertiary Text on Surface** | `#7D889E` on `#11151C` | **5.13 : 1** | WCAG AA Target (> 4.5:1) |
| **Dark Tertiary Text on Canvas** | `#7D889E` on `#090B0F` | **5.52 : 1** | WCAG AA Target (> 4.5:1) |
| **Dark Accent on Canvas (UI/Large)**| `#65E6CF` on `#090B0F` | **12.92 : 1** | WCAG AAA Target (> 4.5:1 large / 3:1 UI) |
| **Light Primary Text on Canvas** | `#0F141C` on `#F8F9FA` | **17.52 : 1** | WCAG AAA Target (> 7.0:1) |
| **Light Secondary Text on Canvas** | `#525866` on `#F8F9FA` | **6.76 : 1** | WCAG AA Target (> 4.5:1) |
| **Light Tertiary Text on Canvas** | `#59606D` on `#F8F9FA` | **6.00 : 1** | WCAG AA Target (> 4.5:1) |
| **Light Tertiary Text on Surface** | `#59606D` on `#FFFFFF` | **6.33 : 1** | WCAG AA Target (> 4.5:1) |
| **Light Accent Button (White Text)**| `#FFFFFF` on `#0B7C68` | **5.13 : 1** | WCAG AA Target (> 4.5:1) |
| **Light Accent on Canvas (UI/Links)**| `#0B7C68` on `#F8F9FA` | **4.86 : 1** | WCAG AA Target (> 4.5:1 normal / 3:1 UI) |

*Note: These figures represent design-phase mathematical calculations. Empirical compliance across rendered DOM nodes and distinct browser raster engines must be verified during Phase 9 testing.*

### 2.3 The 85-12-3 Accent Distribution Rule
- **85% Canvas & Surfaces:** Background canvas and structured surfaces establish calm visual grounding.
- **12% Content Typography & Structural Rules:** Crisp high-contrast headings, comfortable secondary reading prose, and hairline borders.
- **3% Accent Energy:** Electric Mint / Deep Teal-Mint reserved strictly for primary CTA buttons, active state indicators, link hover underlines, and keyboard focus outlines.

---

## 3. Typography System

The typography pairs **Geist Sans** (designed by Vercel for modern editorial digital products) with **Geist Mono** (for technical precision, code snippets, metadata tags, and architecture metrics).

### 3.1 Type Scale & Hierarchy

| Scale Level | Font Size (rem / px) | Line Height | Letter Spacing | Font Weight | Family | Primary Usage Context |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `4.25rem` / `68px` | `1.08` | `-0.035em` | Bold (700) | Geist Sans | Hero primary name display: `GAURAV GUPTA`. |
| **Headline** | `3.00rem` / `48px` | `1.15` | `-0.030em` | SemiBold (600) | Geist Sans | Hero positioning statement, major titles. |
| **H1** | `2.25rem` / `36px` | `1.20` | `-0.025em` | SemiBold (600) | Geist Sans | Primary section titles (`Featured Engineering`, `Experience`). |
| **H2** | `1.75rem` / `28px` | `1.28` | `-0.020em` | Medium (500) | Geist Sans | Project titles, major role headings. |
| **H3** | `1.25rem` / `20px` | `1.38` | `-0.015em` | Medium (500) | Geist Sans | Card sub-titles, competency category headers. |
| **H4** | `1.125rem` / `18px` | `1.45` | `-0.010em` | Medium (500) | Geist Sans | Sub-group headers, modal section labels. |
| **Body Large** | `1.125rem` / `18px` | `1.65` | `0.000em` | Regular (400) | Geist Sans | Hero lead introduction paragraph, lead notes. |
| **Body** | `1.000rem` / `16px` | `1.65` | `0.000em` | Regular (400) | Geist Sans | Standard descriptive paragraphs, work bullets. |
| **Body Small** | `0.875rem` / `14px` | `1.55` | `+0.005em` | Regular (400) | Geist Sans | Secondary card notes, footer text, form hints. |
| **Caption** | `0.750rem` / `12px` | `1.40` | `+0.015em` | Medium (500) | Geist Sans | Micro badges, status labels, tooltip notes. |
| **Mono Header**| `0.875rem` / `14px` | `1.40` | `+0.040em` | Medium (500) | Geist Mono | Section eyebrows (`// FEATURED ENGINEERING`). |
| **Mono Body** | `0.875rem` / `14px` | `1.50` | `0.000em` | Regular (400) | Geist Mono | Code snippets, terminal commands, file paths. |
| **Mono Micro** | `0.750rem` / `12px` | `1.35` | `+0.030em` | Medium (500) | Geist Mono | Tech stack chips, date ranges, metrics. |

### 3.2 Typographic Principles
1. **Monospace as an Accent, Not the Default:** Geist Mono is used intentionally for code, metadata, tech chips, and section kickers. Body paragraphs and main headings always use Geist Sans for optimal reading comfort.
2. **Optimal Reading Cadence:** Prose text width is locked to a maximum of `65ch` (`max-w-prose`) to maintain comfortable eye movement.
3. **Tabular Figures for Numerical Data:** Numerical metrics, counters, and dates use `font-variant-numeric: tabular-nums;` to prevent layout jitter during updates.

---

## 4. Spacing, Layout & Grid Rules

### 4.1 Spatial Grid (4px / 8px Baseline)
Spacing follows an exact mathematical scale:
- `space-1`: `4px` (Micro gaps, icon offsets)
- `space-2`: `8px` (Badge padding, compact icon gaps)
- `space-3`: `12px` (Tag margins, card sub-element gaps)
- `space-4`: `16px` (Default input/button padding, standard gutters)
- `space-6`: `24px` (Card internal padding, standard grid gap)
- `space-8`: `32px` (Major card padding, section sub-headers)
- `space-12`: `48px` (Sub-section vertical rhythm)
- `space-16`: `64px` (Section vertical rhythm on mobile)
- `space-24`: `96px` (Standard section vertical rhythm on desktop)
- `space-32`: `128px` (Hero to content breathing space)

### 4.2 Layout Containers & Breakpoints
- **Container Max Width:** `1200px` for balanced reading and viewing comfort.
- **Breakpoints:**
  - `sm`: `640px` (Mobile landscape / phablets)
  - `md`: `768px` (Tablets / portrait iPads)
  - `lg`: `1024px` (Laptops / desktop monitors)
  - `xl`: `1280px` (Large desktop monitors)
- **Grid Layouts:**
  - Desktop: 12-column asymmetric grid with `24px` gap.
  - Tablet: 6-column grid with `20px` gap.
  - Mobile: 4-column single-column flow with `16px` gutter.

### 4.3 Border Radii Tokens
To avoid cartoonish bubbles and preserve architectural crispness:
- `radius-xs`: `2px` (Code blocks, micro tags, status markers).
- `radius-sm`: `4px` (Buttons, form input fields, interactive chips).
- `radius-md`: `6px` (Cards, dropdowns, popovers).
- `radius-lg`: `8px` (Major modal dialogs, featured project containers).
- `radius-full`: `9999px` (Avatars, pills, circle icons).

### 4.4 Elevation & Surface Hierarchy
Rather than muddy drop shadows, elevation is created through subtle surface step-ups and hairline borders:
- **Level 0 (Canvas):** Flat base on `--bg-canvas`.
- **Level 1 (Card):** Background `--bg-surface`, border `1px solid var(--border-subtle)`.
- **Level 2 (Hover Card):** Background `--bg-surface`, border `1px solid var(--border-medium)`, subtle ambient shadow `0 8px 24px -4px rgba(0, 0, 0, 0.4)`.
- **Level 3 (Modal / Floating Menu):** Background `--bg-surface-elevated`, border `1px solid var(--border-medium)`, shadow `0 16px 40px -8px rgba(0, 0, 0, 0.6)`.

---

## 5. Hero Section: Composition & Content Direction

The hero is the visual centerpiece of the website. It uses an **editorial asymmetric composition** that immediately projects technical capability, clarity, and personal authenticity.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ NAVBAR:  GAURAV GUPTA // SDE      [About]  [Experience]  [Projects]  [Skills]  [Contact]  [Theme] [CV] │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                  │
│  PORTFOLIO // 2026                                              ┌─────────────────────────────┐  │
│                                                                 │  [PORTRAIT CONTAINER]       │  │
│  GAURAV GUPTA                                                   │  /assets/My_image1.jpg      │  │
│  Software Engineer & Full-Stack Developer                       │  • Authentic face preserved │  │
│                                                                 │  • Refined editorial frame  │  │
│  Computer Science undergraduate at IIIT Kota, building          │                             │  │
│  scalable applications, intelligent developer tools, and        │  [ATMOSPHERIC LATTICE]      │  │
│  reliable software systems.                                     │  Subtle Three.js background │  │
│                                                                 │  depth layer (Phase 4)      │  │
│  ┌──────────────────┐   ┌──────────────────┐                    └─────────────────────────────┘  │
│  │ View Projects →  │   │ Download CV ↓    │                                                     │
│  └──────────────────┘   └──────────────────┘                                                     │
│                                                                                                  │
│  [ GitHub ↗ ]    [ LinkedIn ↗ ]    [ gaurav.init13@gmail.com ↗ ]                                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 5.1 Content Direction & Factual Baseline
1. **Neutral Eyebrow Label:**
   - Display: `PORTFOLIO // 2026` or `SOFTWARE DEVELOPMENT & SYSTEMS` (Geist Mono 12px, tracking `+0.05em`).
   - *Factual mandate:* No unconfirmed job availability indicators, simulated status badges, or fabricated coordinates.
2. **Name & Professional Positioning:**
   - Name: **GAURAV GUPTA** (Geist Sans Bold, 68px Display scale, letter-spacing `-0.035em`).
   - Headline: **Software Engineer & Full-Stack Developer** (Geist Sans 500, 24px, color `--text-primary`).
3. **Core Introduction:**
   - Factual, confident, and professional:  
     *"Computer Science undergraduate at IIIT Kota, building scalable applications, intelligent developer tools and reliable software systems."*
4. **Primary Actions:**
   - **Primary Button:** `View Projects →` (Filled accent button in dark mode; smooth anchor scroll to `#projects`).
   - **Secondary Button:** `Download CV ↓` (Hairline outline button linking directly to `/assets/My_resume.pdf`).
5. **Direct Contact Links:**
   - Direct, unadorned links: `GitHub ↗`, `LinkedIn ↗`, `gaurav.init13@gmail.com ↗`.
   - Subtle hover underline in `--accent-primary`.

---

## 6. Photograph Treatment & Asset Strategy

### 6.1 Deployment-Safe Asset Paths

| Asset Path | Context & Placement | Framing & Stylistic Treatment |
| :--- | :--- | :--- |
| `/assets/My_image1.jpg` | **Hero Section Primary Portrait** | Framed in an architectural double hairline border (`1px solid var(--border-subtle)`), softened ambient backdrop halo, and `object-fit: cover`. |
| `/assets/My_image2.png` | **About Section Narrative Anchor** | Natural rectangular or gently framed card showing Gaurav in an authentic terrace setting; humanizes the technical profile. |
| `/assets/My_resume.pdf` | **Verified Resume Target** | Direct target for navbar and hero resume actions. |

> **Important Technical Note on Asset Extensions & Case Sensitivity:**  
> In production environments (such as Vercel on Linux), file paths are strictly case-sensitive. The exact file extensions (`.jpg`, `.png`, `.pdf`) and casing of uploaded assets must be verified against the host filesystem prior to build execution; extensions must never be assumed.

### 6.2 Strict Photographic Integrity Rules
1. **Zero AI Alterations:** The original face, expression, and identity in `/assets/My_image1.jpg` and `/assets/My_image2.png` must remain 100% authentic. Never generate replacement faces, AI avatars, or synthetic touch-ups.
2. **Aspect Ratio Preservation:** Images must use modern CSS container scaling (`aspect-ratio: 1 / 1` for hero portrait or `aspect-ratio: 4 / 5`, with `object-position: center top` and `object-fit: cover`) to avoid distortion across viewports.
3. **Visual Integration:** In dark mode, a subtle soft radial vignette behind the image container blends the photo naturally into the obsidian canvas. In light mode, a crisp neutral hairline border (`#E2E4E9`) anchors the image cleanly against the off-white surface.

---

## 7. Reusable Component Design Specifications

### 7.1 Navbar
- **Height & Layout:** Fixed `64px` height, centered container (`max-w-6xl`), horizontal flex with balanced distribution.
- **Surface:** `--bg-canvas` with `backdrop-filter: blur(12px)` and subtle hairline bottom border `1px solid var(--border-subtle)`.
- **Branding:** `GAURAV GUPTA` (Geist Sans SemiBold, 15px) + `// SDE` in Geist Mono.
- **Primary Nav Links:** `About`, `Experience`, `Projects`, `Skills`, `Contact` (Geist Sans 14px, `--text-secondary`, hover `--text-primary`, active 2px bottom underline in `--accent-primary`).
- **Utility Actions:**
  - **Theme Toggle:** Crisp Sun/Moon icon button toggling Dark and Light mode.
  - **Resume Shortcut:** Compact button `Resume ↓` linking directly to `/assets/My_resume.pdf`.

### 7.2 Buttons
Every button features a minimum touch target of `44px` height:
1. **Primary Button:**
   - Dark: Background `var(--accent-primary)` (`#65E6CF`), text `var(--text-inverse)` (`#090B0F`), font-weight 600.
   - Light: Background `var(--accent-primary)` (`#0B7C68`), text `#FFFFFF`, font-weight 600.
   - Hover: Background `var(--accent-hover)`, subtle glow `0 0 16px var(--accent-glow)`. Active scale `0.98`.
2. **Secondary Button:**
   - Background: `var(--bg-surface)`, border: `1px solid var(--border-medium)`, text: `var(--text-primary)`.
   - Hover: Border `var(--border-accent)`, background `var(--bg-surface-subtle)`.
3. **Ghost / Link Button:**
   - Background: Transparent, text: `var(--text-secondary)`, hover: `var(--text-primary)`.
4. **Outline-Mono Technical Button:**
   - Text: `var(--accent-primary)`, Geist Mono 12px, border `1px solid var(--border-accent)`.

### 7.3 Section Headings
To avoid repetitive, aggressive brackets while maintaining editorial structure:
- **Section Kicker:** Subtle `// 01. PROJECTS` or `// EXPERIENCE` in Geist Mono (12px, `--accent-primary`).
- **Title:** Geist Sans SemiBold 32px (`--text-primary`).
- **Hairline Divider:** Clean 1px horizontal rule in `var(--border-subtle)` providing elegant horizontal flow.
- **Section Subtitle:** One concise sentence summarizing the objective.

### 7.4 Contact Form
- Two-column split layout: Left column provides direct contact information (`gaurav.init13@gmail.com`, LinkedIn, GitHub); Right column houses the message interface.
- Fields: Name, Email, Subject, Message.
- Surface: `var(--bg-surface)`, border `1px solid var(--border-subtle)`, focus ring `2px solid var(--accent-primary)`.
- Server-side email delivery integrated in Phase 8 via Resend.
- Direct email fallback button: "Copy Email Address" with instant toast feedback.

### 7.5 Footer
- Clean architectural footer, separated by a top hairline border.
- Left: `© 2026 Gaurav Gupta. All rights reserved.`
- Right: `Built with Next.js, TypeScript & Tailwind CSS. Typography in Geist.`

### 7.6 Advanced Interactive Features (Kept Unobtrusive)
To keep the primary user experience clean and welcoming, advanced interactive features are accessible as non-intrusive enhancements:
- **Command Palette (`⌘K`):** (Phase 6) Accessible via standard keyboard shortcut or a subtle icon in the navigation. Opens a floating spotlight modal to jump to projects, download resume, or toggle theme.
- **Developer Terminal:** (Phase 6) A collapsible, secondary terminal panel located in the footer or About section, allowing technical visitors to explore interactive CLI commands (`help`, `skills`, `projects`, `contact`) without cluttering the main page.
- **Recruiter Quick Mode:** (Phase 7) A streamlined toggle in the Command Palette or header that highlights key career metrics, tech stack, and download links in an expedited single-scroll view.
- **AI Portfolio Assistant:** (Phase 7) An interactive, conversational assistant answering questions about Gaurav’s engineering projects, architecture, and background.
- **Optional GitHub Repository Dashboard:** (Phase 7) An optional component focusing on meaningful repository metadata, architecture summaries, and technology stack overviews across Gaurav’s key repositories, rather than vanity metrics, contribution graphs, or commit-activity telemetry.

---

## 8. Project Portfolio Architecture & Presentation Strategy

The portfolio maintains **two distinct, unambiguous project categories** to clearly convey technical depth and scope:
1. **Featured Engineering Project:** Reserved **exclusively for Revora**.
2. **Hackathon Builds & Other Projects:** Houses **Cafe Cloud**, **CrisisLink**, **Voter List Management System**, and **Answer Sheet Management System**.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    PROJECT TAXONOMY & INFORMATION ARCHITECTURE               │
├──────────────────────────────────────┬───────────────────────────────────────┤
│ FEATURED ENGINEERING PROJECT         │ HACKATHON BUILDS & OTHER PROJECTS     │
│ (Sole Flagship: Revora)              │ (Cafe Cloud, CrisisLink, Voter List,  │
│                                      │  Answer Sheet Management)             │
│ • Full-width case study layout       │ • Curated editorial grid              │
│ • Architectural dataflow breakdown   │ • Problem & solution summaries        │
│ • Deep technical challenges/decisions│ • Workflow visualization (Cafe Cloud) │
│ • Verified retrieval latency metrics │ • Focused engineering highlights      │
│ • Live demo & GitHub links           │ • Live demo & GitHub links            │
└──────────────────────────────────────┴───────────────────────────────────────┘
```

> **Strict Classification Rule:**  
> Revora is currently the **only** Featured Engineering Project. Cafe Cloud, CrisisLink, Voter List Management System, and Answer Sheet Management System belong strictly to "Hackathon Builds & Other Projects". A future-project slot exists structurally within the data schema, but remains hidden from the public website until Gaurav confirms another major project is completed and ready for promotion.

---

### 8.1 Featured Engineering Project (Sole Flagship)

#### Project 01 — Revora: AI-Powered Repository Intelligence Platform
*(Note: Revora is the renamed version of CodeAtlas; CodeAtlas is not displayed as a separate project).*

- **Category:** Featured Engineering Project
- **Visual Presentation:** The premier visual centerpiece of the projects section. Full-width editorial module featuring an architectural schematic preview, deep technical narrative, verified performance metrics, and primary action links.
- **Role & Scope:** Full-Stack & Systems Architecture.
- **Problem Statement:** Navigating large, multi-module codebase architectures poses high cognitive overhead for developers onboarding to unfamiliar repositories.
- **Confirmed Capabilities & Specifications (Source of Truth):**
  - **GitHub Ingestion & Indexing:** Ingests and indexes GitHub repositories into queryable semantic knowledge bases.
  - **AST-Based Parsing & Chunking:** Implements a repository-first Retrieval-Augmented Generation (RAG) pipeline utilizing Abstract Syntax Tree (AST) parsing and chunking.
  - **Embedding Scale:** Generated 8,000+ embeddings from 50,000+ lines of code across 2,500+ files.
  - **Semantic Search & Repository Q&A:** Combines semantic search with LLM reasoning for natural-language codebase Q&A, achieving a **median retrieval latency under 200 ms**.
  - **Asynchronous Processing Pipeline:** Offloads heavy repository indexing to **BullMQ workers backed by Redis**, preserving application responsiveness while processing codebase assets.
  - **Data Persistence:** Integrates **PostgreSQL and Prisma** for persistent repository metadata and index tracking.
- **Confirmed Technology Stack:** TypeScript, Node.js, Next.js, Redis, BullMQ, PostgreSQL, Prisma, GitHub API.
- **Project Links:** *Conditional rendering:* Render Live Demo and GitHub Repository links only when their confirmed URLs are provided by the user; omit any link if its URL is unconfirmed or unavailable. Do not invent placeholder URLs.

---

### 8.2 Hackathon Builds & Other Projects

This section uses a curated editorial grid with a unified visual language. Each project concisely communicates its problem, engineering solution, key capabilities, verified technology stack, and direct links.

#### Project 02 — Cafe Cloud: Premium Restaurant Management & POS System
- **Category:** Hackathon Build / Full-Stack Application
- **Visual Treatment:** A compact yet detailed case-study presentation within this section, featuring a clear operational workflow visualization:  
  `[ Cashier / POS ] ────► [ Kitchen Dashboard ] ────► [ Customer Experience ]`
- **Description:** A full-stack, ERP-inspired restaurant management platform designed to manage restaurant operations end-to-end, connecting cashiers, kitchen staff, and customers through a unified system.
- **Problem & Solution:** Restaurant operations frequently suffer from disconnected workflows across cashiers, kitchen staff, and customers. Cafe Cloud unifies order creation, payment processing, kitchen preparation, and billing into an integrated system, improving operational visibility and coordination.
- **Key Engineering Highlights:**
  - **POS & Cashier Session Management:** Floor and table selection, order creation with dynamic product lists, customer detail capture, and multi-mode payment handling (UPI, cash, card) with order dispatch to the kitchen dashboard.
  - **Kitchen Workflow Dashboard:** Real-time incoming order queue with three-state order lifecycle management (`To Cook` → `Preparing` → `Completed`) and automated readiness alerts to cashiers and customers.
  - **Customer Portal:** Transparent bill tracking, order item inspection, payment status visibility, food-ready notifications, and bill download capability.
  - **Management & Analytics:** Dynamic product and category management, floor/table configuration, sales reports (weekly, monthly, yearly), revenue insights, and product sales ranking (most-sold and least-sold items).
  - **Architecture & Access:** Unified user management with role-based access separating cashiers, kitchen staff, and administrators across a clean REST API backend backed by relational databases.
- **Technology Stack:**
  - *Frontend:* React, Vite, Tailwind CSS
  - *Backend:* Node.js, Express.js, REST APIs
  - *Databases:* PostgreSQL, MySQL
- **Project Links:**
  - Live Application: [https://cafe-cloud.vercel.app/](https://cafe-cloud.vercel.app/)
  - GitHub Repository: [https://github.com/GoyalHarshit18/Odoo-Cafe-POS](https://github.com/GoyalHarshit18/Odoo-Cafe-POS)
- *Strict Accuracy Rule:* Highlights real-world operational workflow and architectural complexity without inventing performance metrics, user counts, business adoption, or solo-attribution claims.

#### Project 03 — CrisisLink: Smart Emergency Response System
- **Category:** Hackathon Build / Public Safety & Smart City
- **Description:** A real-time emergency incident reporting and response coordination platform designed to improve incident verification, reduce duplicate reports, and help emergency responders coordinate through live dashboards and maps.
- **Problem & Solution:** Traditional emergency response systems suffer from fragmented citizen reporting, duplicate alerts, limited situational awareness, and delayed responder coordination. CrisisLink provides a unified platform where citizens report incidents, the system assists in verification and prioritization, and responders coordinate via live maps and dashboards.
- **Key Engineering Highlights:**
  - **Real-Time Incident Reporting:** Location- and timestamp-based incident capture and tracking.
  - **AI-Assisted Verification & De-Duplication:** Utilizes **FAISS-based similarity search** to identify and flag duplicate incoming incident reports.
  - **Live Incident Dashboards:** Real-time map-based visualization for incident monitoring and responder awareness.
  - **Role-Based Workflows:** Distinct operational interfaces for Citizens (reporting & tracking), Responders (assignment & coordination), and Administrators (system oversight).
  - **Real-Time Synchronization:** **WebSocket-powered live updates** pushing immediate status updates across connected clients.
  - **Incident Lifecycle:** Structured state progression covering `Submission` → `Validation` → `Prioritization` → `Assignment` → `Resolution`.
- **Technology Stack:**
  - *Frontend:* React / Next.js, HTML5, CSS3, JavaScript, Tailwind CSS
  - *Backend:* Node.js, Express.js, REST APIs, WebSockets
  - *Database & AI:* MongoDB, FAISS
  - *Deployment:* Vercel, Render / Railway, MongoDB Atlas
- **Project Links:**
  - Live Project: [https://landing-page-mb2z.onrender.com](https://landing-page-mb2z.onrender.com/)
  - GitHub Repository: [https://github.com/GoyalHarshit18/SmartEmergency-System](https://github.com/GoyalHarshit18/SmartEmergency-System)
- *Strict Accuracy Rule:* Avoids assuming multimedia attachments, text-embedding specifics, geographic clustering, cluster heatmaps, or automatic prioritization. Claims no unmeasured response-time metrics or production adoption.

#### Project 04 — Voter List Management System: Intelligent Voter Verification
- **Category:** Hackathon / Academic Project — Civic Tech & Electoral Systems
- **Description:** A voter registration and verification platform designed to reduce duplicate registrations through a layered validation pipeline combining deterministic rule-based checks with machine-learning-driven similarity detection.
- **Problem & Solution:** Traditional voter registration systems face duplicate registrations, delayed manual verification, data inconsistencies, and limited auditability. This platform routes every new voter application through a multi-stage verification pipeline before enrollment in the final voter database.
- **Key Engineering Highlights:**
  - **Structured Application Workflow:** Unified voter application submission form with real-time application status tracking (`Pending`, `Approved`, `Under Review`).
  - **Hybrid Duplicate Detection Pipeline:** Layered verification combining deterministic rule-based validation (Aadhaar hash, date of birth, name similarity) with a Python-based ML similarity model for combined scoring.
  - **Decision Engine & Manual Review:** Supports structured decision flow where applications can be marked for approval, rejection, or manual review by election officials.
  - **Data Privacy & Integrity:** Separation of pending voter applications from verified voter records, with dedicated duplicate-check records and cryptographic hashing of sensitive personal identifiers to preserve privacy.
- **Technology Stack:**
  - *Backend:* Node.js, Express.js
  - *Database:* PostgreSQL
  - *ML Engine:* Python-based similarity model
  - *Security:* Cryptographic hashing for sensitive identifiers
- **Project Links:**
  - Live Project: [https://hack4delhi-frontend-7xm4.onrender.com](https://hack4delhi-frontend-7xm4.onrender.com/)
  - GitHub Repository: [https://github.com/GoyalHarshit18/VoterList-Management-System](https://github.com/GoyalHarshit18/VoterList-Management-System)
- *Strict Accuracy Rule:* Illustrates the layered verification pipeline without claiming automated confidence thresholds, audit-oriented decision records, sample credentials, government API integration, facial recognition, or blockchain features.

#### Project 05 — Answer Sheet Management System: Digital Evaluation Portal
- **Category:** Hackathon Build / Academic Management System
- **Description:** A digital examination review portal giving university students transparent access to evaluated answer scripts and an accelerated re-evaluation workflow.
- **Confirmed Capabilities (Source of Truth):**
  - Web portal providing evaluated answer sheet access for **1,000+ students**.
  - Integrated claim-raising workflow for re-evaluation requests, reducing resolution turnaround time to **under 24 hours**.
  - Designed a **MySQL schema** storing and querying **10,000+ student records**.
- **Confirmed Technology Stack:** MySQL, Node.js, Express.js, React.js, REST APIs.
- **Project Links:** *Conditional rendering:* Render Live Demo and GitHub Repository links only when their confirmed URLs are provided by the user; omit any link if its URL is unconfirmed or unavailable. Do not invent placeholder URLs.
- *Strict Accuracy Rule:* Excludes unverified percentage efficiency gains, role-based access claims, or scoring dashboard features.

---

### 8.3 Reusable Project Content Data Structure

To ensure that projects can be added, updated, or promoted without visual redesigns or component refactoring, the portfolio uses a decoupled TypeScript data schema:

```typescript
export type ProjectCategory = 'featured' | 'hackathon' | 'other';

export interface ProjectTechStack {
  frontend?: string[];
  backend?: string[];
  databases?: string[];
  ai?: string[];
  tools?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory; // Only 'Revora' currently uses 'featured'
  tagline: string;
  problem: string;
  solution: string;
  highlights: string[];
  architecture?: {
    summary: string;
    diagramType?: 'workflow' | 'dataflow' | 'layers';
  };
  techStack: ProjectTechStack;
  metrics?: string[]; // Only verified metrics
  links: {
    live?: string;
    github?: string;
  };
  teamContext?: string; // Optional context (do not assume team sizes or contributions)
  personalContribution?: string; // Included only when verified
  featuredDetails?: {
    deepDiveMarkdown?: string;
  };
}
```

---

## 9. Verified Technical Skills: Resume as Ground Truth

To maintain complete credibility, **only technologies verified in Gaurav’s resume** are included in the professional skills matrix.

*(Notice: Three.js and Tailwind CSS are implementation technologies used to construct this portfolio website, but they are not listed as Gaurav’s core resume competencies unless separately verified).*

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    VERIFIED TECHNICAL SKILLS MATRIX                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ 01 // PROGRAMMING LANGUAGES                                                  │
│ C/C++  •  Java  •  Python  •  JavaScript  •  TypeScript  •  SQL  •  HTML/CSS │
├──────────────────────────────────────────────────────────────────────────────┤
│ 02 // BACKEND & WEB DEVELOPMENT                                              │
│ Node.js  •  Express  •  Next.js  •  React.js  •  REST APIs  •  Prisma  •    │
│ BullMQ                                                                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ 03 // DATABASES                                                              │
│ PostgreSQL  •  MySQL  •  MongoDB  •  Redis                                   │
├──────────────────────────────────────────────────────────────────────────────┤
│ 04 // DEVELOPER TOOLS                                                        │
│ Git / GitHub  •  Docker  •  Postman  •  VS Code                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ 05 // ARTIFICIAL INTELLIGENCE & DATA                                         │
│ RAG (Retrieval-Augmented Generation)  •  LLM Integration  •                  │
│ Semantic Search  •  Prompt Engineering                                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ 06 // COMPUTER SCIENCE FUNDAMENTALS                                          │
│ Data Structures & Algorithms  •  Operating Systems  •  OOPs  •               │
│ DBMS (Database Management Systems)  •  System Design                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

- **Visual Structure:** Clean, modern competency cards grouped by category.
- **No Progress Bars:** Completely free of arbitrary percentage bars (e.g., "C++ 85%"). Skills are displayed as solid, credible engineering domains with clean chips and monospace metadata.

---

## 10. Motion and Interaction Guidelines

Animations must feel **purposeful, weightless, and crisp**—never sluggish, gratuitous, or distracting.

### 10.1 Physics & Easing Tokens

```javascript
export const MOTION = {
  // Smooth deceleration for entrances and modal reveals
  easeOutEditorial: [0.16, 1, 0.3, 1],
  
  // Tactile spring for button taps and card hovers
  springTactile: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.8
  },
  
  // Timing Durations
  fast: 0.15,
  medium: 0.35,
  slow: 0.60
};
```

### 10.2 Interaction Rules
1. **No Scroll-Jacking or Excessive Parallax:** Scrolling always follows native browser inertia.
2. **Selective Entrance Animations:** Only major section headers and top-level cards animate on scroll (`opacity: 0 → 1`, `y: 16px → 0px`, duration `0.45s`). Elements inside cards do not animate separately.
3. **Card Hovers:**
   - Subtle vertical lift: `translateY(-3px)`.
   - Border luminance shift: `var(--border-subtle)` → `var(--border-medium)`.
4. **Button Feedback:** `whileTap={{ scale: 0.98 }}` for immediate tactile confirmation.
5. **Reduced-Motion Support (`prefers-reduced-motion: reduce`):**
   - All spatial translations are disabled.
   - Transitions collapse to immediate opacity changes (`duration: 0.1s`).
   - WebGL animations halt or render a single static frame.

---

## 11. Three.js Strategy: Atmospheric System Lattice

### 11.1 Purpose & Phasing
The Three.js component serves one precise role: **providing subtle, atmospheric depth behind the hero portrait frame to evoke computational space.**

- **Phased Implementation:** Three.js is **not** installed during Phase 3 foundation setup. It will be implemented alongside the Hero section in **Phase 4**, once the fundamental DOM layout and styling are verified.
- **Zero Disruption to Text:** The 3D lattice sits in the background of the right hero column, with smooth alpha vignetting so it never obscures headline text or portrait clarity.

### 11.2 Visual Treatment: The "System Lattice"
- **Appearance:** A low-density mathematical wireframe coordinate mesh rendered in subtle slate lines (`rgba(255, 255, 255, 0.10)` in dark mode; `rgba(15, 20, 28, 0.08)` in light mode) with soft Electric Mint vertex nodes.
- **Behavior:**
  - Idle: Gentle, slow sinusoidal wave equation.
  - Interaction: Mouse movement introduces a subtle localized ripple with heavy damping.
- **Technically Valid Rendering Strategy & Viewport Control:**
  - Geometry: Minimal plane mesh (`32 × 32` segments, < 1,200 vertices).
  - Canvas Pixel Ratio: `dpr={[1, 1.5]}` (capped to prevent 4K GPU throttling).
  - Lazy Loading: Component dynamically imported via `next/dynamic` with `ssr: false`.
  - Viewport-Aware Frameloop Control: To support continuous sinusoidal wave animation and interactive mouse displacement without wasted background execution, frameloop is dynamically bound to viewport intersection and motion preferences: `<Canvas frameloop={isHeroInView && !prefersReducedMotion ? "always" : "never"} ... />`. When the hero is in view and reduced-motion is not requested, `frameloop="always"` ensures fluid continuous `useFrame` updates. When the hero scrolls out of view (monitored via `IntersectionObserver`), `frameloop` switches dynamically to `"never"`, completely halting the WebGL render loop and freeing 100% of GPU/CPU resources.
- **Mobile & Graceful Performance Fallback:**
  - The WebGL canvas is not mounted under the following conditions:
    1. Viewport width `< 768px` (mobile devices).
    2. User motion preference: `@media (prefers-reduced-motion: reduce)`.
    3. Device performance indicators (e.g. `navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4`, or environments where WebGL context creation fails).
  - Note on Power Management: Fallback behavior relies on standard viewport, motion, and hardware capability checks rather than deprecated or non-standard browser Battery Status APIs.
  - In fallback scenarios, the 3D canvas is cleanly replaced by an ultra-lightweight **CSS radial gradient + SVG coordinate grid** with 0% GPU overhead.

---

## 12. Responsive Behavior & Mobile Composition

The mobile experience is **deliberately composed**, not simply scaled down from desktop.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                     RESPONSIVE COMPOSITION MATRIX                            │
├──────────────────────────────────────┬───────────────────────────────────────┤
│ DESKTOP (≥ 1024px)                   │ MOBILE (< 768px)                      │
│ • 12-column asymmetric grid          │ • Single-column deliberate vertical   │
│ • Side-by-side hero (58% / 42%)      │   flow                                │
│ • Dual CTAs in horizontal row        │ • Centered portrait anchor at top     │
│ • Three.js System Lattice active     │ • Prominent name & positioning        │
│ • Hover micro-interactions           │ • Full-width stacked primary CTAs     │
│ • Fixed blurred top navbar           │ • Minimum touch targets (≥ 48px)      │
│                                      │ • Lightweight CSS/SVG hero fallback   │
│                                      │ • Streamlined mobile drawer menu      │
└──────────────────────────────────────┴───────────────────────────────────────┘
```

### 12.1 Mobile Reflow Details
1. **Hero Content Ordering on Mobile:**
   - 1. Neutral Category Eyebrow (`PORTFOLIO // 2026`).
   - 2. Portrait Container (`/assets/My_image1.jpg`, cleanly centered, `160px × 160px` circular frame).
   - 3. Display Name (`GAURAV GUPTA`, scaled to `36px`).
   - 4. Positioning Title (`Software Engineer & Full-Stack Developer`, `18px`).
   - 5. Introduction narrative (`15px`, line-height `1.6`).
   - 6. Stacked CTAs (`View Projects →` full-width; `Download CV ↓` full-width).
   - 7. Social links row.
2. **Touch Target Sizing:** Every interactive link, button, and navigation item has a hit target of at least `48px × 48px`.
3. **Navigation on Mobile:** Collapses into a clean mobile header with a hamburger menu opening a focused full-screen drawer containing high-contrast links and the theme toggle.

---

## 13. Accessibility & Quality Implementation Requirements

Accessibility is a core engineering requirement. The following standards must be implemented and tested during development:

### 13.1 Mandatory Accessibility Requirements
- **Color Contrast:** All text must meet WCAG 2.1 AA standards (minimum 4.5:1 for normal text, 3.0:1 for large text and UI components). Light mode tertiary text (`#59606D`) achieves 6.00:1 on canvas; dark mode tertiary text (`#7D889E`) achieves 5.13:1 on surface and 5.52:1 on canvas.
- **Keyboard Navigation Testing:** During Phase 4 implementation, the complete DOM must be verified for sequential keyboard tab order (Skip Link → Navbar → Hero CTAs → Content Sections → Footer).
- **Visible Focus Rings:** Every interactive element must display a visible focus indicator: `2px solid var(--accent-primary)` with `outline-offset: 2px`.
- **Screen Reader Support:** All icon-only buttons, avatars, and diagrams must include descriptive `aria-label` tags and text alternatives to be verified with screen reader testing.
- **Semantic HTML Structure:** Only valid HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) must be used.
- **Reduced Motion Support:** Tested via CSS `@media (prefers-reduced-motion: reduce)` to guarantee zero spatial disorientation for motion-sensitive visitors.

---

## 14. Complete CSS Implementation Tokens

Below is the production-ready token stylesheet for direct inclusion in `globals.css`:

```css
:root {
  /* ==========================================================================
     DARK THEME (Default)
     ========================================================================== */
  --bg-canvas: #090B0F;
  --bg-surface: #11151C;
  --bg-surface-elevated: #1C232D;
  --bg-surface-subtle: #141A23;

  --text-primary: #F4F5F7;
  --text-secondary: #929AA8;
  --text-tertiary: #7D889E;
  --text-inverse: #090B0F;

  --accent-primary: #65E6CF;
  --accent-hover: #85EED9;
  --accent-muted: rgba(101, 230, 207, 0.10);
  --accent-glow: rgba(101, 230, 207, 0.20);

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.16);
  --border-strong: rgba(255, 255, 255, 0.24);
  --border-accent: rgba(101, 230, 207, 0.35);

  --color-success: #4ADE80;
  --color-warning: #FBBF24;
  --color-error: #F87171;
  --color-info: #60A5FA;

  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-full: 9999px;

  --font-sans: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', monospace;
}

/* ==========================================================================
   LIGHT THEME (Warm Editorial Off-White)
   ========================================================================== */
[data-theme="light"] {
  --bg-canvas: #F8F9FA;
  --bg-surface: #FFFFFF;
  --bg-surface-elevated: #FFFFFF;
  --bg-surface-subtle: #F1F3F5;

  --text-primary: #0F141C;
  --text-secondary: #525866;
  --text-tertiary: #59606D;
  --text-inverse: #FFFFFF;

  --accent-primary: #0B7C68;
  --accent-hover: #0E947D;
  --accent-muted: rgba(11, 124, 104, 0.08);
  --accent-glow: rgba(11, 124, 104, 0.15);

  --border-subtle: #E2E4E9;
  --border-medium: #CDD0D5;
  --border-strong: #A8ADB7;
  --border-accent: rgba(11, 124, 104, 0.40);

  --color-success: #15803D;
  --color-warning: #B45309;
  --color-error: #DC2626;
  --color-info: #2563EB;
}
```

---

## 15. Master Implementation Roadmap (Phases 1 – 10)

The project proceeds through the agreed 10-phase master engineering plan:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    PROJECT MASTER IMPLEMENTATION ROADMAP                     │
├──────────────────────────────────────┬───────────────────────────────────────┤
│  PHASE 1 — Resume Analysis & Content Strategy                                │
│  • Status: Completed. Verified all skills, background, and project facts.   │
│                                                                              │
│  PHASE 2 — Creative Direction & Design System Specification                  │
│  • Status: Completed upon final approval of this DESIGN_SYSTEM.md document.  │
│                                                                              │
│  PHASE 3 — Project Setup & UI Foundation (NEXT UP)                           │
│  • Initialize Next.js (App Router), TypeScript, and Tailwind CSS.            │
│  • Configure Geist Sans and Geist Mono web font integration.                 │
│  • Inject design tokens into Tailwind configuration.                         │
│  • Build reusable UI primitives (Button, Card, Badge, Heading, Text Link).   │
│  • Construct Navbar and Footer layout foundation.                            │
│  • Setup theme provider (zero-flash dark/light switching).                   │
│  • Note: Do not install Three.js during Phase 3.                             │
│                                                                              │
│  PHASE 4 — Core Portfolio Experience                                         │
│  • Hero, About, Experience, Featured Projects, Hackathon Builds & Other      │
│    Projects, Skills, Achievements, Leadership, and Currently Building.       │
│  • Implement Three.js hero visual alongside Hero after foundation is ready.   │
│                                                                              │
│  PHASE 5 — Advanced Project Showcase                                         │
│  • Project architecture explorer, engineering case studies, technical        │
│    decisions, and project changelog.                                         │
│                                                                              │
│  PHASE 6 — Interactive Developer Experience                                  │
│  • Command Palette (⌘K), Interactive Developer Terminal, and keyboard       │
│    navigation interactions.                                                  │
│                                                                              │
│  PHASE 7 — Intelligent Portfolio Features                                    │
│  • AI Portfolio Assistant, Recruiter Mode, optional GitHub repository        │
│    dashboard (focusing on repository architecture and tech stacks rather     │
│    than activity telemetry), Interactive Journey Timeline, and Interactive  │
│    Tech Stack.                                                               │
│                                                                              │
│  PHASE 8 — Contact & Communication                                           │
│  • Contact form and server-side email integration using Resend.              │
│                                                                              │
│  PHASE 9 — Quality Assurance & Optimization                                  │
│  • SEO, accessibility, security, responsive testing, performance, and        │
│    cross-browser testing.                                                    │
│                                                                              │
│  PHASE 10 — Deployment & Final Polish                                        │
│  • Vercel deployment and production verification.                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

---
*End of Design System Specification Version 2.1.3-final. Fully verified, contradiction-free, and ready to guide Phase 3.*
