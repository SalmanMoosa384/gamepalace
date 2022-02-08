import * as types from "../types";
import Axios from "axios";
import { interceptors } from "../../config/axios.config";
export const getPublisher = () => async (dispatch) => {
  interceptors();
  dispatch({ type: types.setPublisherRequest });
  let publishers = await Axios.get("publishers", { params: { page_size: 10 } });
  dispatch({ type: types.getPublisherSuccess, payload: publishers.data.results });
};