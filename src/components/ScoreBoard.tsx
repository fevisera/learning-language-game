import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScoreBoardProps {
  score: number;
  level: number;
}

export function ScoreBoard({ score, level }: ScoreBoardProps) {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4"
    >
      <div className="flex items-center space-x-2">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <span className="text-lg font-bold">{score}</span>
      </div>
      <div className="border-l border-gray-200 pl-4">
        <span className="text-sm text-gray-600">Nivel</span>
        <p className="text-lg font-bold">{level}</p>
      </div>
    </motion.div>
  );
}