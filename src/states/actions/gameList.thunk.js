import * as types from "../types";
import Axios from "axios";
import { interceptors } from "../../config/axios.config";
export const getGameList =
  (url = null, filtertype = null, slug = null, id = null) =>
  async (dispatch) => {
    if (url !== null) {
      dispatch({ type: types.setMoreGameListSuccess });
      let games = await Axios.get(url);
      dispatch({ type: types.getGameListSuccess, payload: games.data });
    } else {
      dispatch({ type: types.setGameListRequest });
      interceptors();
      let searchBy = slug;
      if (filtertype === "platforms" || filtertype === "stores") {
        searchBy = id;
      }

      let games = await Axios.get("/games", {
        params: { page_size: 10, [filtertype]: searchBy },
      });
      dispatch({ type: types.getGameListSuccess, payload: games.data });
    }
  };
