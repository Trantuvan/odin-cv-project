import PropTypes from "prop-types";
import React, { Component } from "react";
import FormSectionName from "./FormSectionName";
import FormEmployment from "./FormEmployment";
import FormElementItem from "./FormElementItem";
import { GrFormAdd } from "react-icons/gr";

export default class EmploymentSection extends Component {
  static propTypes = {
    employment: PropTypes.object.isRequired,
    employments: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    pushToEmpoyments: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
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
      pushToEmpoyments,
      employments,
      employment,
      handleChange,
      handleEdit,
      handleRemove,
    } = this.props;
    const { isFormDisplayed } = this.state;

    const listArray = [];

    employments.forEach((emp) => {
      let paragraph;

      if (emp.employer.length === 0) {
        paragraph = `${emp.city}`;
      } else if (emp.city.length === 0) {
        paragraph = `${emp.employer}`;
      } else {
        paragraph = `${emp.employer}, ${emp.city}`;
      }

      const content = (
        <div>
          <h4 className="font-bold text-gray-800 truncate">{emp.position}</h4>
          <p className="text-gray-500 truncate">{paragraph}</p>
        </div>
      );

      listArray.push(
        <FormElementItem
          key={emp.id}
          index={emp.id}
          children={
            emp.position.length === 0 &&
            emp.employer.length === 0 &&
            emp.city.length === 0
              ? null
              : content
          }
          defaultText="[Employement]"
          handleRemove={handleRemove}
          handleEdit={handleEdit}
          handleFormToggle={this.handleFormToggle}
        />
      );
    });

    return (
      <>
        <FormSectionName sectionName="Employment" />
        {/* if listArray empty it will not render */}
        {listArray}
        <FormEmployment
          employment={employment}
          handleChange={handleChange}
          pushToEmpoyments={pushToEmpoyments}
          handleFormToggle={this.handleFormToggle}
          isDisplayed={isFormDisplayed}
        />
        <button
          type="button"
          className="p-1 pr-3 rounded text-gray-500 flex items-center border-[1px] mr-auto hover:bg-gray-100 hover:border-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/70"
          onClick={this.handleFormToggle}
        >
          <GrFormAdd />
          Add Employment
        </button>
      </>
    );
  }
}
