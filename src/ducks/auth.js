import {appName} from '../config'
import {Record} from 'immutable'
import firebase from 'firebase'
import {all, takeEvery, call, take} from 'redux-saga/effects'


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
export const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAIL = `${appName}/${moduleName}/SIGN_IN_FAIL`;

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

function sigInUp(user) {
    return {
        type: SIGN_UP_REQUEST,
        payload: {user}
    }
}

export const sigInUpSaga = function*() {
    const auth = firebase.auth();

    while (true) {
        const action = yield take(SIGN_UP_REQUEST);
        try {
            const user = yield call([auth, auth.createUserWithEmailAndPassword], action.payload.email, action.payload.password)
        }
        catch (error) {
            yield put({
                type: SIGN_UP_FAIL,
                error
            })
        }

    }
}
export const sigInSaga = function*() {
    const auth = firebase.auth();
    while (true) {
        const action = yield take(SIGN_IN_REQUEST);
        try {
            yield call([auth, auth.signInWithEmailAndPassword], action.payload.email, action.payload.password)
        }
        catch (error) {
            yield put({
                type: SIGN_IN_FAIL,
                error
            })
        }
    }
}


/*export function signUp(email, password) {
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
 }*/

export const saga = function*() {
    yield all([
        sigInUpSaga(),
        sigInInSaga()
    ])
}