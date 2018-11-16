import { AsyncStorage } from 'react-native';
import {
    EDIT_PCP, EDIT_HEALTH_INFO, EDIT_PROFILE,
    EDIT_PCP_SUCCESS, EDIT_HEALTH_INFO_SUCCESS, EDIT_PROFILE_SUCCESS,
    EDIT_PCP_FAILURE, EDIT_HEALTH_INFO_FAILURE, EDIT_PROFILE_FAILURE,
    IS_LOGGED_IN_FAILURE, IS_LOGGED_IN_SUCCESS, IS_LOGGED_IN,
    SET_TOKEN, SET_ID
} from '../constants.js';

const config = require('../../../../config');

export function isLoggedInAsyncStore() {
    return (dispatch) => {
        dispatch(isLoggedIn());
        AsyncStorage.multiGet(['token', '_id'])
           
            .then((data) => {
                if (data[0][1] !== null && data[1][1] !== null) {
                    dispatch(setToken(data[0][1]));
                    dispatch(setID(data[1][1]));
                    fetch(`${config.api}/profile/`, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'x-access-token': data[0][1]
                        },
                    })
                        .then(res => res.json())
                        .then(json => {
                            if (json.status === 'OK') {
                                //console.log(json);
                                dispatch(isLoggedInSuccess(json, data));
                            } else dispatch(isLoggedInFailure('error'));
                        })
                        .catch(err => {
                            console.log('async', err); 
                            dispatch(isLoggedInFailure(err));
                        });
                } else {
                    dispatch(isLoggedInFailure('no token found'));
                }
            })
            .catch(err => 
                dispatch(isLoggedInFailure(err)));
    };
}

export function editProfileWithAPI(userObject, token) {
    console.log('EDIT');
    console.log(userObject);
    return (dispatch) => {
        dispatch(editProfile());
        fetch(`${config.api}/editProfile/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token

            },
            body: JSON.stringify({
                userObject
            }),
        })
            .then(res => res.json())
            .then(json => {
                if (json.status === 'OK') dispatch(editProfileSuccess(json));
                else dispatch(editProfileFailure('error'));
            })
            .catch(err => dispatch(editProfileFailure(err)));
    };
}

export function editPCPWithAPI(pcpObject) {
    return (dispatch) => {
        dispatch(editPCP());
        fetch(`${config.api}/editPCP/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: pcpObject.name,
                specialization: pcpObject.specialization,
                phoneNumber: pcpObject.phoneNumber,
                email: pcpObject.email,
                hospital: pcpObject.hospital,
                hospitalAddress: pcpObject.hospitalAddress
            }),
        })
            .then(res => res.json())
            .then(json => {
                if (json.status === 'OK') dispatch(editPCPSuccess(json));
                else dispatch(editPCPFailure('error'));
            })
            .catch(err => dispatch(editPCPFailure(err)));
    };
}

export function editHealthInformationWithAPI(healthInfoArray) {
    return (dispatch) => {
        dispatch(editHealthInfo());
        fetch(`${config.api}/editHealthIssue/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                healthIssue: healthInfoArray
            }),
        })
            .then(res => res.json())
            .then(json => {
                if (json.status === 'OK') dispatch(editHealthInfoSuccess(json));
                else dispatch(editHealthInfoFailure('error'));
            })
            .catch(err => dispatch(editHealthInfoFailure(err)));
    };
}

const editProfile = () => (
    {
        type: EDIT_PROFILE,
    }
);

const editProfileSuccess = (data) => (
    {
        type: EDIT_PROFILE_SUCCESS,
        data,
    }
);

const editProfileFailure = (data) => (
    {
        type: EDIT_PROFILE_FAILURE,
        data,
    }
);

const editHealthInfo = () => (
    {
        type: EDIT_HEALTH_INFO,
    }
);

const editHealthInfoSuccess = (data) => (
    {
        type: EDIT_HEALTH_INFO_SUCCESS,
        data,
    }
);

const editHealthInfoFailure = (data) => (
    {
        type: EDIT_HEALTH_INFO_FAILURE,
        data,
    }
);

const editPCP = () => (
    {
        type: EDIT_PCP,
    }
);

const editPCPSuccess = (data) => (
    {
        type: EDIT_PCP_SUCCESS,
        data,
    }
);

const editPCPFailure = (data) => (
    {
        type: EDIT_PCP_FAILURE,
        data,
    }
);
const isLoggedIn = () => (
    {
        type: IS_LOGGED_IN,
    }
);

const isLoggedInSuccess = (json, data) => (
    {
        type: IS_LOGGED_IN_SUCCESS,
        json,
        data,
    }
);

const isLoggedInFailure = (data) => (
    {
        type: IS_LOGGED_IN_FAILURE,
        data,
    }
);

export const setToken = (data) => ({
    type: SET_TOKEN,
    data
});
export const setID = (data) => ({
    type: SET_ID,
    data
});
