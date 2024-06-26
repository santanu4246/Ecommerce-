import React from 'react'

const ProducerReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isloading: true,
            };

        case "SET_API_DATA":
            const featureData = action.payload.filter((elem) => elem.featured === true);
            return {
                ...state,
                isloading: false,
                products: action.payload,
                featureProducts: featureData
            };
        case "API_ERROR":
            return {
                ...state,
                isloading: false,
                isError: true,
            };

        case "SET_SINGLEPAGE_LODING":
            return {
                ...state,
                isSingleLoding: true,
            };

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoding: false,
                singleProduct: action.payload,
            }
        case "SET_SINGLEPAGE_ERROR":
            return {
                ...state,
                isSingleLoding: false,
                isError: true,
            };
        default:
            return state;

    }

}

export default ProducerReducer