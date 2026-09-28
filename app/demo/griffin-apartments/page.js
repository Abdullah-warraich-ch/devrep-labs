"use client";

import { useState } from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SearchBar from "./_components/SearchBar";
import FeaturedResidences from "./_components/FeaturedResidences";
import WhyUs from "./_components/WhyUs";
import Testimonials from "./_components/Testimonials";
import Footer from "./_components/Footer";

export default function GriffinHome() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900 overflow-x-hidden selection:bg-[#304d43] selection:text-white">
      <Header onBookClick={() => setIsBookingModalOpen(true)} />
      <Hero
        isBookingModalOpen={isBookingModalOpen}
        setIsBookingModalOpen={setIsBookingModalOpen}
      />
      <SearchBar />
      <FeaturedResidences
        onSelectApartment={() => setIsBookingModalOpen(true)}
      />
      <WhyUs onBookClick={() => setIsBookingModalOpen(true)} />
      <Testimonials />
      <Footer onBookClick={() => setIsBookingModalOpen(true)} />
    </main>
  );
}
