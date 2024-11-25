import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface FeedbackProps {
  isCorrect: boolean | null;
}

export function Feedback({ isCorrect }: FeedbackProps) {
  return (
    <AnimatePresence>
      {isCorrect !== null && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            ${isCorrect ? 'bg-green-500' : 'bg-red-500'}
            rounded-full p-8 shadow-2xl`}
        >
          {isCorrect ? (
            <Check className="w-16 h-16 text-white" />
          ) : (
            <X className="w-16 h-16 text-white" />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}