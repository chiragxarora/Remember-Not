export const loginReducer = (state = {}, action) => {
    if(action.type === 'LOGIN_SUCCESS'){
        return action.payload;
    }
    if(action.type === 'LOGIN_FAILED'){
        return action.payload
    }
    return state;
}