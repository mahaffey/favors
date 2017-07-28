import { combineReducers } from "redux"
import authReducer from "./auth_reducer"
import favorReducer from "./favor_reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    favor: favorReducer
})

export default rootReducer