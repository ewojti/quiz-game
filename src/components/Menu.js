import React from 'react'

const Menu = ({setStartGame}) => {
  return (
    <div>
      <button onClick={() => setStartGame(true)}>Start Game</button>
      <button>See best results</button>
      <button>Options</button>
    </div>
  );
}

export default Menu