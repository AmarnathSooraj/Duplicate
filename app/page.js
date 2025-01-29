'use client';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import { About } from "@/components/About";
import LoadingPage from "@/components/LoadingPage";
import Results from "@/components/Results";
import React, { useState, useEffect } from "react";
import Leaderboard from "@/components/leaderboard/page";  // Assuming this is a component

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Adjust the loading duration as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="w-full h-[100svh]">
      {isLoading ? (
        <LoadingPage /> // Show loader during loading
      ) : (
        <>
          <Navbar /> {/* This will only be shown after loading is complete */}
          <Hero />
          <Leaderboard />
          <Results/>
          <About />
          <Footer />
        </>
      )}
    </div>
  );
}

