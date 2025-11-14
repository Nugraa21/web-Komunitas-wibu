import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import AnimatedBackground from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
// import Portofolio from "./Pages/Portofolio.jsx"
import ContactPage from "./Pages/Contact.jsx";
import WelcomeScreen from "./Pages/WelcomeScreen.jsx";
import { AnimatePresence } from 'framer-motion';
import NotFound from "./NotFound.jsx";

// Di bagian atas untuk memasukan berberapa import librari / componentes
// Dan pada bagian bawah di di mana kita akan langsung memprogram structure nya satu persatu


const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <div className="relative w-full min-h-screen overflow-x-hidden">
          <Navbar />
          <AnimatedBackground />
          <main className="flex flex-col">
            {/* Memasukan Componentes*/}
            <Home />
            <About />
            {/* <Portofolio /> */}
            <ContactPage />
          </main>

          {/* Footer */}
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
        </div>
      )}
    </>
  );
};

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHoverEvents = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, label, [role="button"]');

      const handleMouseEnter = () => setHovered(true);
      const handleMouseLeave = () => setHovered(false);

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    window.addEventListener("mousemove", moveCursor);
    const cleanupHover = addHoverEvents();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cleanupHover();
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? 'custom-cursor-hover' : ''} hidden sm:block`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />}
          />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;