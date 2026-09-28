"use client";

import { useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import "leaflet/dist/leaflet.css";

/* ─────────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────────── */
const pulseAnim = keyframes`
  0%   { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
  70%  { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
`;

/* ─────────────────────────────────────────────
   GLOBAL STYLES — injected into <head> once
   Covers Leaflet internals that can't be
   targeted by styled-components wrappers.
───────────────────────────────────────────── */
const MapGlobalStyles = createGlobalStyle`
  /* Muted tile appearance without expensive CSS filters */
  .property-map-root .leaflet-tile {
    opacity: 0.95;
  }

  /* Marker wrapper reset */
  .property-marker-wrapper {
    background: transparent !important;
    border: none !important;
  }

  /* ── Marker DOM ── */
  .property-marker {
    position: relative;
    width: 56px;
    height: 68px;
  }

  .property-marker__pin {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    transform: translateX(-50%);
    border: 3px solid white;
    border-radius: 50%;
    background: #18181b;
    box-shadow:
      0 8px 18px rgba(0,0,0,0.25),
      0 3px 6px rgba(0,0,0,0.15);
  }

  .property-marker__tip {
    position: absolute;
    z-index: 2;
    top: 39px;
    left: 50%;
    width: 14px;
    height: 14px;
    transform: translateX(-50%) rotate(45deg);
    background: #18181b;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
  }

  .property-marker__pulse {
    position: absolute;
    z-index: 1;
    top: 24px;
    left: 50%;
    width: 48px;
    height: 48px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: rgba(24,24,27,0.18);
    animation: ${pulseAnim} 2s ease-out infinite;
  }

  /* ── Popup ── */
  .property-popup-container .leaflet-popup-content-wrapper {
    padding: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  }

  .property-popup-container .leaflet-popup-content {
    margin: 0;
  }

  .property-popup {
    padding: 12px 14px;
    min-width: 150px;
  }

  .property-popup__title {
    color: #18181b;
    font-size: 12px;
    font-weight: 700;
  }

  .property-popup__subtitle {
    margin-top: 3px;
    color: #78716c;
    font-size: 10px;
  }

  /* ── Custom Zoom Controls ── */
  .property-map-controls {
    overflow: hidden;
    margin-top: 16px;
    margin-right: 16px;
    background: rgba(255,255,255,0.98);
    border: 1px solid rgba(231,229,228,0.9);
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  }

  .property-map-control {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    padding: 0;
    color: #292524;
    font-family: inherit;
    font-size: 20px;
    font-weight: 400;
    background: transparent;
    border: 0;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .property-map-control:hover  { background: #f5f5f4; }
  .property-map-control:active { background: #e7e5e4; }

  .property-map-control-divider {
    height: 1px;
    margin: 0 8px;
    background: #e7e5e4;
  }
`;

/* ─────────────────────────────────────────────
   STYLED COMPONENTS
───────────────────────────────────────────── */
const MapRoot = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  border: 1px solid rgba(231, 229, 228, 0.9);
  border-radius: 24px;
  background: #f5f5f4;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    0 8px 30px rgba(0, 0, 0, 0.06);
  margin-top: 20px;

  @media (max-width: 640px) {
    height: 240px;
    border-radius: 20px;
  }
`;

const MapCanvas = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    width: 100%;
    height: 100%;
    background: #e7e5e4;
    font-family: inherit;
  }
`;

const Badge = styled.div`
  position: absolute;
  z-index: 500;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 13px;
  color: #292524;
  font-size: 12px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(231, 229, 228, 0.9);
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);

  @media (max-width: 640px) {
    top: 12px;
    left: 12px;
  }
`;

const BadgeDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #18181b;
  box-shadow: 0 0 0 3px rgba(24, 24, 27, 0.1);
`;

const LocationCard = styled.div`
  position: absolute;
  z-index: 500;
  right: 16px;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 11px 13px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(231, 229, 228, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  pointer-events: none;

  @media (max-width: 640px) {
    right: 12px;
    bottom: 12px;
    left: 12px;
  }
`;

const LocationIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  color: white;
  background: #18181b;
  border-radius: 10px;
`;

const LocationTitle = styled.p`
  margin: 0;
  overflow: hidden;
  color: #18181b;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LocationSubtitle = styled.p`
  margin: 2px 0 0;
  color: #78716c;
  font-size: 10px;
  line-height: 1.4;
`;

const Attribution = styled.div`
  position: absolute;
  z-index: 500;
  right: 8px;
  bottom: 5px;
  padding: 2px 5px;
  color: rgba(68, 64, 60, 0.75);
  font-size: 8px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  pointer-events: none;
`;

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const DEFAULT_COORDINATES = [31.5204, 74.3587];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function LeafletMap({ apartment }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  const coordinates = apartment?.coordinates ?? DEFAULT_COORDINATES;
  const latitude = Number(coordinates[0]);
  const longitude = Number(coordinates[1]);
  const propertyName = apartment?.name || "Property Location";

  useEffect(() => {
    if (!mapContainerRef.current) return;

    let cancelled = false;

    const initializeMap = async () => {
      const L = await import("leaflet");

      if (cancelled || !mapContainerRef.current) return;

      /* Update view if map already mounted */
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setView([latitude, longitude], 15, { animate: true });
        markerRef.current?.setLatLng([latitude, longitude]);
        return;
      }

      const position = [latitude, longitude];

      const map = L.map(mapContainerRef.current, {
        center: position,
        zoom: 15,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        boxZoom: false,
        keyboard: false,
        zoomControl: false,
        attributionControl: false,
        minZoom: 12,
        maxZoom: 19,
      });

      mapInstanceRef.current = map;

      /* OpenStreetMap tiles */
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>',
      }).addTo(map);

      /* Custom property pin */
      const propertyIcon = L.divIcon({
        className: "property-marker-wrapper",
        html: `
          <div class="property-marker">
            <div class="property-marker__pulse"></div>
            <div class="property-marker__pin">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 10.5L12 3L21 10.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.5 9.5V20H18.5V9.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 20V14H15V20" stroke="white" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="property-marker__tip"></div>
          </div>
        `,
        iconSize: [56, 68],
        iconAnchor: [28, 68],
      });

      const marker = L.marker(position, { icon: propertyIcon, interactive: true }).addTo(map);
      markerRef.current = marker;

      marker.bindPopup(
        `<div class="property-popup">
          <div class="property-popup__title">${escapeHtml(propertyName)}</div>
          <div class="property-popup__subtitle">Property location</div>
        </div>`,
        { closeButton: true, offset: [0, -45], className: "property-popup-container" }
      );

      /* Custom zoom control */
      const zoomControl = L.control({ position: "topright" });
      zoomControl.onAdd = () => {
        const container = L.DomUtil.create("div", "property-map-controls");
        container.innerHTML = `
          <button type="button" class="property-map-control" data-zoom="in" aria-label="Zoom in">+</button>
          <div class="property-map-control-divider"></div>
          <button type="button" class="property-map-control" data-zoom="out" aria-label="Zoom out">−</button>
        `;
        L.DomEvent.disableClickPropagation(container);
        container.querySelector('[data-zoom="in"]')?.addEventListener("click", () => map.zoomIn());
        container.querySelector('[data-zoom="out"]')?.addEventListener("click", () => map.zoomOut());
        return container;
      };
      zoomControl.addTo(map);

      requestAnimationFrame(() => map.invalidateSize());
    };

    initializeMap();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerRef.current = null;
      }
    };
  }, [latitude, longitude, propertyName]);

  return (
    <>
      <MapGlobalStyles />

      <MapRoot className="property-map-root">
        {/* Leaflet canvas */}
        <MapCanvas ref={mapContainerRef} />

        {/* Attribution */}
        <Attribution>© OpenStreetMap</Attribution>
      </MapRoot>
    </>
  );
}
