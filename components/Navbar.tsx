"use client";

import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y > lastY.current && y > 50) setHidden(true); // scrolling down
      else setHidden(false); // scrolling up
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToId = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[800px] transition-transform duration-300 ${hidden ? '-translate-y-28 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
      <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg rounded-full px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 font-black text-2xl text-pink-500 italic">✨ Okta</div>
        <div className="hidden md:flex gap-8 font-bold text-gray-600">
          <a href="#about" onClick={scrollToId('about')} className="hover:text-pink-500 transition-colors duration-500 ease-in-out relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-pink-200 after:transition-all after:duration-500 hover:after:w-full">About</a>
          <a href="#works" onClick={scrollToId('works')} className="hover:text-pink-500 transition-all">Works</a>
          <button onClick={scrollToId('contact')} className="bg-white border-2 border-pink-500 text-pink-500 px-6 py-1 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all">Say Hi!</button>
        </div>
      </div>
    </nav>
  );
}
