import {
    ADD_FAVOR,
    LOADING_FAVORS,
    GET_FAVORS,
    CLICK_PIC,
    FAVOR_ERROR,
    // DELETE_FAVOR
} from "../actions/favors/types"

export default function (state = {loading: false, favors: [], pic: ''}, action) {
    switch (action.type) {
        case ADD_FAVOR:
            let favors = [...state.favors, action.payload]
            return {...state, favors: favors}
        case LOADING_FAVORS:
            return { ...state, loading: true}
        case GET_FAVORS:
            return { ...state, loading:false, favors: action.payload }
        case CLICK_PIC:
            return {...state, pic: action.payload}
        case FAVOR_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}
