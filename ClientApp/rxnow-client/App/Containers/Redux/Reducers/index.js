import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import profileReducer from './profileReducer.js';
import pcpReducer from './pcpReducer.js';
// eslint-disable-next-line import/no-unresolved
import healthIssuesReducer from './healthIssuesReducer.js';
import nextOfKinReducer from './nokReducer.js';

export default combineReducers({
    auth: authReducer,
    profile: profileReducer,
    pcp: pcpReducer,
    healthIssues: healthIssuesReducer,
    nextOfKin: nextOfKinReducer,
});
