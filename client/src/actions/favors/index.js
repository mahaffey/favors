import axios from "axios"
import {
    ADD_FAVOR,
    DELETE_FAVOR,
} from "./types"

const ROOT_URL = "http://localhost:3001/api/v1/favors"

// export const addFavor = (favor) => {
//     return {
//         type: ADD_FAVOR,
//         payload: recipe
//     }
// }


export function addFavor ({ posted_by, volunteer, poster_is_offering_favor, description, category, cost, is_completed, minimum_rep, due_date }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/new`, { posted_by, volunteer, poster_is_offering_favor, description, category, cost, is_completed, minimum_rep, due_date })
            .then(response => {
                dispatch({ type: ADD_FAVOR })
                localStorage.setItem("token", response.data.token)
            })
            .catch(response => {
                console.log(response.type, response.message, "POO")
            })
    }
}