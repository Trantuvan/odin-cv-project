import React, { Component } from "react";
import FormToolbar from "./FormToolbar";

export default class DocumentBody extends Component {
  render() {
    return (
      <div className="mt-16 h-screen grid px-5">
        <div>
          <FormToolbar sectionName="Personal details" />
        </div>
      </div>
    );
  }
}
