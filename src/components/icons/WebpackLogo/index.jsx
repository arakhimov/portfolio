import React from "react";

const WebpackLogo = ({ theme }) => {
  return (
    <svg
      className="TechnlogyCard__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2209.6 2500"
      title="Webpack"
      width="80"
      height="80"
    >
      <path
        className="TechnlogyCard__icon-path"
        fill={theme}
        d={`M1104.8,0L0,625v1250l1104.8,625l1104.8-625V625L1104.8,0z M1141.3,175.4l893.4,505.4l-316.7,182.9l-4.4-2.5l-572.3-314.8
        V175.4z M1064.8,175.4v371L492.5,861.3l-4.4,2.5L171.5,680.8L1064.8,175.4z M134.2,1777.9L134.2,1777.9l0-1030.4l318.8,184v662.3
        L134.2,1777.9L134.2,1777.9L134.2,1777.9z M1064.8,2324.6l-871-492.7l328.3-189.6l542.7,298.5V2324.6z M1064.8,1853.5l-535.4-294.4
        V975.8l535.4,309.2V1853.5z M1103.1,1218.8L565.6,908.3l537.5-295.6l537.5,295.6L1103.1,1218.8z M1141.3,1285l535.4-309.2v583.3
        l-535.4,294.4V1285z M1141.3,2324.6v-383.8l542.7-298.5l328.3,189.6L1141.3,2324.6z M2071.9,1777.9L2071.9,1777.9l-318.8-184.1
        V931.5l318.8-184V1777.9z`}
      />
    </svg>
  );
};

export default WebpackLogo;
