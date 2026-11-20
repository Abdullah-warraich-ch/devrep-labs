"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import ContactModal from "@/components/ContactModal";
import OfferModal from "@/components/OfferModal";

const ContactModalContext = createContext({
  isOpen: false,
  openContactModal: () => {},
  closeContactModal: () => {},
  isOfferOpen: false,
  openOfferModal: () => {},
  closeOfferModal: () => {},
});

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({ mode: "contact" });
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const openContactModal = useCallback((config = {}) => {
    if (typeof config === "string") {
      setModalConfig({ mode: config });
    } else if (config && config.mode) {
      setModalConfig(config);
    } else {
      setModalConfig({ mode: "contact", ...config });
    }
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openOfferModal = useCallback(() => {
    setIsOfferOpen(true);
  }, []);

  const closeOfferModal = useCallback(() => {
    setIsOfferOpen(false);
  }, []);

  // Transition from Offer to Demo modal seamlessly
  const claimOfferAndBookDemo = useCallback(() => {
    setIsOfferOpen(false);
    // Open ContactModal in demo mode with offer flag
    setModalConfig({ mode: "demo", offerClaimed: true });
    setIsOpen(true);
  }, []);

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        openContactModal,
        closeContactModal,
        modalConfig,
        isOfferOpen,
        openOfferModal,
        closeOfferModal,
      }}
    >
      {children}

      {/* User-triggered demo offer */}
      <OfferModal
        isOpen={isOfferOpen}
        onClose={closeOfferModal}
        onClaimOffer={claimOfferAndBookDemo}
      />

      {/* Main Contact & Demo Booking Form Modal */}
      <ContactModal
        isOpen={isOpen}
        onClose={closeContactModal}
        config={modalConfig}
      />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error(
      "useContactModal must be used within a ContactModalProvider"
    );
  }
  return context;
}
