import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Square from "./Square";
import { Winner } from "../utils/functions";

function Board() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [p1_score, setP1_score] = useState(0);
  const [p2_score, setP2_score] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState("");
  const { info } = useSelector((state) => ({
    info: state.game.userInfo,
  }));
  const isWinner = Winner(boardSquares);

  const handleClick = (index) => {
    clearTimeout();
    const squares = [...boardSquares];
    if (isWinner || squares[index]) return;

    squares[index] = xIsNext ? info.player1_dice : info.player2_dice;
    setBoardSquares(squares);
    setXIsNext(!xIsNext);
  };

  const squares = (index, style) => {
    return (
      <Square
        value={boardSquares[index]}
        style={style}
        onClick={() => handleClick(index)}
      />
    );
  };

  const restartGame = () => {
    return setTimeout(() => {
      setBoardSquares(Array(9).fill(null));
      setWinner("");
    }, 2000);
  };

  useEffect(() => {
    if (info.player1_dice === isWinner) {
      setP1_score(p1_score + 1);
      setWinner(info.player1 + " Wins");

      restartGame();
    } else if (info.player2_dice === isWinner) {
      setP2_score(p2_score + 1);
      setWinner(info.player2 + " Wins");

      restartGame();
    } else if (isWinner === "Draw") {
      setWinner(isWinner);
      restartGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWinner]);

  return (
    <div className="board-container">
      <div className="winner-container">
        <h2 className={winner ? "winner show" : "winner"}>{winner}</h2>
      </div>
      <div className="status">
        <div className={xIsNext ? "player bold" : "player"}>
          <span>{info?.player1 ? info?.player1 : "Human"}</span>
        </div>
        <div className="scoreboard">
          <span>
            {p1_score}&nbsp; - &nbsp; {p2_score}
          </span>
        </div>
        <div className={!xIsNext ? "player bold" : "player"}>
          <span>{info?.player2 ? info?.player2 : "AI"}</span>
        </div>
      </div>
      <div className="board">
        <div className="board-row">
          {squares(0, "square-corners")}
          {squares(1, "square-middle")}
          {squares(2, "square-corners")}
        </div>
        <div className="board-row">
          {squares(3, "square-corners")}
          {squares(4, "square-middle")}
          {squares(5, "square-corners")}
        </div>
        <div className="board-row">
          {squares(6, "square-bottom-left")}
          {squares(7)}
          {squares(8, "square-bottom-right")}
        </div>
      </div>
    </div>
  );
}

export default Board;
