import React, { Component } from "react";
import DocumentToolbar from "./components/DocumentToolbar";
import DocumentBody from "./components/DocumentBody";

export default class App extends Component {
  render() {
    return (
      <>
        <DocumentToolbar />
        <DocumentBody />
      </>
    );
  }
}
