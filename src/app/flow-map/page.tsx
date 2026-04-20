'use client';

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { PredictiveAIHUD } from "@/components/predictive-ai-hud";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function FlowMapPage() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  
  // Default to a famous stadium location if no prediction is made (e.g., Wembley Stadium)
  const defaultCenter = { lat: 51.556, lng: -0.279 };

  return (
    <div className="bg-background text-on-surface font-body h-[100dvh] flex flex-col overflow-hidden selection:bg-primary-container selection:text-on-primary-container relative">
      <header className="bg-surface flex justify-between items-center w-full px-6 py-4 fixed top-0 z-40">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[var(--color-primary)] hover:bg-surface-container transition-colors p-2 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-headline font-bold tracking-tighter text-xl text-on-surface">Live Flow Map</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hover:bg-surface-container transition-colors rounded-full overflow-hidden w-10 h-10 border border-surface-container-low">
            <img alt="Manager Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS2h3d48A8zrjZFTd5zRJUzTkYv3szUb4Ttthj7d9x3HV7Zmu436zsD7LVRsvfyJzlX4xXPvdJ09JhE1CzYTvPwc5KbImS9uH17rUli-t34Z26WgGx261dJ9shKLvqQZBFmy0NAFVprF8F4BwSjBP2H8SyANiw21Mz0WsGOQrcnY-EhROmCtYFBBl_SnYdAYed5HtJeTEhesZr073JyLEbBjk0twATpSg1JjMbfXAt6TYi_XoLWOjmd0PzCynViOZThesvgR5-Cfkw" />
          </button>
        </div>
      </header>

      <main className="flex-1 relative w-full h-full mt-[72px] mb-[80px] bg-background">
        <div className="absolute inset-0 overflow-hidden">
          {apiKey ? (
            <APIProvider apiKey={apiKey}>
              <Map
                style={{ width: '100%', height: '100%' }}
                defaultCenter={defaultCenter}
                defaultZoom={17}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={'arena_flow_map'} // Using a custom Map ID for stylized Google Maps
              >
                <Marker position={defaultCenter} title="Stadium Entrance" />
                <Marker position={{ lat: 51.557, lng: -0.278 }} title="Hotspot: Gate A" />
              </Map>
            </APIProvider>
          ) : (
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOell4ddqZlf7SdKOX00N8OMa1wr468iNDNca6RFBQNksNv9PWOumj36y8_CqPXry_RrmGuNEEVIvUKa4wm5grDfDPwsfnYu4lzH-8cgfEDlr1YldbcBRVHvi9k6Px6hXWeoagS-6l-7pGtCZgnHxEpdI2joTXOxov0JcuJACfj35jyq56A9E__9mADLp4DtGk5sVPFdNUvvVQfKYg-081RkEB2r-GtLjt5zT2r_k9gLZ0T9GHkyOuaTZD4GiCi17Xvc2b_wXUFJic')" }}>
               <div className="flex h-full items-center justify-center bg-background/20 backdrop-blur-sm">
                  <div className="bg-surface-container rounded-2xl p-6 text-center max-w-xs shadow-2xl border border-outline-variant">
                    <span className="material-symbols-outlined text-4xl text-primary mb-3">map</span>
                    <h3 className="text-lg font-headline font-bold">Dynamic Map Mode</h3>
                    <p className="text-sm text-on-surface-variant mb-4">Connect Google Maps API Key to enable real-time geospatial tracking.</p>
                    <button className="bg-primary text-on-primary w-full py-2 rounded-xl text-sm font-bold">Demo Mode Active</button>
                  </div>
               </div>
            </div>
          )}
          
          <div className="absolute top-[30%] left-[45%] w-64 h-64 rounded-full bg-error/20 blur-[60px] pointer-events-none z-10"></div>
          <div className="absolute top-[50%] left-[20%] w-48 h-48 rounded-full bg-tertiary/10 blur-[40px] pointer-events-none z-10"></div>
        </div>

        <div className="absolute bottom-6 left-4 right-4 z-30">
          <PredictiveAIHUD />
          <div className="bg-surface/90 backdrop-blur-[24px] rounded-3xl p-6 border border-outline-variant/20 flex flex-col gap-4 shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>spatial_tracking</span>
                  Live Telemetry
                </span>
                <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight">Level 1 Concourse Flow</h2>
              </div>
              <div className="bg-surface-container-high rounded-2xl px-4 py-2 flex items-center gap-2 border border-outline-variant/10">
                <div className="w-2 h-2 rounded-full bg-error animate-pulse"></div>
                <span className="text-sm font-bold text-on-surface">CRITICAL</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">Density Index</p>
                <p className="text-xl font-headline font-bold text-error">0.82</p>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">Avg Flow</p>
                <p className="text-xl font-headline font-bold text-secondary">4.2 m/s</p>
              </div>
            </div>
            
            <button className="bg-primary text-on-primary w-full py-4 rounded-2xl font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Deploy Response Team
            </button>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-xl shadow-2xl rounded-t-[3rem] md:hidden">
        <Link href="/flow-map" className="flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-tertiary)] text-white rounded-2xl px-5 py-3 shadow-lg shadow-primary/10">
          <span className="material-symbols-outlined mb-1 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Flow</span>
        </Link>
        <Link href="/time-saver-list" className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 opacity-50 hover:opacity-100 transition-all">
          <span className="material-symbols-outlined mb-1 text-[24px]">schedule</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Schedule</span>
        </Link>
        <Link href="/pulse-feedback" className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 opacity-50 hover:opacity-100 transition-all">
          <span className="material-symbols-outlined mb-1 text-[24px]">electric_bolt</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Pulse</span>
        </Link>
        <Link href="/" className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 opacity-50 hover:opacity-100 transition-all">
          <span className="material-symbols-outlined mb-1 text-[24px]">person</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
