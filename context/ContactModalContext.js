"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import ContactModal from "@/components/ContactModal";
import OfferModal from "@/components/OfferModal";

const OFFER_DELAY_MS = 4500;
const OFFER_COOLDOWN_MS = 24 * 60 * 60 * 1000;
const OFFER_STORAGE_KEY = "devreplabs_offer_popup_shown";

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
  const pathname = usePathname();
  const offerHandled = useRef(false);

  const rememberOffer = useCallback(() => {
    offerHandled.current = true;
    try {
      localStorage.setItem(OFFER_STORAGE_KEY, String(Date.now()));
    } catch {
      // The in-memory flag still prevents repeat prompts during navigation.
    }
  }, []);

  const openContactModal = useCallback((config = {}) => {
    rememberOffer();
    setIsOfferOpen(false);
    if (typeof config === "string") {
      setModalConfig({ mode: config });
    } else if (config && config.mode) {
      setModalConfig(config);
    } else {
      setModalConfig({ mode: "contact", ...config });
    }
    setIsOpen(true);
  }, [rememberOffer]);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openOfferModal = useCallback(() => {
    rememberOffer();
    setIsOfferOpen(true);
  }, [rememberOffer]);

  useEffect(() => {
    const marketingPage = pathname === "/" || /^\/(services|projects)(\/|$)/.test(pathname);
    if (!marketingPage || isOpen || isOfferOpen || offerHandled.current) return;

    const timer = window.setTimeout(() => {
      if (offerHandled.current) return;
      try {
        const lastShown = Number(localStorage.getItem(OFFER_STORAGE_KEY));
        if (Date.now() - lastShown < OFFER_COOLDOWN_MS) return;
      } catch {
        // Storage can be unavailable in private browsing.
      }
      openOfferModal();
    }, OFFER_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [pathname, isOpen, isOfferOpen, openOfferModal]);

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
