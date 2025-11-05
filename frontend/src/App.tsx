import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import Features from './components/Features';
import Quick5Min from './components/Quick5Min';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-sage-lightest">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WelcomeSection />
                <Features />
              </>
            }
          />
          <Route path="/quick5" element={<Quick5Min />} />
        </Routes>
      </main>
      <footer className="bg-forest-green text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Peaceful Mind. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
