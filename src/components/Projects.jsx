import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import scholarshipImg from "../assets/scholarship.jpg";
import homeNestImg from "../assets/homeNest.PNG";
import portfolioImg from "../assets/portfolio.PNG";
import dragonNewsImg from "../assets/the-dragon-news.PNG";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "ScholarStream",
      image: scholarshipImg,
      shortDescription:
        "A comprehensive scholarship management platform with multi-role system (Student, Moderator, Admin) featuring secure authentication, Stripe payments, and analytics dashboard.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "JWT",
        "Stripe",
        "Firebase Auth",
      ],
      liveLink: "https://sparkling-sable-55715c.netlify.app",
      githubLink: "https://github.com/sabbirsohag-1509/assignment-11-client",
    },
    {
      id: 2,
      name: "HomeNest",
      image: homeNestImg,
      shortDescription:
        "A real estate management platform with role-based dashboards (Buyer, Seller, Admin), Stripe payment integration, and comprehensive property listing system.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "DaisyUI",
        "JWT",
        "Stripe",
      ],
      liveLink: "https://whimsical-marigold-942cbe.netlify.app",
      githubLink:
        "https://github.com/sabbirsohag-1509/assignment-10-client-site",
    },
    {
      id: 3,
      name: "Personal Portfolio",
      image: portfolioImg,
      shortDescription:
        "A modern, responsive portfolio website with smooth animations, interactive components, and professional design to showcase my skills and projects.",
      techStack: [
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "Framer Motion",
        "Lenis",
        "Vite",
        "React Router",
      ],
      liveLink: "https://portfolio-sabbir-sohag-f956ef.netlify.app",
      githubLink: "https://github.com/sabbirsohag-1509/portfolio",
    },
    {
      id: 4,
      name: "The Dragon News",
      image: dragonNewsImg,
      shortDescription:
        "An online newspaper platform with live news reading, category browsing, breaking news marquee, and secure Firebase authentication with JWT protected routes.",
      techStack: [
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "Firebase",
        "JWT",
        "React Router",
        "date-fns",
      ],
      liveLink: "https://elaborate-unicorn-82d342.netlify.app/category/0",
      githubLink:
        "https://github.com/sabbirsohag-1509/module-50-51-firebase-dragon-news",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-transparent overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card bg-slate-800/50 backdrop-blur-sm shadow-xl group border border-slate-700/30"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <figure className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-primary btn-sm"
                    title="Live Demo"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-primary btn-sm"
                    title="GitHub"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                </motion.div>
              </figure>

              <div className="card-body">
                <h3 className="card-title text-xl">{project.name}</h3>
                <p className="text-base-content/70 text-sm">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="badge badge-outline badge-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="badge badge-outline badge-sm">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-end mt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/project/${project.id}`}
                      className="btn btn-primary btn-sm gap-2"
                    >
                      View Details
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
