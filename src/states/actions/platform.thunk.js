import * as types from "../types";
import Axios from "axios";
import { interceptors } from "../../config/axios.config";
export const getPlatform = () => async (dispatch) => {
  interceptors();
  dispatch({ type: types.setPlatformRequest });
  let platforms = await Axios.get("platforms", { params: { page_size: 10 } });
  dispatch({
    type: types.getPlatformSuccess,
    payload: platforms.data.results,
  });
};
