import { motion } from 'framer-motion';
import type { Word } from '../types';

interface WordCardProps {
  word: Word;
  onClick: () => void;
}

export function WordCard({ word, onClick }: WordCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        cursor-pointer rounded-xl overflow-hidden shadow-lg
        transition-all duration-300 ease-in-out
      `}
      onClick={onClick}
    >
      <div className="relative aspect-square">
        <img
          src={word.image}
          alt={word.word}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-center text-gray-800">
          {word.word}
        </h3>
      </div>
    </motion.div>
  );
}