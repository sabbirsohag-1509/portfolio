// Projects data for use across the application
import scholarshipImg from "../assets/scholarship.jpg";
import homeNestImg from "../assets/homeNest.PNG";
import portfolioImg from "../assets/portfolio.PNG";
import dragonNewsImg from "../assets/the-dragon-news.PNG";
import catalogxImg from "../assets/catalogx2.png";

export const projectsData = [
  {
    id: 1,
    name: "ScholarStream",
    image: scholarshipImg,
    shortDescription:
      "A comprehensive scholarship management platform with multi-role system (Student, Moderator, Admin) featuring secure authentication, Stripe payments, and analytics dashboard.",
    fullDescription: `ScholarStream is a comprehensive scholarship management platform designed to streamline the application, review, and approval process for students, moderators, and administrators.

The platform enables students to easily discover and apply for scholarships, allows moderators to review applications efficiently, and gives administrators full control over scholarships and user management. ScholarStream improves transparency, reduces manual paperwork, and ensures a smooth workflow for all stakeholders.

**Key Features:**
• Multi-role system: Student, Moderator, Admin with role-based access control
• Student Dashboard: Search, filter, and apply for scholarships with ease
• Moderator Dashboard: Review and provide feedback on applications
• Admin Dashboard: Manage scholarships, users, and application status
• Secure Authentication: Email/Password + Google Social Login via Firebase
• Payment Integration: Stripe for secure application fee payments
• Charts & Analytics: Admin dashboard displays comprehensive statistics
• Fully responsive UI optimized for desktop, tablet, and mobile devices`,
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase Auth",
      "JWT",
      "Stripe",
    ],
    liveLink: "https://sparkling-sable-55715c.netlify.app",
    githubLink: "https://github.com/sabbirsohag-1509/assignment-11-client",
    challenges: [
      "Implementing multi-role authentication and authorization system",
      "Integrating Stripe payment gateway for secure transactions",
      "Building complex filtering and search functionality for scholarships",
      "Creating role-specific dashboards with different access levels",
      "Managing application workflow states across multiple user roles",
    ],
    futureImprovements: [
      "Add email notifications for application status updates",
      "Implement document verification system",
      "Add scholarship recommendation engine",
      "Create mobile app for better accessibility",
      "Add real-time chat support for students",
    ],
  },
  {
    id: 2,
    name: "HomeNest",
    image: homeNestImg,
    shortDescription:
      "A real estate management platform with role-based dashboards (Buyer, Seller, Admin), Stripe payment integration, and comprehensive property listing system.",
    fullDescription: `HomeNest is a real estate management platform built to streamline property listing, browsing, and management for buyers, sellers, and administrators. I implemented the full MERN stack solution, including role-based dashboards, secure authentication, property management, and payment workflow.

**User Roles:**
• Buyer: Browse, search, filter, and view property listings
• Seller: Add, update, and manage property listings
• Admin: Full control over user accounts and property approvals

**Authentication:**
• Email/password login with JWT-based session management
• Google social login integration via Firebase

**Property Listings:**
• Add, update, and delete properties (Seller/Admin)
• Search and filter by type, price, and location (Buyer)
• Responsive cards with images, title, and description

**Payment Integration:**
• Stripe Checkout for booking or premium listings
• Webhook-based payment confirmation and status tracking

**Frontend Features:**
• Built with React functional components + Hooks
• Styled with Tailwind CSS + DaisyUI
• Fully responsive layout (desktop, tablet, mobile)

**Backend Features:**
• Node.js + Express.js REST API
• MongoDB database for users, properties, and transactions
• Secure routes with JWT & role-based access

**Additional Functionalities:**
• Server-side pagination, search, and filtering
• Success/error notifications (toast messages)
• Detailed property view page with images and booking option`,
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "DaisyUI",
      "JWT",
      "Stripe",
      "Firebase Auth",
      "React Router",
    ],
    liveLink: "https://whimsical-marigold-942cbe.netlify.app",
    githubLink: "https://github.com/sabbirsohag-1509/assignment-10-client-site",
    challenges: [
      "Role-based dashboard implementation for buyers, sellers, and admins",
      "Stripe payment integration and webhook handling",
      "Handling search, filter, and pagination efficiently",
      "Making the frontend fully responsive across all devices",
      "Managing complex state with multiple user roles",
    ],
    futureImprovements: [
      "Add real-time chat between buyer and seller",
      "Implement property image carousel & zoom",
      "Add notification system for property updates",
      "Implement wishlist/favorites feature",
      "Add map integration for property locations",
    ],
  },
  {
    id: 3,
    name: "Personal Portfolio",
    image: portfolioImg,
    shortDescription:
      "A modern, responsive portfolio website with smooth animations, interactive components, and professional design to showcase my skills and projects.",
    fullDescription: `This is my personal portfolio website designed to showcase my skills, projects, and experience as a web developer. The website features a modern, responsive, and professional design with smooth animations, interactive components, and user-friendly navigation. It allows visitors to easily explore my work, learn about my experience, and contact me directly.

**Key Features Implemented:**
• Fully responsive navigation bar with smooth scrolling
• Hero section with professional designation and image
• Animated "Welcome" screen with cinematic effects
• Resume download button with toast notification
• Social media links (GitHub, LinkedIn, Twitter, Facebook)
• About Me section describing skills, journey, and hobbies
• Skills section with visual skill charts
• Education and experience timeline sections
• Projects section with detailed project cards
• Contact form with email, phone, and WhatsApp integration
• Animated gradient background with glow effects
• Scroll to top button
• Clean and consistent footer
• Smooth scrolling effects using Lenis

**Frontend Technologies:**
• React (functional components + Hooks)
• Tailwind CSS + DaisyUI for styling
• Framer Motion for animations and page transitions
• GSAP for advanced animations
• Lenis for smooth scroll enhancement
• React Router v7+ for navigation
• Vite for fast development and build`,
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "GSAP",
      "Lenis",
      "Vite",
      "React Router",
      "React Icons",
    ],
    liveLink: "https://portfolio-sabbir-sohag-f956ef.netlify.app",
    githubLink: "https://github.com/sabbirsohag-1509/portfolio",
    challenges: [
      "Creating smooth and performant animations with Framer Motion",
      "Implementing responsive design across all devices",
      "Optimizing images and assets for fast loading",
      "Building cinematic welcome screen with proper timing",
      "Managing smooth scroll with Lenis library",
    ],
    futureImprovements: [
      "Add a blog section for technical articles",
      "Implement dark/light theme toggle",
      "Add more interactive 3D elements",
      "Integrate a CMS for easy content updates",
      "Add multilingual support",
    ],
  },
  {
    id: 4,
    name: "CatalogX",
    image: catalogxImg,
    shortDescription:
      "CatalogX is a modern, responsive e-commerce platform built using Next.js. It provides users with a seamless shopping experience to explore curated products, view detailed item information, and interact with a professional catalog interface. The project leverages modern React technologies and libraries to deliver high performance, interactivity, and a visually appealing design.",
    fullDescription: `CatalogX is a modern, responsive e-commerce platform built using Next.js. It provides users with a seamless shopping experience to explore curated products, view detailed item information, and interact with a professional catalog interface. The project leverages modern React technologies and libraries to deliver high performance, interactivity, and a visually appealing design.

**Features:**
• Product listings with discounts
• Detailed product view with image gallery
• Infinite scroll for products
• Blog section for tech and product information
• Fully responsive and optimized for both desktop and mobile devices
• Mock login implemented

**Frontend Technologies:**
• Next.js (App Router)
• Tailwind CSS
• Framer Motion
• React Query
• Swiper.js
• Mock Auth

**Other:**
• Modern UI/UX
• Fast performance
• SEO optimized
`,
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Swiper.js",
      "Mock Auth",
    ],
    liveLink: "https://catalogx-client.vercel.app",
    githubLink: "https://github.com/sabbirsohag-1509/catalogx-nextjs-client",
    challenges: [
      "Implementing infinite scroll for products",
      "Building a responsive image gallery",
      "Integrating a blog section with product info",
      "Ensuring fast performance and SEO",
      "Mock authentication flow",
    ],
    futureImprovements: [
      "Add real payment gateway integration",
      "Implement user reviews and ratings",
      "Add admin dashboard for product management",
      "Integrate real authentication and user profiles",
      "Add wishlist and cart features",
    ],
  },
  {
    id: 5,
    name: "The Dragon News",
    image: dragonNewsImg,
    shortDescription:
      "An online newspaper platform with live news reading, category browsing, breaking news marquee, and secure Firebase authentication with JWT protected routes.",
    fullDescription: `The Dragon News is an online newspaper platform that allows users to read live and latest news articles with a smooth and engaging experience. Users can easily browse news by categories for quick navigation. The platform emphasizes security, responsiveness, and clean design, providing a professional online reading experience.

**Implemented Features:**

• **Live News Reading:** Users can access up-to-date news articles instantly
• **Category Browsing:** Filter and navigate news by categories for easier access
• **Secure Authentication:** Firebase authentication with JWT-based protected routes for authorized users
• **Breaking News Section:** Smooth marquee animation to display trending news
• **Responsive UI:** Built with Tailwind CSS and DaisyUI for a polished interface
• **Icon-based Interface:** Used React Icons for buttons, categories, and actions
• **Date & Time Formatting:** News timestamps formatted using date-fns

**Frontend Technologies:**
• React (functional components + Hooks)
• Tailwind CSS + DaisyUI for styling
• React Icons for interface elements
• Marquee effect for Breaking News section
• date-fns for date handling
• React Router v7+ for navigation

**Security Features:**
• Firebase Authentication
• JWT-based protected routes
• Role-based access control`,
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "JWT",
      "React Router",
      "React Icons",
      "date-fns",
    ],
    liveLink: "https://elaborate-unicorn-82d342.netlify.app/category/0",
    githubLink:
      "https://github.com/sabbirsohag-1509/module-50-51-firebase-dragon-news",
    challenges: [
      "Implementing secure authentication and JWT-based route protection",
      "Displaying live breaking news dynamically with smooth animations",
      "Ensuring a fully responsive UI across desktop, tablet, and mobile devices",
      "Managing category filtering and proper date formatting for news",
    ],
    futureImprovements: [
      "Add bookmark / favorite articles feature for users",
      "Implement real-time notifications for breaking news",
      "Integrate external news APIs for automated content updates",
      "Add dark/light mode toggle for better readability",
    ],
  },
];
