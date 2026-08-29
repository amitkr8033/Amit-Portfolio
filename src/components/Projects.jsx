import { useEffect, useRef, useState } from 'react';

// Import local project screenshots
import harshImg from '../assets/Projects/FireShot Capture 005 - Harsh Enterprises - Premium Products - [harshdistributors.com].png';
import fotImg from '../assets/Projects/FireShot Capture 010 - FOT Engineers - [ndsinfotechitsolution.com].png';
import careerImg from '../assets/Projects/ndsinfotechitsolution.com_nds_careerBuddy_(Samsung Galaxy S8+) (1).png';

const projects = [
  {
    id: '001',
    title: 'HARSH ENTERPRISES',
    tagline: 'PREMIUM PRODUCTS & DISTRIBUTION ARCHITECTURE',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    description:
      'A scalable enterprise e-commerce platform implementing real-time product cataloging, high-speed browsing, client inquiry workflows, and modern responsive UI architectures.',
    liveUrl: 'https://harshdistributors.com/',
    image: harshImg,
    cardAnimationClass: 'card-animated-cyan',
    badgeBorder: 'border-cyan-400/40 text-cyan-300 bg-cyan-950/30',
    accentText: 'text-cyan-400',
    accentGlow: 'hover:text-cyan-300',
    dotBg: 'bg-cyan-400',
    glowColor: 'rgba(6, 182, 212, 0.25)',
  },
  {
    id: '002',
    title: 'FOT ENGINEERS',
    tagline: 'INDUSTRIAL & PRECISION ENGINEERING PORTAL',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    description:
      'An industrial precision engineering digital architecture providing interactive service modules, showcase galleries, automated inquiry tracking, and high-speed data flow.',
    liveUrl: 'https://ndsinfotechitsolution.com/nds/fabotechEngineers/',
    image: fotImg,
    cardAnimationClass: 'card-animated-blue',
    badgeBorder: 'border-blue-400/40 text-blue-300 bg-blue-950/30',
    accentText: 'text-blue-400',
    accentGlow: 'hover:text-blue-300',
    dotBg: 'bg-blue-400',
    glowColor: 'rgba(59, 130, 246, 0.25)',
  },
  {
    id: '003',
    title: 'CAREER BUDDY',
    tagline: 'CAREER ACCELERATION & E-COMMERCE',
    tech: ['MERN Stack', 'Redux', 'Cloud Storage', 'Tailwind CSS'],
    description:
      'A modern career acceleration platform with cataloging, interactive student engagement, optimized checkout flows, and cloud-backed data structures.',
    liveUrl: 'https://ndsinfotechitsolution.com/nds/careerBuddy/',
    image: careerImg,
    cardAnimationClass: 'card-animated-purple',
    badgeBorder: 'border-purple-400/40 text-purple-300 bg-purple-950/30',
    accentText: 'text-purple-400',
    accentGlow: 'hover:text-purple-300',
    dotBg: 'bg-purple-400',
    glowColor: 'rgba(168, 85, 247, 0.25)',
  },
];

