import {
    ADD_FAVOR,
    LOADING_FAVORS,
    GET_FAVORS,
    // DELETE_FAVOR
} from "../actions/favors/types"

export default function (state = {loading: false, favors: []}, action) {
    switch (action.type) {
        case ADD_FAVOR:
            let favors = [...state.favors, action.payload]
            return {...state, favors: favors}
        case LOADING_FAVORS:
            return { ...state, loading: true}
        case GET_FAVORS:
            return { ...state, loading:false, favors: action.payload }
        default:
            return state
    }
}
