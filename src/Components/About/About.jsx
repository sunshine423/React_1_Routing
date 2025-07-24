import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import PageHeader from './../PageHeader/PageHeader';
import style from './About.module.css'


export default function About() {

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <div className={`container-fluid text-white start_after_navbar pb-5 mt-5 full_screen display-flex  align-content-center ${style.about}`}>
        <PageHeader color={"#fff"} header_title={"About Componenet"} />
        <div className="container">
       <div className="row px-5">
          <div className="col-6  ps-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-6 pe-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
        </div>
 
      </div>
    </>
  );
}
