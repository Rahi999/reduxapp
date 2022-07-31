import { getProductsFailure, getProductsRequest, getProductsSuccess } from "./actionsType"

const initState = {
    products: [],
    isLoading: false,
    isError : false
}

export const reducer = (state=initState, {type,payload}) => {
   switch(type) {
    case getProductsRequest : {
        return {
            ...state,
            isLoading:true,
            isError: false
        }

    }
    case getProductsFailure : {
        return {
            ...state,
            isLoading: false,
            isError: true
        }

    }
    case getProductsSuccess : {
       return {
        ...state,
        isLoading: false,
        isError: false,
        products: [...payload]
       }

    }

    default: 
    return state
   }
}