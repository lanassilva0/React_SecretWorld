import {useState, useRef}  from 'react'
import './Game.css'

const Game = ({verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score} </span>
      </p>
      <h2>Adivinhe a palavra</h2>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas.</p>
      <div className="wordConteiner">
        {letters.map((l, i) => (
          guessedLetters.includes(l) ? (
            <span className="letter" key={i}> {l}</span>   
          ) : (
            <span className="blankSquare" key={i}></span>
          )
        ))}
      </div>

      <div className="letterConteiner">
        <p>Tente adivinha uma letra da palavra: </p>
        <form>
          <input type="text" name= "letter" maxLength="1" required/>
          <buttom>Jogar</buttom>
        </form>
        <div className="wrongLetters">
          <p>Letras já utilizadas:</p>
          {wrongLetters.map((l, i) => (
            <span key = {i}> {l}, </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Game