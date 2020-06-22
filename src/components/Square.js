import React from "react";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";

const ZoomAnimation = keyframes`${zoomIn}`;
const ZoomDiv = styled.div`
  animation: 500ms ${ZoomAnimation};
`;

function Square({ onClick, value, style }) {
  return (
    <div className={`square ${style}`} onClick={onClick}>
      {value === null ? (
        <div className="blank" />
      ) : value === "x" ? (
        <ZoomDiv>
          <img className="gameIcon" src={require("../assets/x.png")} alt="x" />
        </ZoomDiv>
      ) : (
        <ZoomDiv>
          <img className="gameIcon" src={require("../assets/o.png")} alt="o" />
        </ZoomDiv>
      )}
    </div>
  );
}

export default Square;
