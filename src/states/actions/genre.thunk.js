import * as types from "../types";
import Axios from "axios";
import { interceptors } from "../../config/axios.config";
export const getGenre = () => async (dispatch) => {
  interceptors();
  dispatch({ type: types.setGenreRequest });
  let genres = await Axios.get("genres", { params: { page_size: 10 } });
  dispatch({ type: types.getGenreSuccess, payload: genres.data.results });
};
