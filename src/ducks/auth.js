import {appName} from '../config'
import {Record} from 'immutable'
import firebase from 'firebase'


const ReducerRecord = Record({
    user: null,
    error: null,
    loading: false
})

//constants
export const moduleName = 'auth';
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`;
export const SIGN_UP_FAIL = `${appName}/${moduleName}/SIGN_UP_FAIL`;

//reducer
export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload, error} = action;
    switch (type) {
        case SIGN_UP_REQUEST:
            return state.set('loading', true);
        case SIGN_UP_SUCCESS:
            return state
                .set('loading', false)
                .set('user', payload.user)
                .set('error', null);
        case SIGN_UP_FAIL:
            return state
                .set('loading', false)
                .set('error', error);

        default:
            return state
    }
}

//action
export function signUp(email, password) {
    return (dispatch) => {
        dispatch({
            type: SIGN_UP_REQUEST
        })
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => dispatch({
                type: SIGN_UP_SUCCESS,
                payload: {user}
            }))
            .catch(error => dispatch({
                type: SIGN_UP_FAIL,
                error
            }))
    }
}