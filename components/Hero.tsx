"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative container mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* calm floating background blobs for a "sepi" (quiet) mood */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-10 w-72 h-72 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-[#FDE8F2] to-[#EFFCF6]"
        initial={{ opacity: 0 }}
        animate={{ x: [0, 18, 0], y: [0, -12, 0], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-6 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-[#E8F7FF] to-[#FFF0F6]"
        initial={{ opacity: 0 }}
        animate={{ x: [0, -22, 0], y: [0, 10, 0], opacity: [0.12, 0.26, 0.12] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* framed profile (top-right) */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block absolute right-16 top-18 lg:top-24 z-40"
        whileHover={{ scale: 1.04 }}
        aria-hidden
      >
        <div className="w-48 h-48 rounded-full bg-white/70 p-1 drop-shadow-2xl ring-6 ring-pink-100/70 border border-white/40">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <motion.img
              src="/profile.jpg"
              alt="Okta profile"
              className="object-cover w-full h-full"
              onError={(e: any) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80'; }}
              initial={{ scale: 0.98 }}
              animate={{ scale: [0.98, 1.03, 0.98] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-pink-50 opacity-30 mix-blend-screen" />
          </div>
        </div>
      </motion.div>

      <div className="flex-1 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="text-6xl font-black leading-tight"
        >
          Hi, I'm <span className="text-pink-500">Okta</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-6 flex justify-center md:justify-start">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-3xl text-gray-600 text-base md:text-lg leading-relaxed space-y-3 shadow-lg border border-white/30">
            <p>Hai! Aku Okta, seorang pengembang yang percaya kalau baris kode itu sama kayak resep kue—harus takaran yang pas biar hasilnya manis! ✨</p>
            <p>Kalau nggak lagi di depan layar, kamu bakal nemuin aku lagi sibuk di dapur buat baking cemilan lucu atau sekadar healing dengerin musik favorit. Sebagai seorang pet lover, aku juga ditemenin anabul kesayangan pas lagi ngoding.</p>
            <p className="font-semibold">Moto hidupku: Bake the world a better place, one line of code at a time! 🧁🎶</p>
          </div>
        </motion.div>
      </div>

      {/* (decorative emoji removed as requested) */}
    </section>
  );
}
