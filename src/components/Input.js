import React from "react";

function Input({ title, onHandleChange, player, handleClick, onKeyPress }) {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <input
        className="user-input"
        type="text"
        placeholder="Enter name"
        onChange={onHandleChange}
        onKeyPress={onKeyPress}
      />
      <button
        className={!player ? "txt-Btn disabled" : "txt-Btn"}
        disabled={!player}
        type="button"
        onClick={handleClick}
      >
        Continue
      </button>
    </React.Fragment>
  );
}

export default Input;
