import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../styles/UserPage.css";
import Input from "../components/Input";
import { userInfo } from "../store/actions";

function UserPage() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [isplayer2, setisPlayer2] = useState(false);

  const history = useHistory();
  const mode = useSelector((state) => state.game.mode);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (mode === "With a Friend") {
      setisPlayer2(true);
      if (player2) {
        dispatch(userInfo({ player1, player2 }));
        history.push("/select");
      }
    } else {
      setisPlayer2(false);
      dispatch(userInfo({ player1 }));
      history.push("/select");
    }
  };

  const keyPress = (evt) => {
    if (evt && evt.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="mode-container">
      <div className={!isplayer2 ? "player1" : " player1 invisible"}>
        <Input
          title="Enter Your Name"
          onHandleChange={(e) => setPlayer1(e.target.value)}
          player={player1}
          handleClick={handleClick}
          onKeyPress={keyPress}
        />
      </div>
      <div className={isplayer2 ? "player2" : " player2 invisible"}>
        <Input
          title="Enter Your Friend Name"
          onHandleChange={(e) => setPlayer2(e.target.value)}
          player={player2}
          handleClick={handleClick}
          onKeyPress={keyPress}
        />
      </div>
    </div>
  );
}

export default UserPage;
