import { GET_CATEGORIES } from "./category.action.type"

export const getCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        payload: categories
    };
};