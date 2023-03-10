import PropTypes from "prop-types";
import React, { Component } from "react";
import Avatar from "./Avatar";

export default class FormPersonalDetails extends Component {
  static propTypes = {
    personalDetails: PropTypes.shape({
      givenName: PropTypes.string,
      familyName: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
      address: PropTypes.string,
      photoUrl: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  render() {
    const {
      personalDetails: {
        givenName,
        familyName,
        email,
        phoneNumber,
        address,
        photoUrl,
      },
      handleChange,
    } = this.props;

    return (
      <form>
        <div className="grid sm:grid-cols-1-4 sm:gap-4">
          <div className="form-control">
            <Avatar photoUrl={photoUrl} fileChange={handleChange} />
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-4">
            <div className="form-control">
              <label htmlFor="given-name">Given Name</label>
              <input
                type="text"
                name="givenName"
                id="given-name"
                value={givenName}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="family-name">Family Name</label>
              <input
                type="text"
                name="familyName"
                id="family-name"
                value={familyName}
                onChange={handleChange}
              />
            </div>
            <div className="form-control sm:col-span-2">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phone-number"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleChange}
          />
        </div>
      </form>
    );
  }
}
