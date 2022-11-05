import "./main.scss";
import logo1 from "./site_logo1.svg";
import logo2 from "./site_logo2.svg";
import logo3 from "./site_logo3.svg";
import logo_right from "./main_right.svg";
import rating from "./rating.svg";

export default function Main() {
      return (
            <div className="container">
                  <div className="main">
                        <div className="main__item">
                              <h1 className="main__title">
                                    your agency.
                                    <span>
                                          <br /> in a box.
                                    </span>
                              </h1>
                              <h1 className="main__subtitle">
                                    All of your work in one place. And much more
                              </h1>
                              <input
                                    className="main__input"
                                    type="text"
                                    placeholder="Enter your email address"
                              />
                              <div className="main__form">
                                    <button className="main__btn" type="button">
                                          Sign up
                                    </button>
                                    <div className="main__beta">
                                          AND BE PART OF
                                          <br />
                                          THE CLOSED BETA
                                    </div>
                              </div>
                              <div className="main__reviews review">
                                    <div className="review__rating">
                                          <img src={rating} alt="rating" />
                                          <h1 className="review__title">
                                                Based on 100+ marketers reviews
                                                on
                                          </h1>
                                    </div>
                                    <div className="review__site">
                                          <img src={logo1} alt="logo" />
                                          <img src={logo2} alt="logo" />
                                          <img src={logo3} alt="logo" />
                                    </div>
                              </div>
                        </div>
                        <div className="main__item-right">
                              <img src={logo_right} alt="logo_right" />
                        </div>
                  </div>
            </div>
      );
}
