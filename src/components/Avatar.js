import PropTypes from "prop-types";
import React, { Component } from "react";
export default class Avatar extends Component {
  static propTypes = {
    photoUrl: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  imgHandler = (evt) => {
    const { fileChange } = this.props;
    fileChange(evt);
  };

  browse = (evt) => {
    evt.preventDefault();
    this.fileInput.current.click();
  };

  render() {
    const { photoUrl } = this.props;
    return (
      <>
        <label htmlFor="photo">Photo</label>
        <input
          className="hidden"
          type="file"
          name="photo"
          id="photo"
          accept="image/*"
          ref={this.fileInput}
          onChange={this.imgHandler}
        />
        <img
          src={photoUrl}
          alt="user-avatar"
          className="h-24 w-24 rounded object-cover bg-slate-200 shadow"
          onClick={this.browse}
        />
      </>
    );
  }
}
