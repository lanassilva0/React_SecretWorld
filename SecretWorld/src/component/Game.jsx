import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 0 </span>
      </p>
      <h2>Adivinhe a palavra</h2>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica...</span>
      </h3>

      <div className="wordConteiner">
        <span className="letter"> A</span>
        <span className="blankSquare"></span>
      </div>

      <div className="letterConteiner">
        <p>Tente adivinha uma letra da palavra: </p>
        <form>
          <input type="text" name= "letter" maxLength="1" required/>
          <buttom>Jogar</buttom>
        </form>
        <div className="wrongLetters">
          <p>Letras já utilizadas:</p>
          <spam>a,</spam>
        </div>
      </div>
    </div>
  )
}

export default Game