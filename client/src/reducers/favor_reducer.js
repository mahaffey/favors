import {
    ADD_FAVOR,
    LOADING_FAVORS,
    GET_FAVORS,
    CLICK_PIC,
    FAVOR_ERROR,
    SAVE_FAVOR_FORM,
    MODAL_STATE
    // DELETE_FAVOR
} from "../actions/favors/types"

export default function (state = {loading: false, favors: [], pic: '', form: {}, modal: false}, action) {
    switch (action.type) {
        case ADD_FAVOR:
            let favors = [...state.favors, action.payload]
            return { ...state, favors: favors }
        case LOADING_FAVORS:
            return { ...state, loading: true }
        case GET_FAVORS:
            return { ...state, loading:false, favors: action.payload }
        case CLICK_PIC:
            return { ...state, pic: action.payload }
        case FAVOR_ERROR:
            return { ...state, error: action.payload }
        case SAVE_FAVOR_FORM:
            return { ...state, form: action.payload }
        case MODAL_STATE:
            let newState = !state.modal
            return {...state, modal: newState}
        default:
            return state
    }
}
