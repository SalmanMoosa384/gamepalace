const TopContacts = () => {
  return (
    <>
      <div className="container">
        <div className="nk-contacts-left">
          <div className="nk-navbar">
            <ul className="nk-nav">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Privacy</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nk-contacts-right">
          <div className="nk-navbar">
            <ul className="nk-nav">
              <li>
                <a>
                  <span className="ion-social-twitter"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="ion-social-dribbble-outline"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="ion-social-instagram-outline"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="ion-social-pinterest"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContacts;
