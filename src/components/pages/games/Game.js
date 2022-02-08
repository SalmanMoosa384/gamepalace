import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Game = ({ game }) => {
  return (
    <>
      <div className="col-sm-6 col-lg-4">
        <div className="nk-product" data-mouse-parallax-z="2">
          <div>
            <div
              className="nk-carousel-3"
              data-size="1"
              data-mouse-parallax-z="3"
            >
              <div className="nk-carousel-inner nk-popup-gallery">
                <div>
                  <div>
                    <LazyLoadImage effect="blur"
                      style={{ height: "200px" }}
                      className="nk-img-stretch"
                      src={game.background_image}
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="nk-product-title h5" data-mouse-parallax-z="1">
              <a href="store-product.html">{game.name}</a>
            </h2>

            <span className="nk-product-rating">
              <span
                className="nk-product-rating-front"
                style={{ "width":game.rating*20+"%"}}
              >
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              <span className="nk-product-rating-back" style={{ "width":game.rating*20+"%"}}>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
            </span>

            <div className="nk-product-bottom">
              <div>
                <Link to={`/game/detail/${game.id}`}>View Detail</Link>
                <a href="#">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
