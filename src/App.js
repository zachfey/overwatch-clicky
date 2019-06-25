import React, { Component } from 'react';
import characters from './characters.json';
import score from './score.json';
import Character from './components/Character'
import Score from './components/Score'



class App extends Component {


  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score
  };

  guessCharacter = (id) => {

    // Filter this.state.friends for friends with an id not equal to the id being removed
    // console.log('before')
    // console.log(this.state.characters)
    // console.log(id)
    // console.log('now change....')
    // console.log(this.state.characters)
    let characters = this.state.characters;

    for (let i in characters) {
      const character = characters[i]
      console.log(character)

      if (character.id === id) {
        // console.log('found id')

        if (character.guessed === true) {
          // console.log('already guessed!')
          score.currentScore = 0;
          score.highScore = this.state.score.highScore;
          characters = characters.map(character => {
            character.guessed = false
            character.id = character.id
            character.name = character.name
            character.image = character.image
            return character
          })

          // console.log('after')
          // console.log(characters)

        } else {
          // console.log('not guessed yet!')
          character.guessed = true;
          score.currentScore = this.state.score.currentScore + 1
          // console.log(score.currentScore)

          // console.log('high score:  ' + this.state.score.highScore)
          if (score.currentScore > this.state.score.highScore) {
            // console.log('updating high score')
            score.highScore = score.currentScore

          } else {
            score.highScore = this.state.score.highScore
          }

        }
        // console.log(score)
        this.setState({ score });
        this.setState({ characters })
      }
    }
  };

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  render() {
    // console.log(score)
    console.log(characters)
    return (
      <div className='Container'>
        <div className="App jumbotron">
          <header className="App-header">
            <h1>Overwatch Clicky Game</h1>
            <h3>Click characters to grow your score, but don't click the same character twice!</h3>
          </header>
        </div>

        <Score
          score={score}
        />

        <div className='row'>
          <Character
            characters={characters}
            guessCharacter={this.guessCharacter}
            shuffleArray={this.shuffleArray}
          />
        </div>
      </div>
    );
  }
}

export default App;
