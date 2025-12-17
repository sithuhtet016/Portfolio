**Portfolio — DEV.SITHU**

This is a modern, pixel-styled developer portfolio built to showcase thoughtful UI, responsive design, and real project work. It's designed to make a recruiter quickly understand the candidate's strengths: product thinking, front-end craftsmanship, and solid engineering choices.

**Why This Project Matters**

- **Impact:** Demonstrates building user-facing features with attention to accessibility, performance, and design.
- **Signal:** Shows practical skills in React, routing, responsive layouts, and visual polish that matter for front-end and full-stack roles.

**Highlights**

- **Polished UI:** Pixel-inspired theme, animated accents, and intentional typography choices (Press Start 2P, VT323).
- **Responsive Navigation:** Desktop and mobile menu patterns with accessible attributes.
- **Project Showcase:** `VIEW` and `CODE` actions for each project to demonstrate deployed work and source code.
- **Fast to iterate:** Lightweight setup with Vite for quick local development.

**Tech Stack**

- **Framework:** React + Vite
- **Styling:** Tailwind-inspired utility classes and custom CSS in [app/app.css](app/app.css)
- **Routing:** `react-router` with a clean `root` layout ([app/root.tsx](app/root.tsx))

**Quick Start**

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Open http://localhost:5173 (or the port shown in your terminal)

**Key Files**

- **Layout & meta:** [app/root.tsx](app/root.tsx)
- **Header / Navigation:** [app/components/Header.tsx](app/components/Header.tsx)
- **Projects showcase:** [app/components/Projects.tsx](app/components/Projects.tsx)
- **Static assets:** `public/` (icons, images)

**What to look for as a recruiter**

- **Design decisions:** Typography and color choices support a clear visual hierarchy and brand-like presence.
- **Component structure:** Clean separation between layout, components, and routes—easy to extend.
- **Accessibility:** Navigation buttons include `aria` attributes and clear alt text on icons.
- **Deliverables:** Each project includes `viewUrl` and `codeUrl` so you can quickly review live demos and source.

**Demo & Screenshots**

- See `public/images/` for included screenshots. A live demo link (if deployed) can be added to each project's `viewUrl`.

**Contact & Next Steps**

- **Email:** add your preferred contact email here
- **GitHub:** https://github.com/sithuhtet016/Portfolio

If you'd like, I can:

- add real `viewUrl`/`codeUrl` links for each project
- create a small deploy pipeline and add a live demo link
- add unit/visual tests to demonstrate engineering rigor

Thank you for reviewing this portfolio — it's built to be quickly scannable and to spark conversations about product, UX, and implementation details.

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
