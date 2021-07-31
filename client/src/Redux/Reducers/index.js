import { combineReducers } from 'redux';
import authReducer from './authReducer';
import credentialReducer from './credentialsReducer';
import credentialDataReducer from './credentialDataReducer';

export default combineReducers({
    auth: authReducer,
    credentials: credentialReducer,
    credData: credentialDataReducer
})