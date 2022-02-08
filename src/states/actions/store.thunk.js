import * as types from "../types";
import Axios from "axios";
import { interceptors } from "../../config/axios.config";
export const getStore = () => async (dispatch) => {
  interceptors();
  dispatch({ type: types.setStoreRequest });
  let stores = await Axios.get("stores", { params: { page_size: 10 } });
  dispatch({ type: types.getStoreSuccess, payload: stores.data.results });
};