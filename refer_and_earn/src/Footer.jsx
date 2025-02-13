import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Phone as WhatsApp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <motion.a
            href="#"
            className="text-sm hover:text-[#FF4800]"
            whileHover={{ scale: 1.1 }}
          >
            Legal
          </motion.a>
          <motion.a
            href="#"
            className="text-sm hover:text-[#FF4800]"
            whileHover={{ scale: 1.1 }}
          >
            2024
          </motion.a>
        </div>
        <div className="flex gap-4">
          {[Instagram, Twitter, Linkedin, WhatsApp].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, color: "#FF4800" }}
              className="transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
