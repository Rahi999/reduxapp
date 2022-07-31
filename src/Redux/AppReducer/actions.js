import { getProductsFailure, getProductsRequest, getProductsSuccess } from "./actionsType"

export const getProductsFailureFunction = () => {
    return {
        type : getProductsFailure
    }
}

export const getProductsRequestFunction = () => {
  return {
    type : getProductsRequest
  }
}

export const getProductsSuccessFunction = (payload) => {
    return {
        type: getProductsSuccess, payload
    }
}