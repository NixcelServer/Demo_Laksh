import * as types from "./category.action.type";

const initalState = {

    categories:[],
};

export const categoryReducer = (state = initalState ,{type,payload}) =>
{
    switch(type){
        case types.GET_CATEGORIES:
            return {...state, categories:payload};
            default:
                return state;
    }
}