import React from 'react'
import {useState} from 'react'


function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [square,setsquare]=useState(Array(9).fill(null))
  function handleclick(i){
    const nextsquare=square.slice();
    nextsquare[i]="X"
    setsquare(nextsquare)
  }
  return (
    <>
      <div classname="board-row">
        <Square value={square[0]} onSquareClick={handleclick(0)} />
        <Square value={square[1]} onSquareClick={handleclick(1)} />
        <Square value={square[2]} onSquareClick={handleclick(2)} />
      </div>
      <div classname="board-row">
        <Square value={square[3]} onSquareClick={handleclick(3)} />
        <Square value={square[4]} onSquareClick={handleclick(4)} />
        <Square value={square[5]} onSquareClick={handleclick(5)} />
      </div>
      <div classname="board-row">
        <Square value={square[6]} onSquareClick={handleclick(6)} />
        <Square value={square[7]} onSquareClick={handleclick(7)} />
        <Square value={square[8]} onSquareClick={handleclick(8)} />
      </div>
    </>
  );
}
