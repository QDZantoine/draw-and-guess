'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const CardTeam: React.FC<CardProps> = ({ image, name, role, description }) => {
  return (
    <motion.div
      className="bg-black/80 p-6 rounded-xl shadow-lg text-white border border-zinc-700 hover:scale-105 hover:shadow-xl transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      {/* Profile Picture */}
      <div className="max-w-36 max-h-36 mx-auto mb-6 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className=" my-2 rounded-full object-cover border-2 border-white shadow-md"
        />
      </div>
      {/* Name and Role */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-blue-400">{name}</h2>
        <h3 className="text-sm text-zinc-400 mb-4">{role}</h3>
      </div>
      {/* Description */}
      <p className="text-zinc-300 text-sm leading-relaxed text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default CardTeam;
