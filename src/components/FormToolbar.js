import PropTypes from "prop-types";
import React, { Component } from "react";
import { FiChevronUp, FiChevronsDown } from "react-icons/fi";

export default class FormToolbar extends Component {
  static propTypes = { sectionName: PropTypes.string.isRequired };
  state = { isOpen: true };

  render() {
    const { sectionName } = this.props;
    const { isOpen } = this.state;

    const toolbarAction =
      isOpen === true ? (
        <FiChevronUp className="text-xl" />
      ) : (
        <FiChevronsDown className="text-xl" />
      );

    return (
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-medium">{sectionName}</h4>
        <button
          className="p-1 border-[1px] rounded-md border-gray-400 hover:bg-indigo-100 hover:border-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-700"
          type="button"
        >
          {toolbarAction}
        </button>
      </div>
    );
  }
}
