import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.css";

export const Logo = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/portfolio");
  };

  return (
    <div onClick={handleClick} className="Logo">
      <svg
        className="Logo__image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65.27 56.74"
      >
        <text className="Logo__text" transform="translate(0 41.76)">
          AR
        </text>
      </svg>
    </div>
  );
};
