import { combineReducers } from "redux"
import { reducer as form } from "redux-form"
import authReducer from "./auth_reducer"
import favorReducer from "./favor_reducer"

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    favor: favorReducer
})

export default rootReducer