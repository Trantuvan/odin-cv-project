import React, { Component } from "react";
import { BsDownload } from "react-icons/bs";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-midnight p-2 flex items-center">
        <form className="mx-auto">
          <input
            type="text"
            name="cvName"
            id="cv-name"
            placeholder="Untitled resume"
            className="bg-midnight text-white font-semibold"
          />
        </form>
        <button className="bg-purple text-white p-1 rounded-[3px]">
          <BsDownload className="text-lg" />
        </button>
      </div>
    );
  }
}
