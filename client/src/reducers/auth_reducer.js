import {
    AUTH_USER,
    GET_CURRENT_USER_INFO,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from "../actions/userAuthentication/types"

export default function (state = {user:{}, authenticated: false}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true }
        case GET_CURRENT_USER_INFO:
            return { ...state, error: '', user: action.payload }
        case UNAUTH_USER:
            return { ...state, error: '', authenticated: false }
        case AUTH_ERROR:
            return { ...state, error: action.payload }
        case FETCH_MESSAGE:
            return { ...state, message: action.payload }
        default:
            return state
    }
}
