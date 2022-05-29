import React from "react";

const Star = ({ color }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.84955 0.742177L5.83054 3.76137L5.86862 3.87856H5.99184L9.1664 3.87856L6.59812 5.74452L6.49844 5.81694L6.53651 5.93413L7.51751 8.95332L4.94923 7.08736L4.84955 7.01493L4.74986 7.08736L2.18158 8.95332L3.16258 5.93413L3.20065 5.81694L3.10097 5.74452L0.532692 3.87856L3.70726 3.87856H3.83048L3.86855 3.76137L4.84955 0.742177Z"
        fill={color}
        stroke="#EECA4B"
        stroke-width="0.339189"
      />
    </svg>
  );
};

export default Star;
