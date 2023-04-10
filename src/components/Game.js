import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState("X");
  const [winner, setWinner] = useState(null);


  //Declaring a Winner
  useEffect(() => {
    //"Your code here";
    const winnerDefine = calculateWinner(squares);
    setWinner(winnerDefine);
  }, [squares]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or nucrell.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    // "Your code here";
    const squaresClickArr = squares.slice();

    if (winner || squaresClickArr[i]) {
      return;
    }

    squaresClickArr[i] = xIsNext;

    setSquares(squaresClickArr);
    setXIsNext(xIsNext === "X" ? "O" : "X");
    // setHistory([...history, { character: squaresClickArr[i], coordinate: i }]);
  };

  
  //Restart game
  const handlRestart = () => {
    //"Your code here";
    setSquares(Array(9).fill(null));
    setXIsNext("X");
 
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext}</span>
        <Board squares={squares} handleClick={handleClick} />
        {/* <div className="history">
          <h4>History</h4>
          <ul>
            <li>
              <button onClick={handlRestart}>Go to game start</button>
            </li>
            
          </ul>
        </div> */}
      </div>
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
