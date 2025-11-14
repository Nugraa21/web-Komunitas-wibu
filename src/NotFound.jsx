import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const NotFound = () => {

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="NotFound"
      className="
        min-h-screen 
        flex flex-col items-center justify-center 
        px-6 sm:px-10 md:px-20
        pt-24 pb-16
        relative text-teal-700
      "
    >
      {/* GRID */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,150,200,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,150,200,0.15) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* AURORA CIRCLES */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-200 blur-3xl opacity-30 top-20 left-10 rounded-full -z-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-emerald-200 blur-3xl opacity-30 bottom-20 right-10 rounded-full -z-10"></div>

      {/* Icon Error */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <AlertTriangle className="w-24 h-24 text-teal-500 drop-shadow-lg" />

        <h1 className="text-6xl md:text-7xl font-extrabold text-teal-600 tracking-wide">
          404
        </h1>

        <p className="text-lg md:text-xl text-teal-700/80 max-w-lg text-center leading-relaxed">
          Waduh… halaman yang kamu cari tidak ditemukan.  
          Sepertinya kamu nyasar ke dunia lain 😭
        </p>

        {/* Button Back Home */}
        <Link
          to="/"
          className="
            mt-8 px-6 py-3 rounded-full 
            bg-white/60 backdrop-blur-lg border border-teal-300 
            flex items-center gap-2 text-teal-700 font-medium
            shadow-md hover:shadow-lg hover:scale-105 transition-all
          "
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Home
        </Link>
      </motion.div>
    </section>
  );
};

export default memo(NotFound);
