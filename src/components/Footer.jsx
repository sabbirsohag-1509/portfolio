import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logoShs from "../assets/logo-shs.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/sabbirsohag-1509",
      label: "GitHub",
      color: "hover:text-gray-100",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/sabbirhossainsohag/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/SabbirSohag1509",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/sabbir.hossainsohag.5/",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900/90 to-slate-950 backdrop-blur-md border-t border-purple-500/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="py-12 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <motion.img
                src={logoShs}
                alt="SHS Logo"
                className="w-14 h-14 rounded-full border-2 border-purple-500/50 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(168, 85, 247, 0.3)",
                    "0 0 25px rgba(168, 85, 247, 0.6)",
                    "0 0 10px rgba(168, 85, 247, 0.3)",
                  ],
                }}
              />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Sabbir Hossain Sohag
                </h3>
                <p className="text-sm text-gray-400">MERN Stack Developer</p>
              </div>
            </div>
            <p className="text-base-content/70 mb-5 text-sm leading-relaxed">
              A passionate Full Stack Developer from Dinajpur, Bangladesh.
              Let&apos;s build something amazing together!
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="text-base-content/70 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full"></span>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <motion.li
                className="flex items-center gap-3 text-base-content/70 group"
                whileHover={{ x: 5 }}
              >
                <span className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-purple-400 group-hover:border-purple-500/50 transition-all">
                  <FaEnvelope />
                </span>
                <span className="text-sm">sabbirhossainsohag5@gmail.com</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-base-content/70 group"
                whileHover={{ x: 5 }}
              >
                <span className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-pink-400 group-hover:border-pink-500/50 transition-all">
                  <FaPhone />
                </span>
                <span className="text-sm">+880 1723-473804</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-base-content/70 group"
                whileHover={{ x: 5 }}
              >
                <span className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-all">
                  <FaMapMarkerAlt />
                </span>
                <span className="text-sm">Dinajpur, Bangladesh</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Copyright Section */}
        <motion.div
          className="py-6 flex flex-col md:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-base-content/60 text-sm text-center flex items-center gap-2 flex-wrap justify-center">
            © {currentYear}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
              Sabbir Hossain Sohag
            </span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" /> in
              Bangladesh
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
