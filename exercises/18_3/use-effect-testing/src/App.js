import React from 'react';
import Effected from './Effected';
import Greeting from './Greeting';
import './App.css';
import { AllProvider } from './AllContexts';

function App() {
  return (
    <AllProvider>
    <div className="App">
      <Effected />
      <Greeting />
    </div>
    </AllProvider>
  );
}

export default App;
