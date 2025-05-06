# CodeReview
This repository contains the source code and resources from the YouTube tutorial "How to Build a Code Review Tool with AI". It demonstrates the development of an AI-driven code review system that leverages machine learning to analyze codebases, identify potential issues, and suggest improvements. The project showcases the integration of AI models with code analysis tools to automate and enhance the code review process.

🛠️ Key Features AI-Powered Code Analysis: Utilizes machine learning models to assess code quality and detect potential issues.

Automated Suggestions: Provides recommendations for code improvements based on AI analysis.

Integration with Development Tools: Seamlessly integrates with popular development environments and version control systems.



**CodeReviewer** is a full-stack application designed to review code and suggest improvements based on AI-powered analysis. The application consists of two parts: **Backend** and **Frontend**.

---

## Table of Contents
1. [Backend](#backend)
    - [Getting Started](#backend-getting-started)
    - [Installation](#backend-installation)
    - [Running the Project](#backend-running-the-project)
    - [API Keys](#backend-api-keys)
    - [Dependencies](#backend-dependencies)
    - [License](#backend-license)
2. [Frontend](#frontend)
    - [Getting Started](#frontend-getting-started)
    - [Installation](#frontend-installation)
    - [Running the Project](#frontend-running-the-project)
    - [Build for Production](#frontend-build-for-production)
    - [Dependencies](#frontend-dependencies)
    - [License](#frontend-license)

---

## Backend

The backend is built with **Node.js**, using **Express** and **dotenv** for configuration. It integrates with **Google GenAI API** to review code.

### Backend Getting Started

Follow these instructions to set up and run the backend on your local machine.

### Backend Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/siddheshpatwa/CodeReviewer.git
   cd CodeReviewer/backend


Install the dependencies:npm install

Backend Running the Project
To start the server, run: npm run dev
This will start the server at http://localhost:5000.

Backend API Keys
For API integration, you need to set the Gemini API Key in a .env file:GEMINI_API_KEY=your-api-key-here

Make sure you replace your-api-key-here with the actual API key from Google GenAI.

Backend Dependencies
The following dependencies are used in the backend:

@google/genai: API for integrating Google's Gemini AI.

dotenv: Loads environment variables from a .env file.

express: Fast, unopinionated web framework for Node.js.

nodemon: A tool to automatically restart the server during development.

Frontend
The frontend is built with React and Vite. It provides an interactive interface for users to input code and receive code review feedback powered by the backend.

Frontend Getting Started
Follow these instructions to set up and run the frontend on your local machine.

Frontend Installation
Clone the repository:git clone https://github.com/siddheshpatwa/CodeReviewer.git
cd CodeReviewer/frontend

Install the dependencies:npm install
Frontend Running the Project
To start the development server, run:npm run dev
This will start the Vite development server and open the application at http://localhost:3000.

Frontend Dependencies
The following dependencies are used in the frontend:

axios: Promise-based HTTP client for making API requests.

cors: Package to handle Cross-Origin Resource Sharing (CORS).

prismjs: Library for syntax highlighting.

react: JavaScript library for building user interfaces.

react-dom: React package to manage the DOM.

react-markdown: Render markdown content in React components.

react-simple-code-editor: A simple code editor component for React.

rehype-highlight: Syntax highlighter for markdown rendered by react-markdown.

simple-code-editor: A basic code editor component.


