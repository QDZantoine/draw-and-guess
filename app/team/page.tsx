'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Spotlight } from '@/components/ui/Spotlight';
import CardTeam from '@/components/CardTeam';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Jules Dubois',
    role: 'Demo Video Manager',
    description:
      'Simplify the organization, sharing, and tracking of your demo videos in one streamlined platform.',
    image: '/profile-jules.jpg',
  },
  {
    name: 'Mathieu',
    role: 'Game Design Manager',
    description:
      'Streamline the game development process with tools for organizing, planning, and managing design workflows.',
    image: '/profile-mathieu.jpg',
  },
  {
    name: 'Adam Otmani',
    role: 'Playtest Manager',
    description:
      'Organize, conduct, and analyze playtests to refine your game and enhance the player experience.',
    image: '/profile-adam.jpeg',
  },
  {
    name: 'Antoine Quendez',
    role: 'Topic Specialist & Developer',
    description:
      'Combine deep subject matter expertise with technical skills to create innovative and tailored solutions.',
    image: '/me_profil.png',
  },
];

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center w-full min-h-screen bg-gradient-to-tl from-black via-zinc-900 to-black text-white"
    >
      <Navbar />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <motion.div
        className="my-16 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h1
          className="my-16 text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"
          variants={titleVariants}
        >
          Meet the Team
        </motion.h1>
        <motion.p
          className="text-lg text-zinc-400 mt-4"
          variants={titleVariants}
        >
          The passionate individuals behind DRAW&GUESS
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-6xl"
        variants={containerVariants}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <CardTeam
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Add a spacer div to ensure background covers */}
      <div className="h-16"></div>
    </motion.div>
  );
};

export default Team;
