"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import InteractiveFeatures from "@/components/InteractiveFeatures";
import Capabilities from "@/components/Capabilities";
import FeatureShowcase from "@/components/FeatureShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <TrustSection />
      <InteractiveFeatures />
      <Capabilities />
      <FeatureShowcase />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
