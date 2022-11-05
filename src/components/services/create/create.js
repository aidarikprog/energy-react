import img from './create-img.svg'


export default function Create() {
      return (
            <div>
                  <div className="service__bottom">
                        <div className="create__left left">
                              <h1 className="left__title">all your creative tasks <span>simplified with AI.</span></h1>
                              <h1 className="left__subtitle">Get content ideas, generate captions that respects brand’s tone of voice, design and plan your publications all in one place</h1>
                              <div className="left__replace">
                                    <h1 className="replace">REPLACES</h1>
                                    <ul className="replace__items">
                                          <li className="replace__item">
                                                <a href="/">Feedly</a></li>
                                          <li className="replace__item">
                                                <a href="/">Canva</a></li>
                                          <li className="replace__item">
                                                <a href="/">Copy.ai</a></li>
                                          <li className="replace__item">
                                                <a href="/">Hootsuite</a></li>
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