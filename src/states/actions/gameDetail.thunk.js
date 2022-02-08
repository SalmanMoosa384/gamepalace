import { interceptors } from "../../config/axios.config";
import * as types from "../types"
import axios from "axios";
export const gameDetail = (id)=>async(dispatch) => {
    interceptors();
    dispatch({type:types.setGameDetailRequest});
    const detail=await axios.get("games/"+id); 
    dispatch({type:types.getGameDetailSuccess,payload:detail.data});
};
