import React, { Component } from "react";
import FormSectionName from "./FormSectionName";
import FormPersonalDetails from "./FormPersonalDetails";
import EducationSection from "./EducationSection";

export default class DocumentBody extends Component {
  state = {
    personalDetails: {
      givenName: "",
      familyName: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    educations: [],
  };

  removeEducation = (eduId) => {
    this.setState(({ educations }) => ({
      educations: educations.filter((edu) => edu.id !== eduId),
    }));
  };

  educationChange = (currentEdu) => {
    console.log(currentEdu);
    this.setState(({ educations }) => ({
      educations: [...educations, currentEdu],
    }));
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
    const { personalDetails, educations } = this.state;
    return (
      <div className="mt-14 h-screen grid px-5 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5 after:border-b-2 after:border-gray-200">
            <FormSectionName sectionName="Personal details" />
            <FormPersonalDetails
              personalDetails={personalDetails}
              handleChange={this.personalDetailsChange}
            />
          </div>
          <div className="flex flex-col gap-5 after:border-b-2 after:border-gray-200">
            <EducationSection
              educationChange={this.educationChange}
              educations={educations}
              handleRemove={this.removeEducation}
            />
          </div>
        </div>
        <div className="cv-section"></div>
      </div>
    );
  }
}
