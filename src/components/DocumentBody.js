import React, { Component } from "react";
import FormToolbar from "./FormToolbar";
import FormPersonalDetails from "./FormPersonalDetails";

export default class DocumentBody extends Component {
  render() {
    return (
      <div className="mt-16 h-screen grid px-5">
        <div className="flex flex-col gap-5">
          <FormToolbar sectionName="Personal details" />
          <FormPersonalDetails />
        </div>
      </div>
    );
  }
}
