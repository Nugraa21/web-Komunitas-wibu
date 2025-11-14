import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* ✨ SAME SOFT GRADIENT AS LOADING */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-teal-50 to-emerald-100" />

      {/* ✨ SAME GRID AS LOADING */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.20]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,150,200,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,150,200,0.13) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* ✨ SAME AURORA BUBBLES (FLOATING) */}
      <div className="
        absolute top-10 left-10
        w-[550px] h-[550px]
        rounded-full bg-cyan-300
        blur-3xl opacity-30
        animate-float
      " />

      <div className="
        absolute bottom-10 right-12
        w-[450px] h-[450px]
        rounded-full bg-emerald-200
        blur-3xl opacity-25
        animate-float-slow
      " />

      <div className="
        absolute top-1/2 left-1/3 -translate-x-1/2
        w-[350px] h-[350px]
        rounded-full bg-teal-100
        blur-2xl opacity-30
      " />

      {/* ✨ EXTRA small bubble (biar lebih menyatu) */}
      <div className="
        absolute top-[20%] right-[28%]
        w-[260px] h-[260px]
        rounded-full bg-cyan-200
        blur-[120px] opacity-20
        animate-float-tiny
      " />

      {/* ✨ SAME FLOAT ANIMATION */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(20px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-55px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-tiny {
          0% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 9s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 13s ease-in-out infinite; }
        .animate-float-tiny { animation: float-tiny 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
