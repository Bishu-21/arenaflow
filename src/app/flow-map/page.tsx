import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { PredictiveAIHUD } from "@/components/predictive-ai-hud";

export default function FlowMapPage() {
  return (
    <div className="bg-background text-on-surface font-body h-[100dvh] flex flex-col overflow-hidden selection:bg-primary-container selection:text-on-primary-container relative">
      {/* TopAppBar */}
      <header className="bg-surface flex justify-between items-center w-full px-6 py-4 fixed top-0 z-40">
        <div className="flex items-center gap-4">
          <button className="text-[var(--color-primary)] hover:bg-surface-container transition-colors p-2 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
          </button>
          <h1 className="font-headline font-bold tracking-tighter text-xl text-on-surface">ArenaFlow</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hover:bg-surface-container transition-colors rounded-full overflow-hidden w-10 h-10 border border-surface-container-low">
            <img alt="Manager Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS2h3d48A8zrjZFTd5zRJUzTkYv3szUb4Ttthj7d9x3HV7Zmu436zsD7LVRsvfyJzlX4xXPvdJ09JhE1CzYTvPwc5KbImS9uH17rUli-t34Z26WgGx261dJ9shKLvqQZBFmy0NAFVprF8F4BwSjBP2H8SyANiw21Mz0WsGOQrcnY-EhROmCtYFBBl_SnYdAYed5HtJeTEhesZr073JyLEbBjk0twATpSg1JjMbfXAt6TYi_XoLWOjmd0PzCynViOZThesvgR5-Cfkw" />
          </button>
        </div>
      </header>

      {/* Main Canvas: Flow Map */}
      <main className="flex-1 relative w-full h-full mt-[72px] mb-[80px] bg-background">
        <div className="absolute inset-0 overflow-hidden touch-pan-x touch-pan-y">
          {/* Stylized Map Background Image */}
          <div className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOell4ddqZlf7SdKOX00N8OMa1wr468iNDNca6RFBQNksNv9PWOumj36y8_CqPXry_RrmGuNEEVIvUKa4wm5grDfDPwsfnYu4lzH-8cgfEDlr1YldbcBRVHvi9k6Px6hXWeoagS-6l-7pGtCZgnHxEpdI2joTXOxov0JcuJACfj35jyq56A9E__9mADLp4DtGk5sVPFdNUvvVQfKYg-081RkEB2r-GtLjt5zT2r_k9gLZ0T9GHkyOuaTZD4GiCi17Xvc2b_wXUFJic')" }}></div>
          
          {/* Heatmap Overlays */}
          <div className="absolute top-[30%] left-[45%] w-64 h-64 rounded-full bg-error/30 blur-[40px] pointer-events-none"></div>
          <div className="absolute top-[50%] left-[20%] w-48 h-48 rounded-full bg-tertiary/20 blur-[30px] pointer-events-none"></div>
          <div className="absolute bottom-[20%] right-[30%] w-72 h-72 rounded-full bg-secondary/15 blur-[50px] pointer-events-none"></div>
          
          {/* SVG Fastest Path Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 20 70 Q 40 40, 80 20" fill="none" stroke="url(#pathGradient)" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5"></path>
            <defs>
              <linearGradient id="pathGradient" x1="0%" x2="100%" y1="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)"></stop>
                <stop offset="100%" stopColor="#ff8fab"></stop>
              </linearGradient>
            </defs>
          </svg>

          {/* Map Markers */}
          <div className="absolute bottom-[28%] left-[18%] flex flex-col items-center translate-x-[-50%] translate-y-[-50%]">
            <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(173,198,255,0.8)] border-2 border-background"></div>
            <div className="mt-1 px-2 py-0.5 rounded-lg bg-surface-container-high/90 backdrop-blur-sm text-[10px] font-bold text-on-surface font-body tracking-wider uppercase">Sec 104</div>
          </div>
          
          <div className="absolute top-[18%] right-[18%] flex flex-col items-center translate-x-[-50%] translate-y-[-50%]">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-8 h-8 rounded-full bg-secondary opacity-30 animate-ping"></div>
              <div className="w-5 h-5 rounded-full bg-secondary shadow-[0_0_12px_rgba(109,221,129,1)] border-2 border-background z-10"></div>
            </div>
            <div className="mt-1 px-2 py-0.5 rounded-lg bg-surface-container-high/90 backdrop-blur-sm text-[10px] font-bold text-on-surface font-body tracking-wider uppercase">Exit B</div>
          </div>
          
          <div className="absolute top-[40%] left-[60%] flex flex-col items-center translate-x-[-50%] translate-y-[-50%]">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shadow-lg border border-outline-variant/30">
              <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>local_pizza</span>
            </div>
          </div>
          <div className="absolute top-[60%] right-[40%] flex flex-col items-center translate-x-[-50%] translate-y-[-50%]">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shadow-lg border border-outline-variant/30">
              <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>sports_bar</span>
            </div>
          </div>
        </div>

        {/* Floating UI / Bento Grids */}
        <div className="absolute bottom-6 left-4 right-4 z-30">
          <PredictiveAIHUD />
          <div className="bg-surface/80 backdrop-blur-[20px] rounded-2xl p-5 border border-outline-variant/15 flex flex-col gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest text-secondary uppercase mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                  Fastest Route Active
                </span>
                <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight">Sec 104 to Exit B</h2>
              </div>
              <div className="bg-surface-container-highest rounded-full px-3 py-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">schedule</span>
                <span className="text-sm font-medium text-on-surface">4 min</span>
              </div>
            </div>
            {/* Metrics Row */}
            <div className="flex gap-3 mt-2">
              <div className="flex-1 bg-surface-container-low rounded-xl p-3 flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">Density Ahead</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-sm font-semibold text-on-surface">Clear Path</span>
                </div>
              </div>
              <button className="bg-surface-container-highest hover:bg-surface-bright transition-colors rounded-xl px-4 py-3 flex items-center justify-center border border-outline-variant/15">
                <span className="material-symbols-outlined text-on-surface">close</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-xl shadow-[0_-4px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_40px_rgba(0,0,0,0.5)] rounded-t-[2rem] md:hidden">
        <Link href="/flow-map" className="flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-tertiary)] text-white rounded-xl px-4 py-2 hover:text-[var(--color-primary)] transition-all transform scale-110 duration-300 ease-out">
          <span className="material-symbols-outlined mb-1 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Flow Map</span>
        </Link>
        <Link href="/time-saver-list" className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 hover:text-primary transition-all">
          <span className="material-symbols-outlined mb-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Time-Saver</span>
        </Link>
        <Link href="/pulse-feedback" className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 hover:text-primary transition-all">
          <span className="material-symbols-outlined mb-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>electric_bolt</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Pulse</span>
        </Link>
        <Link href="/" className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 hover:text-primary transition-all">
          <span className="material-symbols-outlined mb-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
