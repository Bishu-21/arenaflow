import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* EXACT LIGHT MODE */}
      <div className="block dark:hidden bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container antialiased overflow-x-hidden min-h-screen flex flex-col">
        <nav className="fixed top-0 w-full z-50 bg-[#f9f9ff]/80 backdrop-blur-xl border-b border-[#c2c6d5]/15 shadow-[0px_20px_40px_rgba(0,88,189,0.04)] font-headline tracking-tight text-sm font-semibold">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
            <div className="text-xl font-bold tracking-tighter text-[#191b22] cursor-pointer hover:bg-[#f2f3fd] rounded-lg transition-all active:scale-95 duration-200 px-2 py-1">
                ArenaFlow
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a className="text-[#0058bd] border-b-2 border-[#0058bd] pb-1 hover:bg-[#f2f3fd] rounded-lg transition-all active:scale-95 duration-200 px-3 py-2 mt-1" href="#">Platform</a>
              <a className="text-[#191b22]/70 hover:text-[#0058bd] transition-colors hover:bg-[#f2f3fd] rounded-lg active:scale-95 duration-200 px-3 py-2" href="#">Solutions</a>
              <a className="text-[#191b22]/70 hover:text-[#0058bd] transition-colors hover:bg-[#f2f3fd] rounded-lg active:scale-95 duration-200 px-3 py-2" href="#">Developers</a>
              <a className="text-[#191b22]/70 hover:text-[#0058bd] transition-colors hover:bg-[#f2f3fd] rounded-lg active:scale-95 duration-200 px-3 py-2" href="#">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/sign-in" className="hidden md:block hover:bg-[#f2f3fd] rounded-lg transition-all active:scale-95 duration-200 px-4 py-2 text-[#191b22]/70 hover:text-[#0058bd]">Sign In</Link>
              <button className="bg-gradient-to-r from-primary to-tertiary text-on-primary rounded-full px-6 py-2 hover:shadow-[0px_20px_40px_rgba(0,88,189,0.15)] transition-all active:scale-95 duration-200 font-bold">
                  Get Started
              </button>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-24 flex-grow">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-6 mb-32 relative">
            <div className="absolute top-0 right-0 -z-10 w-3/4 h-[600px] bg-gradient-to-bl from-primary-container/10 to-transparent rounded-full blur-3xl opacity-60"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-8 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest border border-outline-variant/15 text-sm font-semibold text-on-surface-variant shadow-sm">
                  <span className="material-symbols-outlined text-primary text-base">auto_awesome</span>
                  Build with AI Precision
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1] -ml-1">
                  Stadium Flow, <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Redefined.</span>
                </h1>
                <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                  Architecting the future of crowd dynamics. A precision engine designed to optimize movement, increase safety, and elevate the attendee experience through high-contrast, real-time spatial analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-gradient-to-r from-primary to-tertiary text-on-primary rounded-full px-8 py-4 text-lg font-bold hover:shadow-[0px_20px_40px_rgba(0,88,189,0.2)] transition-all active:scale-95 duration-200 flex justify-center items-center gap-2">
                    Deploy ArenaFlow
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                  <button className="bg-surface-container-lowest border border-outline-variant/15 text-on-surface rounded-full px-8 py-4 text-lg font-bold hover:bg-surface-container-high transition-all active:scale-95 duration-200 flex justify-center items-center gap-2">
                    <span className="material-symbols-outlined text-xl">play_circle</span>
                    View Architecture
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative z-10">
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-[0px_30px_60px_rgba(0,88,189,0.08)] bg-surface-container-lowest border border-outline-variant/15 p-4 flex flex-col">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-outline-variant/40"></div>
                    <div className="w-3 h-3 rounded-full bg-outline-variant/40"></div>
                    <div className="w-3 h-3 rounded-full bg-outline-variant/40"></div>
                  </div>
                  <div className="flex-1 rounded-xl overflow-hidden bg-surface relative group">
                    <img alt="Aerial view of a massive modern stadium architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4PyP7EKD0oQ4lP9ZapyA4sHqOTbm_lDrCn1K4WPZdmz-QadZ6UT6Rn2OfQAQ5Q_7R6XG3RnPoltjHp-8ehg_NyAShKhqhXDSkk46X0GF1_ynNEAxcOf-_LeI3tj1grhJcKgbIj72epZl5mc8HSFnlHwoGwlD0rUA6dyxzATy-1PfkQkiH0nG55bysEmMIIIbW0xK-0zycvSTyLt3YypWAfMSv5OcGzAXw26JeckKwcOt3cVSOKki_USaPQvKlVsyU38fs0DmIu3Zl"/>
                    <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/15 p-4 rounded-xl shadow-lg flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Flow Rate</p>
                        <p className="font-headline font-bold text-xl text-on-surface">Optimal</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                        <span className="material-symbols-outlined">trending_up</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid Feature Section */}
          <section className="max-w-7xl mx-auto px-6 mb-32">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-surface tracking-tight mb-6">Surgical Precision. <br/>Ethereal Scale.</h2>
              <p className="text-on-surface-variant text-lg">We stripped away the noise. What remains is a high-contrast utility designed for immediate spatial comprehension.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
              <div className="md:col-span-2 bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,88,189,0.04)] transition-all duration-300 relative overflow-hidden group">
                <div className="relative z-10 max-w-md">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center shadow-sm mb-6">
                    <span className="material-symbols-outlined text-primary text-2xl">radar</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Spatial Telemetry</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">Real-time vapor maps visualize crowd density across multiple architectural tiers, eliminating bottlenecks before they occur.</p>
                  <a className="inline-flex items-center text-primary font-bold hover:text-tertiary transition-colors" href="#">
                      Explore Metrics <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </a>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-primary-container),_transparent,_transparent)]"></div>
              </div>

              <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,88,189,0.04)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center shadow-sm mb-6">
                    <span className="material-symbols-outlined text-tertiary text-2xl">security</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Threat Isolation</h3>
                  <p className="text-on-surface-variant leading-relaxed">Automated perimeter shifting based on kinetic anomaly detection.</p>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,88,189,0.04)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center shadow-sm mb-6">
                    <span className="material-symbols-outlined text-primary text-2xl">tune</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Fluid Routing</h3>
                  <p className="text-on-surface-variant leading-relaxed">Dynamic signage control powered by predictive modeling.</p>
                </div>
              </div>

              <div className="md:col-span-2 bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/10 relative h-[300px]">
                <img alt="Abstract visualization of data flowing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMvaROVUsjEPGVpGeNVI7q_EcrM06X6942xrdOVhMHXOClaZ76tEHS4E3WdrZPHelg_sIZSePSQfJBbeqYPExqrLLUuuzKzmh18zHAzf2bYtbKg60YY9OmP4qwmhYH59wnKg2VfKaCnO-vXeKpIAkU83-8FOTBsStl801bs80nThRi8x4Sj5iXtN59FtMbPwLxPFM7bKPlGuB-5bhVJ6rVwEFnq-_sDhXcHbuaT--KD33wekIKUF_GkqkgdVr92pg5-CSok-nHYU1P"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-white mb-2">The Dashboard Experience</h3>
                    <p className="text-white/80 max-w-lg">A meticulous study in high-contrast utility. Data presented exactly when needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full py-16 bg-[#f2f3fd] border-t border-[#c2c6d5]/15 font-body text-sm leading-relaxed text-[#0058bd]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
            <div className="flex flex-col gap-4">
              <div className="text-lg font-bold tracking-tighter text-[#191b22]">ArenaFlow</div>
              <p className="text-[#191b22]/60">© 2024 ArenaFlow. All rights reserved. Precision Vapor Architecture.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a className="font-bold text-[#0058bd] hover:underline transition-all duration-300" href="#">Platform</a>
              <a className="text-[#191b22]/60 hover:text-[#0058bd] hover:underline transition-all duration-300" href="#">Solutions</a>
              <a className="text-[#191b22]/60 hover:text-[#0058bd] hover:underline transition-all duration-300" href="#">Developers</a>
            </div>
            <div className="flex flex-col gap-3">
              <a className="text-[#191b22]/60 hover:text-[#0058bd] hover:underline transition-all duration-300" href="#">Pricing</a>
              <a className="text-[#191b22]/60 hover:text-[#0058bd] hover:underline transition-all duration-300" href="#">Privacy</a>
              <a className="text-[#191b22]/60 hover:text-[#0058bd] hover:underline transition-all duration-300" href="#">Terms</a>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="font-bold text-[#191b22]">Ready to deploy?</span>
              <button className="bg-surface-container-lowest border border-outline-variant/30 text-[#0058bd] rounded-lg px-6 py-2 font-semibold hover:bg-[#0058bd] hover:text-white transition-all duration-300 shadow-sm">
                  Contact Architecture Team
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* EXACT DARK MODE */}
      <div className="hidden dark:flex font-body antialiased min-h-screen flex-col bg-background text-on-background">
        <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b-0 shadow-none">
          <div className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter text-[#e5e2e1] font-headline">
                ArenaFlow
            </div>
            <div className="hidden md:flex space-x-8">
              <a className="font-headline tracking-tight text-sm font-medium text-[#4285F4] border-b-2 border-[#4285F4] pb-1 hover:text-[#4285F4] transition-colors duration-300" href="#">Platform</a>
              <a className="font-headline tracking-tight text-sm font-medium text-[#e5e2e1]/70 hover:text-[#4285F4] transition-colors duration-300" href="#">Solutions</a>
              <a className="font-headline tracking-tight text-sm font-medium text-[#e5e2e1]/70 hover:text-[#4285F4] transition-colors duration-300" href="#">Developers</a>
              <a className="font-headline tracking-tight text-sm font-medium text-[#e5e2e1]/70 hover:text-[#4285F4] transition-colors duration-300" href="#">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/sign-in" className="hidden md:block font-headline tracking-tight text-sm font-medium text-[#e5e2e1]/70 hover:text-[#4285F4] transition-colors duration-300 scale-95 active:scale-90">Sign In</Link>
              <button className="bg-[var(--bg-gradient-kinetic)] text-surface font-headline font-semibold text-sm px-5 py-2 rounded-lg scale-95 active:scale-90 transition-transform hover:scale-100 shadow-[0_0_20px_rgba(173,198,255,0.3)]">Get Started</button>
            </div>
          </div>
        </nav>

        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="relative min-h-[870px] flex items-center justify-center overflow-hidden px-6 lg:px-8 bg-surface">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ff80ab]/10 rounded-full blur-[150px]"></div>
            </div>
            
            <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col items-start space-y-8">
                <div className="inline-flex items-center space-x-2 bg-surface-container-high rounded-full px-4 py-1.5 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span>
                  <span className="text-xs font-medium tracking-wide text-on-surface">Build with AI</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight leading-[1.1] text-on-surface">
                  Stadium Flow,<br/>
                  <span className="text-gradient">Redefined</span>
                </h1>
                <p className="text-lg text-on-surface-variant max-w-xl font-body leading-relaxed">
                  Orchestrate massive crowd movements with industrial precision. ArenaFlow uses predictive models to eliminate bottlenecks before they form, ensuring seamless human fluidity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="bg-[var(--bg-gradient-kinetic)] text-surface font-headline font-bold text-base px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(173,198,255,0.2)]">
                      Deploy Infrastructure
                  </button>
                  <button className="bg-surface-container-high text-primary font-headline font-semibold text-base px-8 py-4 rounded-xl hover:bg-surface-container-highest transition-colors">
                      View Documentation
                  </button>
                </div>
              </div>

              <div className="relative hidden lg:block h-[600px] w-full bg-surface-container-low rounded-[2rem] p-6 border border-outline-variant/15 overflow-hidden">
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--color-outline-variant) 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="self-end bg-surface/80 backdrop-blur-[20px] p-6 rounded-xl border border-outline-variant/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] max-w-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-on-surface-variant">Gate C Activity</span>
                      <div className="relative w-6 h-6 flex items-center justify-center">
                        <div className="pulsar-ring absolute w-full h-full rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full z-10 shadow-[0_0_12px_var(--color-secondary)]"></div>
                      </div>
                    </div>
                    <div className="text-3xl font-headline font-bold text-on-surface">4,209 <span className="text-sm font-normal text-secondary">+12%</span></div>
                    <div className="h-12 mt-4 flex items-end space-x-2">
                      <div className="w-1/6 bg-surface-container-highest h-1/3 rounded-sm"></div>
                      <div className="w-1/6 bg-surface-container-highest h-2/3 rounded-sm"></div>
                      <div className="w-1/6 bg-primary/40 h-full rounded-sm"></div>
                      <div className="w-1/6 bg-surface-container-highest h-1/2 rounded-sm"></div>
                      <div className="w-1/6 bg-surface-container-highest h-3/4 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="mt-8 relative h-64 bg-surface-container-highest rounded-xl border border-outline-variant/15 overflow-hidden">
                    <img alt="Abstract rendering of crowd flow dynamics" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnobygLaeo_REj7HkbTVe4QcvJz-aGA1t9iPMu-A1h6uWercZJZeDroBKQiipa4ax7MkHwCBOu51nOn8mJJq7SElExxUJT3SnXLXHNJhN5r5U7_N0xpC4JGS9qY1ftywW-Ui5SioqcHvGNtehdlSumzcv4SCA_yRGXzCHEow4E_FZ1VviTBx8KAGVPUOfXr9PNzO2KCaPZnIRb_8k16uIUlhm0V99fy7NOTz2F2A0-kmi5cprGGC_g8oT3jkCMArM_jcG_hCTxaGo-"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-xs font-bold tracking-widest text-primary uppercase">Live Node 01</div>
                      <div className="text-sm text-on-surface-variant">Real-time telemetry active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition Section (Bento Grid) */}
          <section className="py-24 px-6 lg:px-8 bg-surface-container-lowest">
            <div className="max-w-[1440px] mx-auto">
              <div className="mb-16 max-w-2xl">
                <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Engineered for Scale</h2>
                <p className="text-on-surface-variant text-lg">Move beyond static layouts. Our predictive engine adapts to human behavior in real-time, optimizing flow and ensuring safety.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                <div className="md:col-span-2 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/15 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <span className="material-symbols-outlined text-4xl text-primary mb-4 block">hub</span>
                      <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Dynamic Routing</h3>
                      <p className="text-on-surface-variant max-w-md">Instantly reroute traffic based on density sensors. The system learns and predicts the most efficient paths.</p>
                    </div>
                    <div className="w-full h-24 bg-surface-container-highest rounded-xl border border-outline-variant/10 overflow-hidden relative">
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20"></div>
                      <div className="absolute top-1/4 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/15 relative">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <span className="material-symbols-outlined text-4xl text-[#ff80ab] mb-4 block">speed</span>
                      <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Zero Latency</h3>
                      <p className="text-on-surface-variant text-sm">Edge computing ensures sub-millisecond response times for critical systems.</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-headline font-black text-on-surface">99.9%</span>
                      <span className="block text-xs text-on-surface-variant mt-1">Uptime SLA</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/15 relative">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">security</span>
                      <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Secure Core</h3>
                      <p className="text-on-surface-variant text-sm">Enterprise-grade encryption and isolated operational nodes.</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 bg-surface-container-high rounded-2xl p-8 border border-outline-variant/15 relative overflow-hidden">
                  <img alt="Server room infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCmP3LAVh7ej5Bu3HIjeH3va3vESx-7GxYfQ6967LEi6RPIoHrBsNCYvEoyrwlt1rQ5ugKn7S27VGNcTeJs1MispfCG9LTTjwbwRibnSkHWdBkrNQJw4wQjftRpaBrPdbvzOBGwMscs4vu80ftM8jenMChMbjpaT-A0PkfbFIdNeTcV5y0Vcz48URxLXelz9DEJRORYmumYEIKWCKV0BlnuO11ualQy3TaWF_mYlGS50h-ao10cR5Ytsh75Tu39xdT8TzlqzAjxFXK"/>
                  <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-surface-container-high/90 to-transparent"></div>
                  <div className="relative z-10 flex flex-col h-full justify-center w-2/3">
                    <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">Integrate Everywhere</h3>
                    <p className="text-on-surface-variant mb-6">Connect to existing hardware via our comprehensive REST API. No proprietary lock-in.</p>
                    <button className="self-start text-primary font-medium hover:text-white transition-colors flex items-center space-x-2">
                      <span>Read Docs</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full py-12 px-8 bg-[#131313] border-t border-[#424753]/15 shadow-none mt-auto">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-lg font-black text-[#e5e2e1] font-headline">
                ArenaFlow
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="font-['Inter'] text-xs text-[#e5e2e1]/50 hover:text-[#adc6ff] transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
              <a className="font-['Inter'] text-xs text-[#e5e2e1]/50 hover:text-[#adc6ff] transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
              <a className="font-['Inter'] text-xs text-[#e5e2e1]/50 hover:text-[#adc6ff] transition-colors opacity-80 hover:opacity-100" href="#">Security</a>
              <a className="font-['Inter'] text-xs text-[#e5e2e1]/50 hover:text-[#adc6ff] transition-colors opacity-80 hover:opacity-100" href="#">Status</a>
            </div>
            <div className="font-['Inter'] text-xs text-[#e5e2e1]/50">
                © 2024 ArenaFlow Kinetic Systems. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
