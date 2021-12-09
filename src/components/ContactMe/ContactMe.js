import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../images/mailz.jpeg";
import load1 from "../../images/load2.gif";
import { ScreenHeading } from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./ContactMe.scss";
import { Footer } from "../Footer/Footer";

export const ContactMe = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBoolean] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name,
        email,
        message,
      };
      setBoolean(true);
      const res = await axios.post("/contact", data);

      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBoolean(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBoolean(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>
          <a href="#" className="">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#" className="">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="#" className="">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="#" className="">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt={"image not found"} />
          </div>
          <form onSubmit={submitFormHandler}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={handleName} value={name} />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleEmail}
              value={email}
            />
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              onChange={handleMessage}
              value={message}
            />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (<b className="load">
                  <img src={load1} alt='image not responding'/>
                </b>):("")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
