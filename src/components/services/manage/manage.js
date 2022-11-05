import img from './create-img.svg'



export default function Manage() {
      return (
            <div>
                  <div className="service__bottom">
                        <div className="create__left left">
                              <h1 className="left__title">transparency over all the <span>work ahead of you.</span></h1>
                              <h1 className="left__subtitle">Plan, track, and manage all your work with project management that flexes to your team's needs.</h1>
                              <div className="left__replace">
                                    <h1 className="replace">REPLACES</h1>
                                    <ul className="replace__items">
                                          <li className="replace__item">
                                                <a href="/">Asana</a></li>
                                          <li className="replace__item">
                                                <a href="/">Monday</a></li>
                                    </ul>
                              </div>
                              <button className="left__btn" type="button">
                                    Sign up
                              </button>
                        </div>
                        <div>
                              <img className="create__right" src={img} alt="/" />
                        </div>
                  </div>
            </div>
      );
}