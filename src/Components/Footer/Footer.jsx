import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`${style.footer} container-fluid text-center text-white `}>
        <div className="row p-4 g-3">
          <div className="col-sm-4 p-3">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-sm-4  p-3">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex justify-content-center align-items-center">
              <i className={`fab fa-facebook-f ${style.icon}`}></i>
              <i className={`fab fa-twitter ${style.icon}`}></i>
              <i className={`fab fa-linkedin-in ${style.icon}`}></i>
              <i className={`fas fa-globe ${style.icon}`}></i>
          </div>
          </div>

          <div className="col-sm-4 p-3">
            <h3>About Freelancer</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className={`${style.footer_copyright} text-white text-center`}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
