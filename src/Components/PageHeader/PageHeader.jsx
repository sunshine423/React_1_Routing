import React from "react";
import style from "./PageHeader.module.css";
export default function PageHeader({ header_title, color }) {
  return (
    <div>
      <h2 className="text-center text-uppercase mb-3 fw-bolder fs-1 " style={{color: color}}>{header_title}</h2>
      <div className="d-flex justify-content-center align-items-center mb-3" style={{color: color}}>
        <div className={`${style.line} me-2`} style = {{backgroundColor: color}}></div>
        <i className="fas fa-star"></i>
        <div className={`${style.line} ms-2`} style = {{backgroundColor: color}}></div>
      </div>
    </div>
  );
}
