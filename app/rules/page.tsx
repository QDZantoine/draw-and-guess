'use client';

import React from 'react';

import { BookOpen, Target, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Spotlight } from '@/components/ui/Spotlight';

const Rules = () => {
  const containerVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
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
      <Navbar />{' '}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center text-center px-8 mt-24 space-y-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h1
          className=" my-16 text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"
          variants={titleVariants}
        >
          Game Rules
        </motion.h1>

        {/* Objective */}
        <motion.div
          className="bg-black/70 p-8 rounded-lg shadow-lg max-w-4xl text-left border border-blue-500"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Target className="text-blue-400" /> Objective of the Game
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Move your pawn to <strong>Square 10</strong> on the board by
            guessing professions and soft skills to score points. The first team
            to reach
            <strong> Square 10</strong> and answer the QR code question
            correctly <strong>wins the game</strong>.
          </p>
        </motion.div>

        {/* Materials */}
        <motion.div
          className="bg-black/70 p-8 rounded-lg shadow-lg max-w-4xl text-left border border-yellow-400"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="text-yellow-400" /> Materials
          </h2>
          <ul className="list-disc list-inside text-lg text-zinc-300 leading-relaxed space-y-2">
            <li>
              <strong>Game Board</strong>: Round board divided into 10 squares
              with 4 sections (one per team).
            </li>
            <li>
              <strong>5 Decks of Cards</strong>:
              <ul className="pl-6 list-disc list-inside space-y-2">
                <li>General Professions (1 point, 1 square).</li>
                <li>Specific Professions (2 points, 2 squares).</li>
                <li>Digital Professions (3 points, 3 squares).</li>
                <li>
                  Crazy Professions (5 points, 5 squares - <em>Bonus</em>).
                </li>
              </ul>
            </li>
            <li>Pawns: One for each team.</li>
            <li>
              QR Codes: On the Soft Skill cards and in the center of the board.
            </li>
            <li>
              <Smartphone className="inline-block text-blue-400" /> Mobile
              Phone: Use it to scan the QR codes and access the quizzes.
            </li>
          </ul>
        </motion.div>

        {/* Gameplay */}
        <motion.div
          className="bg-black/70 p-8 rounded-lg shadow-lg max-w-4xl text-left border border-blue-500"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-semibold mb-4">Gameplay</h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-4">
            The game is played in turns, with each team taking their turn. On
            each square, teams must complete a challenge to progress.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Rules;
