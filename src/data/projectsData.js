// Projects data for use across the application
export const projectsData = [
  {
    id: 1,
    name: "E-Commerce Website",
    image: "https://via.placeholder.com/800x500?text=E-Commerce+Project",
    shortDescription:
      "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    fullDescription: `This is a comprehensive e-commerce platform built from scratch. It features a complete shopping experience including product browsing, cart management, user authentication, and secure checkout with payment integration.
    
The platform includes an admin dashboard for managing products, orders, and users. It's built with scalability in mind and follows best practices for security and performance.`,
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
      "JWT",
    ],
    liveLink: "https://your-ecommerce-site.com",
    githubLink: "https://github.com/yourusername/ecommerce-project",
    challenges: [
      "Implementing secure payment processing with Stripe",
      "Managing complex state across multiple components",
      "Optimizing database queries for large product catalogs",
      "Ensuring responsive design across all devices",
    ],
    futureImprovements: [
      "Add product recommendations using machine learning",
      "Implement real-time inventory management",
      "Add multiple payment gateway options",
      "Create a mobile app version",
    ],
  },
  {
    id: 2,
    name: "Task Management App",
    image: "https://via.placeholder.com/800x500?text=Task+Management+App",
    shortDescription:
      "A productivity app to manage tasks, set deadlines, and track progress.",
    fullDescription: `A feature-rich task management application designed to boost productivity. Users can create, organize, and track their tasks with ease. The app includes features like drag-and-drop task organization, deadline reminders, and progress tracking.
    
The application uses Firebase for real-time data synchronization, ensuring that changes are reflected instantly across all devices.`,
    techStack: [
      "React",
      "Firebase",
      "DaisyUI",
      "Context API",
      "React Beautiful DnD",
    ],
    liveLink: "https://your-task-app.com",
    githubLink: "https://github.com/yourusername/task-manager",
    challenges: [
      "Implementing drag-and-drop functionality",
      "Managing real-time data synchronization",
      "Creating an intuitive user interface",
      "Handling offline mode and data conflicts",
    ],
    futureImprovements: [
      "Add team collaboration features",
      "Implement calendar integration",
      "Add time tracking functionality",
      "Create browser extension for quick task creation",
    ],
  },
  {
    id: 3,
    name: "Portfolio Website",
    image: "https://via.placeholder.com/800x500?text=Portfolio+Website",
    shortDescription:
      "A personal portfolio website showcasing my projects and skills.",
    fullDescription: `This portfolio website serves as a showcase of my skills, projects, and professional journey. It's designed to be visually appealing, responsive, and easy to navigate.
    
The site features smooth animations, a clean design, and optimized performance. It's built using modern web technologies and follows best practices for accessibility and SEO.`,
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Vite",
      "React Router",
      "React Icons",
    ],
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio",
    challenges: [
      "Creating a unique and memorable design",
      "Optimizing images and assets for fast loading",
      "Implementing smooth scroll and animations",
      "Ensuring accessibility compliance",
    ],
    futureImprovements: [
      "Add a blog section",
      "Implement dark/light theme toggle",
      "Add more interactive elements",
      "Integrate a CMS for easy content updates",
    ],
  },
  {
    id: 4,
    name: "Blog Platform",
    image: "https://via.placeholder.com/800x500?text=Blog+Platform",
    shortDescription:
      "A blog platform with user authentication, CRUD operations, and comments.",
    fullDescription: `A full-featured blog platform where users can create, read, update, and delete blog posts. The platform includes user authentication, rich text editing, and a comment system.
    
Built with Next.js for optimal performance and SEO, the platform features server-side rendering and static generation for fast page loads.`,
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "NextAuth",
      "Cloudinary",
      "React Quill",
    ],
    liveLink: "https://your-blog-platform.com",
    githubLink: "https://github.com/yourusername/blog-platform",
    challenges: [
      "Implementing rich text editing with image uploads",
      "Managing authentication and authorization",
      "Optimizing for SEO and performance",
      "Creating a responsive reading experience",
    ],
    futureImprovements: [
      "Add social media sharing",
      "Implement newsletter subscription",
      "Add analytics dashboard for authors",
      "Create mobile app with React Native",
    ],
  },
];
