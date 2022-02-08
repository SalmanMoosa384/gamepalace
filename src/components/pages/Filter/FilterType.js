import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { gameType } from "../../../states/actions/gameType.thunk";
import { useEffect } from "react";

const FilterType = () => {
  let { type } = useParams();
  const dispatch = useDispatch();
  const types = useSelector((s) => s.gameType);
  useEffect(() => {
    dispatch(gameType(type));
  }, [type]);

  return (
    <>
      <div className="nk-gap-4"></div>
      <div className="nk-box  text-white">
        <div className="nk-gap-4"></div>
        <div className="container">
          <div className="text-left">
            <h3 className="nk-title-back">{type}</h3>
            <h2 className="nk-title h1">Filter games by {type}</h2>
            <div className="nk-title-sep-icon">
              <span className="icon">
                <span className="ion-paper-airplane"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="nk-gap-4"></div>
      </div>
      <div className="nk-box bg-dark-1">
        <div className="nk-gap-2"></div>
        <div className="container ">
          <div className="nk-widget">
            <h4 className="nk-widget-title">All {type} here</h4>
            <div>
              <div className="nk-widget-tags">
                {types.isLoading === true ? (
                  "Please Wait..."
                ) : (
                  <>
                    {types.filter.data.results.map((r) => {
                      return (
                        <Link key={r.id} to={`/games/${type}/${r.slug}`}>
                          {r.name}
                        </Link>
                      );
                    })}
                  </>
                )}
              </div>

              <div className="nk-gap-5"></div>
            </div>
          </div>
        </div>
        <div className="nk-gap-5"></div>
      </div>
    </>
  );
};

export default FilterType;
