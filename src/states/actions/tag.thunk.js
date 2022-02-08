import * as types from "../types";
import Axios from "axios";
import { interceptors } from "../../config/axios.config";
export const getTag = () => async (dispatch) => {
  interceptors();
  dispatch({ type: types.setTagRequest });
  let tags = await Axios.get("tags", { params: { page_size: 10 } });
  dispatch({ type: types.getTagSuccess, payload: tags.data.results });
};