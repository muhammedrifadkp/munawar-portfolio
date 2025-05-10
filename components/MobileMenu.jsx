"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { TbArrowUpRight } from "react-icons/tb";

const menuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: { 
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.4 }
  }
};

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/services', label: 'SERVICES' },
  { href: '/about', label: 'ABOUT ME' },
  { href: '/gallery', label: 'GALLERY' },
];

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const pathname = usePathname();
  
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 right-0 w-[80%] max-w-[300px] h-screen bg-gray-900 text-white z-40 flex flex-col items-start px-8 py-20 shadow-xl"
    >
      <div className="flex flex-col w-full">
        {navLinks.map(({ href, label }) => (
          <motion.div key={href} variants={linkVariants}>
            <Link
              href={href}
              className={`text-lg py-4 block w-full border-b border-gray-700 transition-colors duration-200 hover:text-gray-300 ${
                pathname === href 
                  ? 'text-white font-semibold' 
                  : 'text-gray-200'
              }`}
              onClick={toggleMenu}
            >
              {label}
            </Link>
          </motion.div>
        ))}
        
        <motion.div variants={linkVariants} className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-3 font-medium text-gray-900 bg-white border border-white rounded-full shadow hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Contact Me <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
