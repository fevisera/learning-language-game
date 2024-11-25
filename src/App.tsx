import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WordCard } from './components/WordCard';
import { Feedback } from './components/Feedback';
import { AudioButton } from './components/AudioButton';
import { words } from './data/words';
import type { Word, GameState } from './types';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    currentLevel: 1,
    selectedWord: null,
    words: [],
    isCorrect: null,
  });

  const shuffleWords = () => {
    return [...words].sort(() => Math.random() - 0.5).slice(0, 4);
  };

  const selectRandomWord = (words?: Word[]) => {
    const randomWord = (words || gameState.words)[Math.floor(Math.random() * (words?.length || gameState.words.length))];
    setGameState(prev => ({
      ...prev,
      selectedWord: randomWord,
      isCorrect: null,
    }));
  };

  useEffect(() => {
    setGameState(prev => {
      const newWords = shuffleWords();
      selectRandomWord(newWords);
      return {
      ...prev,
      words: newWords,
      selectedWord: newWords[Math.floor(Math.random() * newWords.length)],
      isCorrect: null,
      };
    });
  }, [gameState.currentLevel]);

  const handleWordSelect = (word: Word) => {
    const isCorrect = word.id === gameState.selectedWord?.id;
    
    setGameState(prev => ({
      ...prev,
      isCorrect,
      score: isCorrect ? prev.score + 10 : prev.score,
    }));

    if (isCorrect) {
      setTimeout(() => {
        setGameState(prev => ({
          ...prev,
          currentLevel: prev.currentLevel + 1,
          isCorrect: null,
        }));
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          
          {gameState.selectedWord && (
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-2xl font-semibold text-gray-700">
                ¿Dónde está "{gameState.selectedWord.word}"?
              </h2>
              <AudioButton audioUrl={gameState.selectedWord.audio} />
            </div>
          ) }
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {gameState.words.map((word, index) => (
            <motion.div
              key={word.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <WordCard
                word={word}
                onClick={() => gameState.selectedWord && handleWordSelect(word)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Feedback isCorrect={gameState.isCorrect} />
    </div>
  );
}

export default App;