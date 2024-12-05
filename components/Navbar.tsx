'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="absolute top-4 left-0 right-0 flex justify-center z-20"
    >
      <nav className="bg-transparent  px-6 py-3 flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-white.svg"
            alt="Draw & Guess Logo"
            width={80}
            height={80}
            className="w-24 h-24"
          />
        </div>

        {/* Links */}
        <div className="flex space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/team"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Our Team
          </Link>
          <Link
            href="/the-game"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            The Game
          </Link>
          <Link
            href="/rules"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Game rules
          </Link>
        </div>
      </nav>
    </motion.div>
  );
}
