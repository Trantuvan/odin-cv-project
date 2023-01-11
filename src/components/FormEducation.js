import PropTypes from "prop-types";
import React, { Component } from "react";
import { BsCheck2 } from "react-icons/bs";
export default class FormEducation extends Component {
  static propTypes = {
    pushToEducations: PropTypes.func.isRequired,
    handleFormToggle: PropTypes.func.isRequired,
    isDisplayed: PropTypes.bool.isRequired,
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { handleFormToggle, pushToEducations } = this.props;
    pushToEducations();
    handleFormToggle(evt);
  };

  render() {
    const {
      handleChange,
      isDisplayed,
      education: { education, school, city, startDate, endDate, description },
    } = this.props;

    return (
      <>
        {isDisplayed && (
          <form
            className="px-2 py-3 border-2 rounded-md"
            onSubmit={this.handleSubmit}
          >
            <div className="form-control">
              <label htmlFor="education">Education</label>
              <input
                type="text"
                name="education"
                id="education"
                value={education}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="school">School</label>
              <input
                type="text"
                name="school"
                id="school"
                value={school}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="form-control">
                <label htmlFor="start-date">Start date</label>
                <input
                  type="date"
                  name="startDate"
                  id="start-date"
                  value={startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="end-date">End date</label>
                <input
                  type="date"
                  name="endDate"
                  id="end-date"
                  value={endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </div>
            <div className="form-control items-end mt-1">
              <button
                type="submit"
                className="pl-1 pr-3 py-1 flex gap-1 items-center rounded text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <BsCheck2 />
                Done
              </button>
            </div>
          </form>
        )}
      </>
    );
  }
}
