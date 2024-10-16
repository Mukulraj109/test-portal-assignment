# 📝 Test Portal - Frontend Intern Assignment

A **mock test portal** built using **React** and **Tailwind CSS**, which allows users to answer multiple-choice questions, navigate between them, and view a summary of their answers. This portal demonstrates essential frontend concepts, including **state management**, **dynamic UI updates**, and **responsive design**.

---

## 📁 Project Structure

/src │── /components │ ├── QuestionDisplay.js # Displays each question with options │ ├── QuestionLegend.js # Sidebar legend to navigate between questions │ ├── SubmitSummary.js # Displays a summary of user’s answers │── /data │ └── questions.json # Mock question data in JSON format │── App.js # Centralized state and routing logic │── index.css # Custom CSS (Tailwind CSS configuration) │── index.js # Application entry point


---

## 🚀 Features

- **Dynamic Question Navigation:** 
  - Users can move between questions using **Next** and **Previous** buttons.
  - **Legend component** allows direct navigation to any question.
- **State Management:** 
  - Tracks selected answers using React's `useState`.
  - Current question and answers are dynamically updated.
- **Color-coded Question Legend:** 
  - **Green** for answered questions, **Red** for unanswered, and **Yellow** for the current question.
- **Submit Summary Screen:** 
  - Displays a summary of user responses after submission.
  - Users can return to the test to modify their answers before final submission.
---

## 💻 How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mukulraj109/test-portal-assignment.git
   cd test-portal

2. **Install dependencies**:

   ```bash
     Copy code
     npm install
     Start the development server:

   ```bash
    Copy code
    npm start
    Open in your browser: Navigate to http://localhost:3000 to view the application.

🛠️ Tech Stack
   Frontend Framework: React.js
   Styling: Tailwind CSS
   State Management: React useState for local state
   Mock Data: JSON file for questions

