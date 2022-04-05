import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.css";

export const Button = ({ name }) => {
  const history = useHistory();
  const handleClick = () => {
    if (name === "About Me") {
      history.push(history.location.pathname + "/about-me");
    }
  };
  return (
    <button
      onClick={handleClick}
      style={{ color: "#fef6eb" }}
      className="Button"
    >
      {name}
      <svg
        className="Button__arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 476.213 476.213"
      >
        <path
          fill="#fef6eb"
          d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"
        />
      </svg>
    </button>
  );
};
