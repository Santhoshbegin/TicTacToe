import React, { useState, useRef } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assests/circle.png';
import cross_icon from '../Assests/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const titleRef = useRef(null);

  const toggle = (index) => {
    if (lock || board[index]) return; // Prevent click if game is locked or cell already filled

    const newBoard = [...board];
    newBoard[index] = count % 2 === 0 ? "x" : "o"; // Set "x" or "o" based on the turn
    setBoard(newBoard);
    setCount(count + 1);
    checkWin(newBoard);
  };

  const checkWin = (board) => {
    // Check all winning combinations
    const winPatterns = [
      [0, 1, 2], // row 1
      [3, 4, 5], // row 2
      [6, 7, 8], // row 3
      [0, 3, 6], // column 1
      [1, 4, 7], // column 2
      [2, 5, 8], // column 3
      [0, 4, 8], // diagonal 1
      [2, 4, 6], // diagonal 2
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        won(board[a]);
        return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon} />`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon} />`;
    }
  };

  

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setBoard(data);
    setCount(0);
    setLock(false);
    titleRef.current.innerHTML = "Tic Tac Toe Game In React";
  };

  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className="boxes" onClick={() => toggle(0)}>
            {board[0] === "x" ? <img src={cross_icon} /> : board[0] === "o" ? <img src={circle_icon} /> : null}
          </div>
          <div className="boxes" onClick={() => toggle(1)}>
            {board[1] === "x" ? <img src={cross_icon} /> : board[1] === "o" ? <img src={circle_icon} /> : null}
          </div>
          <div className="boxes" onClick={() => toggle(2)}>
            {board[2] === "x" ? <img src={cross_icon} /> : board[2] === "o" ? <img src={circle_icon} /> : null}
          </div>
        </div>
        <div className='row2'>
          <div className="boxes" onClick={() => toggle(3)}>
            {board[3] === "x" ? <img src={cross_icon} /> : board[3] === "o" ? <img src={circle_icon} /> : null}
          </div>
          <div className="boxes" onClick={() => toggle(4)}>
            {board[4] === "x" ? <img src={cross_icon} /> : board[4] === "o" ? <img src={circle_icon} /> : null}
          </div>
          <div className="boxes" onClick={() => toggle(5)}>
            {board[5] === "x" ? <img src={cross_icon} /> : board[5] === "o" ? <img src={circle_icon} /> : null}
          </div>
        </div>
        <div className='row3'>
          <div className="boxes" onClick={() => toggle(6)}>
            {board[6] === "x" ? <img src={cross_icon} /> : board[6] === "o" ? <img src={circle_icon} /> : null}
          </div>
          <div className="boxes" onClick={() => toggle(7)}>
            {board[7] === "x" ? <img src={cross_icon} /> : board[7] === "o" ? <img src={circle_icon} /> : null}
          </div>
          <div className="boxes" onClick={() => toggle(8)}>
            {board[8] === "x" ? <img src={cross_icon} /> : board[8] === "o" ? <img src={circle_icon} /> : null}
          </div>
        </div>
      </div>
      <button className='reset' onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
