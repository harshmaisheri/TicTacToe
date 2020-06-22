import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userInfo } from "../store/actions";
import "../styles/SelectPage.css";

function Select() {
  const [value, setValue] = useState("x");
  const [player2Dice, setPlayer2Dice] = useState("o");
  const user = useSelector((state) => state.game.userInfo);
  const dispatch = useDispatch();
  const history = useHistory();

  const onChangeValue = (e) => {
    setValue(e.target.value);
    if (e.target.value === "x") {
      setPlayer2Dice("o");
    } else {
      setPlayer2Dice("x");
    }
  };

  const handleOnClick = () => {
    if (user.player2) {
      dispatch(
        userInfo({ ...user, player1_dice: value, player2_dice: player2Dice })
      );
      history.push("/game");
    } else {
      dispatch(userInfo({ ...user, player1_dice: value }));
      history.push("/game");
    }
  };

  useEffect(() => {
    if (!user?.player1) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="mode-container">
      <h2>Pick your side</h2>
      <div className="side-picker">
        <div className="side" onChange={onChangeValue}>
          <img
            className={value === "x" ? "icons selected" : "icons"}
            src={require("../assets/x.png")}
            alt="x-logo"
          />
          <input type="radio" checked={value === "x"} value="x" name="side" />
        </div>
        <div className="side" onChange={onChangeValue}>
          <img
            className={value === "o" ? "icons selected" : "icons"}
            src={require("../assets/o.png")}
            alt="o-logo"
          />
          <input type="radio" checked={value === "o"} value="o" name="side" />
        </div>
      </div>
      <button
        className={!value ? "txt-Btn disabled" : "txt-Btn"}
        disabled={!value}
        onClick={handleOnClick}
      >
        Continue
      </button>
    </div>
  );
}

export default Select;
