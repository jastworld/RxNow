import { AsyncStorage } from 'react-native';
import {
    REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, REGISTER_USER,
    LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGIN_USER,
    VERIFY_USER_FAILURE, VERIFY_USER_SUCCESS, VERIFY_USER,
} from '../constants.js';

const config = require('../../../../config');

export function loginUserWithAPI(registerObject) {
    console.log('LOGIN', registerObject);
    return (dispatch) => {
        dispatch(loginUser());
        fetch(`${config.api}/login/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: registerObject.email,
                password: registerObject.password,
            }),
        })
            .then(res => res.json())
            .then(json => {
                if (json.status === 'OK') {
                    AsyncStorage.multiSet([
                        ['token', json.token],
                        ['_id', json.id]
                    ]);
                    dispatch(loginUserSuccess(json));
                } else dispatch(loginUserFailure('error'));
            })
            .catch(err => dispatch(loginUserFailure(err)));
    };
}

export function verifyUserWithAPI(registerObject) {
    return (dispatch) => {
        dispatch(verifyUser());
        fetch(`${config.api}/login/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: registerObject.email,
                password: registerObject.password,
            }),
        })
            .then(res => res.json())
            .then(json => {
                if (json.status === 'OK') dispatch(verifyUserSuccess(json));
                else dispatch(verifyUserFailure('error'));
            })
            .catch(err => dispatch(verifyUserFailure(err)));
    };
}

const registerUser = () => (
    {
        type: REGISTER_USER,
    }
);

const registerUserSuccess = (data) => (
    {
        type: REGISTER_USER_SUCCESS,
        data,
    }
);

const registerUserFailure = (data) => (
    {
        type: REGISTER_USER_FAILURE,
        data,
    }
);

const loginUser = () => (
    {
        type: LOGIN_USER,
    }
);

const loginUserSuccess = (data) => (
    {
        type: LOGIN_USER_SUCCESS,
        data,
    }
);

const loginUserFailure = (data) => (
    {
        type: LOGIN_USER_FAILURE,
        data,
    }
);

const verifyUser = () => (
    {
        type: VERIFY_USER,
    }
);

const verifyUserSuccess = (data) => (
    {
        type: VERIFY_USER_SUCCESS,
        data,
    }
);

const verifyUserFailure = (data) => (
    {
        type: VERIFY_USER_FAILURE,
        data,
    }
);

