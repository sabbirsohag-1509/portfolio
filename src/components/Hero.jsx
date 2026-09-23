import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { gsap } from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";
import { useToast } from "./Toast";
import { useTheme } from "../context/ThemeContext";
import sabbirImage from "../assets/sabbir-image.png";

const particleConfigs = [
  { left: "8%", top: "22%", size: 3, delay: 0, duration: 16 },
  { left: "16%", top: "68%", size: 2, delay: 2, duration: 21 },
  { left: "28%", top: "34%", size: 2, delay: 4, duration: 18 },
  { left: "39%", top: "78%", size: 3, delay: 1, duration: 23 },
  { left: "51%", top: "18%", size: 2, delay: 5, duration: 17 },
  { left: "62%", top: "64%", size: 3, delay: 3, duration: 20 },
  { left: "72%", top: "28%", size: 2, delay: 6, duration: 22 },
  { left: "84%", top: "72%", size: 3, delay: 2, duration: 19 },
  { left: "92%", top: "42%", size: 2, delay: 7, duration: 24 },
  { left: "45%", top: "48%", size: 2, delay: 8, duration: 15 },
  { left: "22%", top: "12%", size: 2, delay: 3, duration: 20 },
  { left: "78%", top: "86%", size: 2, delay: 5, duration: 18 },
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const imageRef = useRef(null);
  const toast = useToast();
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothPointerX = useSpring(pointerX, { stiffness: 45, damping: 22 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 45, damping: 22 });
  const mouseGlow = useTransform(
    [smoothPointerX, smoothPointerY],
    ([x, y]) =>
      `radial-gradient(circle 360px at ${x}% ${y}%, ${
        theme === "dark"
          ? "rgba(34, 211, 238, 0.16)"
          : "rgba(99, 102, 241, 0.1)"
      }, transparent 68%)`,
  );

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  const handlePointerLeave = () => {
    pointerX.set(50);
    pointerY.set(50);
  };

  const handleDownloadResume = () => {
    toast.success("🎉 Resume download started! Thank you for your interest!");
  };

  useEffect(() => {
    const titles = ["MERN Stack Developer", "AI Mastered Full Stack Developer"];
    const title = titles[loopNum % titles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(title.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === title) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(title.substring(0, displayText.length - 1));
        setTypingSpeed(40);

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
    <section
      className="relative isolate min-h-screen flex items-center justify-center bg-transparent pt-16 overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Layer 0: theme-aware base */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 ${
          theme === "dark"
            ? "bg-[radial-gradient(ellipse_at_top,#101b3d_0%,#030712_58%,#020617_100%)]"
            : "bg-[radial-gradient(ellipse_at_top,#f8fbff_0%,#f1f5f9_60%,#e8eef7_100%)]"
        }`}
      />

      {/* Layer 1: perspective developer grid */}
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-x-[20%] top-[34%] z-1 h-[82%] origin-top -rotate-x-62 transform-[perspective(700px)] ${
          theme === "dark" ? "opacity-25" : "opacity-15"
        }`}
        style={{
          backgroundImage:
            theme === "dark"
              ? "linear-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.18) 1px, transparent 1px)"
              : "linear-gradient(rgba(14, 116, 144, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : { backgroundPosition: ["0 0", "72px 72px"] }
        }
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      {/* Layer 2: independent aurora waves */}
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-48 top-1/4 z-2 h-112 w-2xl rounded-full blur-3xl ${
          theme === "dark" ? "bg-violet-600/20" : "bg-violet-300/20"
        }`}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 100, -30, 0],
                y: [0, 35, -20, 0],
                scale: [1, 1.12, 0.95, 1],
                opacity: [0.35, 0.6, 0.3, 0.35],
              }
        }
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-48 top-1/3 z-2 h-120 w-152 rounded-full blur-3xl ${
          theme === "dark" ? "bg-cyan-500/15" : "bg-cyan-300/20"
        }`}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -80, 40, 0],
                y: [0, -45, 30, 0],
                scale: [1.05, 0.9, 1.15, 1.05],
                opacity: [0.25, 0.5, 0.2, 0.25],
              }
        }
        transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/3 top-1/2 z-2 h-80 w-80 rounded-full blur-3xl ${
          theme === "dark" ? "bg-blue-600/10" : "bg-blue-300/15"
        }`}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -60, 45, 0],
                y: [0, 50, -35, 0],
                opacity: [0.2, 0.45, 0.18, 0.2],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 3: lightweight floating particles */}
      {particleConfigs.map((particle, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          className={`pointer-events-none absolute z-3 rounded-full ${
            theme === "dark" ? "bg-cyan-200" : "bg-blue-500"
          }`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 18, -10, 0],
                  y: [0, -35, -12, 0],
                  opacity: [0.08, 0.45, 0.12, 0.08],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Layer 4: subtle data paths */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-4 overflow-hidden opacity-40"
      >
        {[
          "top-[28%] -left-[8%] w-[72%] rotate-[12deg]",
          "top-[62%] -right-[12%] w-[68%] -rotate-[14deg]",
          "top-[46%] left-[18%] w-[48%] rotate-[4deg]",
        ].map((line, index) => (
          <motion.div
            key={line}
            className={`absolute h-px rounded-full ${theme === "dark" ? "bg-linear-to-r from-transparent via-cyan-300/50 to-transparent" : "bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"} ${line}`}
            animate={
              shouldReduceMotion
                ? undefined
                : { x: ["-12%", "12%", "-12%"], opacity: [0.15, 0.6, 0.15] }
            }
            transition={{
              duration: 18 + index * 3,
              delay: index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Layer 5: spring-interpolated mouse glow */}
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-5 hidden md:block ${theme === "dark" ? "opacity-60" : "opacity-30"}`}
        style={{ background: mouseGlow }}
      />

      {/* Layer 6: central ambient and image aura */}
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 z-6 h-136 w-208 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
          theme === "dark"
            ? "bg-[radial-gradient(ellipse,rgba(34,211,238,0.1),rgba(124,58,237,0.08),transparent_70%)]"
            : "bg-[radial-gradient(ellipse,rgba(14,165,233,0.08),rgba(124,58,237,0.06),transparent_70%)]"
        }`}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                x: [0, 25, -15, 0],
                opacity: [0.55, 0.8, 0.5, 0.55],
              }
        }
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute right-[8%] top-1/2 z-6 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl ${
          theme === "dark" ? "bg-cyan-400/12" : "bg-cyan-300/12"
        }`}
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [0.9, 1.12, 0.9], opacity: [0.25, 0.55, 0.25] }
        }
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16">
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
              className="text-2xl md:text-3xl font-semibold text-primary mb-6 min-h-10 md:min-h-12"
              variants={itemVariants}
            >
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.h2>
            <motion.p
              className={`text-lg mb-8 max-w-xl ${
                theme === "dark" ? "text-gray-300" : "text-slate-600"
              }`}
              variants={itemVariants}
            >
              Passionate MERN Stack Developer with 2+ Years of experience in
              building beautiful, responsive, and user-friendly web applications
              using React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS,
              and modern web technologies.
            </motion.p>

            {/* Resume Download Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              variants={itemVariants}
            >
              <motion.a
                href="/Sabbir_Hossain_Sohag_Resume.pdf"
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
              {/* Wave Border Ring */}
              <motion.div
                className="absolute inset-0 -m-5 md:-m-7 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(from 0deg, #a855f7, #ec4899, #22d3ee, #a855f7)",
                  padding: "3px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              >
                <div className="w-full h-full rounded-full bg-slate-950" />
              </motion.div>

              {/* Soft Glow Background */}
              <motion.div
                className="absolute -top-6 -right-6 w-28 h-28 bg-purple-500/15 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-28 h-28 bg-pink-500/15 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Main Image Container with Gradient Border */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-linear-to-br from-purple-500 via-pink-500 to-cyan-500"
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(168, 85, 247, 0.3)",
                    "0 0 25px rgba(236, 72, 153, 0.3)",
                    "0 0 15px rgba(168, 85, 247, 0.3)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src={sabbirImage}
                    alt="Sabbir Hossain Sohag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
