
import { useState } from 'react';


function Square({box_value, onSquareClick}) {
        
        return (<button className="square" onClick={onSquareClick} > {box_value} </button>
        );
}


export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i) {
        if(calculateWinner(squares) || squares[i]) return ;
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        setXIsNext(!xIsNext);
        setSquares(nextSquares);
    }

  return (
      <>
      <div className="status">{status}</div>

      <div className="board-row">
          <Square box_value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square box_value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square box_value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
          <Square box_value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square box_value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square box_value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
          <Square box_value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square box_value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square box_value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      </>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
