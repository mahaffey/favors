import {
    ADD_FAVOR,
    // DELETE_FAVOR
} from "../actions/favors/types"

export default function (state = {favors: []}, action) {
    switch (action.type) {
        case ADD_FAVOR:
            return { ...state, favors: action.payload }
        // case UNAUTH_USER:
        //     return { ...state, authenticated: false }
        // case AUTH_ERROR:
        //     return { ...state, error: action.payload }
        // case FETCH_MESSAGE:
        //     return { ...state, message: action.payload }
        default:
            return state
    }
}
