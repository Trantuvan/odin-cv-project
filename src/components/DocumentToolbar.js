import React, { Component } from "react";
import { BsDownload } from "react-icons/bs";

export default class DocumentToolbar extends Component {
  render() {
    return (
      <div className="fixed top-0 inset-x-0 bg-gray-900 p-2">
        <div className="flex gap-2 justify-between items-center">
          <form className="w-[80%]">
            <input
              type="text"
              name="cvName"
              id="cv-name"
              placeholder="Untitled resume"
              className="bg-transparent text-white font-semibold focus:bg-transparent"
            />
          </form>

          <button
            className="bg-indigo-700 text-white p-1 rounded-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="button"
          >
            <BsDownload className="text-xl" />
          </button>
        </div>
      </div>
    );
  }
}
