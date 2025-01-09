// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { FaHome, FaChartBar, FaProjectDiagram, FaWallet, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = ({
  isOpen,
  toggleSidebar,
  isDarkMode,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean;
}) => {
  const links = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/chart", label: "Charts", icon: <FaChartBar /> },
    { href: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { href: "/wallet", label: "Wallet", icon: <FaWallet /> },
    { href: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div
      className={`fixed top-0 h-screen transition-all duration-300 z-50 flex flex-col ${
        isDarkMode ? "bg-[#090909] text-white" : "bg-[#f5f5f5] text-black"
      } ${isOpen ? "md:w-64 w-full left-0" : "md:w-16 w-16 md:left-0 left-0"}
      transition-colors duration-500`}
    >
      {/* Desktop Toggle Button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
        className={`p-2 w-10 m-2 focus:outline-none rounded-md transition-all duration-500 transform md:block hidden ${
          isDarkMode ? "bg-[#090909] text-[#ffe32b]" : "bg-[#dac22c] text-[#333333]"
        } ${isOpen ? "translate-x-[12.5rem]" : "translate-x-0"} transition-all`}
      >
        {isOpen ? <FiX className="text-2xl transition-colors duration-500" /> : <FiMenu className="text-2xl transition-colors duration-300" />}
      </button>

      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar Mobile"
        className={`absolute top-4 right-4 p-2 focus:outline-none rounded-md transition-all duration-300 md:hidden ${
          isDarkMode ? "bg-[#090909] text-[#ffe32b]" : "bg-[#f5f5f5] text-[#333333]"
        } transition-colors`}
      >
        {isOpen ? <FiX className="text-2xl transition-colors duration-500" /> : <FiMenu className="text-2xl transition-colors duration-300" />}
      </button>

      {/* Sidebar Links */}
      <nav className="flex flex-col p-4 space-y-4 mt-16">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`flex items-center space-x-2 rounded-md p-2 transition-all duration-300 ${
              isDarkMode ? "hover:bg-[#2a2a2a]" : "hover:bg-[#e0e0e0]"
            } transition-colors`}
          >
            <span className="w-6 h-6 text-xl transition-colors duration-500">{link.icon}</span>
            <span
              className={`${
                isOpen ? "opacity-100" : "opacity-0"
              } transition-opacity duration-0 whitespace-nowrap`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
