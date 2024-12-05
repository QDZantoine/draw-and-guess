'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Spotlight } from '@/components/ui/Spotlight';
import Image from 'next/image';

const gameDetails = [
  {
    title: 'Collaborative Gameplay',
    description:
      'Work together with your team to solve creative challenges and win points. Collaboration is key to victory!',
    image: '/collaborative.jpg', 
  },
  {
    title: 'Creative Drawing',
    description:
      'Unleash your creativity by drawing professions for your teammates to guess. No words, just pictures!',
    image: '/draw.jpg', 
  },
  {
    title: 'Soft Skill Discovery',
    description:
      'Learn about essential workplace soft skills in an engaging way, and apply them during the game.',
    image: '/softskill.png', 
  },
  {
    title: 'Educational Fun',
    description:
      'Perfect for all ages and skill levels, Draw & Guess is a mix of fun and learning you’ll love!',
    image: '/crazy-card.jpg', 
  },
];

const TheGame = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-tl from-black via-zinc-900 to-black text-white">
      <Navbar />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="my-16 text-center">
        <h1 className="my-16 text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">
          About the Game
        </h1>
        <p className="text-lg text-zinc-400 mt-4 max-w-3xl mx-auto">
          Discover <span className="text-yellow-400">Draw & Guess</span>, a fun
          and interactive game where creativity, teamwork, and learning come
          together. Play with friends, guess professions, and discover soft
          skills while having fun!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-6xl">
        {gameDetails.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-black rounded-lg shadow-md p-6 hover:scale-105 transform transition-all"
          >
            <Image
              src={detail.image}
              alt={detail.title}
              width={200}
              height={200}
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-yellow-400">
              {detail.title}
            </h2>
            <p className="text-gray-300 mt-2">{detail.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          Ready to Play?
        </h2>
        <p className="text-gray-300 mb-6">
          Gather your team, roll the dice, and embark on an unforgettable
          journey of fun and learning!
        </p>
        <a
          href="/rules"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg"
        >
          Learn the Rules
        </a>
      </div>

      {/* Spacer to extend background */}
      <div className="h-16"></div>
    </div>
  );
};

export default TheGame;
