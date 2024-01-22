//react
import { useState, useCallback, useEffect } from 'react'

//CSS
import './App.css'

//data
import {wordsList} from './data/words'

//components
import StartScreen from './component/StartScreen'
import Game from './component/Game'
import GameOver from './component/GameOver'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name:"game"},
  {id: 3, name: "end"}
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setWord] = useState("")
  const [pickedCategory, setCategory] = useState("")
  const [letters, setLetters] = useState([])
  
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() =>{

    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return [word,category]
  }, [words])

  
  const startGame = useCallback(() => {

    clearLettersStates()

    const [word, category] = pickWordAndCategory();

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toString().toLowerCase()); 

    setWord(word)
    setCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])
  
  
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase();

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => (
        [...actualGuessedLetters, letter]
      ))
    } else{
      setWrongLetters((actualWrongLetters) => (
        [...actualWrongLetters, letter]
      ))

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLettersStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses === 0) {
      clearLettersStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {

    const uniqueLetters = [...new Set(letters)];
    
    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100))
      startGame()
    }
  },  [guessedLetters, letters, startGame])

  const retry = () => {
    setScore(0)
    setGuesses(3)
    setGameStage(stages[0].name)
  }

  return (
    <>
      {gameStage == 'start' && <StartScreen startGame={startGame}/>}
      {gameStage == 'game' && (<Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />)}
      {gameStage == 'end' && <GameOver retry={retry} score={score}/>}
    </>
  )
}

export default App
