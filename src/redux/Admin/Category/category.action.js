import { GET_CATEGORIES, GET_SUBCATEGORIES } from "./category.action.type"

export const getCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        payload: categories
    };
};


export const getSubCategories = (subCategories) => {
    return {
        type: GET_SUBCATEGORIES,
        payload: subCategories
    };
};