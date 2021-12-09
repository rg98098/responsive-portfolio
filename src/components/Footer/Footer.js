import React from 'react'
import ScrollService from "../../utilities/ScrollService";
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
