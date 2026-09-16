"use client";

import { useState } from "react";
import Header from "../../_components/Header";
import ApartmentHero from "../../_components/ApartmentHero";
import ApartmentDetailContent from "../../_components/ApartmentDetailContent";
import Footer from "../../_components/Footer";
import BookingModal from "../../_components/BookingModal";
import UnderDevelopmentModal from "../../_components/UnderDevelopmentModal";
import { apartmentsData } from "../../_data/apartments";

export default function ApartmentDetailClient({ params }) {
  const apartmentId = params?.id;
  const apartment = apartmentsData.find((a) => a.id === apartmentId) || apartmentsData[0];
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  const handleOpenDevModal = () => {
    setIsBookingModalOpen(false);
    setIsDevModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900 overflow-x-hidden selection:bg-brand selection:text-white">
      {/* Top Navigation */}
      <Header onBookClick={() => setIsBookingModalOpen(true)} />

      {/* Top Hero Section */}
      <ApartmentHero
        apartmentId={apartmentId}
        apartment={apartment}
        isBookingModalOpen={isBookingModalOpen}
        setIsBookingModalOpen={setIsBookingModalOpen}
        onReserveClick={handleOpenDevModal}
      />

      {/* Detailed Content & Reservation Sidebar */}
      <ApartmentDetailContent
        apartment={apartment}
        onBookClick={() => setIsBookingModalOpen(true)}
        onReserveClick={handleOpenDevModal}
      />

      {/* Footer */}
      <Footer onBookClick={() => setIsBookingModalOpen(true)} />

      {/* Standalone Reusable Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        apartment={apartment}
        onSubmitSuccess={handleOpenDevModal}
      />

      {/* Under Development Modal */}
      <UnderDevelopmentModal
        isOpen={isDevModalOpen}
        onClose={() => setIsDevModalOpen(false)}
        featureName="Reservation System"
      />
    </main>
  );
}
