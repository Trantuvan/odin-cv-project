import React, { Component } from "react";
import FormSectionName from "./FormSectionName";
import FormPersonalDetails from "./FormPersonalDetails";

export default class DocumentBody extends Component {
  state = {
    personalDetails: {
      givenName: "",
      familyName: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
  };

  personalDetailsChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState(({ personalDetails }) => ({
      // *only take personal details to update whole state object
      personalDetails: { ...personalDetails, [name]: value },
    }));
  };

  render() {
    const { personalDetails } = this.state;
    return (
      <div className="mt-14 h-screen grid px-5 py-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5 after:border-b-2 after:border-gray-200">
            <FormSectionName sectionName="Personal details" />
            <FormPersonalDetails
              personalDetails={personalDetails}
              handleChange={this.personalDetailsChange}
            />
          </div>
          <div className="flex flex-col gap-6 after:border-b-2 after:border-gray-200">
            <FormSectionName sectionName="Education" />
          </div>
        </div>
        <div className="cv-section"></div>
      </div>
    );
  }
}
