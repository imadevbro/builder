import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { LayeredImage } from './features/layeredImage/LayeredImage';

function App() {
  return (
    <div>
      <main>
        <div>
          <LayeredImage />
        </div>
        <div className="form-container">
        </div>
      </main>
    </div>
  );
}

export default App;
