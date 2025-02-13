"use client";

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
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Navbar />
      </main>
      <div className="max-w-4xl mx-auto">
        <footer className="">
          <div>Future Body</div>
        </footer>
      </div>
    </div>
  );
}
