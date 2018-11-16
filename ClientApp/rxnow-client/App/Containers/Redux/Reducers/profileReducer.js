import {
    EDIT_PCP, EDIT_PROFILE,
    EDIT_PCP_SUCCESS, EDIT_PROFILE_SUCCESS,
    EDIT_PCP_FAILURE, EDIT_PROFILE_FAILURE,
    IS_LOGGED_IN_SUCCESS, IS_LOGGED_IN,
} from '../constants.js';
import { initialState } from '../initialState.js';


function authReducer(state = initialState.profile, action) {
    switch (action.type) {
        case EDIT_PROFILE:
            return {
                ...state,
                isFetchingProfile: true,
            };
        case EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state,
                    user: action.data,
                    isFetchingProfile: false,
                }
            };
        case EDIT_PROFILE_FAILURE:
            return {
                ...state,
                profile: {
                    ...state,
                    isFetchingProfile: false,
                    profileError: true
                },
            };
       
        case EDIT_PCP:
            return {
                ...state,
                pcp: {
                    ...state,
                    isFetchingPCP: true,
                }
            };
        case EDIT_PCP_SUCCESS:
            return {
                ...state,
                pcp: {
                    ...state,
                    isFetchingPCP: false,
                    pcpInfo: action.data
                }
            };
        case EDIT_PCP_FAILURE:
            return {
                ...state,
                pcp: {
                    ...state,
                    isFetchingPCP: false,
                    pcpError: true,
                }
            };
        case IS_LOGGED_IN:
            return {
                ...state,
            };
        case IS_LOGGED_IN_SUCCESS: {
            const profile = action.json.user;
            return {
                //...state,
                user: {
                    name: profile.fullName,
                    email: profile.email,
                    address: profile.address,
                    phone: profile.phoneNumber,
                    dob: profile.dob,
                    language: profile.dob,
                    image_url: profile.profile_image_meta.location,
                },
                isFetching: false
            };
        }
        default:
            return state;
    }
}

export default authReducer;
