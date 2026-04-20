import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function TimeSaverListPage() {
  return (
    <div className="bg-background text-on-surface font-body antialiased min-h-[100dvh] pb-24 md:pb-0 flex flex-col">
      {/* TopAppBar */}
      <header className="bg-surface flex justify-between items-center w-full px-6 py-4 z-40 sticky top-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[var(--color-primary)]" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
          <span className="text-xl font-headline font-black text-on-surface tracking-tighter">ArenaFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-surface-container-low">
            <img alt="Manager Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcMVBl89103RfZSG5Pa9N288SJdghm3G67FxnvbHasVWz2ZGqhU-zfkyOkMuE_BTB1QhHkI6jzgcPiQD-56SPbXBmiQ77FwSmEHJVhXRWcd3ybIhwjGG3FE68_DNrXZ4LGxs6ZMGJBIaeBXBihjccgZnf6wwgiX7SiwH9ynx28I2SLaHtn2GWKNR5CdLj3z4hBxMHPSgnP2k-G0hdXTS1TPhitfNHcO7Idss8o0fy9tDGWLcG0WcyIgmvXLOxdpm2nPgv-P0SWZIGz" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 flex flex-col gap-8 flex-1 w-full">
        {/* Header & Sorting */}
        <section className="flex flex-col gap-6 sticky top-[72px] z-30 bg-background/90 backdrop-blur-xl py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">Time-Saver</h1>
            <p className="text-on-surface-variant mt-1 text-sm">Optimize your stadium experience.</p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button className="bg-primary text-on-primary font-label font-bold text-sm px-6 py-3 rounded-xl whitespace-nowrap transition-transform hover:scale-[1.02]">
              Shortest line
            </button>
            <button className="bg-surface-container-high text-primary font-label font-medium text-sm px-6 py-3 rounded-xl whitespace-nowrap transition-colors hover:bg-surface-container-highest">
              Closest to me
            </button>
            <button className="bg-surface-container-high text-on-surface-variant font-label font-medium text-sm px-6 py-3 rounded-xl whitespace-nowrap transition-colors hover:bg-surface-container-highest">
              Concessions only
            </button>
            <button className="bg-surface-container-high text-on-surface-variant font-label font-medium text-sm px-6 py-3 rounded-xl whitespace-nowrap transition-colors hover:bg-surface-container-highest">
              Restrooms only
            </button>
          </div>
        </section>

        {/* Dynamic List/Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Item: Quick Bite */}
          <div className="bg-surface-container-low rounded-[1.5rem] p-5 flex flex-col gap-4 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>lunch_dining</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-on-surface">Grill Master</h3>
                  <p className="text-on-surface-variant text-xs font-label uppercase tracking-wider">Section 112</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-headline font-black text-2xl text-secondary">2m</span>
                <span className="text-on-surface-variant text-xs font-medium">wait</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>directions_walk</span>
                <span>3 min walk</span>
              </div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Fast</span>
            </div>
            {/* Kinetic Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest">
              <div className="h-full bg-secondary w-1/12"></div>
            </div>
          </div>

          {/* Item: Restroom Short */}
          <div className="bg-surface-container-low rounded-[1.5rem] p-5 flex flex-col gap-4 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>wc</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-on-surface">Restrooms</h3>
                  <p className="text-on-surface-variant text-xs font-label uppercase tracking-wider">Section 114</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-headline font-black text-2xl text-secondary">0m</span>
                <span className="text-on-surface-variant text-xs font-medium">wait</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>directions_walk</span>
                <span>4 min walk</span>
              </div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Clear</span>
            </div>
            {/* Kinetic Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest">
              <div className="h-full bg-secondary w-[2%]"></div>
            </div>
          </div>

          {/* Item: Medium Wait */}
          <div className="bg-surface-container-low rounded-[1.5rem] p-5 flex flex-col gap-4 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>local_pizza</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-on-surface">Slice Station</h3>
                  <p className="text-on-surface-variant text-xs font-label uppercase tracking-wider">Section 108</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-headline font-black text-2xl text-tertiary">8m</span>
                <span className="text-on-surface-variant text-xs font-medium">wait</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>directions_walk</span>
                <span>1 min walk</span>
              </div>
              <span className="text-tertiary font-bold text-xs uppercase tracking-widest">Moderate</span>
            </div>
            {/* Kinetic Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest">
              <div className="h-full bg-tertiary w-5/12"></div>
            </div>
          </div>

          {/* Item: Long Wait */}
          <div className="bg-surface-container-low rounded-[1.5rem] p-5 flex flex-col gap-4 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>sports_bar</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-on-surface">Draft House</h3>
                  <p className="text-on-surface-variant text-xs font-label uppercase tracking-wider">Main Concourse</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                {/* Pulsar effect for long wait */}
                <div className="relative flex items-center justify-center mb-1">
                  <div className="absolute w-6 h-6 rounded-full bg-error opacity-20 animate-ping"></div>
                  <span className="block font-headline font-black text-2xl text-error relative z-10">15m+</span>
                </div>
                <span className="text-on-surface-variant text-xs font-medium">wait</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>directions_walk</span>
                <span>5 min walk</span>
              </div>
              <span className="text-error font-bold text-xs uppercase tracking-widest">Heavy</span>
            </div>
            {/* Kinetic Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest">
              <div className="h-full bg-error w-10/12"></div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-xl shadow-[0_-4px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_40px_rgba(0,0,0,0.5)] rounded-t-[2rem] md:hidden">
        <Link href="/flow-map" className="flex flex-col items-center justify-center text-on-surface/40 px-4 py-2 hover:text-primary transition-all">
          <span className="material-symbols-outlined mb-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>map</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Flow Map</span>
        </Link>
        <Link href="/time-saver-list" className="flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-tertiary)] text-white rounded-xl px-4 py-2 hover:text-[var(--color-primary)] transition-all transform scale-110 duration-300 ease-out">
          <span className="material-symbols-outlined mb-1 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
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
