import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>Fim de jogo</h1>
        <h2>A sua pontuação foi: <spam>{score}</spam></h2>
        <button onClick={retry}>Restart</button>
    </div>
  )
}

export default GameOver