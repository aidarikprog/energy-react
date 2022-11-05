import "./clients.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data";
import photo from './photo.jpg'

export default function Clients() {
      const settings = {
            dots: true,
            infinite: true,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,
      };
      return (
            <div className="slider">
                  <div className="container">
                  <Slider {...settings}>
                              {data.map((e) => ( 
                                    <div key={e.id} className="card">
                                          {/* <div className="card__photo"> */}
                                                {/* <img className='card__img'
                                                      src={photo}
                                                      alt={e.title}
                                                /> */}
                                          {/* </div> */}
                                          <div className="card__content">
                                                {/* <img className='card__img'
                                                      src={photo}
                                                      alt={e.title}
                                                /> */}
                                                <h1 className="card__name">
                                                      {e.name}
                                                </h1>
                                                <p className="card__text">
                                                      {e.text}
                                                </p>
                                          </div>
                                    </div>
                              )
                              )}
                  </Slider>
            </div>
            </div>
            
      );
}
