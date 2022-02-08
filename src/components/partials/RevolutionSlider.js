import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { loadScript } from "../../helpers";

export const RevolutionSlider = ({ slide }) => {
  useEffect(() => {
    loadScript("/assets/js/rslider.js", "rslider");
  },[]);

  return (
    <>
      <div className="mnt-80">
        <div
          id="rev_slider_50_1_wrapper"
          className="rev_slider_wrapper fullscreen-container"
          data-alias="photography-carousel48"
          style={{ padding: "0px" }}
        >
          <div
            id="rev_slider_50_1"
            className="rev_slider fullscreenbanner"
            style={{ display: "none" }}
            data-version="5.0.7"
          >
            <ul>
              {slide.map((sl, index) => {
                return (
                  <li
                    key={index}
                    data-index="rs-185"
                    data-transition="slideoverhorizontal"
                    data-slotamount="7"
                    data-easein="default"
                    data-easeout="default"
                    data-masterspeed="1500"
                    data-thumb={sl.image}
                    data-rotate="0"
                    data-saveperformance="off"
                  >
                    <LazyLoadImage
                      src={sl.image}
                      alt="" effect="blur" width="100%"
                      data-bgposition="center center"
                      data-bgfit="cover"
                      data-bgrepeat="no-repeat"
                      className="rev-slidebg"
                      data-no-retina
                    />
                  </li>
                );
              })}
            </ul>
            <div
              className="tp-bannertimer tp-bottom"
              style={{ visibility: "hidden !important" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevolutionSlider;