import "./price.scss";
import right__back from './price-back.svg'
import right__front from './price-front.svg'

export default function Price() {
    return (
        <div className="container">
            <div className="price">
            <div className="price__left">
                <div className="price__title">
                    one simple <span>pricing.</span>
                </div>
                <div className="price__power power">
                    <h1 className="power__1 ps">Unlimited features</h1>
                    <h1 className="power__2 ps">Unlimited members</h1>
                    <h1 className="power__3 ps">Unlimited workflows</h1>
                    <h1 className="power__4 ps">Unlimited calendars</h1>
                    <h1 className="power__5 ps">Unlimited meeting</h1>
                </div>
                <button className="price__btn" type="button">
                    Sign up
                </button>
            </div>
            <div className="price__right">
                <div className="price__value">
                    {/* <img className="back" src={right__back} alt="/" /> */}
                    <img className="front" src={right__front} alt="/" />
                </div>
            </div>
        </div>
        </div>
        
    );
}
