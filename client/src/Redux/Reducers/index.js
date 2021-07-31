import { combineReducers } from 'redux';
import authReducer from './authReducer';
import credentialReducer from './credentialsReducer';
import credentialDataReducer from './credentialDataReducer';
import websiteReducer from './websitesReducer';

export default combineReducers({
    auth: authReducer,
    credentials: credentialReducer,
    credData: credentialDataReducer,
    websites: websiteReducer
})