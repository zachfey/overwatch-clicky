import React, { Component } from 'react';
import characters from './characters.json';
import Character from './components/Character'

class App extends Component {


  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  guessCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    console.log('before')
    console.log(this.state.characters)
    console.log(id)
    console.log('now change....')
    let characters = this.state.characters.map(character => {
      if (character.id === id) {
        character.guessed = true;
        console.log(character)
      }
      return character
    });
    console.log(characters)
    this.setState({ characters });
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          Clicky Game
      </header>
        <Character
          characters={characters}
          guessCharacter={this.guessCharacter}
        />
      </div>
    );
  }
}

export default App;
