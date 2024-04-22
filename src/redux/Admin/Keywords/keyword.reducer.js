import * as types from "./keyword.action.type";

const initalState = {

    keywords:[],
};

export const keywordReducer = (state = initalState ,{type,payload}) =>
{
    switch(type){
        case types.GET_KEYWORDS:
            return {...state, keywords:payload};
            default:
                return state;
    }
}