import React from 'react';

export default function SubmitSummary({ questions, answers, onBack }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Test Summary</h2>
      <ul className="space-y-4">
        {questions.map((question, index) => (
          <li key={index} className="p-4 border rounded-md">
            <p className="font-semibold mb-2">
              {index + 1}. {question.question}
            </p>
            <p>
              <strong>Answer:</strong>{' '}
              {answers[index] || <span className="text-red-500">Not Answered</span>}
            </p>
          </li>
        ))}
      </ul>
      <button 
        onClick={onBack} 
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Back to Test
      </button>
    </div>
  );
}
