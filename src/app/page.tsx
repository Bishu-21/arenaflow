import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { RazorpayButton } from "@/components/razorpay-button";

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container antialiased overflow-x-hidden min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/15 shadow-[0px_20px_40px_rgba(0,88,189,0.04)] dark:shadow-none font-headline tracking-tight text-sm font-semibold">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <div className="text-xl font-bold tracking-tighter text-on-surface cursor-pointer hover:bg-surface-container-low rounded-lg transition-all active:scale-95 duration-200 px-2 py-1">
              ArenaFlow
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-primary border-b-2 border-primary pb-1 hover:bg-surface-container-low rounded-lg transition-all active:scale-95 duration-200 px-3 py-2 mt-1" href="#">Platform</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors hover:bg-surface-container-low rounded-lg active:scale-95 duration-200 px-3 py-2" href="#">Solutions</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors hover:bg-surface-container-low rounded-lg active:scale-95 duration-200 px-3 py-2" href="#">Developers</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors hover:bg-surface-container-low rounded-lg active:scale-95 duration-200 px-3 py-2" href="#pricing">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/sign-in" className="hidden md:block hover:bg-surface-container-low rounded-lg transition-all active:scale-95 duration-200 px-4 py-2 text-on-surface/70 hover:text-primary">Sign In</Link>
            <button className="bg-gradient-to-r from-primary to-tertiary text-on-primary rounded-full px-6 py-2 shadow-sm hover:shadow-[0px_20px_40px_var(--color-primary)] transition-all active:scale-95 duration-200 font-bold">
                Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32 relative">
          <div className="absolute top-0 right-0 -z-10 w-3/4 h-[600px] bg-gradient-to-bl from-primary-container/20 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-sm font-semibold text-on-surface-variant shadow-sm backdrop-blur-sm">
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
                <Link href="/flow-map" className="bg-gradient-to-r from-primary to-tertiary text-on-primary rounded-full px-8 py-4 text-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-95 duration-200 flex justify-center items-center gap-2">
                  Deploy ArenaFlow
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
                <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-full px-8 py-4 text-lg font-bold hover:bg-surface-container-high transition-all active:scale-95 duration-200 flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined text-xl">play_circle</span>
                  View Architecture
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative z-10">
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-xl dark:shadow-none bg-surface-container-lowest border border-outline-variant/20 p-4 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-outline-variant/40"></div>
                  <div className="w-3 h-3 rounded-full bg-outline-variant/40"></div>
                  <div className="w-3 h-3 rounded-full bg-outline-variant/40"></div>
                </div>
                <div className="flex-1 rounded-xl overflow-hidden bg-surface relative group">
                  <img alt="Aerial view of a massive modern stadium architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-75 dark:mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4PyP7EKD0oQ4lP9ZapyA4sHqOTbm_lDrCn1K4WPZdmz-QadZ6UT6Rn2OfQAQ5Q_7R6XG3RnPoltjHp-8ehg_NyAShKhqhXDSkk46X0GF1_ynNEAxcOf-_LeI3tj1grhJcKgbIj72epZl5mc8HSFnlHwoGwlD0rUA6dyxzATy-1PfkQkiH0nG55bysEmMIIIbW0xK-0zycvSTyLt3YypWAfMSv5OcGzAXw26JeckKwcOt3cVSOKki_USaPQvKlVsyU38fs0DmIu3Zl"/>
                  <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 p-4 rounded-xl shadow-lg flex items-center justify-between">
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
            <div className="md:col-span-2 bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 hover:border-primary/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 relative overflow-hidden group">
              <div className="relative z-10 max-w-md">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center shadow-sm border border-outline-variant/10 mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">radar</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Spatial Telemetry</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">Real-time vapor maps visualize crowd density across multiple architectural tiers, eliminating bottlenecks before they occur.</p>
                <Link href="/flow-map" className="inline-flex items-center text-primary font-bold hover:text-tertiary transition-colors">
                    Explore Metrics <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-primary-container),_transparent,_transparent)]"></div>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 hover:border-tertiary/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center shadow-sm border border-outline-variant/10 mb-6">
                  <span className="material-symbols-outlined text-tertiary text-2xl">security</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Threat Isolation</h3>
                <p className="text-on-surface-variant leading-relaxed">Automated perimeter shifting based on kinetic anomaly detection.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-tertiary-container),_transparent,_transparent)]"></div>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 hover:border-secondary/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
               <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center shadow-sm border border-outline-variant/10 mb-6">
                  <span className="material-symbols-outlined text-secondary text-2xl">tune</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Fluid Routing</h3>
                <p className="text-on-surface-variant leading-relaxed">Dynamic signage control powered by predictive modeling.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-secondary-container),_transparent,_transparent)]"></div>
            </div>

            <div className="md:col-span-2 bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/20 relative h-[300px]">
              <img alt="Abstract visualization of data flowing" className="w-full h-full object-cover opacity-90 dark:opacity-50 dark:mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMvaROVUsjEPGVpGeNVI7q_EcrM06X6942xrdOVhMHXOClaZ76tEHS4E3WdrZPHelg_sIZSePSQfJBbeqYPExqrLLUuuzKzmh18zHAzf2bYtbKg60YY9OmP4qwmhYH59wnKg2VfKaCnO-vXeKpIAkU83-8FOTBsStl801bs80nThRi8x4Sj5iXtN59FtMbPwLxPFM7bKPlGuB-5bhVJ6rVwEFnq-_sDhXcHbuaT--KD33wekIKUF_GkqkgdVr92pg5-CSok-nHYU1P"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-white mb-2">The Dashboard Experience</h3>
                  <p className="text-white/80 max-w-lg">A meticulous study in high-contrast utility. Data presented exactly when needed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section mapped from Razorpay */}
        <section id="pricing" className="max-w-7xl mx-auto px-6 mb-32 pt-16">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-sm font-semibold text-on-surface-variant shadow-sm mb-6">
              <span className="material-symbols-outlined text-primary text-base">payments</span>
              Enterprise Ready
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-surface tracking-tight mb-6">Transparent Scaling.</h2>
            <p className="text-on-surface-variant text-lg">Predictable pricing architecture for massive deployments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm flex flex-col">
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Standard Access</h3>
                <p className="text-on-surface-variant mb-6">For mid-tier arenas and regional events.</p>
                <div className="text-4xl font-extrabold text-on-surface mb-6 font-headline">$499<span className="text-lg font-normal text-on-surface-variant">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Up to 15,000 active tracking nodes</li>
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> 1-minute telemetry refresh</li>
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Standard threat resolution</li>
                </ul>
                <RazorpayButton amount={499} className="w-full bg-surface-container-high text-on-surface font-bold py-3 rounded-xl border border-outline-variant/30 hover:bg-surface-container-highest transition-colors">Start Trial</RazorpayButton>
             </div>
             
             <div className="bg-gradient-to-b from-surface-container-lowest to-primary-container/5 rounded-3xl p-8 border-2 border-primary relative shadow-lg flex flex-col">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Recommended</div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Omniscient Scale</h3>
                <p className="text-on-surface-variant mb-6">Unlimited throughput for global infrastructure.</p>
                <div className="text-4xl font-extrabold text-on-surface mb-6 font-headline">$2,499<span className="text-lg font-normal text-on-surface-variant">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Infinite tracking nodes</li>
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Sub-millisecond continuous telemetry</li>
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-tertiary text-xl text-animate-gradient">auto_awesome</span> Gemini AI predictive modeling</li>
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Automated perimeter shifting</li>
                </ul>
                <RazorpayButton amount={2499} className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">Deploy Infrastructure</RazorpayButton>
             </div>
          </div>
        </section>

      </main>

      <footer className="w-full py-16 bg-surface-container-low border-t border-outline-variant/20 font-body text-sm leading-relaxed text-on-surface-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-4">
            <div className="text-lg font-bold tracking-tighter text-on-surface font-headline">ArenaFlow</div>
            <p className="text-on-surface-variant/80">© 2024 ArenaFlow. All rights reserved. Precision Vapor Architecture.</p>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-bold text-primary hover:underline transition-all duration-300" href="#">Platform</a>
            <a className="hover:text-primary hover:underline transition-all duration-300" href="#">Solutions</a>
            <a className="hover:text-primary hover:underline transition-all duration-300" href="#">Developers</a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="hover:text-primary hover:underline transition-all duration-300" href="#pricing">Pricing</a>
            <a className="hover:text-primary hover:underline transition-all duration-300" href="#">Privacy</a>
            <a className="hover:text-primary hover:underline transition-all duration-300" href="#">Terms</a>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="font-bold text-on-surface">Ready to deploy?</span>
            <button className="bg-surface-container-lowest border border-outline-variant/30 text-primary rounded-lg px-6 py-2 font-semibold hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm">
                Contact Architecture Team
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
