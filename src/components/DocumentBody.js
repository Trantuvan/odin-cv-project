import React, { Component } from "react";
import uniqid from "uniqid";
import FormSectionName from "./FormSectionName";
import FormPersonalDetails from "./FormPersonalDetails";
import EducationSection from "./EducationSection";
import defaultImg from "../imgs/default-avatar.png";

export default class DocumentBody extends Component {
  state = {
    personalDetails: {
      givenName: "",
      familyName: "",
      email: "",
      phoneNumber: "",
      address: "",
      photoUrl: defaultImg,
    },
    isEditEducation: false,
    educations: [],
    education: {
      id: uniqid(),
      education: "",
      school: "",
      city: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  };

  removeEducation = (eduId) => {
    this.setState(({ educations }) => ({
      educations: educations.filter((edu) => edu.id !== eduId),
    }));
  };

  editEducation = (eduId) => {
    this.setState(({ educations, isEditEducation }) => ({
      education: educations.find((edu) => edu.id === eduId),
      isEditEducation: !isEditEducation,
    }));
  };

  educationChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState(({ education }) => ({
      education: { ...education, [name]: value },
    }));
  };

  pushToEducations = () => {
    const { isEditEducation, educations, education } = this.state;

    if (isEditEducation === true) {
      const cloneArr = [...educations];
      const editIndex = cloneArr.findIndex((edu) => edu.id === education.id);
      // *overide every education field except id
      cloneArr[editIndex] = education;

      this.setState({
        educations: cloneArr,
        isEditEducation: false,
        education: {
          id: uniqid(),
          education: "",
          school: "",
          city: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      });
      return;
    }

    this.setState(({ educations, education }) => ({
      educations: [...educations, education],
      education: {
        id: uniqid(),
        education: "",
        school: "",
        city: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    }));
  };

  personalDetailsChange = (evt) => {
    if (evt.target.type === "file") {
      // *use fileReader to load photo
      const reader = new FileReader();
      reader.onload = () => {
        // *check for file load is done
        if (reader.readyState === 2) {
          this.setState(({ personalDetails }) => ({
            // *only take personal details to update whole state object
            personalDetails: { ...personalDetails, photoUrl: reader.result },
          }));
        }
      };
      // *tell file reader to read as url
      reader.readAsDataURL(evt.target.files[0]);
      return;
    }

    const name = evt.target.name;
    const value = evt.target.value;

    this.setState(({ personalDetails }) => ({
      // *only take personal details to update whole state object
      personalDetails: { ...personalDetails, [name]: value },
    }));
  };

  render() {
    const { personalDetails, educations, education } = this.state;
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
              education={education}
              educations={educations}
              handleChange={this.educationChange}
              pushToEducations={this.pushToEducations}
              handleRemove={this.removeEducation}
              handleEdit={this.editEducation}
            />
          </div>
        </div>
        <div className="cv-section"></div>
      </div>
    );
  }
}
