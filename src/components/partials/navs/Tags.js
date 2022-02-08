import { copyright } from "../../../helpers";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';
const Tags = () => {
  const tagList = useSelector((state) => state.tag);

  return (
    <>
      <nav
        className="nk-navbar nk-navbar-side nk-navbar-right-side nk-navbar-lg nk-navbar-align-center nk-navbar-overlay-content"
        id="tag-nav"
      >
        <LazyLoad height={200} offset={200}>
        <div className="nk-navbar-bg">
        <div className="bg-image" style={{backgroundImage: `url('https://www.teahub.io/photos/full/208-2086381_4k-game-wallpaper-for-mobile.jpg')`}}></div>
       </div>
        </LazyLoad>
        <div className="nano">
          <div className="nano-content">
            <div className="nk-nav-table">
              <div className="nk-nav-row">
                <a href="index.html" className="nk-nav-logo">
                  <img src="logo/logo-white.png" alt="" width="150" />
                </a>
                <h2>Games By Tags</h2>
              </div>

              <div className="nk-nav-row nk-nav-row-full nk-nav-row-center">
                <ul className="nk-nav">
                  {tagList.isLoading === true ? (
                    <li>Please Wait</li>
                  ) : (
                    <>
                      {tagList.tag.map((tag) => {
                        const { id, name, slug, games_count } = tag;
                        return (
                          <li key={id}>
                            <Link to={`games/tags/${slug}/${id}`} data-nav-toggle="#tag-nav">
                              {name} <small>({games_count})</small>
                            </Link>
                          </li>
                        );
                      })}
                    </>
                  )}
                </ul>
              </div>
              <Link
                to="games/tags"
                data-nav-toggle="#tag-nav"
                className="nk-btn link-effect-4 no-link-effect nk-btn-bg-white text-black nk-btn-color-dark-1"
              >
                View more
              </Link>

              <div className="nk-nav-row">
                <div className="nk-nav-footer">{copyright}</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Tags;
