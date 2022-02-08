import * as types from "../types";
import Axios from "axios";
import { interceptors } from "../../config/axios.config";
export const getDeveloper = () => async (dispatch) => {
  interceptors();
  dispatch({ type: types.setDeveloperRequest });
  let Developers = await Axios.get("developers", { params: { page_size: 10 } });
  dispatch({
    type: types.getDeveloperSuccess,
    payload: Developers.data.results,
  });
};
