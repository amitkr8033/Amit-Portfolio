
const stats = [
  {
    number: '2+ Years',
    label: 'Professional Experience',
    detail: 'Full-Stack & MERN Engineering',
    theme: 'card-animated-cyan',
  },
  {
    number: '15+ Projects',
    label: 'Enterprise & Client Apps',
    detail: 'Built, Optimized & Deployed',
    theme: 'card-animated-purple',
  },
  {
    number: '99% Quality',
    label: 'Client Satisfaction',
    detail: 'High Speed & Modern UI/UX',
    theme: 'card-animated-blue',
  },
];

const achievements = [
  {
    title: 'Enterprise Architecture & MERN Development',
    description:
      'Engineered and delivered scalable full-stack web platforms and client portals using React, Node.js, Express, and MongoDB, handling end-to-end frontend and backend architecture.',
  },
  {
    title: 'High-Speed Responsive UI & Design Systems',
    description:
      'Architected pixel-perfect, mobile-first interfaces with Tailwind CSS and modern React paradigms, improving user retention and optimizing page load speeds.',
  },
  {
    title: 'RESTful APIs & Database Optimization',
    description:
      'Designed high-throughput REST APIs and structured MongoDB/MySQL database models for real-time inquiry management, product catalogs, and secure authentication.',
  },
  {
    title: 'Flagship Client Applications',
    description:
      'Spearheaded development for standout agency projects including Harsh Enterprises (Distribution E-Commerce), FOT Engineers (Industrial Portal), and Career Buddy (Learning Platform).',
  },
];

const technologies = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript (ES6+)',
  'Tailwind CSS',
  'REST APIs',
  'Git & GitHub',
  'Redux',
  'Postman',
  'Vercel Deployment',
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-20">
        <div className="pill-animated-flow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 mb-3.5 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white font-bold">
            Career Journey
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-2 sm:mb-3 drop-shadow-md">
          WORK EXPERIENCE
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full mb-3 sm:mb-4" />
        <p className="text-white text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-sans font-normal px-2">
          Proven track record of delivering end-to-end full-stack software solutions and high-impact digital architectures
        </p>
      </div>

      {/* Top Metric Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.theme} rounded-2xl bg-transparent border border-white/20 p-5 sm:p-6 text-center hover:scale-[1.02] transition-transform`}
          >
            <div className="text-2xl sm:text-4xl font-black font-mono text-white tracking-tight drop-shadow-md mb-1">
              {stat.number}
            </div>
            <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1">
              {stat.label}
            </div>
            <div className="text-[11px] sm:text-xs font-mono text-white font-medium">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Main Experience Card */}
      <div className="card-animated-cyan rounded-3xl bg-transparent border border-white/20 p-4 sm:p-7 md:p-10 shadow-2xl">
        {/* Company Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/15">
          <div className="flex items-start gap-3.5 sm:gap-5">
            {/* Company Avatar Badge */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-black text-lg sm:text-2xl shadow-xl shrink-0 border border-white/30">
              NDS
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                FULL-TIME ROLE
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Full-Stack Developer (MERN Stack)
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs sm:text-sm text-white font-mono">
                <span className="font-bold text-white">
                  N.D.S Infotech IT Solution
                </span>
                <span className="text-cyan-400">•</span>
                <span className="text-white">Digital Marketing & IT Solutions Agency</span>
              </div>
            </div>
          </div>

          {/* Action / Duration Badges */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            <div className="pill-animated-flow px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-mono font-bold text-white">
              🗓️ 2024 – PRESENT (2+ YEARS)
            </div>

            <a
              href="https://ndsinfotechitsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn-beam group/btn hover:scale-105 active:scale-95 transition-transform"
            >
              <div className="premium-btn-inner">
                <span className="text-white font-mono tracking-wider font-bold text-[11px] sm:text-xs">
                  COMPANY WEBSITE
                </span>
                <svg
                  className="w-3.5 h-3.5 text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Responsibilities & Achievements Grid */}
        <div className="py-8 border-b border-white/15">
          <h4 className="text-sm font-mono uppercase tracking-widest text-cyan-300 font-bold mb-6 flex items-center gap-2">
            <span>⚡</span> KEY CONTRIBUTIONS & IMPACT
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="box-animated-flow rounded-2xl bg-transparent border border-white/15 p-4 sm:p-5 hover:bg-white/[0.03] transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 text-xs font-mono font-bold shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-bold text-white mb-1.5">
                      {item.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-white leading-relaxed font-sans font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="pt-7">
          <div className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3.5">
            TECHNOLOGIES & TOOLS UTILIZED AT NDS INFOTECH:
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="badge-animated-flow px-3 py-1.5 text-xs font-mono rounded-xl bg-transparent border border-white/15 text-white font-medium hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
