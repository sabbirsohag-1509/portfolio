import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950/80 backdrop-blur-sm border-t border-slate-800/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Sabbir Hossain Sohag
            </h3>
            <p className="text-base-content/70 mb-4">
              A passionate MERN Stack Front-End Developer from Dinajpur,
              Bangladesh. Let&apos;s build something great together!
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base-content/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-base-content/70">
              <li>
                <span className="font-medium">Email:</span>{" "}
                sabbirhossainsohag5@gmail.com
              </li>
              <li>
                <span className="font-medium">Phone:</span> +880 1723-473804
              </li>
              <li>
                <span className="font-medium">Location:</span> Dinajpur,
                Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-content/10"></div>

        {/* Copyright Section */}
        <div className="py-6 flex flex-col md:flex-row justify-center items-center justify-between gap-4">
          <p className="text-base-content/60 text-sm text-center md:text-left">
            © {currentYear} Sabbir Hossain Sohag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
