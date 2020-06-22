import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import zoomIn from "react-animations/lib/zoom-in";
import styled, { keyframes } from "styled-components";

import { gameMode } from "../store/actions";

const ZoomAnimation = keyframes`${zoomIn}`;
const ZoomDiv = styled.div`
  animation: 500ms ${ZoomAnimation};
`;

function HomePage() {
  const [NA, setNA] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (mode) => {
    if (mode === "With AI") {
      setNA(true);
      setTimeout(() => {
        setNA(false);
      }, 2000);
    } else {
      dispatch(gameMode(mode));
      history.push("/user");
    }
  };

  return (
    <div className="mode-container">
      <h2>Choose your game</h2>
      {NA && (
        <ZoomDiv className="NA">
          <span className="info_text">Coming Soon...</span>
        </ZoomDiv>
      )}
      <button
        className="txt-Btn"
        type="button"
        onClick={() => handleClick("With AI")}
      >
        With AI
      </button>
      <button
        className="txt-Btn"
        type="button"
        onClick={() => handleClick("With a Friend")}
      >
        With a friend
      </button>
    </div>
  );
}

export default HomePage;
