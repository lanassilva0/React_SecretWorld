
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

  console.log(words)

  //start the game
  const startGame = () => {
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
