import TopContacts from "./TopContacts";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import RightNav from "./RightNav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="nk-header nk-header-opaque">
        <div className="nk-contacts-top">
          <TopContacts />
        </div>

        <nav className="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide">
          <div className="container">
            <div className="nk-nav-table">
              <Link to="/" className="nk-nav-logo">
                <img src="/logo/logo-white.png" alt="" width="170" />
              </Link>

              <ul
                className="nk-nav nk-nav-right hidden-md-down d-none d-lg-block"
                
              >
                <Menu />
              </ul>

              <ul className="nk-nav nk-nav-right nk-nav-icons">
                <li className="single-icon d-lg-none">
                  <a
                    className="no-link-effect"
                    data-nav-toggle="#nk-nav-mobile"
                  >
                    <span className="nk-icon-burger">
                      <span className="nk-t-1"></span>
                      <span className="nk-t-2"></span>
                      <span className="nk-t-3"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <MobileMenu />
      <RightNav />
    </>
  );
};

export default Header;
