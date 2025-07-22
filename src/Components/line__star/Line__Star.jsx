import React from "react";
import "./Line__Star.css";
export default function Line__Star({ color }) {
  return (
    <>
      <div className="icon-star d-flex align-items-center justify-content-center my-1">
        <div className={`line me-3 bg-${color}`}></div>
        <i className={`fa-solid fs-5 fa-star text-${color}`}></i>
        <div className={`line ms-3 bg-${color}`}></div>
      </div>
    </>
  );
}
