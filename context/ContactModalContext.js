"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import ContactModal from "@/components/ContactModal";
import OfferModal from "@/components/OfferModal";

const OFFER_POPUP_STORAGE_KEY = "devreplabs_offer_popup_shown";
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const POPUP_DELAY_MS = 7000; // 7 seconds delay after page load

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
  const timerRef = useRef(null);

  // Helper to mark offer as shown in localStorage with timestamp
  const markOfferShown = useCallback(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(OFFER_POPUP_STORAGE_KEY, String(Date.now()));
      }
    } catch {
      // Ignore localStorage errors (e.g. private mode)
    }
  }, []);

  const openContactModal = useCallback((config = {}) => {
    // If user opens contact/demo manually, clear pending offer timer & suppress offer popup
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    markOfferShown();

    if (typeof config === "string") {
      setModalConfig({ mode: config });
    } else if (config && config.mode) {
      setModalConfig(config);
    } else {
      setModalConfig({ mode: "contact", ...config });
    }
    setIsOpen(true);
  }, [markOfferShown]);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openOfferModal = useCallback(() => {
    setIsOfferOpen(true);
    markOfferShown();
  }, [markOfferShown]);

  const closeOfferModal = useCallback(() => {
    setIsOfferOpen(false);
    markOfferShown();
  }, [markOfferShown]);

  // Transition from Offer to Demo modal seamlessly
  const claimOfferAndBookDemo = useCallback(() => {
    setIsOfferOpen(false);
    markOfferShown();
    // Open ContactModal in demo mode with offer flag
    setModalConfig({ mode: "demo", offerClaimed: true });
    setIsOpen(true);
  }, [markOfferShown]);

  // Automatic 24-hour popup timer
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const lastShown = localStorage.getItem(OFFER_POPUP_STORAGE_KEY);
      const now = Date.now();

      // If shown within last 24 hours, do not schedule
      if (lastShown && now - Number(lastShown) < ONE_DAY_MS) {
        return;
      }
    } catch {
      return;
    }

    // Schedule offer modal to appear after delay
    timerRef.current = setTimeout(() => {
      // Only open if the contact modal isn't already open
      setIsOpen((currentContactOpen) => {
        if (!currentContactOpen) {
          setIsOfferOpen(true);
          markOfferShown();
        }
        return currentContactOpen;
      });
    }, POPUP_DELAY_MS);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [markOfferShown]);

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        openContactModal,
        closeContactModal,
        modalConfig,
        isOfferOpen,
        closeOfferModal,
      }}
    >
      {children}

      {/* 24-Hour Special Offer Popup */}
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
