import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4 transition-all duration-300">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Main Navbar Pill */}
        <nav
          className={`pill-animated-flow w-full flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-black/70 backdrop-blur-md shadow-2xl shadow-black/80'
              : 'bg-black/50 backdrop-blur-sm'
          } border border-white/20`}
        >
          {/* Left: Brand Logo Image */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-center hover:scale-110 transition-transform overflow-visible"
              aria-label="Home"
            >
              <img
                src="/logoimg.png"
                alt="Amit Portfolio Logo"
                className="h-11 sm:h-13 md:h-14 w-auto object-contain scale-110 sm:scale-125 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]"
              />
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-transparent border border-white/15 px-3 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-xs font-medium text-white hover:text-cyan-300 hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Social Links Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {/* GitHub Icon */}
            <a
              href="https://github.com/amitkr8033"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group relative p-2 text-white hover:text-white rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/20 hover:border-white/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/amit-kumar-25b8b02a7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group relative p-2 text-white hover:text-white rounded-full bg-white/[0.08] hover:bg-[#0077B5]/80 border border-white/20 hover:border-[#0077B5] hover:shadow-[0_0_18px_rgba(0,119,181,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-cyan-300 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 focus:outline-none transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Smooth Seamless Mobile Dropdown Drawer */}
        <div
          className={`w-full md:hidden transition-all duration-300 ease-in-out transform origin-top ${
            mobileMenuOpen
              ? 'opacity-100 scale-y-100 max-h-96 mt-2.5 pointer-events-auto'
              : 'opacity-0 scale-y-95 max-h-0 mt-0 pointer-events-none overflow-hidden'
          }`}
        >
          <div className="box-animated-flow w-full rounded-2xl bg-black/85 backdrop-blur-xl border border-white/20 p-4 shadow-2xl flex flex-col gap-2">
            <div className="flex items-center justify-between px-2 pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
                Navigation Menu
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            <div className="flex flex-col gap-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-white hover:text-cyan-300 hover:bg-white/10 rounded-xl transition-all"
                >
                  <span>{link.name}</span>
                  <span className="text-white/40 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2.5 border-t border-white/10 flex items-center justify-between px-2">
              <span className="text-[10px] font-mono text-white/70">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/amitkr8033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/50 rounded-lg flex items-center justify-center transition-all"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-kumar-25b8b02a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white hover:text-white bg-white/10 hover:bg-[#0077B5]/80 border border-white/20 hover:border-[#0077B5] rounded-lg flex items-center justify-center transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="mailto:amit.kumar439306@gmail.com"
                  className="p-1.5 text-white hover:text-cyan-300 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Email Amit"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
