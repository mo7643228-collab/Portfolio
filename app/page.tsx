"use client";

import { motion } from 'framer-motion'
import { Heart, Cloud, Rocket, Coffee, Send, Mail } from 'lucide-react'
import confetti from 'canvas-confetti'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#F0FDF4] to-[#F5F3FF] text-[#4A4A4A] overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <section id="about">
          <Hero />
        </section>

        <section id="works" className="bg-white rounded-[60px] md:rounded-[100px] py-24 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black text-center mb-16 italic">What I've Made</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ProjectCard title="RF-Nexus Bot" desc="Your friendly Discord assistant" icon={<Cloud size={40} className="text-soft-pink" />} color="bg-[#FFF0F3]" borderColor="border-soft-pink" />
              <ProjectCard title="Project Starlight" desc="Automation and IoT Control" icon={<Rocket size={40} className="text-cyan-400" />} color="bg-[#E0F7FA]" borderColor="border-cyan-200" />
              <ProjectCard title="Resep Nusantara" desc="Explore Indonesian tastes" icon={<Coffee size={40} className="text-purple-400" />} color="bg-[#F3E5F5]" borderColor="border-purple-200" />
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 flex flex-col items-center">
          <div className="bg-gradient-to-r from-soft-mint via-white to-pastel-pink p-12 rounded-[50px] shadow-2xl text-center max-w-4xl w-full border-4 border-white relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Let's Make Something <span className="text-soft-pink">Magical!</span></h2>
            <p className="text-xl font-medium text-gray-500 mb-10">Punya ide seru atau mau tanya-tanya soal web dev? Chat me ya! ✨</p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#FF69B4', '#FFB6C1', '#E0F7FA', '#F3E5F5'] })} className="bg-soft-pink text-white px-10 py-5 rounded-full font-black text-xl shadow-xl shadow-soft-pink/30 flex items-center gap-3 transition-all">
                <Send size={24} /> Kirim Pesan Ceria
              </motion.button>

              <motion.a href="mailto:okta.siburian@gmail.com" whileHover={{ scale: 1.1 }} className="bg-white border-4 border-pastel-pink text-soft-pink px-10 py-5 rounded-full font-black text-xl flex items-center gap-3"> 
                <Mail size={24} /> oktasiburian@gmail.com
              </motion.a>
            </div>
          </div>
        </section>

        <footer className="pb-10 text-center text-gray-400 font-bold">
          <p className="flex items-center justify-center gap-2">Made with <Heart fill="#FF69B4" size={18} /> by okta</p>
          <p className="text-xs mt-2 uppercase tracking-widest opacity-50">NPM: 240210103</p>
        </footer>
      </main>
    </div>
  )
}
