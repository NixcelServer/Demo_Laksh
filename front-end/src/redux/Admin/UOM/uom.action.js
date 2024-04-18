import { GET_UOM } from "./uom.action.type";



export const getUOM = (uom) => {
    return {
        type:GET_UOM,
        payload: uom
    };
};