import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' }); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const myEmail = 'amit.kumar439306@gmail.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${myEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject}`,
          subject: formData.subject,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true') {
        setStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent directly to my email inbox. I will get back to you shortly.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          state: 'error',
          message: 'Could not send message. Please contact me directly at ' + myEmail,
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        state: 'error',
        message: 'Network issue. Please email me directly at ' + myEmail,
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="pill-animated-flow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-white/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold">
            Get In Touch
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-3 drop-shadow-md">
          LET'S BUILD SOMETHING GREAT
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
        <p className="text-white text-sm sm:text-base max-w-xl mx-auto font-sans font-normal">
          Have an idea, project inquiry, or looking to hire a Full-Stack Developer? Feel free to reach out anytime!
        </p>
      </div>

      {/* Main 2-Column Contact Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact & Availability (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Availability Status Card */}
          <div className="card-animated-cyan rounded-3xl bg-transparent border border-white/20 p-6 sm:p-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Ready for Freelance & Full-Time Roles
            </h3>
            <p className="text-xs sm:text-sm text-white leading-relaxed">
              I am open to discussing frontend & backend architectures, web applications, and collaborative developer roles.
            </p>
          </div>

          {/* Direct Email Card with One-Click Copy */}
          <div className="box-animated-flow rounded-2xl bg-transparent border border-white/15 p-5 flex items-center justify-between gap-3">
            <a
              href={`mailto:${myEmail}`}
              className="flex items-center gap-3.5 truncate group"
              title="Click to compose email"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] shrink-0 group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] group-hover:bg-cyan-500/30 transition-all duration-300">
                <svg className="w-5 h-5 text-cyan-300 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="truncate">
                <div className="text-[10px] font-mono text-white uppercase font-semibold">Direct Email</div>
                <div className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-cyan-300 truncate transition-colors">
                  {myEmail}
                </div>
              </div>
            </a>

            <button
              onClick={handleCopyEmail}
              className="badge-animated-flow px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-[11px] font-bold shrink-0 transition-transform active:scale-95"
            >
              {copiedEmail ? 'COPIED! ✓' : 'COPY'}
            </button>
          </div>

          {/* Social Profiles Grid */}
          <div className="box-animated-flow rounded-2xl bg-transparent border border-white/15 p-5">
            <div className="text-xs font-mono text-white uppercase font-bold mb-3.5">
              CONNECT ON SOCIAL PLATFORMS
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/amitkr8033"
                target="_blank"
                rel="noopener noreferrer"
                className="badge-animated-flow flex items-center gap-2.5 p-2.5 rounded-xl bg-transparent border border-white/15 hover:bg-white/10 transition-all text-white font-mono text-xs font-semibold group/soc"
              >
                <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover/soc:scale-110 group-hover/soc:bg-white/20 group-hover/soc:border-white/50 transition-all">
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
                className="badge-animated-flow flex items-center gap-2.5 p-2.5 rounded-xl bg-transparent border border-white/15 hover:bg-white/10 transition-all text-white font-mono text-xs font-semibold group/soc"
              >
                <div className="w-6 h-6 rounded-lg bg-[#0077B5]/20 border border-[#0077B5]/40 flex items-center justify-center text-[#0077B5] group-hover/soc:scale-110 group-hover/soc:bg-[#0077B5] group-hover/soc:text-white transition-all">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Direct Inbox Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="card-animated-purple rounded-3xl bg-transparent border border-white/20 p-6 sm:p-9 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-white mb-6">
              Fill out the form below. Messages are delivered straight to my email inbox.
            </p>

            {status.state === 'success' ? (
              <div className="box-animated-flow p-6 rounded-2xl bg-black/80 border border-emerald-400/50 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-2xl flex items-center justify-center mx-auto mb-3">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Message Sent Successfully!</h4>
                <p className="text-xs text-white font-mono mb-4">
                  {status.message}
                </p>
                <button
                  onClick={() => setStatus({ state: 'idle', message: '' })}
                  className="badge-animated-flow px-4 py-2 rounded-xl bg-white/10 text-white font-mono text-xs font-bold hover:bg-white/20"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {status.state === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-400/50 text-red-300 text-xs font-mono">
                    ⚠️ {status.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-white uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/20 focus:border-cyan-400 focus:bg-white/[0.08] focus:outline-none text-white text-sm font-sans placeholder-white/70 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-white uppercase mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/20 focus:border-cyan-400 focus:bg-white/[0.08] focus:outline-none text-white text-sm font-sans placeholder-white/70 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-bold text-white uppercase mb-1.5">
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/20 focus:border-purple-400 focus:bg-white/[0.08] focus:outline-none text-white text-sm font-sans placeholder-white/70 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono font-bold text-white uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project goals, requirements, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/20 focus:border-purple-400 focus:bg-white/[0.08] focus:outline-none text-white text-sm font-sans placeholder-white/70 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.state === 'submitting'}
                  className="premium-btn-beam group/btn hover:scale-[1.02] active:scale-98 disabled:opacity-70 transition-transform mt-2 self-start"
                >
                  <div className="premium-btn-inner px-8 py-3.5">
                    <span className="text-white font-mono tracking-wider font-bold text-xs sm:text-sm">
                      {status.state === 'submitting' ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                    </span>
                    {status.state === 'submitting' ? (
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <svg
                        className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
