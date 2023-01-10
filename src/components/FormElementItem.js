import PropTypes from "prop-types";
import React, { Component } from "react";
import { MdOutlineModeEditOutline, MdDelete } from "react-icons/md";

export default class FormElementItem extends Component {
  static propTypes = {
    children: PropTypes.element,
    defaultText: PropTypes.string,
  };

  render() {
    const { children, defaultText } = this.props;

    return (
      <div className="px-5 py-3 border-2 rounded flex justify-between items-center">
        {children === null ? defaultText : children}
        <div className="flex gap-1">
          <button className="p-1 border-[1px] rounded hover:bg-gray-100 hover:border-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/70">
            <MdDelete className="w-5 h-5" />
          </button>
          <button className="p-1 border-[1px] rounded hover:bg-gray-100 hover:border-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/70">
            <MdOutlineModeEditOutline className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }
}
