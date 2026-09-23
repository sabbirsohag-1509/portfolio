# My Portfolio

A modern and responsive developer portfolio built with React and Vite.
This website showcases my skills, education, experience, and featured projects with smooth animations and a clean UI.

## Live Website

- Live URL: https://portfolio-sabbir-sohag-f956ef.netlify.app

## Project Overview

This portfolio is designed to present my profile as a MERN Stack Developer.
It includes an animated hero section, skills overview, project showcase with detail pages, and a contact section.

## Key Features

- Fully responsive design for mobile, tablet, and desktop
- Animated sections using Framer Motion and GSAP
- Smooth scrolling experience with Lenis
- Project showcase with dedicated project details page
- Multiple screenshots support in project details
- Image preview modal with close button for gallery thumbnails
- Clean component-based React architecture

## Tech Stack

### Frontend

- React 19
- React Router
- Vite
- Tailwind CSS
- DaisyUI
- Framer Motion
- GSAP
- Lenis
- React Icons

### Tooling

- ESLint

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <your-repository-url>
cd my-portfolio
npm install
```

### Run Locally

```bash
npm run dev
```

App will run at:

- http://localhost:5173

### Contact Form Configuration

The contact form uses EmailJS. Copy `.env.example` to `.env.local` and fill in
the values from your EmailJS dashboard:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Set the EmailJS template's **To Email** to the inbox that should receive
messages. For production, add the same variables in the hosting provider's
environment settings and redeploy the site.

## Available Scripts

- npm run dev: Start development server
- npm run build: Create production build
- npm run preview: Preview production build locally
- npm run lint: Run ESLint checks

## Project Structure

```text
my-portfolio/
	public/
	src/
		assets/
		components/
		context/
		data/
		pages/
		App.jsx
		main.jsx
	index.html
	package.json
	vite.config.js
```

## Featured Projects in Portfolio

- DashChat (Group Project)
- ScholarStream
- HomeNest
- Personal Portfolio
- CatalogX
- The Dragon News

## Deployment

You can deploy this project on:

- Netlify
- Vercel
- Render

## Author

- Sabbir Hossain Sohag
- LinkedIn: https://www.linkedin.com/in/sabbirhossainsohag/
- GitHub: https://github.com/sabbirsohag-1509

## License

This project is for personal portfolio and educational use.
