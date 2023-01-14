import React, { Component } from "react";
import DocumentToolbar from "./components/DocumentToolbar";
import DocumentBody from "./components/DocumentBody";

export default class App extends Component {
  state = {
    isPreview: false,
  };

  openPreview = () => {
    this.setState({ isPreview: true });
  };

  closePreview = () => {
    this.setState({ isPreview: false });
  };

  render() {
    const { isPreview } = this.state;

    return (
      <>
        <DocumentToolbar
          isPreview={isPreview}
          closePreview={this.closePreview}
        />
        <DocumentBody openPreview={this.openPreview} isPreview={isPreview} />
      </>
    );
  }
}
