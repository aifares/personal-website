import React from "react";
import "./NavBar.css";
import ReactNavbar from "react-responsive-animate-navbar";

export default function NavBar() {
  return (
    <nav class="sticky navbar">
      <div class="brand  display__logo">
        <a href="#top" class="nav__link">
          {" "}
          <span class="logo"> Ali Fares </span>
        </a>
      </div>

      <input type="checkbox" id="nav" class="hidden" />
      <label for="nav" class="nav__open">
        <i></i>
        <i></i>
        <i></i>
      </label>
      <div class="nav">
        <ul class="nav__items">
          <li class="nav__item">
            <a href="#resume" class="nav__link">
              Resume
            </a>
          </li>
          <li class="nav__item">
            <a href="http://www.alifares.com/#aboutme" class="nav__link">
              About me
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
