import { getLoginFailure, getLoginRequest, getLoginSuccess } from "./actionsType"

export const getLoginRequestFunction = () => {
    return {
        type: getLoginRequest
    }
}

export const getLoginFailureFunction = () => {
    return {
        type : getLoginFailure
    }
}

export const getLoginSuccessFunction = (payload) => {
    return {
        type : getLoginSuccess, payload
    }
}