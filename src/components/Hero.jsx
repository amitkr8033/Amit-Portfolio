import { useState, useEffect } from 'react';

const roles = [
  'Fullstack Developer',
  'MERN Stack Specialist',
  'Frontend Architect',
  'Backend Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause at full word
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 50);
      } else {
        // Small pause before typing next role
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="about" className="relative z-10 min-h-screen flex items-center justify-start px-4 sm:px-8 md:px-14 lg:px-20 max-w-7xl mx-auto pointer-events-none">
      <div className="w-full max-w-2xl pt-24 sm:pt-28 pb-12 pointer-events-auto">
        {/* Animated Greeting Badge */}
        <div className="pill-animated-flow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 mb-5 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-[11px] sm:text-xs font-mono font-bold text-white tracking-wider uppercase">
            Welcome to my portfolio
          </span>
        </div>

        {/* Main Headings */}
        <h2 className="text-lg sm:text-2xl font-medium text-white tracking-wide mb-1 font-sans">
          Hi, I am
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-lg">
          <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            Amit Kumar
          </span>
        </h1>

        {/* Animated Typing Subtitle */}
        <div className="flex flex-wrap items-center gap-2 text-lg sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 tracking-tight">
          <span className="text-white">I am a</span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="inline-block w-0.5 h-5 sm:h-7 bg-cyan-400 animate-pulse ml-0.5"></span>
        </div>

        {/* Description Paragraph with Flowing Gradient Border Box */}
        <div className="box-animated-flow bg-transparent p-4 sm:p-5 rounded-2xl border border-white/15 mb-6 sm:mb-8">
          <p className="text-xs sm:text-base md:text-lg text-white leading-relaxed font-sans font-normal">
            I am a passionate Full-Stack Developer with a BCA degree and over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and modern technologies to create seamless user experiences and efficient solutions.
          </p>
        </div>

        {/* Action Buttons with Rotating Border Beams */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <a
            href="#projects"
            className="premium-btn-beam group/btn hover:scale-105 active:scale-95 transition-transform"
          >
            <div className="premium-btn-inner justify-center">
              <span className="text-white font-mono tracking-wider font-bold text-xs sm:text-sm">
                VIEW PROJECTS
              </span>
              <svg className="w-3.5 h-3.5 text-white transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          <a
            href="#skills"
            className="pill-animated-flow inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-black/70 border border-white/20 text-white font-mono text-xs sm:text-sm font-bold hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
          >
            <span>EXPLORE SKILLS</span>
            <span>↓</span>
          </a>
        </div>

        {/* Quick Tech Badges with Flowing Animated Borders */}
        <div className="flex flex-wrap gap-2 pt-1">
          {['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JavaScript'].map(
            (tech) => (
              <span
                key={tech}
                className="badge-animated-flow px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono rounded-xl bg-transparent border border-white/15 text-white font-medium hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
