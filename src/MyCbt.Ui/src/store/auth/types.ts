export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export type AuthActionTypes = SetAuthTokenAction;
export interface AuthTokenState {
    token: string;
};

interface SetAuthTokenAction {
    type: typeof SET_AUTH_TOKEN,
    token: string
};

export function setAuthToken(token: string) {
    const action: SetAuthTokenAction = {
        type: SET_AUTH_TOKEN,
        token
    }

    return action;
}