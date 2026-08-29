
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Node JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C-Sharp', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Compass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', invert: true },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  },
];

const categoryThemes = {
  Frontend: 'card-animated-cyan',
  Backend: 'card-animated-purple',
  Languages: 'card-animated-blue',
  Tools: 'card-animated-emerald',
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="pill-animated-flow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-white/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold">
            Technical Stack
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-3 drop-shadow-md">
          CORE SKILLS & EXPERTISE
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
        <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          A collection of my technical skills and expertise honed through scalable web engineering & enterprise architectures
        </p>
      </div>

      {/* 2x2 Grid Categories with Dynamic Glowing Animated Gradient Borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => {
          const animationClass = categoryThemes[category.title] || 'card-animated-cyan';

          return (
            <div
              key={category.title}
              className={`${animationClass} rounded-3xl border border-white/20 bg-transparent p-6 sm:p-8 hover:scale-[1.01] transition-all duration-300 group`}
            >
              {/* Category Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 tracking-wide uppercase">
                {category.title}
              </h3>

              {/* Skill Badges with Animated Flowing Borders */}
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="badge-animated-flow flex items-center gap-2.5 px-4 py-2 rounded-xl bg-transparent border border-white/15 hover:scale-105 hover:bg-white/10 transition-all duration-200 cursor-default group/badge"
                  >
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className={`w-5 h-5 object-contain transition-transform duration-200 group-hover/badge:scale-110 ${
                        skill.invert ? 'filter invert' : ''
                      }`}
                      loading="lazy"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
