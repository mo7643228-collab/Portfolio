"use client";
import { motion } from 'framer-motion';

type Props = {
  title: string;
  desc?: string;
  icon?: React.ReactNode;
  color?: string;
  borderColor?: string;
};

export default function ProjectCard({ title, desc, icon, color = 'bg-white', borderColor = 'border-transparent' }: Props) {
  return (
    <motion.div whileHover={{ y: -12 }} className={`${color} p-8 rounded-[40px] border-b-[12px] ${borderColor} shadow-xl flex flex-col items-center text-center group cursor-pointer`}>
      <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:rotate-12 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className="font-bold text-gray-400">{desc}</p>
    </motion.div>
  );
}
