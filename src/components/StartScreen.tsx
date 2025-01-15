import { useState } from 'react';
import { BookOpen, Globe2 } from 'lucide-react';
import { QuizStats, QuizConfig } from '../types';
import { HighScoresList } from './HighScoresList';
import { GlobalLeaderboard } from './GlobalLeaderboard';
import { ENABLE_GLOBAL_LEADERBOARD } from '../config/features';

interface StartScreenProps {
  onStart: () => void;
  templateStats: QuizStats;
  onResetScores: () => void;
  quizConfig: QuizConfig;
}

export function StartScreen({ 
  onStart, 
  templateStats,
  onResetScores,
  quizConfig
}: StartScreenProps) {
  const [resetCount, setResetCount] = useState(0);
  const [showGlobalLeaderboard, setShowGlobalLeaderboard] = useState(false);

  const handleReset = () => {
    onResetScores();
    setResetCount(prev => prev + 1);
    // Add window.location.reload() as a fallback
    window.location.reload();
  };

  const themeColor = quizConfig.themeColor;

  // Function to get dynamic color classes
  const getColorClasses = () => {
    return {
      button: `bg-${themeColor}-600 hover:bg-${themeColor}-700`,
      icon: `text-${themeColor}-600 hover:bg-${themeColor}-50`,
      text: `text-${themeColor}-600`
    };
  };

  const colorClasses = getColorClasses();

  return (
    <div className="max-w-4xl w-full flex flex-col items-center">
      <div className="text-center mb-8 w-full">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
            <BookOpen className={colorClasses.text} size={32} />
            {quizConfig.title}
          </h1>
        </div>
        <h2 className="text-xl text-gray-600">
          {quizConfig.description}
        </h2>
      </div>

      {/* Quiz Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full w-full mb-6">
        <div className="mb-6">
          /*<p className="text-gray-600 mb-4 text-center">
            Test your knowledge with this interactive quiz. Try to achieve the highest score!
          </p>*/
          <HighScoresList 
            key={`template-scores-${resetCount}`}
            scores={templateStats.highScores} 
            onReset={handleReset}
            title="Local High Scores"
            headerBackground={true}
            quizConfig={quizConfig}
          />
        </div>
        <div className="flex justify-center mt-auto">
          <button
            onClick={onStart}
            className={`w-full max-w-md inline-flex items-center justify-center gap-2 px-6 py-3 ${colorClasses.button} text-white rounded-lg transition-colors font-semibold`}
          >
            Start Quiz
          </button>
        </div>
      </div>

      {/* Global Leaderboard Button */}
      {ENABLE_GLOBAL_LEADERBOARD && (
        <button
          onClick={() => setShowGlobalLeaderboard(true)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors font-semibold shadow-md"
        >
          <Globe2 size={20} />
          Global Leaderboard
        </button>
      )}

      {/* Global Leaderboard Modal */}
      {showGlobalLeaderboard && (
        <GlobalLeaderboard onClose={() => setShowGlobalLeaderboard(false)} />
      )}
    </div>
  );
}
