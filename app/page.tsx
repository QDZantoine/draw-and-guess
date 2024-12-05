'use client';

import Navbar from '@/components/Navbar';
import { Spotlight } from '@/components/ui/Spotlight';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Spotlight Background */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Main Content */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center justify-center h-[40rem]">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-blue-500">
          Welcome to
          <br /> Draw & Guess!
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center">
          Draw & Guess is a fun and interactive game designed to help players
          learn and master soft skills while enjoying the process of guessing
          professions and skills through drawings.
        </p>
      </div>
    </div>
  );
}
