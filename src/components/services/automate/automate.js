import img from './create-img.svg'


export default function Automate() {
      return (
            <div>
                  <div className="service__bottom">
                        <div className="create__left left">
                              <h1 className="left__title">your entire workflow <span>on autopilot.</span></h1>
                              <h1 className="left__subtitle">Eliminate the busywork and focus on what matters with hundreds of Automations. Automatically assign tasks, post comments, update statuses, and sync with other tools.</h1>
                              <div className="left__replace">
                                    <h1 className="replace">REPLACES</h1>
                                    <ul className="replace__items">
                                          <li className="replace__item">
                                                <a href="/">UiPath</a></li>
                                          <li className="replace__item">
                                                <a href="/">Zapier</a></li>
                                          <li className="replace__item">
                                                <a href="/">Airtable</a></li>
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