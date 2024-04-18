import { GET_KEYWORDS } from "./keyword.action.type"


export const getKeywords = (keywords) => {
    return {
        type:GET_KEYWORDS,
        payload: keywords
    };
};