import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";
import { useToast } from "./Toast";
import sabbirImage from "../assets/sabbir-image.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const imageRef = useRef(null);
  const toast = useToast();

  const handleDownloadResume = () => {
    toast.success("🎉 Resume download started! Thank you for your interest!");
  };

  useEffect(() => {
    const titles = ["MERN Stack Front-End Developer"];
    const currentTitle = titles[loopNum % titles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(150);

        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(75);

        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  // GSAP animation for profile image
  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/sabbirsohag-1509",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/sabbirhossainsohag/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/SabbirSohag1509",
      label: "Twitter",
    },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/sabbir.hossainsohag.5/",
      label: "Facebook",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 1 + i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-lg text-primary font-medium mb-2"
              variants={itemVariants}
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              variants={itemVariants}
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #ffd89b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sabbir Hossain Sohag
              </span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-primary mb-6 min-h-[40px] md:min-h-[48px]"
              variants={itemVariants}
            >
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.h2>
            <motion.p
              className="text-base-content/70 text-lg mb-8 max-w-xl"
              variants={itemVariants}
            >
              Passionate MERN Stack Front-End Developer with 9 months of
              experience in building beautiful, responsive, and user-friendly
              web applications using React, Tailwind CSS, and modern JavaScript.
            </motion.p>

            {/* Resume Download Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              variants={itemVariants}
            >
              <motion.a
                href="/resume.pdf"
                download
                onClick={handleDownloadResume}
                className="btn btn-primary btn-lg gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-outline btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost text-2xl hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                  custom={i}
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative" ref={imageRef}>
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={sabbirImage}
                  alt="Sabbir Hossain Sohag"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
