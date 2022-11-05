import logo from "./logo.svg";
import "./header.scss";

export default function Header() {
      return (
            <>
                  <div className="container">
                        <div className="header">
                              <img
                                    className="header__logo"
                                    src={logo}
                                    alt="logo"
                                    href='#footer-logo'
                              />
                              <nav>
                                    <ul className="header__list">
                                          <li className="header__item">
                                                <a
                                                      className="header__link"
                                                      href=""
                                                >
                                                      Product
                                                </a>
                                          </li>
                                          <li className="header__item">
                                                <a
                                                      className="header__link"
                                                      href=""
                                                >
                                                      Use Case
                                                </a>
                                          </li>
                                          <li className="header__item">
                                                <a
                                                      className="header__link"
                                                      href=""
                                                >
                                                      Learn
                                                </a>
                                          </li>
                                          <li className="header__item">
                                                <a
                                                      className="header__link"
                                                      href=""
                                                >
                                                      Comparison
                                                </a>
                                          </li>
                                          <li className="header__item">
                                                <a
                                                      className="header__link"
                                                      href=""
                                                >
                                                      Pricing
                                                </a>
                                          </li>
                                          <li className="header__item">
                                                <a
                                                      className="header__link"
                                                      href=""
                                                >
                                                      Contact Sales
                                                </a>
                                          </li>
                                    </ul>
                              </nav>
                              <button className="header__btn" type="button">
                                    Sign up
                              </button>
                        </div>
                  </div>
            </>
      );
}
