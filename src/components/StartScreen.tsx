import { useState } from 'react';
import { BookOpen, Globe2, ImageOff } from 'lucide-react';
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

// To use a header image, uncomment the following line and update the path
// const HEADER_IMAGE = '/images/quiz-header.jpg';
const HEADER_IMAGE = '/images/quiz-header.svg';

export function StartScreen({ 
  onStart, 
  templateStats,
  onResetScores,
  quizConfig
}: StartScreenProps) {
  const [resetCount, setResetCount] = useState(0);
  const [showGlobalLeaderboard, setShowGlobalLeaderboard] = useState(false);
  const [headerImageError, setHeaderImageError] = useState(false);
  const [headerImageLoaded, setHeaderImageLoaded] = useState(false);

  const handleReset = () => {
    onResetScores();
    setResetCount(prev => prev + 1);
    window.location.reload();
  };

  const themeColor = quizConfig.themeColor;

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
      {/* Optional Header Image */}
      {HEADER_IMAGE && (
        <div className="w-full max-w-3xl h-auto bg-gray-50 rounded-lg mb-8 overflow-hidden">
          {!headerImageLoaded && !headerImageError && (
            <div className="w-full h-48 flex flex-col items-center justify-center bg-gray-100">
              <div className="text-gray-400 text-center px-4">
                <div className="text-sm font-medium mb-1">Loading Header Image</div>
              </div>
            </div>
          )}
          {headerImageError ? (
            <div className="w-full h-48 flex flex-col items-center justify-center text-gray-400">
              <ImageOff size={32} />
              <p className="text-sm mt-2">Header image not available</p>
            </div>
          ) : (
            <img
              src={HEADER_IMAGE}
              alt="Quiz Header"
              className={`w-full h-auto object-cover ${headerImageLoaded ? 'block' : 'hidden'}`}
              onLoad={() => setHeaderImageLoaded(true)}
              onError={() => setHeaderImageError(true)}
            />
          )}
        </div>
      )}

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
          <p className="text-gray-600 mb-4 text-center">
            Test your knowledge with this interactive quiz. Try to achieve the highest score!
          </p>
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
