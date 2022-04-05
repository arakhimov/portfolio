import React from "react";

const CSSLogo = ({ theme }) => {
  return (
    <svg
      className="TechnlogyCard__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.58 64.48"
      title="CSS3"
      width="80"
      height="80"
    >
      <path
        className="TechnlogyCard__icon-path"
        fill={theme}
        d="M0,0,4.74,57.85l23.71,6.63,23.08-6.63L56.58,0ZM45.88,19.2,29.35,26H44.57L42.68,47.73,28.47,52.15h0L13.59,48.05,12.65,37h7l.63,5.37,8.24,1.74h0L36,42.67l1-9.48H12.33l-.95-6.64,16.75-7.27H11.06l-.94-7H45.88Z"
      />
    </svg>
  );
};

export default CSSLogo;
