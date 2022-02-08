import { LazyLoadImage } from 'react-lazy-load-image-component';

const PageTitle = ({ image, backtitle, title, subtitle }) => {
  return (
    <>
      <div className="nk-header-title nk-header-title-parallax-opacity">
        <div className="bg-image">
          
         <LazyLoadImage src={image} effect="blur"/>
        </div>
        <div className="nk-header-table">
          <div className="nk-header-table-cell">
            <div className="container">
              <h2 className="nk-title-back op-1">Game Palace</h2>
              <h1 className="nk-title">Welcome to Game Palace</h1>
              <h2 className="nk-sub-title">Enjoy playing game with us.</h2>
              <div className="nk-gap-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
