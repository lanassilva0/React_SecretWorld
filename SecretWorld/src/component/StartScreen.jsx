import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <buttom onClick={startGame}>Começar o jogo</buttom>
    </div>
  )
}

export default StartScreen