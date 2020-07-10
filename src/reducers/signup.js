import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    VERIFY_SIGNINGIN,
    VERIFY_SIGNEDUP
  } from "../actions/";


export default (
    state = {
        isSigningUp: false,
        isSignedUp: false,
        signUpError: false,
        signUpVerify: false,
        user: {},
        name: ''
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
                user: action.user,
                name: action.name
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isSigningUp: false,
                isSignedUp: false,
                signUpError: true
            }
            case VERIFY_SIGNINGIN:
                return {
                  ...state,
                  signUpVerify: true,
                  verifyingError: false
                };
              case VERIFY_SIGNEDUP:
                return {
                  ...state,
                  signUpVerify: false
                };
        default:
            return state
    }
}