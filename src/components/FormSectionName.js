import PropTypes from "prop-types";
import React, { Component } from "react";

export default class FormSectionName extends Component {
  static propTypes = {
    sectionName: PropTypes.string.isRequired,
  };

  render() {
    const { sectionName } = this.props;

    return (
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-medium">{sectionName}</h4>
      </div>
    );
  }
}
