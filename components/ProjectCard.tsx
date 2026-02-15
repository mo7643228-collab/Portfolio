"use client";
import { motion } from 'framer-motion';

type Props = {
  title: string;
  desc?: string;
  icon?: React.ReactNode;
  logoSrc?: string;
  // If provided, plays a short tone or a sequence when the card is clicked
  musicTone?: {
    // single tone
    frequency?: number;
    duration?: number; // ms for single tone
    // sequence of frequencies (Hz) to play in order
    sequence?: number[];
    noteDuration?: number; // ms per note when using sequence
    type?: OscillatorType;
  };
  color?: string;
  borderColor?: string;
};

export default function ProjectCard({ title, desc, icon, logoSrc, musicTone, color = 'bg-white', borderColor = 'border-transparent' }: Props) {
  const handlePlayTone = () => {
    if (!musicTone || typeof window === 'undefined') return;
    try {
      const AudioCtx = (window.AudioContext || (window as any).webkitAudioContext);
      const ctx = new AudioCtx();

      const playSingle = (freq: number, dur: number, type: OscillatorType = 'sine', when = 0) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, ctx.currentTime + when);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + when + 0.01);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + when);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + when + dur);
        setTimeout(() => { try { osc.stop(); } catch (e) {} }, (when + dur) * 1000 + 50);
      };

      if (musicTone.sequence && musicTone.sequence.length > 0) {
        const noteDur = (musicTone.noteDuration ?? 200) / 1000;
        musicTone.sequence.forEach((f, i) => {
          playSingle(f, noteDur, musicTone.type || 'sine', i * noteDur);
        });
        // close context after sequence ends
        setTimeout(() => { try { ctx.close(); } catch (e) {} }, (musicTone.sequence.length * (musicTone.noteDuration ?? 200)) + 200);
      } else if (musicTone.frequency) {
        const dur = (musicTone.duration ?? 600) / 1000;
        playSingle(musicTone.frequency, dur, musicTone.type || 'sine', 0);
        setTimeout(() => { try { ctx.close(); } catch (e) {} }, (musicTone.duration ?? 600) + 100);
      } else {
        // nothing to play
        try { ctx.close(); } catch (e) {}
      }
    } catch (e) {
      // silently ignore audio errors
    }
  };

  return (
    <motion.div onClick={handlePlayTone} whileHover={{ y: -12 }} className={`${color} p-8 rounded-[40px] border-b-[12px] ${borderColor} shadow-xl flex flex-col items-center text-center group cursor-pointer`}>
      <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:rotate-12 transition-transform overflow-hidden">
        {logoSrc ? (
          <img src={logoSrc} alt={`${title} logo`} className="w-16 h-16 object-contain" />
        ) : (
          icon
        )}
      </div>
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className="font-bold text-gray-400">{desc}</p>
    </motion.div>
  );
}
