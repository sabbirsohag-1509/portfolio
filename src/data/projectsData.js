// Projects data for use across the application
import scholarshipImg from "../assets/scholarship.jpg";
import homeNestImg from "../assets/homeNest.PNG";
import portfolioImg from "../assets/portfolio.PNG";
import dragonNewsImg from "../assets/the-dragon-news.PNG";
import catalogxImg from "../assets/catalogx2.png";
import dashchatHomeImg from "../assets/dashchat-home.PNG";
import dashchatChatImg from "../assets/dashchat-1.PNG";
import dashchatCallImg from "../assets/dashchat-call.PNG";
import dashchatCall2Img from "../assets/dashchat-call-2.PNG";
import dashchatAboutImg from "../assets/dashchat-about.PNG";
import rupDarponHomeImg from "../assets/rupdarpan-home.PNG";
import rupDarponAbout1Img from "../assets/rupdarpon-1-about.PNG";
import rupDarponAbout2Img from "../assets/rupdarpon-2-about.PNG";
import rupDarponAbout3Img from "../assets/rupdarpon-3-about.PNG";
import rupDarponAbout4Img from "../assets/rupdarpon-4-about.PNG";

export const projectsData = [
  {
    id: 1,
    name: "Rup Darpon",
    image: rupDarponHomeImg,
    images: [
      rupDarponHomeImg,
      rupDarponAbout1Img,
      rupDarponAbout2Img,
      rupDarponAbout3Img,
      rupDarponAbout4Img,
    ],
    shortDescription:
      "A full-stack photography service platform for showcasing creative work, managing bookings, collecting reviews, and processing online payments.",
    fullDescription: `Rup Darpon is a full-stack photography service platform developed for a photography business to showcase creative work, manage photography packages, handle customer bookings, collect reviews, and process online payments. The platform provides a modern, responsive user experience with secure authentication, an admin dashboard, and production-ready backend APIs.

I developed the technical implementation of the platform, including the React frontend, Express backend, MongoDB database integration, authentication workflows, booking management, review systems, and payment integration. The project focuses on delivering a scalable and user-friendly digital experience for both customers and administrators.

**Key Features:**
• Photography gallery with search, category filtering, pagination, and featured photos
• Photography video showcase and dynamic hero image management
• Photography package browsing with package details and customer reviews
• Email/password authentication with protected routes
• Google OAuth login integration
• JWT-based authentication using HTTP-only cookies
• User profile management with profile photo uploads
• Forgot password, reset password, and change password workflows
• Customer booking requests with booking status tracking
• Admin booking management with confirmation, cancellation, and deletion
• Review submission, editing, deletion, approval, rejection, and featuring
• SSLCommerz payment integration for confirmed bookings
• Notification system for booking and account-related activities
• Admin dashboard with platform statistics and management features
• User and role management with admin access control
• Responsive UI with dark and light photography-focused themes
• Cloudinary integration for profile image uploads
• Deployed frontend and backend with production environment configuration

**Project Links:**
• Live Application: https://rup-darpon.netlify.app/
• Backend API: https://rupdarpon-server.vercel.app/
• GitHub Repository: https://github.com/sabbirsohag-1509/Rup-Darpan

**My Role:**
• Full-Stack Developer
• Designed and developed the frontend using React and modern UI technologies
• Built backend APIs using Node.js and Express
• Integrated MongoDB Atlas for database management
• Implemented authentication, authorization, and protected routes
• Developed booking, review, notification, and payment workflows
• Integrated Google OAuth and SSLCommerz services
• Deployed and configured the application using Netlify and Vercel`,
    techStack: [
      "React 19",
      "Vite",
      "React Router",
      "TanStack React Query",
      "Axios",
      "React Hook Form",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Passport.js",
      "bcrypt",
      "Nodemailer",
      "SSLCommerz",
      "Cloudinary",
      "Tailwind CSS",
      "DaisyUI",
      "Lucide React",
      "Framer Motion",
      "Netlify",
      "Vercel",
    ],
    liveLink: "https://rup-darpon.netlify.app/",
    githubLink: "https://github.com/sabbirsohag-1509/Rup-Darpan",
    challenges: [
      "Designing a scalable full-stack architecture for photography content, bookings, reviews, and admin workflows",
      "Implementing secure JWT HTTP-only cookie authentication, Google OAuth, protected routes, and role-based access control",
      "Managing booking workflows across customers and administrators with accurate booking and payment statuses",
      "Integrating SSLCommerz transaction initialization and success, failure, cancellation, and IPN workflows",
      "Building a responsive gallery with search, category filtering, pagination, and image viewing",
      "Managing media-heavy photography content and optimizing image delivery",
      "Configuring frontend and backend deployment across Netlify and Vercel",
    ],
    futureImprovements: [
      "Add advanced image optimization and responsive image delivery",
      "Introduce an advanced booking calendar with date availability and scheduling management",
      "Expand payment support with additional local payment gateways, including bKash Merchant",
      "Add automated email and real-time notifications for booking updates and payment confirmations",
      "Improve admin analytics with revenue insights, booking trends, and customer engagement reports",
      "Introduce albums, event-based collections, and improved media management",
      "Enhance SEO, accessibility, and performance optimization",
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    name: "DashChat",
    image: dashchatHomeImg,
    images: [
      dashchatHomeImg,
      dashchatChatImg,
      dashchatCallImg,
      dashchatCall2Img,
      dashchatAboutImg,
    ],
    shortDescription:
      "A full-stack realtime group project chat platform with friend workflows, notification feeds, and audio/video calling powered by Socket.IO and Stream.",
    fullDescription: `DashChat is our group project, built as a full-stack realtime chat platform for fast and private communication with modern UX patterns. The app provides direct messaging, friend system workflows, notification feeds, and Stream-powered audio/video calling from the dashboard.

It was developed as a team collaboration project where we built scalable chat architecture, responsive frontend experiences, and secure backend APIs for production-like workflows.

**Key Features:**
• Email/password authentication with protected dashboard routes
• Google OAuth login integration
• Realtime 1:1 messaging using Socket.IO
• Message delivery states (sent, delivered, seen)
• Edit/delete messages with emoji reactions
• Reply and forward message workflows
• Friend system (send, accept, reject, unfriend, block/unblock)
• Notification feed for social activities
• Audio/video calling with Stream Video SDK
• Call lifecycle tracking (ringing, received, completed, missed, failed)
• Call history with backend-driven pagination, search, filters, and sorting
• Multi-theme UI with DaisyUI themes
• Responsive public and dashboard layouts

**Project Links:**
• Live App: https://dash-chat-frontend.onrender.com
• GitHub Team Repo: https://github.com/somrat350/Dash-Chat

**Team:**
• Osamabin Somrat
• Arman Hossain Shuvo
• Sabbir Hossain Sohag
• Tangila Khatun
• Lima Akter
• China Akter`,
    techStack: [
      "React 19",
      "Vite",
      "React Router",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
      "Socket.IO Client",
      "GSAP",
      "React Hot Toast",
      "React",
      "Node.js",
      "Express.js",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "JWT",
      "Cookie Auth",
      "Google OAuth",
      "Google APIs",
      "Stream Chat Server SDK",
      "GetStream",
      "ESLint",
      "Nodemon",
    ],
    liveLink: "https://dash-chat-frontend.onrender.com",
    githubLink: "https://github.com/somrat350/Dash-Chat",
    challenges: [
      "Managing realtime Socket.IO message sync while keeping UI responsive",
      "Implementing accurate delivery states (sent/delivered/seen) across clients",
      "Designing friend system workflows with block/unblock and notification logic",
      "Handling Stream call lifecycle events and call history consistency",
      "Building responsive dashboard and chat layout for mobile and desktop",
    ],
    futureImprovements: [
      "Add file, image, and voice-note attachments",
      "Implement typing indicators and read receipts per conversation",
      "Add push notifications for offline users",
      "Introduce end-to-end encryption for private chats",
      "Add AI-powered smart reply and moderation assistant",
    ],
  },
  {
    id: 7,
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
