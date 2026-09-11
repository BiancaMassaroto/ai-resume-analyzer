<div align="center">

# 📄 Resumind

**AI-powered resume analysis & ATS scoring**

Upload your resume, target it at a real job posting, and get instant, detailed feedback on how it will perform against Applicant Tracking Systems — no backend server required.

[![React Router](https://img.shields.io/badge/React%20Router-8-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Puter.js](https://img.shields.io/badge/Powered%20by-Puter.js-6C5CE7)](https://puter.com/)

</div>

---

## ✨ What it does

Resumind turns a PDF resume into a full ATS-style review:

- 🔐 **Sign in** with your Puter account — no separate backend, database, or API keys to manage
- 📤 **Upload a resume** as a PDF, along with the company name, job title, and job description you're applying with
- 🖼️ **Automatic conversion** of the PDF's first page into an image so it can be read and previewed
- 🤖 **AI-generated feedback** tailored to the job you provided, covering:
  - **ATS Score** — how likely the resume is to pass automated screening
  - **Tone & Style**
  - **Content**
  - **Structure**
  - **Skills**
- 📊 A **dashboard** of every resume you've submitted, each with its own score and quick access to the full breakdown
- 🧹 A **wipe** utility to clear all stored files and data for a clean slate

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React Router 8](https://reactrouter.com/) (SSR-ready, file-based routing) |
| UI | React 19, TailwindCSS 4 |
| State | [Zustand](https://github.com/pmndrs/zustand) |
| Auth / Storage / AI | [Puter.js](https://developer.puter.com/) — auth, file system, key-value store, and AI chat all in the browser |
| PDF handling | [pdfjs-dist](https://mozilla.github.io/pdf.js/) (PDF → image conversion) |
| File uploads | [react-dropzone](https://react-dropzone.js.org/) |
| Language | TypeScript |
| Deployment | Docker-ready |

## 🗺️ How it works

```
 ┌──────────┐     ┌────────────────┐     ┌──────────────────┐     ┌───────────────────┐
 │  Sign in  │ ──▶ │  Upload resume  │ ──▶ │  PDF → image +    │ ──▶ │  AI feedback saved │
 │ (Puter)  │     │  + job details  │     │  stored via Puter │     │  & shown on review  │
 └──────────┘     └────────────────┘     └──────────────────┘     └───────────────────┘
```

1. **Auth** (`/auth`) — sign in through Puter; the session gates every other route.
2. **Upload** (`/upload`) — drop in a PDF, add the company name, job title, and job description.
3. **Processing** — the PDF is uploaded, rendered to an image (for preview and AI analysis), and both files are stored via Puter's file system.
4. **Analysis** — the resume image is sent to Puter's AI chat with a structured prompt, and the JSON response (scores + tips) is saved alongside the resume in Puter's key-value store.
5. **Review** (`/resume/:id`) — see the resume next to its full, categorized feedback.
6. **Home** (`/`) — every past submission appears as a card with its score at a glance.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- A [Puter](https://puter.com/) account (sign-in happens in-app, no setup required beforehand)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Type checking

```bash
npm run typecheck
```

### Production build

```bash
npm run build
npm run start
```

## 🐳 Docker

```bash
docker build -t resumind .
docker run -p 3000:3000 resumind
```

The containerized app can be deployed anywhere Docker runs — AWS ECS, Google Cloud Run, Azure Container Apps, Fly.io, Railway, etc.

## 📁 Project Structure

```
app/
├── components/     # UI building blocks (ATS score, gauges, file uploader, cards…)
├── lib/            # Puter integration, PDF→image conversion, utilities
├── routes/         # / , /auth , /upload , /resume/:id , /wipe
└── app.css         # Tailwind config & shared styles
constants/          # AI prompt templates & response schema
public/             # Static assets & background art
```

## 🔒 Privacy

All storage — uploaded resumes, generated images, and AI feedback — lives in your own Puter account (file system + key-value store). Nothing is sent to a separate backend owned by this project. Use the `/wipe` route to permanently delete everything stored for your account.

---

<div align="center">

Built with ❤️ using React Router and Puter.js

</div>
