import { combineReducers } from "redux"
import authReducer from "./auth_reducer"
import favorReducer from "./favor_reducer"
import userReducer from "./user_reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    favor: favorReducer,
    user: userReducer
})

export default rootReducer