import React, { Component } from "react";

import Header from "../../components/Header";
import Cockpit from "../../components/Cockpit";
import MainArea from "../../containers/MainArea";
import { strings } from "../Localization";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en", // Set the language initially to English
    };
  }

  languageChangeHandler = (langToBeChanged) => {
    this.setState({
      language: langToBeChanged, //Changes the language
    });
  };

  render() {
    strings.setLanguage(this.state.language);
    const lang = this.state.language;
    return (
      [
        <Header key="header" language={lang} clicked={this.languageChangeHandler} />,<Cockpit key="main-heading"/>,<  MainArea key="section"/>
       
      ]
    );
  }
}
export default Layout;
