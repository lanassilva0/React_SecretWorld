
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

  return (
    <>
      {gameStage == 'start' && <StartScreen />}
      {gameStage == 'game' && <Game />}
      {gameStage == 'end' && <GameOver />}
    </>
  )
}

export default App
