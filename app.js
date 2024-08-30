import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  // Render the 8x8 grid
  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      const rowCells = [];
      for (let col = 0; col < 8; col++) {
        // Determine the color of the square based on its position
        const isBlack = (row + col) % 2 === 1;
        rowCells.push(
          <div
            key={`${row}-${col}`}
            className={`board-cell ${isBlack ? 'black' : 'white'}`}
          ></div>
        );
      }
      board.push(
        <div key={row} className="board-row">
          {rowCells}
        </div>
      );
    }
    return board;
  };

  return (
    <div className="chess-board">
      {renderBoard()}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
