import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Game from "./Game";
import { getGameList } from "../../../states/actions/gameList.thunk";
import { useParams } from "react-router-dom";
const List = () => {
  let { type, slug,id } = useParams();
  const gameList = useSelector((s) => s.gameList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameList(null, type, slug,id));
  }, [type, slug,id]);

  const loadmore = (url) => {
    dispatch(getGameList(url));
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="nk-gap-4"></div>
          <h1 className="title">{slug} Games</h1>
          <div className="nk-store">
            <div className="row no-gutters">
              {gameList.isLoading == false
                ? gameList.games.map((gameL, index) => {
                    return (
                      <React.Fragment key={index}>
                        {gameL.map((gl) => {
                          const { slug, name, id, background_image, rating } =
                            gl;
                          return <Game key={id} game={gl} />;
                        })}
                      </React.Fragment>
                    );
                  })
                : "please Wait"}
            </div>
          </div>
          {gameList.isLoading == false ? (
            gameList.next != null ? (
              <>
                <div
                  className="nk-pagination nk-pagination-center parallaxed"
                  data-mouse-parallax-z="3"
                  style={{
                    transform: "translate3d(-15.5548px, 8.25293px, 0px)",
                  }}
                >
                  <a
                    onClick={() => loadmore(gameList.next)}
                    className="nk-btn nk-btn-lg nk-btn-circle"
                  >
                    Load More ...
                  </a>
                </div>
              </>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <div className="nk-gap-6"></div>
        </div>
      </div>
    </>
  );
};

export default List;
