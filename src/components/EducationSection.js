import React, { Component } from "react";
import FormSectionName from "./FormSectionName";
import FormEducation from "./FormEducation";

export default class FormPersonalDetails extends Component {
  render() {
    const { educationChange } = this.props;
    return (
      <>
        <FormSectionName sectionName="Education" />
        <FormEducation educationChange={educationChange} />
      </>
    );
  }
}
