import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/sabbirsohag-1509",
      label: "GitHub",
      color: "hover:text-white hover:bg-gray-700",
      bgColor: "group-hover:shadow-gray-500/50",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/sabbirhossainsohag/",
      label: "LinkedIn",
      color: "hover:text-white hover:bg-blue-600",
      bgColor: "group-hover:shadow-blue-500/50",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/+8801723473804",
      label: "WhatsApp",
      color: "hover:text-white hover:bg-green-500",
      bgColor: "group-hover:shadow-green-500/50",
    },
    {
      icon: FaEnvelope,
      url: "mailto:sabbirhossainsohag5@gmail.com",
      label: "Email",
      color: "hover:text-white hover:bg-red-500",
      bgColor: "group-hover:shadow-red-500/50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Left Sidebar */}
      <motion.div
        className="fixed left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Vertical Line Top */}
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-transparent via-purple-500/50 to-purple-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Social Icons */}
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-transparent hover:shadow-lg ${social.bgColor}`}
            aria-label={social.label}
            variants={itemVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="text-xl" />

            {/* Tooltip */}
            <motion.span
              className="absolute left-14 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-md whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-700/50"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              {social.label}
              <span className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-4 border-transparent border-r-slate-800"></span>
            </motion.span>

            {/* Glow Ring */}
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(168, 85, 247, 0)",
                  "0 0 0 8px rgba(168, 85, 247, 0.1)",
                  "0 0 0 0 rgba(168, 85, 247, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </motion.a>
        ))}

        {/* Vertical Line Bottom */}
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      {/* Mobile Bottom Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50 py-3 px-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
              aria-label={social.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="text-xl" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SocialSidebar;