export default function Projects() {
  const cardRefs = useRef([]);
  const [cardTransforms, setCardTransforms] = useState(
    projects.map(() => ({ scale: 1, brightness: 1, translateY: 0 }))
  );

  useEffect(() => {
    let animationFrameId = null;

    const updateCardStacking = () => {
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 640;

      const newTransforms = projects.map((_, i) => {
        let totalScaleLoss = 0;
        let totalBrightnessLoss = 0;
        let totalTranslateY = 0;

        // Check the cards coming after card i
        for (let j = i + 1; j < projects.length; j++) {
          const nextCard = cardRefs.current[j];
          if (!nextCard) continue;

          const rect = nextCard.getBoundingClientRect();
          const targetTop = isMobile ? 70 + j * 16 : 100 + j * 24;
          const triggerStart = windowHeight * 0.85;
          const triggerEnd = targetTop;

          if (rect.top < triggerStart) {
            const progress = Math.min(
              Math.max((triggerStart - rect.top) / (triggerStart - triggerEnd), 0),
              1
            );
            // Dynamic scale reduction per covering card
            totalScaleLoss += (isMobile ? 0.03 : 0.05) * progress;
            // Progressive dimming to simulate real depth/shadowing
            totalBrightnessLoss += 0.22 * progress;
            // Slight upward tuck for true 3D physical stack feel
            totalTranslateY -= (isMobile ? 5 : 8) * progress;
          }
        }

        const scale = Math.max(isMobile ? 0.9 : 0.85, 1 - totalScaleLoss);
        const brightness = Math.max(0.5, 1 - totalBrightnessLoss);
        const translateY = totalTranslateY;

        return { scale, brightness, translateY };
      });

      setCardTransforms(newTransforms);
    };

    const handleScroll = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateCardStacking);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    updateCardStacking();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="projects" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300">
            Portfolio Showcase
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-3 drop-shadow-md">
          SELECTED PROJECTS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
        <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto font-mono">
          Scroll down to experience the fluid card stacking showcase
        </p>
      </div>

      {/* Robust Card Stack Deck Container */}
      <div className="relative w-full pb-20 sm:pb-32">
        {projects.map((project, index) => {
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
          const stickyTop = isMobile ? 70 + index * 16 : 100 + index * 24;
          const { scale, brightness, translateY } = cardTransforms[index] || { scale: 1, brightness: 1, translateY: 0 };

          return (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="sticky mb-32 sm:mb-48 last:mb-0"
              style={{
                top: `${stickyTop}px`,
                zIndex: index + 1,
              }}
            >
              {/* Inner Card: 100% Transparent Background (No blur) & Hardware-Accelerated 3D Transform */}
              <div
                style={{
                  transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                  filter: `brightness(${brightness})`,
                  transformOrigin: 'top center',
                  boxShadow: `0 -25px 50px rgba(0, 0, 0, 0.95), 0 0 35px ${project.glowColor}`,
                }}
                className={`${project.cardAnimationClass} rounded-3xl bg-transparent border border-white/20 p-5 sm:p-7 transition-transform duration-75 ease-out will-change-transform`}
              >
                {/* Header Row: Big Number, Title, Live Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/15">
                  <div className="flex items-center gap-3 sm:gap-5">
                    {/* Big Number */}
                    <span className="text-2xl sm:text-4xl font-black font-mono text-white tracking-tighter drop-shadow-lg shrink-0">
                      {project.id}
                    </span>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight uppercase">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${project.dotBg}`}></span>
                        <span className="text-[11px] sm:text-xs font-mono font-medium text-white/90">
                          {project.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Premium Button with Rotating Border Beam Animation */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live application for ${project.title}`}
                    className="premium-btn-beam group/btn hover:scale-105 active:scale-95 transition-transform shrink-0 self-start sm:self-auto"
                  >
                    <div className="premium-btn-inner">
                      <span className="text-white font-mono tracking-wider font-bold text-[11px] sm:text-xs">
                        LIVE PROJECT
                      </span>
                      <svg
                        className="w-3 h-3 text-white transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                </div>

                {/* Body Row: Smaller Compact Mockup Left (5 cols) + Description & Tech Badges Right (7 cols) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7 items-center pt-5">
                  {/* Left: Compact Hover-To-Scroll Mockup Window */}
                  <div className="md:col-span-5">
                    <div className="mockup-scroll-container relative h-36 sm:h-44 md:h-48 rounded-2xl overflow-hidden border border-white/20 bg-black/90 shadow-2xl group/preview cursor-pointer">
                      {/* Browser Mockup Top Bar */}
                      <div className="absolute top-0 left-0 right-0 z-20 h-6 bg-black/95 border-b border-white/15 px-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/90"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500/90"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500/90"></span>
                        <span className="text-[10px] font-mono text-white/80 ml-2 truncate max-w-[160px] sm:max-w-[200px]">
                          {project.liveUrl}
                        </span>
                      </div>

                      {/* Image Container with Reliable CSS Hover-Scrolling */}
                      <div className="w-full pt-6 h-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} Preview Screenshot`}
                          className="mockup-scroll-img"
                          loading="lazy"
                        />
                      </div>

                      {/* Hover Hint Tag */}
                      <div className="absolute bottom-2 right-2 z-20 px-2 py-0.5 rounded-full bg-black/90 border border-white/20 text-[9px] font-mono text-white group-hover/preview:opacity-0 transition-opacity pointer-events-none">
                        Hover to Scroll ↕
                      </div>
                    </div>
                  </div>

                  {/* Right: Description Text, Tech Badges, & Link (7 cols) */}
                  <div className="md:col-span-7 flex flex-col justify-center gap-4">
                    <p className="text-xs sm:text-sm text-white leading-relaxed font-sans font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips with Flowing Animated Borders */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="badge-animated-flow px-2.5 py-1 rounded-xl bg-transparent border border-white/15 text-[11px] sm:text-xs font-mono text-white font-medium hover:scale-105 transition-transform"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Explore Link */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white ${project.accentGlow} transition-colors group/link mt-1`}
                    >
                      <span>Explore Live Application</span>
                      <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
