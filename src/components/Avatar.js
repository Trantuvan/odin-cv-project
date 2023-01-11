import PropTypes from "prop-types";
import React, { Component } from "react";
import defaultImg from "../imgs/default-avatar.png";

export default class Avatar extends Component {
  static propTypes = {
    photo: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  state = {
    src: defaultImg,
  };

  imgHandler = (evt) => {
    const { fileChange } = this.props;
    // *store the photo file in documentBody
    fileChange(evt);
    // *use fileReader to load photo
    const reader = new FileReader();
    reader.onload = () => {
      // *check for file load is done
      if (reader.readyState === 2) {
        this.setState({ src: reader.result });
      }
    };
    // *tell file reader to read as url
    reader.readAsDataURL(evt.target.files[0]);
  };

  browse = (evt) => {
    evt.preventDefault();
    this.fileInput.current.click();
  };

  render() {
    const { src } = this.state;
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
          src={src}
          alt="user-avatar"
          className="h-24 w-24 rounded object-cover bg-slate-200 shadow"
          onClick={this.browse}
        />
      </>
    );
  }
}
