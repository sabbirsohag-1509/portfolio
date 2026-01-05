import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaLaptopCode, FaGamepad, FaMusic } from "react-icons/fa";
import sabbirImage from "../assets/sabbir-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: FaLaptopCode,
      title: "Problem Solver",
      description: "Love tackling complex challenges",
    },
    {
      icon: FaGamepad,
      title: "Gaming",
      description: "Enjoy playing video games",
    },
    {
      icon: FaMusic,
      title: "Music",
      description: "Love listening to music while coding",
    },
  ];

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { rotation: -5, scale: 0.9 },
        {
          rotation: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <section
      id="about"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative" ref={imageRef}>
              <motion.img
                src={sabbirImage}
                alt="Sabbir Hossain Sohag"
                className="rounded-2xl shadow-2xl max-w-md w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary text-primary-content p-6 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-4xl font-bold">9+</p>
                <p className="text-sm">Months Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl font-bold mb-6"
              variants={itemVariants}
            >
              A Passionate MERN Stack Front-End Developer Based in Bangladesh
            </motion.h3>

            <motion.div
              className="space-y-4 text-base-content/80"
              variants={containerVariants}
            >
              <motion.p variants={itemVariants}>
                <strong className="text-primary">
                  My Programming Journey:
                </strong>{" "}
                I started my programming journey with Programming Hero - a
                renowned web development course in Bangladesh. Over the past 9
                months, I completed the Complete Web Development Course where I
                learned HTML, CSS, JavaScript, React, Node.js, Express.js,
                MongoDB, and the entire MERN Stack with a strong focus on
                full stack web development.
              </motion.p>

              <motion.p variants={itemVariants}>
                <strong className="text-primary">What I Enjoy:</strong> I love
                building interactive, responsive, and user-friendly web
                applications. There&apos;s something magical about seeing your
                code come to life and knowing that people will use what
                you&apos;ve created. Through Programming Hero, I specialize in
                front-end development using React, Tailwind CSS, and DaisyUI,
                creating beautiful UIs and solving complex UI/UX challenges.
              </motion.p>

              <motion.p variants={itemVariants}>
                <strong className="text-primary">Beyond Coding:</strong> When
                I&apos;m not coding, you&apos;ll find me playing video games,
                watching movies, or exploring new technologies. I believe in
                maintaining a healthy work-life balance. I also enjoy playing
                football and spending time with friends and family.
              </motion.p>

              <motion.p variants={itemVariants}>
                <strong className="text-primary">My Philosophy:</strong> I
                believe that continuous learning is the key to success in the
                tech industry. Every day is an opportunity to learn something
                new and become a better developer.
              </motion.p>
            </motion.div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl hover:shadow-lg transition-shadow border border-slate-700/30"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <item.icon className="text-3xl text-primary mb-2" />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-base-content/60">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
