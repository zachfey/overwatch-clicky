import React from 'react';
import character from './characters.json';
import Character from './components/Character'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Clicky Game
      </header>
      <Character
        character = {character}
      />
    </div>
  );
}

export default App;
