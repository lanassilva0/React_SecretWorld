
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

  const [pickTheWord, setWord] = useState("")
  const[pickTheCategory, setCategory] = useState("")
  const[letters, setLetters] = useState("")

  const pickTheWordAndCategory = () =>{

    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return [word,category]
  }

  //start the game
  const startGame = () => {

    const [word, category] = pickTheWordAndCategory();

    let wordLetters = word.split("")
    letters = wordLetters.map((l)=> l.toLowercase()) 

    setWord(word)
    setCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      {gameStage == 'start' && <StartScreen startGame={startGame}/>}
      {gameStage == 'game' && <Game verifyLetter = {verifyLetter}/>}
      {gameStage == 'end' && <GameOver retry={retry}/>}
    </>
  )
}

export default App
