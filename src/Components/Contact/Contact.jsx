import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../PageHeader/PageHeader";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./Contact.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="container-fluid start_after_navbar pb-5 mt-5 full_screen display-flex  align-content-center">
        <PageHeader color={"#2c3e50"} header_title={"Contact Section"} />

        <div className="form container">
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Username:"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="username"
                name="username"
                className={`border-0 border-bottom py-3 ${style.formControl}`}
              />
            </FloatingLabel>

             <FloatingLabel
              controlId="floatingInput"
              label="User Age:"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="User Age"
                name="userAge"
                className={`border-0 border-bottom py-3 ${style.formControl}`}
              />
            </FloatingLabel>

             <FloatingLabel
              controlId="floatingInput"
              label="User Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="User Email:"
                name="userEmail"
                className={`border-0 border-bottom py-3 ${style.formControl}`}
              />
            </FloatingLabel>


            <FloatingLabel
              controlId="floatingInput"
              label="User Password:"
              className="mb-3 position-relative"
            >
              <Form.Control
                type="password"
                placeholder="User Password"
                name="userPassword"
                className={`border-0 border-bottom py-3 ${style.formControl}`}
              />
            </FloatingLabel>

            <Button   className={`${style.submit_btn} mt-4`} type="submit">
              Send Message
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
