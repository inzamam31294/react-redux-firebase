import { myFirebase, db } from "../plugins/firebaseConfig";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";


const requestSignup = () => {
    return {
        type: SIGNUP_REQUEST
    }
}

const successSignup = () => {
    return {
        type: SIGNUP_SUCCESS
    }
}

const errorSignup = () => {
    return {
        type: SIGNUP_FAILURE
    }
}

// const verifyRequest = () => {
//     return {
//       type: VERIFY_REQUEST
//     };
//   };
  
//   const verifySuccess = () => {
//     return {
//       type: VERIFY_SUCCESS
//     };
//   };

export const signupUser = (name, email, password) => dispatch => {
    const timeStamp = new Date()
    const dbData = {name: name, email: email, timeStamp}
    dispatch(requestSignup())
    myFirebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
        db.collection('authUsers').doc(user.user.uid).set({ dbData }).then(()=> {
            dispatch(successSignup(user))
        })
    })
    .catch(error => {
        dispatch(errorSignup())
    })
}

// export const verifyAuth = () => dispatch => {
//     dispatch(verifyRequest());
//     myFirebase
//       .auth()
//       .onAuthStateChanged(user => {
//         if (user !== null) {
//           dispatch(successSignup(user));
//         }
//         dispatch(verifySuccess());
//       });
//   };