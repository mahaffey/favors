import {
    ADD_FAVOR,
    LOADING_FAVORS,
    GET_FAVORS,
    CLICK_PIC,
    FAVOR_ERROR,
    SAVE_FAVOR_FORM,
    FAVOR_PENDING_VOLUNTEER,
    MODAL_STATE
    // DELETE_FAVOR
} from "../actions/favors/types"

export default function (state = {loading: false, favors: [], pic: '', form: {}, modal: false}, action) {
    switch (action.type) {
        case ADD_FAVOR:
            let favors = [action.payload, ...state.favors]
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
        case FAVOR_PENDING_VOLUNTEER:
            // create favors array with everything but changed favor, push in new favor, update state
            let newFavorsArray = state.favors.filter(el => el._id !== action.payload._id)
            newFavorsArray.push(action.payload)
            return { ...state, favors: newFavorsArray }
        case MODAL_STATE:
            let newState = !state.modal
            return {...state, modal: newState}
        default:
            return state
    }
}
