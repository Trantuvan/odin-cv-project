import React, { Component } from "react";
import { BsDownload } from "react-icons/bs";

export default class DocumentToolbar extends Component {
  render() {
    return (
      <div className="fixed top-0 inset-x-0 bg-midnight p-2 flex items-center">
        <form className="mx-auto">
          <input
            type="text"
            name="cvName"
            id="cv-name"
            placeholder="Untitled resume"
            className="bg-transparent text-white font-semibold"
          />
        </form>
        <button
          className="bg-purple text-white p-1 rounded-[3px] hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="button"
        >
          <BsDownload className="text-lg" />
        </button>
      </div>
    );
  }
}
