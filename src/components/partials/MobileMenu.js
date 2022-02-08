import { useDispatch } from "react-redux";
import { getCreator } from "../../states/actions/creator.thunk";
import { getDeveloper } from "../../states/actions/developer.thunk";
import { getGenre } from "../../states/actions/genre.thunk";
import { getPlatform } from "../../states/actions/platform.thunk";
import { getPublisher } from "../../states/actions/publisher.thunk";
import { getStore } from "../../states/actions/store.thunk";
import { getTag } from "../../states/actions/tag.thunk";
import { Link } from "react-router-dom";
const MobileMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        id="nk-nav-mobile"
        className="nk-navbar nk-navbar-side nk-navbar-left-side nk-navbar-overlay-content d-lg-none"
      >
        <div className="nano">
          <div className="nano-content">
            <Link to="/" className="nk-nav-logo">
              <img src="/logo/logo-white.png" alt="" width="90" />
            </Link>
            <div className="nk-navbar-mobile-content">
              <ul className="nk-nav">
                <li>
                  <a
                    href="#"
                    onClick={() => dispatch(getCreator())}
                    className="no-link-effect"
                    data-nav-toggle="#creator-nav"
                  >
                    Creators
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => dispatch(getDeveloper())}
                    className="no-link-effect"
                    data-nav-toggle="#developer-nav"
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => dispatch(getGenre())}
                    className="no-link-effect"
                    data-nav-toggle="#genre-nav"
                  >
                    Genres
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => dispatch(getPlatform())}
                    className="no-link-effect"
                    data-nav-toggle="#platform-nav"
                  >
                    Platforms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => dispatch(getPublisher())}
                    className="no-link-effect"
                    data-nav-toggle="#publisher-nav"
                  >
                    Pubishers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => dispatch(getStore())}
                    className="no-link-effect"
                    data-nav-toggle="#store-nav"
                  >
                    Stores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => dispatch(getTag())}
                    className="no-link-effect"
                    data-nav-toggle="#tag-nav"
                  >
                    Tags
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
