import { myFirebase, db } from "../plugins/firebaseConfig";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const VERIFY_SIGNINGIN = "VERIFY_SIGNINGIN";
export const VERIFY_SIGNEDUP = "VERIFY_SIGNEDUP";


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

const signingInVerify = () => {
    return {
      type: VERIFY_SIGNINGIN
    };
  };
  
  const signedUpVerify = () => {
    return {
      type: VERIFY_SIGNEDUP
    };
  };

export const signupUser = (name, email, password) => dispatch => {
    const timeStamp = new Date()
    const dbData = {name: name, email: email, timeStamp}
    dispatch(requestSignup())
    myFirebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
        db.collection('authUsers').doc(user.user.uid).set({ dbData }).then(()=> {
            dispatch(successSignup(user, dbData.name))
        })
    })
    .catch(error => {
        dispatch(errorSignup())
    })
}

export const verifySignUp = () => dispatch => {
    dispatch(signingInVerify());
    myFirebase
      .auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          dispatch(signedUpVerify(user));
        }
        dispatch(signedUpVerify());
      });
  };