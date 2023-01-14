import PropTypes from "prop-types";
import React, { Component } from "react";

export default class CVTemplate extends Component {
  static propTypes = {
    personalDetails: PropTypes.object.isRequired,
    educations: PropTypes.array.isRequired,
    employments: PropTypes.array.isRequired,
  };

  render() {
    const {
      personalDetails: {
        givenName,
        familyName,
        photoUrl,
        email,
        phoneNumber,
        address,
      },
      employments,
      educations,
    } = this.props;

    const educationList = educations.map((eduItem) => {
      const [sYear, sMonth] = eduItem.startDate.split("-");
      const [eYear, eMonth] = eduItem.endDate.split("-");

      let paragraph;

      if (eduItem.school.length === 0) {
        paragraph = `${eduItem.city}`;
      } else if (eduItem.city.length === 0) {
        paragraph = `${eduItem.school}`;
      } else {
        paragraph = `${eduItem.school}, ${eduItem.city}`;
      }

      return (
        <div key={eduItem.id}>
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold">{eduItem.education}</h4>
            <p className="text-xs text-indigo-500">
              {eduItem.startDate.length === 0 || eduItem.endDate.length === 0
                ? null
                : `${sYear} ${sMonth} - ${eYear} ${eMonth}`}
            </p>
          </div>
          <p className="text-xs text-indigo-400">{paragraph}</p>
          <p className="text-xs pt-2 break-words">{eduItem.description}</p>
        </div>
      );
    });

    const EmploymentList = employments.map((emp) => {
      const [sYear, sMonth] = emp.startDate.split("-");
      const [eYear, eMonth] = emp.endDate.split("-");

      let paragraph;

      if (emp.employer.length === 0) {
        paragraph = `${emp.city}`;
      } else if (emp.city.length === 0) {
        paragraph = `${emp.employer}`;
      } else {
        paragraph = `${emp.employer}, ${emp.city}`;
      }

      return (
        <div key={emp.id}>
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold">{emp.position}</h4>
            <p className="text-xs text-indigo-500">
              {emp.startDate.length === 0 || emp.endDate.length === 0
                ? null
                : `${sYear} ${sMonth} - ${eYear} ${eMonth}`}
            </p>
          </div>
          <p className="text-xs text-indigo-400">{paragraph}</p>
          <p className="text-xs pt-2 break-words">{emp.description}</p>
        </div>
      );
    });

    return (
      <div className="grid grid-rows-cv-layout bg-white/90 shadow-md aspect-3/4 w-11/12 max-w-lg">
        <div className="bg-indigo-500 rounded-t-md"></div>
        <div className="px-5 pt-6 pb-3">
          <div className="flex flex-col gap-1 after:border-b-2 after:border-gray-200">
            <h2 className="text-xl text-indigo-500 font-semibold">{`${givenName} ${familyName}`}</h2>
          </div>
          <div className="h-[95%] pt-5 pb-3 grid gap-2 grid-cols-32%">
            <div className="bg-zinc-100 p-2 flex flex-col gap-2">
              <img
                src={photoUrl}
                alt="user-avatar"
                className="object-contain aspect-square p-2 rounded"
              />
              <div className="flex flex-col gap-1 after:border-b-2 after:border-gray-200">
                <h4 className="text-sm text-indigo-500 font-semibold">
                  Personal Details
                </h4>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex-items">
                  <h5 className="text-sm font-bold">Name</h5>
                  <p className="text-[10px]">{`${givenName} ${familyName}`}</p>
                </div>
                <div className="flex-items">
                  <h5 className="text-sm font-bold">Email Address</h5>
                  <p className="text-[10px]">{email}</p>
                </div>
                <div className="flex-items">
                  <h5 className="text-sm font-bold">Phone Number</h5>
                  <p className="text-[10px]">{phoneNumber}</p>
                </div>
                <div className="flex-items">
                  <h5 className="text-sm font-bold">Address</h5>
                  <p className="text-[10px]">{address}</p>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="education">
                <div className="flex flex-col gap-1 after:border-b-2 after:border-gray-200">
                  <h4 className="text-indigo-500 font-semibold">Education</h4>
                </div>
                <div className="flex flex-col gap-2">{educationList}</div>
              </div>
              <div className="employment">
                <div className="flex flex-col gap-1 after:border-b-2 after:border-gray-200">
                  <h4 className="text-indigo-500 font-semibold">Employment</h4>
                </div>
                <div className="flex flex-col gap-2">{EmploymentList}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-500 rounded-b-md"></div>
      </div>
    );
  }
}
