import * as types from '../types'

const initialState={isLoading:true,detail:[]};

export const gameDetail=(state=initialState,action)=>{
    switch (action.type) {
        case types.setGameDetailRequest:
            return initialState;
        case types.getGameDetailSuccess:
            return {isLoading:false,detail:action.payload}
        default: return {...state};
    }
}