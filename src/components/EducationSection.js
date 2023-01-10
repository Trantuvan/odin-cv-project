import PropTypes from "prop-types";
import React, { Component } from "react";
import FormSectionName from "./FormSectionName";
import FormEducation from "./FormEducation";
import FormElementItem from "./FormElementItem";
import { GrFormAdd } from "react-icons/gr";

export default class EducationSection extends Component {
  static propTypes = {
    pushToEducations: PropTypes.func.isRequired,
    educations: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
  };

  state = {
    isFormDisplayed: true,
  };

  handleFormToggle = (evt) => {
    evt.preventDefault();

    this.setState(({ isFormDisplayed }) => ({
      isFormDisplayed: !isFormDisplayed,
    }));
  };

  render() {
    const {
      pushToEducations,
      educations,
      handleRemove,
      handleEdit,
      education,
      handleChange,
    } = this.props;
    const { isFormDisplayed, isElementDisplayed } = this.state;
    const listArray = [];

    educations.forEach((edu) => {
      let paragraph;

      if (edu.school.length === 0) {
        paragraph = `${edu.city}`;
      } else if (edu.city.length === 0) {
        paragraph = `${edu.school}`;
      } else {
        paragraph = `${edu.school}, ${edu.city}`;
      }

      const content = (
        <div>
          <h4 className="font-bold text-gray-800 truncate">{edu.education}</h4>
          <p className="text-gray-500 truncate">{paragraph}</p>
        </div>
      );

      listArray.push(
        <FormElementItem
          key={edu.id}
          index={edu.id}
          children={
            edu.education.length === 0 &&
            edu.school.length === 0 &&
            edu.city.length === 0
              ? null
              : content
          }
          defaultText="[Education]"
          isElementDisplayed={isElementDisplayed}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
          handleFormToggle={this.handleFormToggle}
        />
      );
    });

    return (
      <>
        <FormSectionName sectionName="Education" />
        {/* if listArray empty it will not render */}
        {listArray}
        <FormEducation
          education={education}
          handleChange={handleChange}
          pushToEducations={pushToEducations}
          handleFormToggle={this.handleFormToggle}
          handleElemToggle={this.handleElemToggle}
          isDisplayed={isFormDisplayed}
        />
        <button
          type="button"
          className="p-1 pr-3 rounded text-gray-500 flex items-center border-[1px] mr-auto hover:bg-gray-100 hover:border-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/70"
          onClick={this.handleFormToggle}
        >
          <GrFormAdd />
          Add education
        </button>
      </>
    );
  }
}
