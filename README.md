<div align="center">
  <img src="public/images/logo.png" alt="Logo" width="150" />
</div>
<h1 align="center">
  <a href="https://samirhassen.com" target="_blank">samirhassen.com</a>
</h1>
<p>
Portfolio website inspired by <a href="https://brittanychiang.com" target="_blank">Brittany Chiang's</a> design. Built with Next.js, Tailwind CSS, and shadcn/ui. Almost everything is configurable through a single JSON file — no component editing required for most changes.
</p>

<div align="center">
  <img alt="Website Visual" src="https://raw.githubusercontent.com/shassen14/portfolio_website/refs/heads/main/public/images/website_screenshot.png" />
</div>

## Forking this repo

Feel free to use this for your own portfolio. If you do:
- Give [Brittany Chiang](https://brittanychiang.com) credit for the original design.
- A link back to [samirhassen.com](https://samirhassen.com) is appreciated but not required.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Configuration

Almost all content lives in one file: [`public/configs/page_details.json`](public/configs/page_details.json).

### `about`

Array of paragraph strings rendered in the About section.

```json
"about": [
  "First paragraph of your bio.",
  "Second paragraph."
]
```

### `header`

Shown in the left sidebar.

```json
"header": {
  "image": "images/profile.jpg",
  "introduction": "Hi, I'm ...",
  "position": "Software Engineer",
  "summary": "Short tagline about yourself"
}
```

### `menu`

Controls which sections appear and in what order. Set `isActive` to `false` to hide a section entirely.

```json
"menu": [
  { "isActive": true, "section": "about" },
  { "isActive": true, "section": "education" },
  { "isActive": true, "section": "experience" },
  { "isActive": true, "section": "projects" }
]
```

### `education`

```json
"education": [
  {
    "subject": "Computer Science",
    "degree": "BS",
    "university": "University Name"
  }
]
```

### `experience`

```json
"experience": [
  {
    "position": "Software Engineer",
    "prevPositions": ["Junior Engineer"],
    "company": "Company Name",
    "startDate": "Jan 2022",
    "endDate": "Present",
    "description": "What you did and accomplished.",
    "skills": ["Python", "Go", "Kubernetes"],
    "mainLink": "https://company.com",
    "sideLinks": [
      { "label": "Blog post", "link": "https://..." }
    ]
  }
]
```

`prevPositions` and `sideLinks` are optional.

### `projects`

```json
"projects": [
  {
    "name": "Project Name",
    "image": "images/screenshot.png",
    "description": "What it does and why it's interesting.",
    "skills": ["Rust", "React"],
    "mainLink": "https://github.com/...",
    "sideLinks": [
      { "label": "Demo", "link": "https://..." }
    ]
  }
]
```

`image` accepts a relative path (files in `public/`) or a raw GitHub URL. `sideLinks` is optional.

## Theming

Colors are defined as CSS custom properties in [`src/app/globals.css`](src/app/globals.css) in HSL format. Edit the `:root` block for light mode and the `.dark` block for dark mode. The site ships with a warm cream/brown light theme and a dark red-brown dark theme.

## What still needs a code edit

These items aren't in the JSON yet and require editing a component directly:

- **Social links** — [`src/components/Contacts.tsx`](src/components/Contacts.tsx)
- **Page metadata** (title, description) — [`src/app/layout.tsx`](src/app/layout.tsx)

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
