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

  guessCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // console.log('before')
    // console.log(this.state.characters)
    // console.log(id)
    // console.log('now change....')
    let characters = this.state.characters;
    for (let i in characters) {
      const character = characters[i]

      if (character.id === id) {
        console.log('found id')

        if (character.guessed === true) {
          console.log('already guessed!')
          score.currentScore = 0;
          score.highScore = this.state.score.highScore;
          //todo make all character guesses false

        } else {
          console.log('not guessed yet!')
          character.guessed = true;
          score.currentScore = this.state.score.currentScore + 1
          console.log(score.currentScore)

          console.log('high score:  ' + this.state.score.highScore)
          if (score.currentScore > this.state.score.highScore) {
            console.log('updating high score')
            score.highScore = score.currentScore

          } else { 
            score.highScore = this.state.score.highScore
          }

        }
        console.log(score)
        this.setState({ score });
        this.setState({ characters })
      }
    }

    // const characters = this.state.characters.map(character => {
    //   if (character.id === id) {
    //     character.guessed = true;

    //   }

    //   console.log(character)
    //   return character
    // });
    // // console.log(characters)
    // this.setState({characters}, {score}, {highScore});
  };

  render() {
    console.log(score)
    console.log(characters)
    return (
      <div className="App">
        <header className="App-header">
          Clicky Game
      </header>
        <Score
          score={score}
        />
        <Character
          characters={characters}
          guessCharacter={this.guessCharacter}
        />
      </div>
    );
  }
}

export default App;
