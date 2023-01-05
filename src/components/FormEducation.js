import PropTypes from "prop-types";
import React, { Component } from "react";
import uniqid from "uniqid";
import { BsCheck2 } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";

export default class FormEducation extends Component {
  // static propTypes = {
  //   education: PropTypes.shape({
  //     education: PropTypes.string,
  //     school: PropTypes.string,
  //     city: PropTypes.string,
  //     startDate: PropTypes.string,
  //     endDate: PropTypes.string,
  //     description: PropTypes.string,
  //   }).isRequired,
  //   handleChange: PropTypes.func.isRequired,
  // };

  state = {
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

  educationChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState(({ education }) => ({
      education: { ...education, [name]: value },
    }));
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { educationChange } = this.props;
    educationChange(this.state.education);

    // *clearing form controlled input field
    this.setState({
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
  };

  render() {
    const {
      education: { education, school, city, startDate, endDate, description },
    } = this.state;

    return (
      <form
        className="px-4 py-6 border-2 rounded-md"
        onSubmit={this.handleSubmit}
      >
        <div className="form-control">
          <label htmlFor="education">Education</label>
          <input
            type="text"
            name="education"
            id="education"
            value={education}
            onChange={this.educationChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            value={school}
            onChange={this.educationChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={this.educationChange}
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
              onChange={this.educationChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="end-date">End date</label>
            <input
              type="date"
              name="endDate"
              id="end-date"
              value={endDate}
              onChange={this.educationChange}
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="description"
            value={description}
            onChange={this.educationChange}
          />
        </div>
        <div className="flex gap-2 items-end ml-auto space-y-2">
          <button
            type="button"
            className="border-[1px] p-1 border-gray-300 rounded hover:bg-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <BiTrash className="text-2xl" />
          </button>
          <button
            type="submit"
            className="pl-1 pr-3 py-1 flex gap-1 items-center rounded text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <BsCheck2 />
            Done
          </button>
        </div>
      </form>
    );
  }
}
