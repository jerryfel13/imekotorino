# 2025 IMEKO Joint Conference Website

A modern, responsive website for the 2025 IMEKO Joint Conference in Torino, Italy, built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, beautiful UI with gradient designs
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js 14
- 🎯 SEO optimized
- ♿ Accessible navigation
- 📄 Multiple pages: Home, About (Organizing Committee, Venue), Contacts

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── app/
│   ├── about/
│   │   ├── organizing-committee/
│   │   │   └── page.tsx
│   │   └── venue/
│   │       └── page.tsx
│   ├── contacts/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Navigation.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Pages

- **Home** (`/`) - Main landing page with conference information, call for papers, and key details
- **About > Organizing Committee** (`/about/organizing-committee`) - Information about the organizing committee
- **About > Venue** (`/about/venue`) - Details about Torino and the conference venue
- **Contacts** (`/contacts`) - Contact form and information

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Build for Production

```bash
npm run build
npm start
```

## Customization

The website uses a primary color scheme defined in `tailwind.config.ts`. You can customize colors, fonts, and other design elements by modifying:

- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles
- Individual page components in `app/` directory

## License

This project is created for the 2025 IMEKO Joint Conference.





