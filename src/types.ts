export interface Word {
  id: number;
  word: string;
  image: string;
  audio: string;
}

export interface GameState {
  score: number;
  currentLevel: number;
  selectedWord: Word | null;
  words: Word[];
  isCorrect: boolean | null;
}