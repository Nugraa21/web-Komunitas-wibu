import React, { memo } from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (  
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6 relative overflow-hidden"
    >
      {/* Background dekoratif teks Jepang */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        className="absolute inset-0 flex justify-center items-center pointer-events-none select-none"
      >
        <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-extrabold text-white/10 animate-pulse tracking-widest">
          アニメ愛好家
        </h1>
      </motion.div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0B3C49]">
            Komunitas Wibu UTDI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00A9FF] to-[#00E6A8]">
              Anime & Tech Society
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#1B4D57] max-w-xl">
            Tempat berkumpulnya mahasiswa UTDI pecinta anime, teknologi, dan dunia kreatif.  
            Nobar, diskusi, cosplay, gaming, hingga project coding bareng.
          </p>

          {/* Tombol */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="relative px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00A9FF] to-[#00E6A8] overflow-hidden"
            >
              Join Komunitas
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              className="relative px-6 py-3 rounded-xl font-semibold border border-[#00C4A3] bg-white/30 backdrop-blur-xl text-[#0B3C49] overflow-hidden"
            >
              Lihat Kegiatan
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[280px] sm:w-[340px] md:w-[380px] overflow-hidden"
          >
            {/* Image Anime, tanpa background, menempel langsung */}
            <img
              src="favicon.ico"
              alt="Chibi Tech Anime"
              className="relative z-10 w-full h-full object-cover"
            />

            {/* Sticker Jepang di atas */}
            <span className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full rotate-[-10deg] z-20">
              先輩
            </span>

            {/* Text Jepang floating, transparan ringan */}


            <motion.span
              animate={{ y: [0, 3, 0], x: [0, -2, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-4 text-xs font-bold text-[#00E6A8]/50 z-20 whitespace-nowrap"
            >
              アニメ & 技術
            </motion.span>

            <motion.span
              animate={{ y: [0, 2, 0], x: [0, -2, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 left-4 text-xs font-bold text-[#00E6A8]/50 z-20 whitespace-nowrap"
            >
              Wibu & コーディング
            </motion.span>

            <motion.span
              animate={{ y: [0, -2, 0], x: [0, 2, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-bold text-[#00E6A8]/50 z-20 whitespace-nowrap"
            >
              UTDI Anime Club
            </motion.span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default memo(Home);