"use client";

import { signIn } from "@/lib/auth-client";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SignInPage() {
  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation */}
      <header className="w-full fixed top-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center max-w-[1440px] mx-auto left-0 right-0">
        <a className="text-2xl font-bold tracking-tighter text-on-surface" href="/">ArenaFlow</a>
        <ThemeToggle />
      </header>

      <main className="flex-grow flex items-center justify-center p-6 mt-16 md:mt-0 relative overflow-hidden">
        {/* Abstract Decorative Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Main Authentication Card */}
        <div className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-[0px_20px_40px_rgba(0,88,189,0.04)] border border-outline-variant/15 p-8 relative z-10 flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-on-surface leading-tight">Welcome back</h1>
            <p className="text-on-surface-variant text-sm leading-relaxed">Sign in to your ArenaFlow account to continue.</p>
          </div>
          
          {/* Social Auth */}
          <button 
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/15 text-on-surface py-3 px-4 rounded-full transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-lowest cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.33H19.29C21.37 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"></path>
              <path d="M12 23C14.97 23 17.46 22.02 19.29 20.33L15.73 17.57C14.74 18.23 13.48 18.64 12 18.64C9.13 18.64 6.7 16.7 5.83 14.1H2.15V16.95C3.96 20.55 7.69 23 12 23Z" fill="#34A853"></path>
              <path d="M5.83 14.1C5.61 13.44 5.48 12.74 5.48 12C5.48 11.26 5.61 10.56 5.83 9.9V7.05H2.15C1.41 8.52 1 10.21 1 12C1 13.79 1.41 15.48 2.15 16.95L5.83 14.1Z" fill="#FBBC05"></path>
              <path d="M12 5.36C13.62 5.36 15.07 5.92 16.21 7.01L19.38 3.84C17.46 2.05 14.97 1 12 1C7.69 1 3.96 3.45 2.15 7.05L5.83 9.9C6.7 7.3 9.13 5.36 12 5.36Z" fill="#EA4335"></path>
            </svg>
            Sign in with Google
          </button>
          
          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-outline-variant/15 flex-grow"></div>
            <span className="text-xs text-on-surface-variant font-medium tracking-wide uppercase">or continue with email</span>
            <div className="h-px bg-outline-variant/15 flex-grow"></div>
          </div>
          
          {/* Better Auth Form */}
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-on-surface" htmlFor="email">Email Address</label>
              <input className="bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm placeholder:text-outline/50 w-full" id="email" placeholder="name@company.com" required type="email" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-on-surface" htmlFor="password">Password</label>
                <a className="text-xs text-primary hover:text-tertiary transition-colors font-medium" href="#">Forgot password?</a>
              </div>
              <input className="bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm placeholder:text-outline/50 w-full" id="password" placeholder="••••••••" required type="password" />
            </div>
            <button className="mt-2 w-full bg-gradient-to-r from-primary to-tertiary text-on-primary font-bold text-sm py-3 px-6 rounded-full hover:shadow-[0px_10px_20px_rgba(0,88,189,0.15)] transition-all duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-lowest cursor-pointer" type="button">
              Sign In
            </button>
          </form>
          
          {/* Footer Link */}
          <div className="text-center mt-2">
            <p className="text-sm text-on-surface-variant">
              Don't have an account? 
              <a className="text-primary hover:text-tertiary font-semibold transition-colors ml-1" href="#">Request access</a>
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-8 border-t border-outline-variant/15 bg-surface text-on-surface-variant mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-4">
          <p className="font-body text-sm leading-relaxed text-on-surface/50">
            © 2024 ArenaFlow. Precision Vapor.
          </p>
          <div className="flex items-center gap-6">
            <a className="font-body text-sm leading-relaxed text-on-surface/50 hover:text-tertiary transition-colors cursor-pointer" href="#">Terms of Service</a>
            <a className="font-body text-sm leading-relaxed text-on-surface/50 hover:text-tertiary transition-colors cursor-pointer" href="#">Privacy Policy</a>
            <a className="font-body text-sm leading-relaxed text-on-surface/50 hover:text-tertiary transition-colors cursor-pointer" href="#">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
