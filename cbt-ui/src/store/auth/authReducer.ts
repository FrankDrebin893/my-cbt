import { AuthTokenState, AuthActionTypes, SET_AUTH_TOKEN } from './types';


const initialState: AuthTokenState = {
    token: ''
};

export function authReducer(
    state = initialState,
    action: AuthActionTypes
): AuthTokenState {
    switch (action.type) {
        case SET_AUTH_TOKEN:
            return {
                token: action.token
            }
        default:
            return state;
    }
};