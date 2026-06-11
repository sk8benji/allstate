import { useState } from 'react';
import { Button } from '@workspace/ui';
import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header className="header">
        <div className="logo-group">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <div className="badge">Vite Client Engine</div>
        <h1 className="title">Aura Client</h1>
        <p className="subtitle">
          Running Client-Side React with hot module replacement (HMR), consuming shared UI components.
        </p>
      </header>

      <main className="main">
        <div className="glass-card">
          <h2 className="card-title">Dynamic Interactive States</h2>
          <p className="card-text">
            Test React state changes combined with the shared <code>@workspace/ui</code> component below.
          </p>
          <div className="interactive-demo">
            <Button variant="primary" onClick={() => setCount((c) => c + 1)}>
              Click Count: {count}
            </Button>
          </div>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Shared Buttons Showcase</h2>
          <div className="button-group">
            <Button variant="primary">Vite Primary</Button>
            <Button variant="secondary">Vite Slate</Button>
            <Button variant="glass">Vite Glass</Button>
          </div>
        </div>
      </main>

      <footer className="footer">
        Aura Monorepo Starter • Powered by React & TypeScript
      </footer>
    </div>
  );
}

export default App;
