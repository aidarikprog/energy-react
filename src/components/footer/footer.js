import './footer.scss'

import footerLogo from "./footer-logo.svg";
import insta from "./instagram-logo.svg";
import linked from "./linkedin-logo.svg";
import fb from "./facebook-logo.svg";

export default function Footer() {
      return (
            <footer className="footer">
                  <div className="container">
                        <div className="footer__content">
                              <div className="footer-left">
                                    <div className='footer__logo'>
                                          <a href="footer-logo"><img src={footerLogo} alt="logo" /></a>
                                    </div>
                                    <div>
                                          <ul className='footer__items'>
                                                <li className='footer__item'>
                                                      <a  className='footer__link' href="http://www.facebook.com.vn/">
                                                            <img src={fb} alt="logo" />
                                                      </a>
                                                </li>
                                                <li className='footer__item'>
                                                      <a className='footer__link' href="https://www.linkedin.com/">
                                                            <img
                                                                  src={linked}
                                                                  alt="logo"
                                                            />
                                                      </a>
                                                </li>
                                                <li className='footer__item'>
                                                      <a className='footer__link' href="https://www.instagram.com/">
                                                            <img src={insta} alt="logo" />
                                                      </a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                              <div className="footer__right">
                                    <div className='footer__column menu'>
                                          <ul className='menu__items'> 
                                                <li className='menu__item'>
                                                      <a className='menu__link' href="#">About us</a>
                                                </li>
                                                <li className='menu__item'>
                                                      <a className='menu__link' href="#">Blog</a>
                                                </li>
                                          </ul>
                                    </div>
                                    <div className='footer__column menu'>
                                          <ul className='menu__items'>
                                                <li className='menu__item'>
                                                      <a className='menu__link' href="#">Legal</a>
                                                </li>
                                                <li className='menu__item'>
                                                      <a className='menu__link' href="#">Privacy Policy</a>
                                                </li>
                                                <li className='menu__item'>
                                                      <a className='menu__link' href="#">Terms and conditions</a>
                                                </li>
                                          </ul>
                                    </div>
                                    <div className='footer__column menu'>
                                          <ul className='menu__items'>
                                                <li className='menu__item'>
                                                      <a className='menu__link' href="#">Help</a>
                                                </li>
                                                <li className='menu__item'>
                                                      <a className='menu__link' href="#">Contact us</a>
                                                </li>
                                                
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className='small'>
                        <p>S SRL - VAT BE0729.842.450 - contact@s.io - Avenue Armand Huysmans 157,1050 Bruxelies</p>
                  </div>
            </footer>
      );
}
