"use client";

import React, { useState } from "react";
import Image from "next/image";
import img from "@/app/public/logo.png";

export const Navbar = () => {
  const scrollAmount = 700; // Adjust as needed

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.scrollY + scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollAmount1 = 1400;
  const ScrollDownResult = () => {
    window.scrollTo({
      top: window.scrollY + scrollAmount1,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="hidden font-makalo w-screen text-[#fefefe] absolute right-0 lg:flex px-16 pt-5">
        <ul className="flex w-full gap-5 h-full items-center justify-between text-lg">
          <li>
            <Image src={img} width={40} height={40} alt="Logo" />
          </li>
          <div className="flex gap-5">
            <li className="hover:to-[#152c37] flex items-center hover:from-[#000102] bg-gradient-to-r px-5 rounded-xl">
              <a href="/">Events</a>
            </li>
            <li className="hover:to-[#152c37] flex items-center hover:from-[#000102] bg-gradient-to-r px-5 rounded-xl cursor-pointer" onClick={ScrollDownResult}>
                Results
            </li>
            <li
              className="hover:to-[#152c37] flex items-center hover:from-[#000102] bg-gradient-to-r px-5 rounded-xl cursor-pointer"
              onClick={handleScrollDown}
            >
              Leaderboard
            </li>
          </div>
        </ul>
      </nav>
      <MobileNavbar />
    </div>
  );
};

// Mobile Navbar
const MobileNavbar = () => {
  const scrollAmount = 700; // Adjust as needed

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.scrollY + scrollAmount,
      behavior: "smooth",
    });
  };


  const scrollAmount1 = 1400;
  const ScrollDownResult = () => {
    window.scrollTo({
      top: window.scrollY + scrollAmount1,
      behavior: "smooth",
    });
  };

  return (
    <nav className="lg:hidden font-makalo w-screen text-[#fefefe] absolute right-0 flex pt-5 pl-5">
      <ul className="flex w-full justify-between items-center text-sm pr-5">
        <li>
          <Image src={img} width={40} height={40} alt="Logo" />
        </li>
        <div className="flex gap-3">
          <li className="hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r p-2 rounded-xl">
            <a href="/">Events</a>
          </li>
          <li className="hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r p-2 rounded-xl cursor-pointer" onClick={ScrollDownResult}>
            Results
          </li>
          <li
            className="hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r p-2 rounded-xl cursor-pointer"
            onClick={handleScrollDown}
          >
            Leaderboard
          </li>
        </div>
      </ul>
    </nav>
  );
};
