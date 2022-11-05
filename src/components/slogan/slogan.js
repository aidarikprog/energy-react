import "./slogan.scss";
import arrow from './arrow.svg'
import tel from './tel.svg'

export default function Slogan() {
      return (
            <div className="container-wide">
                  <div className="slogan">
                        <div className="slogan__left">
                              <h1 className="slogan__title">
                                    stop <span>selling yourself.</span>
                              </h1>
                              <h3 className="slogan__subtitle">
                                    There is more in life than prospection. Just
                                    focus on your craft and let us take care of
                                    the rest
                              </h3>
                        </div>
                        <div className="slogan__right right">
                              <div className="right__top">
                                    <img src={arrow} alt="/" />
                                    <div className="right__title">dedicated landing page</div>
                                    <div className="right__subtitle">When onboarding on snikpic, you will have your own dedicated and shareable landing page optimized for conversion.</div>
                              </div>
                              <div className="right__bottom">
                                    <img src={tel} alt="/" />
                                    <div className="right__title">purchasable prospect</div>
                                    <div className="right__subtitle">Use snikpic’s experience running ads and only buy from us prospect who have shown direct interest in your profile. We take care of the rest</div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
