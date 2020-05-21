import React from "react";
import logo from "../../assets/Images/logo.png";
import english_logo from "../../assets/Language/english.png";
import germany_logo from "../../assets/Language/germany.png";
const header = (props) => {
  return (
    <header className="main-header">
      <img src={logo} className="app-logo ml-7" alt="logo" />
      <ul className="ml-7">
        <li>
          {/* Code responsible for changing language to ENglish */}
          <img
            src={english_logo}
            onClick={(e) => {
              props.clicked("en");
            }}
            className="lang-logo"
            alt="logo"
            title="Click for English Language"
          />
        </li>
        <li>
          {/* Code responsible for changing language to German */}
          <img
            src={germany_logo}
            onClick={(e) => {
              props.clicked("gr");
            }}
            className="lang-logo"
            alt="logo"
            title="Click for German Language"
          />
        </li>
      </ul>
    </header>
  );
};

export default header;
