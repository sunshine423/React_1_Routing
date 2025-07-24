import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../PageHeader/PageHeader";
import style from "./Home.module.css";
import avatar from "../../assets/images/avatar.svg"


export default function Home() {
  return (
    <>
      <Helmet>
        <title> Home </title>
      </Helmet>
      <div className={`container-fluid text-center text-white start_after_navbar d-flex justify-content-center align-items-center  ${style.home}`}>
        <div className="pt-5">
          <img src={avatar} alt="Boy Avatar" className="mb-3"/>
          <PageHeader color={"#fff"} header_title={"start Framework"} />
          <p className="pb-5 mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
