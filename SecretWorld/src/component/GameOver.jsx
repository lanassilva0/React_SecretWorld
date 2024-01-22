import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
        <p>Game over</p>
        <button onClick={retry}>Restart</button>
    </div>
  )
}

export default GameOver