import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from "../actions/";


export default (
    state = {
        isSigningUp: false,
        isSignedUp: false,
        signUpError: false,
        isAuthenticated: false,
        user:{}
    },
    action
) => {
    switch (action.type){
        case SIGNUP_REQUEST:
            return {
                ...state,
                isSigningUp: true,
                signUpError: false,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSigningUp: false,
                isSignedUp: true,
                isAuthenticated: true,
                user: action.user
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isSigningUp: false,
                isSignedUp: false,
                signUpError: true
            }
        default:
            return state
    }
}