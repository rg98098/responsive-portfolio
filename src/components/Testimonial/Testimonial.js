import React from "react";
import OwlCarousel from "react-owl-carousel";
import { ScreenHeading } from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import shape from "../../assets/Testimonial/shape-bg.png";
import "./Testimonial.scss";

export const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin:0,
    nav: true,
    animateIn : "bounceInRight",
    animateOut : "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1, // 1 column
      },
      768: {
        items: 1, // 1 column
      },
      1000: {
        items: 3, // 3 column
      }
    }
  }

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require ("../../assets/Testimonial/lady.png")} alt='no internet connection'/>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require ("../../assets/Testimonial/mike.png")} alt='no internet connection'/>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require ("../../assets/Testimonial/lady.png")} alt='no internet connection'/>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"/>
                      </li>
                      <li>
                        <i className="fa fa-star"/>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require ("../../assets/Testimonial/lady.png")} alt='no internet connection'/>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
};
