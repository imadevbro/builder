import React from 'react';
import { Traits } from './features/traits/Traits';
import './App.css';
import { LayeredImage } from './features/layeredImage/LayeredImage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <main>
        <div>
          <LayeredImage />
        </div>
        <div className="form-container">
          <Traits />
        </div>
      </main>
    </div>
  );
}

export default App;
