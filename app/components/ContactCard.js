"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGitlab, FaFileDownload } from "react-icons/fa";

const ContactCard = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/nesrine-nasri-b6a348244/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://gitlab.com/nesrinasri99",
      icon: <FaGitlab />,
      label: "GitLab",
    },
    {
      href: "/cv-nesrin.pdf",
      icon: <FaFileDownload />,
      label: "Download CV",
      download: true,
    },
  ];

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      <div className="space-y-2">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            download={link.download}
            initial={{ x: 100 }}
            whileHover={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center  text-white px-4 py-2 rounded-l-full shadow-lg group overflow-hidden"
            style={{
              background:
                "conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
            }}
          >
            <div className="text-xl">{link.icon}</div>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
