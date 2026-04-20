import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function PulseFeedbackPage() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col md:flex-row pb-24 md:pb-0">
      {/* Navigation Drawer (Desktop) */}
      <aside className="hidden md:flex flex-col bg-surface-container-low w-80 fixed inset-y-0 left-0 z-[60] p-6 shadow-2xl shadow-black rounded-r-3xl">
        <div className="mb-8 flex flex-col gap-2">
          <div className="flex items-center gap-4 bg-surface-container-high p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/30 flex-shrink-0">
              <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy5fAdfCdNIABuZKpXjkFm1GppANn7C9QKaopnbHrTD1Y0A2M-qWzo_RaFU3Bz5KILFB4cdGJeOnRaFTknqxcHcXz4UpqYy5qPTjcAwdHAS4lZ_9HHafdRDxXzEbjXS_A8bPxEiZ8ofbjibM_tZZkX5kTopruMdO_jNCeSFQeG8VV33rTG5PeIp4JboMEL8t3Q9zQMHUXmpDDVNU1YzNwA-30F7dgkw_stkRVFThEUlGdn-fzS_W5acd2LDCiko4eal6ePCjs87gRa" />
            </div>
            <div>
              <h2 className="font-headline font-bold text-on-surface">Operations Center</h2>
              <p className="text-xs text-on-surface-variant font-label">Sector A-12 active</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
        <div className="mb-8">
          <h1 className="font-headline font-black text-2xl tracking-tighter text-[var(--color-primary)]">ArenaFlow</h1>
        </div>
        <nav className="flex-1 space-y-2">
          <Link href="/flow-map" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface/70 hover:bg-surface-container-highest font-headline font-medium transition-colors group">
            <span className="material-symbols-outlined text-on-surface/70 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>domain</span>
            <span>Stadium Zones</span>
          </Link>
          <Link href="/time-saver-list" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface/70 hover:bg-surface-container-highest font-headline font-medium transition-colors group">
            <span className="material-symbols-outlined text-on-surface/70 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>history</span>
            <span>Alert History</span>
          </Link>
          {/* Active Tab */}
          <Link href="/pulse-feedback" className="flex items-center gap-4 px-4 py-3 rounded-lg bg-surface-container-highest text-[var(--color-primary)] font-headline font-bold">
            <span className="material-symbols-outlined text-[var(--color-primary)]" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
            <span>Pulse</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface/70 hover:bg-surface-container-highest font-headline font-medium transition-colors group">
            <span className="material-symbols-outlined text-on-surface/70 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>groups</span>
            <span>Staff Directory</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface/70 hover:bg-surface-container-highest font-headline font-medium transition-colors group">
            <span className="material-symbols-outlined text-on-surface/70 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            <span>System Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Top App Bar (Mobile Only) */}
      <header className="md:hidden flex justify-between items-center w-full px-6 py-4 bg-surface z-50 sticky top-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[var(--color-primary)] text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
          <span className="text-xl font-black text-on-surface tracking-tighter font-headline">ArenaFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 flex-shrink-0">
            <img alt="Manager Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrO9LQD3RA-vXql_E_4C-vexpsMaF3DGpgfgeOwPdWVIisZY9u9rvwjO4ZpVAMp1cNb6LdF_FplHxEuq9xC5taIYNNedjpF0jhsnFHJ0ytcaBTsEq5ihSd-HKj6uIc8J9oTZV-1AeLqWeu-cjaJxFc9wzgQiVY4sIhIL740nuLK3u8SXylsO4QbRzk7-VGCAWPPq27IkeqdT__owNeop1sBINTGj0RwSoPVA2upeue-xuHLK9eSMSnslLZL-_K9ZzWv76cEfBoetIX" />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 w-full md:ml-80 flex flex-col items-center justify-center p-6 md:p-12 relative min-h-[calc(100vh-80px)] md:min-h-screen">
        {/* Header Section */}
        <div className="w-full max-w-4xl mb-12 text-center md:text-left transition-all duration-300">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-4">The Pulse</h1>
          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto md:mx-0">Report current sector density to update the global flow map instantly.</p>
        </div>

        {/* Action Grid (Bento Style) */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
          {/* Empty Status */}
          <button className="group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 flex flex-col items-start justify-between min-h-[240px] text-left hover:bg-surface-container-highest transition-all duration-300 transform hover:scale-[1.02] border border-transparent hover:border-outline-variant/15 outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(109,221,129,0.15)] group-hover:shadow-[0_0_30px_rgba(109,221,129,0.3)] transition-all">
              <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>directions_run</span>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Empty</h3>
              <p className="font-label text-secondary font-semibold uppercase tracking-widest text-sm">Speedy Flow</p>
            </div>
          </button>

          {/* Moderate Status */}
          <button className="group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 flex flex-col items-start justify-between min-h-[240px] text-left hover:bg-surface-container-highest transition-all duration-300 transform hover:scale-[1.02] border border-transparent hover:border-outline-variant/15 outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(173,198,255,0.15)] group-hover:shadow-[0_0_30px_rgba(173,198,255,0.3)] transition-all">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Moderate</h3>
              <p className="font-label text-primary font-semibold uppercase tracking-widest text-sm">Steady Pace</p>
            </div>
          </button>

          {/* Long Status */}
          <button className="group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 flex flex-col items-start justify-between min-h-[240px] text-left hover:bg-surface-container-highest transition-all duration-300 transform hover:scale-[1.02] border border-transparent hover:border-outline-variant/15 outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl group-hover:bg-tertiary/20 transition-all duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-tertiary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(251,188,6,0.15)] group-hover:shadow-[0_0_30px_rgba(251,188,6,0.3)] transition-all">
              <span className="material-symbols-outlined text-4xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>hourglass_empty</span>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Long</h3>
              <p className="font-label text-tertiary font-semibold uppercase tracking-widest text-sm">Heavy Traffic</p>
            </div>
          </button>

          {/* Stuck Status */}
          <button className="group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 flex flex-col items-start justify-between min-h-[240px] text-left hover:bg-surface-container-highest transition-all duration-300 transform hover:scale-[1.02] border border-transparent hover:border-outline-variant/15 outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-error/10 rounded-full blur-3xl group-hover:bg-error/20 transition-all duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-error/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,180,171,0.15)] group-hover:shadow-[0_0_30px_rgba(255,180,171,0.3)] transition-all">
              <span className="material-symbols-outlined text-4xl text-error" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Stuck</h3>
              <p className="font-label text-error font-semibold uppercase tracking-widest text-sm">Bottlenecked</p>
            </div>
          </button>
        </div>
      </main>

      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-xl rounded-t-[2rem] shadow-[0_-4px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_40px_rgba(0,0,0,0.5)]">
        <Link className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 hover:text-[var(--color-primary)] transition-all" href="/flow-map">
          <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>map</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Flow Map</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 hover:text-[var(--color-primary)] transition-all" href="/time-saver-list">
          <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Time-Saver</span>
        </Link>
        {/* Active Nav Item */}
        <Link className="flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-tertiary)] text-white rounded-xl px-4 py-2 transform scale-110 duration-300 ease-out shadow-lg" href="/pulse-feedback">
          <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Pulse</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 hover:text-[var(--color-primary)] transition-all" href="/">
          <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
