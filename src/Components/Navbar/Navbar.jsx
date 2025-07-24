import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="py-4 fixed-top text-uppercase">
      <Container>
        <NavLink className={`${style.nav_brand}  ${style.nav_item}`} to="/">
          Start Framework
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="m-3 m-lg-0">
              <NavLink
                className={({ isActive }) =>
                  `${style.nav_item}  ${isActive ? style.active : ""}`
                }
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className="m-3 m-lg-0">
              <NavLink
                className={({ isActive }) =>
                  ` ${style.nav_item}  ${isActive ? style.active : ""}`
                }
                to="portofolio"
              >
                Portofolio
              </NavLink>
            </li>

            <li className="m-3 m-lg-0 ">
              <NavLink
                className={({ isActive }) =>
                  `${style.nav_item}  ${isActive ? style.active : ""}`
                }
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
