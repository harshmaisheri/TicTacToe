import React, { useEffect } from "react";
import Board from "../components/Board";
import "../styles/GamePage.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Game() {
  const history = useHistory();
  const user = useSelector((state) => state.game.userInfo);

  useEffect(() => {
    if (!user?.player1) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Board />
    </div>
  );
}

export default Game;
