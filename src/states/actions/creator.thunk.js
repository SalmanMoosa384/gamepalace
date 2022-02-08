import * as types from "../types";
import Axios from "axios";
import { interceptors } from "../../config/axios.config";
export const getCreator = () => async (dispatch) => {
  interceptors();
  dispatch({ type: types.setCreatorRequest });
  let creators = await Axios.get("creators", { params: { page_size: 10 } });
  dispatch({ type: types.getCreatorSuccess, payload: creators.data.results });
};