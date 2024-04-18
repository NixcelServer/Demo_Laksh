import * as types from "./uom.action.type";

const initalState = {

    uoms:[],
};

export const uomReducer = (state = initalState ,{type,payload}) =>
{
    switch(type){
        case types.GET_UOM:
            return {...state, uoms:payload};
            default:
                return state;
    }
}