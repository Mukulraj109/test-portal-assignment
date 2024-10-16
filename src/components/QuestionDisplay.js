import React from 'react';

export default function QuestionDisplay({
  question, questionNumber, totalQuestions, answer, onAnswerChange, onNext, onPrevious, onSubmit
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Question {questionNumber} of {totalQuestions}
      </h2>
      <p className="text-lg mb-6">{question.question}</p>

      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <label
            key={idx}
            className={`block p-4 border rounded-md cursor-pointer transition 
              ${answer === option ? 'bg-blue-100 border-blue-400' : 'hover:bg-gray-100'}`}
          >
            <input
              type="radio"
              name={`question-${questionNumber}`}
              value={option}
              checked={answer === option}
              onChange={() => onAnswerChange(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button 
          onClick={onPrevious} 
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          disabled={questionNumber === 1}
        >
          Previous
        </button>

        {questionNumber === totalQuestions ? (
          <button 
            onClick={onSubmit} 
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit Test
          </button>
        ) : (
          <button 
            onClick={onNext} 
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
