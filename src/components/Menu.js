import React from 'react'

const Menu = ({setStartGame}) => {
  return (
    <div className="flexColumn__center">
      <h1 className="headtext__h1">Quizzical</h1>
      <h3 className="headtext__h3">test your knownlage</h3>
      <button className="custom__button" onClick={() => setStartGame(true)}>
        Start Game
      </button>
      <button className="custom__button">Best results</button>
      <button className="custom__button">Options</button>
    </div>
  );
}

export default Menu