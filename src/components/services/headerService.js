import "./services.scss";
import { NavLink } from "react-router-dom";

export default function HeadService() {
      return (
            <div className="back">
                  <div className="container-wide">
                        <div className="service">
                              <nav className="service__nav">
                                    <ul className="service__items">
                                          <li className="service__item">
                                                <NavLink
                                                      to="/"
                                                      end
                                                      className="service__link"
                                                >
                                                      create
                                                </NavLink>
                                          </li>
                                          <li className="service__item">
                                                <NavLink
                                                      to="manage"
                                                      className="service__link"
                                                >
                                                      manage
                                                </NavLink>
                                          </li>
                                          <li className="service__item">
                                                <NavLink
                                                      to="automate"
                                                      className="service__link"
                                                >
                                                      automate
                                                </NavLink>
                                          </li>
                                          <li className="service__item">
                                                <NavLink
                                                      to="chat"
                                                      className="service__link"
                                                >
                                                      chat
                                                </NavLink>
                                          </li>
                                          <li className="service__item">
                                                <NavLink
                                                      to="delegate"
                                                      className="service__link"
                                                >
                                                      delegate
                                                </NavLink>
                                          </li>
                                    </ul>
                              </nav>
                        </div>
                  </div>
            </div>
      );
}
