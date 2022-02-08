import { copyright } from "../../../helpers";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Developers = () => {
  const developerList = useSelector((state) => state.developer);
  return (
    <>
      <nav
        className="nk-navbar nk-navbar-side nk-navbar-right-side nk-navbar-lg nk-navbar-align-center nk-navbar-overlay-content"
        id="developer-nav"
      >
        <div className="nk-navbar-bg">
          <div
            className="bg-image"
            style={{
              backgroundImage: `url('https://mfiles.alphacoders.com/713/713157.jpg')`,
            }}
          ></div>
        </div>
        <div className="nano">
          <div className="nano-content">
            <div className="nk-nav-table">
              <div className="nk-nav-row">
                <a href="index.html" className="nk-nav-logo">
                  <img src="logo/logo-white.png" alt="" width="150" />
                </a>
                <h2>Games By Developers</h2>
              </div>

              <div className="nk-nav-row nk-nav-row-full nk-nav-row-center">
                <ul className="nk-nav">
                  {developerList.isLoading === true ? (
                    <li>Please Wait</li>
                  ) : (
                    <>
                      {developerList.developer.map((developer) => {
                        const { id, name, slug, games_count } = developer;
                        return (
                          <li key={id}>
                            <Link
                              to={`games/developers/${slug}/${id}`}
                              data-nav-toggle="#developer-nav"
                            >
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
                to="games/developers"
                data-nav-toggle="#developer-nav"
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

export default Developers;
