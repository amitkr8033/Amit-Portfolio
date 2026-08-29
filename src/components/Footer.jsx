
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Technical Skills', href: '#skills' },
    { name: 'Work Experience', href: '#experience' },
    { name: 'Selected Projects', href: '#projects' },
    { name: 'Get In Touch', href: '#contact' },
  ];

  const projectItems = [
    { name: 'Harsh Enterprises', href: 'https://harshdistributors.com/', tag: 'E-Commerce' },
    { name: 'FOT Engineers', href: 'https://ndsinfotechitsolution.com/nds/fabotechEngineers/', tag: 'Industrial' },
    { name: 'Career Buddy', href: 'https://ndsinfotechitsolution.com/nds/careerBuddy/', tag: 'EdTech' },
    { name: 'N.D.S Infotech', href: 'https://ndsinfotechitsolution.com/', tag: 'Agency' },
  ];

  return (
    <footer className="relative z-10 w-full pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main 4-Column Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/15">
        {/* Col 1: Brand & Philosophy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="self-start">
            <a
              href="#"
              className="box-animated-flow inline-flex items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 shadow-lg"
              aria-label="Home"
            >
              <img
                src="/logoimg.png"
                alt="Amit Portfolio Logo"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-white leading-relaxed max-w-sm font-sans font-normal">
            Full-Stack Developer with 2+ years of experience specializing in the MERN stack, modern responsive UI engineering, and scalable backend architectures.
          </p>

          <div className="pt-2 flex items-center gap-2.5">
            <span className="p-1 rounded-md bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="text-xs font-mono text-white/80 font-semibold">EMAIL:</span>
            <a
              href="mailto:amit.kumar439306@gmail.com"
              className="text-xs font-mono font-bold text-cyan-300 hover:text-white transition-colors"
            >
              amit.kumar439306@gmail.com
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">
            Navigation
          </div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs sm:text-sm text-white hover:text-cyan-300 hover:translate-x-1 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Col 3: Selected Works (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-300 font-bold mb-1">
            Featured Works
          </div>
          {projectItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-xs sm:text-sm text-white hover:text-purple-300 hover:translate-x-1 transition-all duration-200"
            >
              <span>{item.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white group-hover:text-white group-hover:bg-white/20">
                {item.tag} ↗
              </span>
            </a>
          ))}
        </div>

        {/* Col 4: Socials & Connect (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">
            Socials
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/amitkr8033"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-animated-flow flex items-center gap-2.5 p-2 rounded-xl bg-transparent border border-white/15 hover:bg-white/10 text-white font-mono text-xs font-semibold transition-all group/soc"
            >
              <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-white group-hover/soc:scale-110 group-hover/soc:bg-white/20 transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/amit-kumar-25b8b02a7"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-animated-flow flex items-center gap-2.5 p-2 rounded-xl bg-transparent border border-white/15 hover:bg-white/10 text-white font-mono text-xs font-semibold transition-all group/soc"
            >
              <div className="w-5 h-5 rounded-md bg-[#0077B5]/20 text-[#0077B5] flex items-center justify-center group-hover/soc:scale-110 group-hover/soc:bg-[#0077B5] group-hover/soc:text-white transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Tech Stack Watermark */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white">
        <div className="text-white font-medium">
          © {new Date().getFullYear()} Amit Kumar. All rights reserved.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-[11px] text-white font-semibold">
            React 19
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-[11px] text-white font-semibold">
            Tailwind CSS
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-[11px] text-white font-semibold">
            Vite
          </span>
        </div>

        <button
          onClick={scrollToTop}
          className="pill-animated-flow flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 border border-white/20 text-white font-mono text-xs font-bold hover:bg-white/15 hover:scale-105 active:scale-95 transition-all"
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <span className="text-cyan-400">↑</span>
        </button>
      </div>
    </footer>
  );
}
