import React, { useState } from 'react';
import questions from './data/questions.json';
import QuestionDisplay from './components/QuestionDisplay';
import QuestionLegend from './components/QuestionLegend';
import SubmitSummary from './components/SubmitSummary';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleQuestionChange = (index) => setCurrentQuestion(index);
  const handleSubmit = () => setIsSubmitted(true);
  const handleBackToTest = () => setIsSubmitted(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-8 grid grid-cols-3 gap-6">
        {isSubmitted ? (
          <SubmitSummary 
            questions={questions} 
            answers={answers} 
            onBack={handleBackToTest} 
          />
        ) : (
          <>
            <div className="col-span-2">
              <QuestionDisplay
                question={questions[currentQuestion]}
                questionNumber={currentQuestion + 1}
                totalQuestions={questions.length}
                answer={answers[currentQuestion]}
                onAnswerChange={handleAnswerChange}
                onNext={() => handleQuestionChange(currentQuestion + 1)}
                onPrevious={() => handleQuestionChange(currentQuestion - 1)}
                onSubmit={handleSubmit}
              />
            </div>

            <QuestionLegend
              currentQuestion={currentQuestion}
              answers={answers}
              onQuestionChange={handleQuestionChange}
            />
          </>
        )}
      </div>
    </div>
  );
}
