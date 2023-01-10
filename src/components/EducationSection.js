import PropTypes from "prop-types";
import React, { Component } from "react";
import FormSectionName from "./FormSectionName";
import FormEducation from "./FormEducation";
import { GrFormAdd } from "react-icons/gr";

export default class EducationSection extends Component {
  static propTypes = {
    educationChange: PropTypes.func.isRequired,
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
    const { educationChange } = this.props;
    const { isDisplayed } = this.state;
    return (
      <>
        <FormSectionName sectionName="Education" />
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
