import React from "react";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Error: 404</title>
      </Helmet>
      <div className="container start_after_navbar full_screen d-flex justify-content-center align-items-center">
        <h2 className="text-danger">Page Not Found</h2>
      </div>
    </>
  );
}
