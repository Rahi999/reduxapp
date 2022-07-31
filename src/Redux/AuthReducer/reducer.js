import { loadData, saveData } from "../../utils/LocalStorage"
import { getLoginFailure, getLoginRequest, getLoginSuccess } from "./actionsType"

const initState = {
    isAuth : loadData("isAuth") || false,
    isLoginLoading : false,
    isLoginError : false,
    token : ''
}


export const reducer = (state=initState, {type,payload}) => {
    switch(type){
        case getLoginRequest : {
          return  {
            ...state,
            isLoginError: false,
            isLoginLoading : true
          }
        }
        case getLoginFailure : {
          return {
            ...state,
            isLoginLoading: false,
            isLoginError: true
            
          }
        }
        case getLoginSuccess : {
            let Auth = true;
            saveData("isAuth",Auth)
            let tokn = payload
            saveData("token",tokn)
         return {
            ...state,
            isLoginLoading : false,
            isLoginError: false,
            token : [tokn],
            isAuth: Auth

         }
        }
        default : 
        return state
    }
}