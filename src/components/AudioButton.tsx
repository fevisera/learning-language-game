import { Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface AudioButtonProps {
  audioUrl: string;
}

export function AudioButton({ audioUrl }: AudioButtonProps) {
  const playAudio = () => {
    const audio = new Audio(audioUrl);
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={playAudio}
      className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3
        shadow-lg transition-colors duration-200"
    >
      <Volume2 className="w-6 h-6" />
    </motion.button>
  );
}