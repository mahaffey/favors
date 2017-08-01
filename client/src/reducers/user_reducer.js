import {
    GET_ALL_USERS,
    GET_USER_INFO
} from "../actions/users/types"

export default function (state = {users: []}, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            debugger
            return { ...state, users: action.payload }
        case GET_USER_INFO:
            debugger
            return { ...state, users: action.payload }
        default:
            return state
    }
}
