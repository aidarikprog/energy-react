import img from './create-img.svg'


export default function Delegate() {
      return (
            <div>
                  <div className="service__bottom">
                        <div className="create__left left">
                              <h1 className="left__title">find the right teammates to <span>get things done.</span></h1>
                              <h1 className="left__subtitle">Access the largest network of marketing professional to delegate your tasks and automatically orchestrate payment across teams and clients</h1>
                              <div className="left__replace">
                                    <h1 className="replace">REPLACES</h1>
                                    <ul className="replace__items">
                                          <li className="replace__item">
                                                <a href="/">Upwork</a></li>
                                          <li className="replace__item">
                                                <a href="/">Malt</a></li>
                                          <li className="replace__item">
                                                <a href="/">Fiverr</a></li>
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