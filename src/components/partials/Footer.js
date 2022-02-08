import { copyright } from "../../helpers";
const Footer = () => {
  return (
    <footer className="nk-footer nk-footer-parallax nk-footer-parallax-opacity">
      <img
        className="nk-footer-top-corner"
        src="/assets/images/footer-corner.png"
        alt=""
      />

      <div className="container">
        <div className="nk-gap-2"></div>
        <div className="nk-footer-logos">
          <a target="_blank">
            <img
              className="nk-img"
              src="logo/logo-white.png"
              alt=""
              width="200"
            />
          </a>
          <a target="_blank">
            <img
              className="nk-img"
              src="/assets/images/footer-logo-yp3.png"
              alt=""
              width="120"
            />
          </a>
          <a target="_blank">
            <img
              className="nk-img"
              src="/assets/images/footer-logo-pegi-18.png"
              alt=""
              width="46"
            />
          </a>
          <a target="_blank">
            <img
              className="nk-img"
              src="/assets/images/footer-logo-18-restricted.png"
              alt=""
              width="160"
            />
          </a>
        </div>
        <div className="nk-gap"></div>

        <p>{copyright}</p>

        <div className="nk-gap-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
