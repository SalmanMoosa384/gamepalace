import * as types from '../types'
import  Axios  from 'axios';
import { interceptors } from '../../config/axios.config';
export const gameType = (type)=>async(dispatch)=> {
    interceptors()
dispatch({type:types.setGameTypeRequest});   
let filters=await Axios.get(type,{params:{page:1,page_size:"1000"}});
dispatch({type:types.getGameTypeSuccess,payload:filters});    
};
