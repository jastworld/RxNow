import {
    EDIT_HEALTH_INFO, EDIT_HEALTH_INFO_SUCCESS, EDIT_HEALTH_INFO_FAILURE,
} from '../constants.js';
import { initialState } from '../initialState.js';

function healthIssuesReducer(state = initialState.healthIssues, action) {
    switch (action.type) {
        case EDIT_HEALTH_INFO:
            return {
                ...state,
                healthIssues: {
                    ...state,
                    isFetchingHealthInfo: true,
                }
            };
        case EDIT_HEALTH_INFO_SUCCESS:
            return {
                ...state,
                healthIssues: {
                    ...state,
                    healthList: action.data,
                    isFetchingHealthInfo: false,
                }
            };
        case EDIT_HEALTH_INFO_FAILURE:
            return {
                ...state,
                healthIssues: {
                    isFetchingHealthInfo: false,
                    healthInfoError: true,
                }
            };
        default:
            return state;
    }
}

export default healthIssuesReducer;
