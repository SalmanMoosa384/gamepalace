import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { gameDetail } from "../../../states/actions/gameDetail.thunk";

const GameDetail = () => {
  let { id } = useParams();
  const detail = useSelector((s) => s.gameDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameDetail(id));
  }, [id]);

  return (
    <>
      {detail.isLoading == false ? (
        <>
          <div className="nk-header-title nk-header-title-md nk-header-title-parallax nk-header-title-parallax-opacity nk-header-title-boxed">
            <div className="bg-image op-5">
              <LazyLoadImage
                effect="blur"
                src={detail.detail.background_image}
                alt=""
                className="jarallax-img"
              />
            </div>
            <div className="nk-header-table">
              <div className="nk-header-table-cell">
                <div className="container">
                  <div className="nk-header-text">
                    <div className="row text-left">
                      <div className="col-lg-8">
                        <div className="nk-gap-5 d-none + d-lg-block"></div>
                        <h1 className="nk-title">
                          {detail.detail.name_original}
                        </h1>
                        <div className="nk-gap-3 d-none + d-lg-block"></div>
                        <div className="nk-gap-5 d-none + d-lg-block"></div>
                      </div>
                      <div className="col-lg-4">
                        <aside className="nk-sidebar nk-sidebar-right">
                          <div className="nk-gap-5 d-none + d-lg-block"></div>
                          <div className="nk-gap d-lg-none"></div>
                          <table>
                            <tbody>
                              <tr>
                                <td className="va-t">
                                  <strong>Released:</strong>
                                </td>
                                <td className="va-t">
                                  {detail.detail.released}
                                </td>
                              </tr>
                              <tr>
                                <td className="va-t">
                                  <strong>Website:</strong>
                                </td>
                                <td className="va-t">
                                  <Link
                                    to={`//${detail.detail.website}`}
                                    target="_blank"
                                  >
                                    {detail.detail.website}
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="va-t">
                                  <strong>Developers:</strong>
                                </td>
                                <td className="va-t">
                                  {detail.detail.developers.map((dev) => {
                                    return (
                                      <Link
                                        key={dev.id}
                                        className="text-white"
                                        style={{ marginRight: 10 }}
                                        to={`/games/developers/${dev.slug}/${dev.id}`}
                                      >
                                        {dev.name}
                                      </Link>
                                    );
                                  })}
                                </td>
                              </tr>

                              <tr>
                                <td className="va-t">
                                  <strong>Platforms:</strong>
                                </td>
                                <td className="va-t">
                                  {detail.detail.platforms.map((pl) => {
                                    return (
                                      <Link
                                        key={pl.platform.id}
                                        className="text-white"
                                        style={{ marginRight: 10 }}
                                        to={`/games/platforms/${pl.platform.slug}/${pl.platform.id}`}
                                      >
                                        {pl.platform.name}
                                      </Link>
                                    );
                                  })}
                                </td>
                              </tr>

                              <tr>
                                <td className="va-t">
                                  <strong>Playtime:</strong>
                                </td>
                                <td className="va-t">
                                  {detail.detail.playtime} Hours
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="nk-gap-2"></div>
                          <a className="nk-btn nk-btn-circle nk-btn-3d nk-btn-color-main-1">
                            Buy Now
                          </a>
                          <div className="nk-gap-6"></div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="nk-blog-container nk-blog-container-offset">
                  <LazyLoadImage
                    className="nk-img-stretch"
                    src={detail.detail.background_image_additional}
                    alt=""
                  />
                  <div className="nk-post-text mt-0">
                    <p>{detail.detail.description_raw}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 nk-sidebar-sticky-parent">
                <aside className="nk-sidebar nk-sidebar-right nk-sidebar-sticky">
                  <div className="nk-gap-4"></div>
                  <div className="nk-widget">
                    <h4 className="nk-widget-title">Tags</h4>
                    <div>
                      <div className="nk-widget-tags">
                        {detail.detail.tags.map((tag) => {
                          return (
                            <Link
                              key={tag.id}
                              to={`/games/tags/${tag.slug}/${tag.id}`}
                            >
                              {tag.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <div className="nk-gap-6"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default GameDetail;
