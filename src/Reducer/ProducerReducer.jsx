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
                isloading:false,
                products:action.payload,
                featureProducts:featureData
            };
        case "API_ERROR":
            return {
                ...state,
                isloading: false,
                isError: true,
            };
        default:
            return state;

    }

}

export default ProducerReducer