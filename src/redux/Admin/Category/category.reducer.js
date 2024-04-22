import * as types from "./category.action.type";

const initalState = {

    categories: [],
    subCategories: [],
};

export const categoryReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case types.GET_CATEGORIES:
            return { ...state, categories: payload };

        case types.GET_SUBCATEGORIES:
            return { ...state, subCategories: payload };

        default:
            return state;
    }
}