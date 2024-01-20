import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
        <p>Game over</p>
        <buttom onClick={retry}>Restart</buttom>
    </div>
  )
}

export default GameOver