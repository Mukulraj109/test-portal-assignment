import React from 'react';

export default function QuestionLegend({ currentQuestion, answers, onQuestionChange }) {
  const isAnswered = (index) => answers[index] !== undefined;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Question Legend</h3>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <button
            key={index}
            onClick={() => onQuestionChange(index)}
            className={`p-3 rounded-lg font-bold text-white transition 
              ${currentQuestion === index ? 'bg-yellow-500' 
                : isAnswered(index) ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
