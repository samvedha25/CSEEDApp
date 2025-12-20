import React from 'react';
import { useState } from 'react'
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import Journal from './Journal';
import Meditate from './Meditate';
import TryOutside from './TryOutside';
import Resources from './Resources';
// import Features from './components/Features';
// import Quick5Min from './components/Quick5Min';
import './App.css';

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <div className="min-h-screen bg-sage-lightest">
      <Header />
      <main>
        {pathname === '/journal' || pathname.startsWith('/journal/') ? (
          <Journal />
        ) : pathname === '/meditate' ? (
          <Meditate />
        ) : pathname === '/resources' ? (
          <Resources />
        ) : (
          <>
            <WelcomeSection />
            {/* <Features /> */}
          </>
        )}
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

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
