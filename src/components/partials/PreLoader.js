const PreLoader = () => {
  return (
    <div className="nk-preloader">
      <div
        className="nk-preloader-bg"
        style={{ "backgroundColor": "#000" }}
        data-close-frames="23"
        data-close-speed="1.2"
        data-close-sprites="/assets/images/preloader-bg.png"
        data-open-frames="23"
        data-open-speed="1.2"
        data-open-sprites="/assets/images/preloader-bg-bw.png"
      ></div>

      <div className="nk-preloader-content">
        <div>
          <img className="nk-img" src="/logo/logo-white.png" width="230" />
          <div className="nk-preloader-animation"></div>
        </div>
      </div>

      <div className="nk-preloader-skip">Skip</div>
    </div>
  );
};

export default PreLoader;