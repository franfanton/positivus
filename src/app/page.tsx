"use client";

import Footer from "@/components/Footer";
import AboutUs from "@/components/Home/AboutUs";
import CaseStudies from "@/components/Home/CaseStudies";
import ContactUs from "@/components/Home/ContactUs";
import OurWorking from "@/components/Home/OurWorking";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";
import Testimonials from "@/components/Home/Testimonials";
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
    <div className="max-w-[1440px] mx-auto px-8 sm:px-[100px] bg-white flex flex-col gap-16">
      <AboutUs />
      <Services />
      <CaseStudies />
      <OurWorking />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
