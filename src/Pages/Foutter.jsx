import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full mt-24 py-14 relative text-slate-600 select-none">

      {/* Garis Top Premium */}
      {/* <div className="w-full h-[1.6px] bg-gradient-to-r from-cyan-400/60 via-teal-300/40 to-cyan-400/60"></div> */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto text-center px-6 mt-10">
        <h3 className="text-lg sm:text-xl font-semibold tracking-wide text-slate-700">
          © {new Date().getFullYear()} <span className="text-slate-800">Komunitas WIBU utdi</span>
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          Creative Developer • UI/UX Enthusiast • React & Tailwind Specialist
        </p>

        <p className="text-xs text-slate-400 mt-6 italic">
          Made with ❤️ & clean code by Ludang
        </p>
      </div>

      {/* Marquee Jepang Keren */}
      <div className="w-full mt-14 relative overflow-hidden border-t border-white/10 pt-4">
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none z-10"></div>

        <div className="animate-marquee whitespace-nowrap text-sm tracking-wide text-slate-500 opacity-70 px-14">
          ✦ 未来のデザイン • 創造的なビジョン • ReactJS • TailwindCSS • 高品質アニメーション • UI/UXデザイン ✦ 未来のデザイン • 創造的なビジョン • ReactJS • TailwindCSS • 高品質アニメーション ✦
        </div>
      </div>

      {/* CSS Animasi */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
