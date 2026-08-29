import { useState } from 'react';

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '916299648795';
  const defaultMessage = encodeURIComponent(
    'Hi Amit, I saw your portfolio and would like to discuss a project / job opportunity with you!'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center group">
      {/* Floating Animated WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with Amit on WhatsApp"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:shadow-[0_0_35px_rgba(16,185,129,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30"
      >
        {/* Ambient Pulsing Radar Rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none -z-10"></span>
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 opacity-40 blur-sm pointer-events-none -z-10"></span>

        {/* WhatsApp Vector Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 0C5.396 0 .029 5.367.029 12.002c0 2.117.553 4.185 1.604 6.007L0 24l6.168-1.618a11.96 11.96 0 0 0 5.863 1.523h.005c6.632 0 12-5.367 12-12.002 0-3.208-1.25-6.223-3.518-8.492A11.936 11.936 0 0 0 12.031 0zm0 21.908h-.004a9.934 9.934 0 0 1-5.063-1.39l-.363-.216-3.76 0.986 1.003-3.664-.236-.376A9.92 9.92 0 0 1 2.03 12.002C2.03 6.49 6.52 2 12.033 2c2.668 0 5.176 1.04 7.062 2.926a9.928 9.928 0 0 1 2.923 7.058c0 5.514-4.49 10.003-9.987 10.003v-.079zm5.474-7.464c-.3-.15-1.776-.876-2.052-.976-.275-.1-.476-.15-.676.15-.2.3-.776.976-.951 1.176-.176.2-.351.226-.651.076-.3-.15-1.267-.467-2.414-1.49-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.136-.135.301-.351.451-.527.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.526-.075-.15-.676-1.63-.927-2.23-.243-.586-.491-.506-.676-.515-.175-.01-.375-.01-.576-.01s-.526.075-.801.375c-.276.3-1.053 1.028-1.053 2.508 0 1.48 1.078 2.91 1.228 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.28.496 1.717.635.722.23 1.379.197 1.898.12.578-.087 1.777-.726 2.027-1.427.25-.701.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35z" />
        </svg>

        {/* Live Active Status Indicator Dot */}
        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-400 border-2 border-black"></span>
        </span>
      </a>

      {/* Futuristic Floating Hover Tooltip Pill */}
      <div
        className={`ml-3.5 transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 -translate-x-3 pointer-events-none'
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-animated-flow flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/90 backdrop-blur-md border border-emerald-400/50 shadow-2xl hover:scale-105 transition-transform"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              Chat on WhatsApp
              <span className="text-emerald-400 text-xs">💬</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-300 font-semibold">
              +91 62996 48795 • Online
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
