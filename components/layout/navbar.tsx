"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Handbag, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { label: "Shop", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Categories", onClick: () => handleScroll("categories") },
    { label: "Testimonials", onClick: () => handleScroll("testimonials") },
    { label: "Rewards", onClick: () => handleScroll("rewards") },
  ];

  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 bg-blue-400 rounded-2xl mt-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
          <Image width={40} height={40} src="/logo.png" alt="Logo" />
          Belanja
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-white">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={item.onClick}
                className="px-3 py-1 rounded-md transition hover:text-yellow-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex gap-2">
          <Button className="bg-white hover:bg-red-100 text-black px-4 py-4 rounded-full">
            <Handbag className="w-4 h-4" />
          </Button>
          <Button className="bg-white text-black hover:bg-gray-100 rounded-3xl">
            Sign In
          </Button>
          <Button className="bg-white text-black hover:bg-gray-100 rounded-3xl">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-white p-2 rounded text-black"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-blue-400 rounded-2xl mt-2 px-6 py-4 space-y-4 text-white"
          >
            <ul className="flex flex-col gap-4 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.onClick}
                    className="block px-3 py-1 rounded-md transition hover:text-yellow-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
              <Button className="bg-white hover:bg-red-100 text-black rounded-full">
                <Handbag className="w-4 h-4" />
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-3xl">
                Sign In
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-3xl">
                Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
