"use client";

import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initApp = () => {
      const hamburgerBtn = document.getElementById("hamburger-button");
      const mobileMenu = document.getElementById("mobile-menu");

      const toggleMenu = () => {
        mobileMenu?.classList.toggle("hidden");
        mobileMenu?.classList.toggle("flex");
        hamburgerBtn?.classList.toggle("toggle-btn");
      };

      if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener("click", toggleMenu);
        mobileMenu.addEventListener("click", toggleMenu);
      }

      return () => {
        if (hamburgerBtn && mobileMenu) {
          hamburgerBtn.removeEventListener("click", toggleMenu);
          mobileMenu.removeEventListener("click", toggleMenu);
        }
      };
    };

    initApp();
  }, []);
  return (
    <div>
      <main className="">
        <Navbar />
      </main>
      <div className="max-w-[1440px] mx-auto sm:px-[100px] bg-white">
        <AboutUs />
        <footer className="bg-red-500">
          <div>Future Body</div>
        </footer>
      </div>
    </div>
  );
}
