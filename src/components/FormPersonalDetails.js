import React, { Component } from "react";

export default class FormPersonalDetails extends Component {
  render() {
    return (
      <form>
        <div className="form-control">
          <label htmlFor="given-name">Given Name</label>
          <input type="text" name="givenName" id="given-name" />
        </div>
        <div className="form-control">
          <label htmlFor="family-name">Family Name</label>
          <input type="text" name="familyName" id="family-name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="tel" name="phoneNumber" id="phone-number" />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>
      </form>
    );
  }
}
