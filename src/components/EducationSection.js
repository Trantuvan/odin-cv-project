import PropTypes from "prop-types";
import React, { Component } from "react";
import FormSectionName from "./FormSectionName";
import FormEducation from "./FormEducation";
import FormElementItem from "./FormElementItem";
import { GrFormAdd } from "react-icons/gr";

export default class EducationSection extends Component {
  static propTypes = {
    educationChange: PropTypes.func.isRequired,
    educations: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleRemove: PropTypes.func.isRequired,
  };

  state = {
    isDisplayed: true,
  };

  handleFormToggle = (evt) => {
    evt.preventDefault();

    this.setState(({ isDisplayed }) => ({
      isDisplayed: !isDisplayed,
    }));
  };

  render() {
    const { educationChange, educations, handleRemove } = this.props;
    const { isDisplayed } = this.state;
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
          handleRemove={handleRemove}
        />
      );
    });

    return (
      <>
        <FormSectionName sectionName="Education" />
        {/* if listArray empty it will not render */}
        {listArray}
        <FormEducation
          educationChange={educationChange}
          handleFormToggle={this.handleFormToggle}
          isDisplayed={isDisplayed}
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
