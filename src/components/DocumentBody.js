import React, { Component } from "react";
import uniqid from "uniqid";
import FormSectionName from "./FormSectionName";
import defaultImg from "../imgs/default-avatar.png";
import FormPersonalDetails from "./FormPersonalDetails";
import EducationSection from "./EducationSection";
import EmploymentSection from "./EmploymentSection";
import { HiOutlineDocumentSearch } from "react-icons/hi";

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
    isEditEmployment: false,
    employments: [],
    employment: {
      id: uniqid(),
      position: "",
      employer: "",
      city: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  };

  employmentChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState(({ employment }) => ({
      employment: { ...employment, [name]: value },
    }));
  };

  pushToEmpoyments = () => {
    const { isEditEmployment, employments, employment } = this.state;

    if (isEditEmployment === true) {
      const cloneArr = [...employments];
      const editIndex = cloneArr.findIndex((emp) => emp.id === employment.id);
      // *overide every education field except id
      cloneArr[editIndex] = employment;

      this.setState({
        employments: cloneArr,
        isEditEmployment: false,
        employment: {
          id: uniqid(),
          position: "",
          employer: "",
          city: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      });
      return;
    }

    this.setState(({ employments, employment }) => ({
      employments: [...employments, employment],
      employment: {
        id: uniqid(),
        position: "",
        employer: "",
        city: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    }));
  };

  removeEmployment = (empId) => {
    this.setState(({ employments }) => ({
      employments: employments.filter((emp) => emp.id !== empId),
    }));
  };

  editEmployment = (empId) => {
    this.setState(({ employments, isEditEmployment }) => ({
      employment: employments.find((edu) => edu.id === empId),
      isEditEmployment: !isEditEmployment,
    }));
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
    const { personalDetails, educations, education, employment, employments } =
      this.state;
    return (
      <div className="mt-14 grid px-2 py-10 sm:px-5 lg:grid-cols-2">
        <div className="flex flex-col gap-4 lg:pl-2 lg:pr-3 lg:-max-h-10rem lg:overflow-y-auto">
          <div className="flex flex-col gap-4 after:border-b-2 after:border-gray-200">
            <FormSectionName sectionName="Personal details" />
            <FormPersonalDetails
              personalDetails={personalDetails}
              handleChange={this.personalDetailsChange}
            />
          </div>
          <div className="flex flex-col gap-4 after:border-b-2 after:border-gray-200">
            <EducationSection
              education={education}
              educations={educations}
              handleChange={this.educationChange}
              pushToEducations={this.pushToEducations}
              handleRemove={this.removeEducation}
              handleEdit={this.editEducation}
            />
          </div>
          <div className="flex flex-col gap-4">
            <EmploymentSection
              employment={employment}
              employments={employments}
              handleChange={this.employmentChange}
              pushToEmpoyments={this.pushToEmpoyments}
              handleEdit={this.editEmployment}
              handleRemove={this.removeEmployment}
            />
          </div>
          <button
            type="button"
            className="flex items-center gap-1 ml-auto bg-indigo-700 text-white p-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:hidden"
          >
            <HiOutlineDocumentSearch className="w-5 h-6" />
            Preview
          </button>
        </div>
        <div className="hidden bg-zinc-50 justify-center items-center text-9xl lg:flex">
          Hi
        </div>
      </div>
    );
  }
}
