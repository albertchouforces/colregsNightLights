import { useState, useEffect, useMemo } from 'react';
import { FlashCard } from './components/FlashCard';
import { ScoreDisplay } from './components/ScoreDisplay';
import { StartScreen } from './components/StartScreen';
import { UserNameInput } from './components/UserNameInput';
import { Footer } from './components/Footer';
import { QuizHeader } from './components/QuizHeader';
import { templateQuestions, QUIZ_CONFIG } from './data/templateQuiz';
import { shuffleArray, getRandomOptions } from './lib/utils';
import type { QuizStats, QuestionData, HighScoreEntry } from './types';

type GameState = 'start' | 'playing' | 'entering-name';

const INITIAL_QUIZ_STATS: QuizStats = {
  highScore: 0,
  bestRun: null,
  highScores: []
};

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [randomizedQuestions, setRandomizedQuestions] = useState<QuestionData[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [lastPauseTime, setLastPauseTime] = useState<number | null>(null);
  const [accumulatedTime, setAccumulatedTime] = useState(0);

  // Get all unique possible answers for the quiz
  const allPossibleAnswers = useMemo(() => 
    Array.from(new Set(templateQuestions.map(q => q.correctAnswer))),
    []
  );

  // Load initial stats from localStorage
  useEffect(() => {
    const statsKey = `quiz_stats_${QUIZ_CONFIG.quiz_name}`;
    const storedStats = localStorage.getItem(statsKey);
    if (!storedStats) {
      localStorage.setItem(statsKey, JSON.stringify(INITIAL_QUIZ_STATS));
    }
  }, []);

  // Timer effect with pause functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (gameState === 'playing' && startTime && !isPaused) {
      intervalId = setInterval(() => {
        const elapsed = Date.now() - startTime - accumulatedTime;
        setCurrentTime(elapsed);
      }, 10);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [gameState, startTime, isPaused, accumulatedTime]);

  const getCurrentStats = (): QuizStats => {
    const statsKey = `quiz_stats_${QUIZ_CONFIG.quiz_name}`;
    const storedStats = localStorage.getItem(statsKey);
    if (storedStats) {
      return JSON.parse(storedStats);
    }
    return INITIAL_QUIZ_STATS;
  };

  const pauseTimer = () => {
    if (!isPaused) {
      setIsPaused(true);
      setLastPauseTime(Date.now());
    }
  };

  const resumeTimer = () => {
    if (isPaused && lastPauseTime) {
      const pauseDuration = Date.now() - lastPauseTime;
      setAccumulatedTime(prev => prev + pauseDuration);
      setIsPaused(false);
      setLastPauseTime(null);
    }
  };

  const updateStats = (userName: string) => {
    const statsKey = `quiz_stats_${QUIZ_CONFIG.quiz_name}`;
    const currentStats = getCurrentStats();
    const accuracy = Math.round((correctAnswers / totalAnswers) * 100);

    const newHighScore = Math.max(currentStats.highScore, correctAnswers);

    const shouldUpdateBestRun = !currentStats.bestRun || 
      (correctAnswers >= currentStats.bestRun.score && currentTime < currentStats.bestRun.time);

    const newBestRun = shouldUpdateBestRun ? {
      userName,
      time: currentTime,
      score: correctAnswers,
      accuracy
    } : currentStats.bestRun;

    const newScore: HighScoreEntry = {
      userName,
      score: correctAnswers,
      accuracy,
      time: currentTime,
      date: new Date().toISOString()
    };

    const newHighScores = [...currentStats.highScores, newScore]
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.time - b.time;
      })
      .slice(0, 5);

    const newStats = {
      highScore: newHighScore,
      bestRun: newBestRun,
      highScores: newHighScores
    };

    try {
      localStorage.setItem(statsKey, JSON.stringify(newStats));
      console.log('Successfully saved local stats:', newStats);
    } catch (error) {
      console.error('Error saving stats to localStorage:', error);
    }
  };

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalAnswers(0);
    setCurrentTime(0);
    setStartTime(Date.now());
    setIsPaused(false);
    setLastPauseTime(null);
    setAccumulatedTime(0);
    
    // Randomize questions order
    setRandomizedQuestions(shuffleArray(templateQuestions));
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) setCorrectAnswers(prev => prev + 1);
    setTotalAnswers(prev => prev + 1);
    pauseTimer();
  };

  const handleNext = () => {
    resumeTimer();
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('entering-name');
    }
  };

  const handleRestart = () => {
    setGameState('start');
  };

  const handleUserNameSubmit = (userName: string) => {
    console.log('Handling username submit:', userName);
    try {
      updateStats(userName);
      setGameState('start');
    } catch (error) {
      console.error('Error in handleUserNameSubmit:', error);
    }
  };

  const getCurrentQuestion = () => {
    return randomizedQuestions[currentQuestionIndex];
  };

  // Generate random options for the current question
  const options = useMemo(() => {
    if (!randomizedQuestions.length) return [];
    
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return [];
    
    return getRandomOptions(allPossibleAnswers, currentQuestion.correctAnswer, 4);
  }, [currentQuestionIndex, randomizedQuestions, allPossibleAnswers]);

  const handleResetScores = () => {
    const statsKey = `quiz_stats_${QUIZ_CONFIG.quiz_name}`;
    localStorage.setItem(statsKey, JSON.stringify(INITIAL_QUIZ_STATS));
    setGameState(prev => prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {gameState !== 'start' && <QuizHeader quizConfig={QUIZ_CONFIG} />}
      <div className="flex-1 py-8 px-4">
        <div className="container mx-auto flex flex-col items-center gap-8">
          {gameState === 'start' ? (
            <StartScreen 
              onStart={handleStart} 
              templateStats={getCurrentStats()}
              onResetScores={handleResetScores}
              quizConfig={QUIZ_CONFIG}
            />
          ) : (
            <>
              {gameState === 'playing' ? (
                <div className="flex flex-col items-center gap-6">
                  <ScoreDisplay 
                    correct={correctAnswers} 
                    total={totalAnswers} 
                    highScore={getCurrentStats().highScore}
                    onRestart={handleRestart}
                    isFinished={false}
                    totalQuestions={randomizedQuestions.length}
                    currentTime={currentTime}
                    bestRun={getCurrentStats().bestRun}
                    quizConfig={QUIZ_CONFIG}
                  />
                  <FlashCard
                    question={getCurrentQuestion()}
                    options={options}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={randomizedQuestions.length}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6">
                  <ScoreDisplay 
                    correct={correctAnswers} 
                    total={totalAnswers} 
                    highScore={getCurrentStats().highScore}
                    onRestart={handleRestart}
                    isFinished={true}
                    totalQuestions={randomizedQuestions.length}
                    currentTime={currentTime}
                    bestRun={getCurrentStats().bestRun}
                    quizConfig={QUIZ_CONFIG}
                  />
                  <UserNameInput 
                    onSubmit={handleUserNameSubmit}
                    currentScore={correctAnswers}
                    currentTime={currentTime}
                    highScores={getCurrentStats().highScores}
                    quizConfig={QUIZ_CONFIG}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
