import axios from "axios"
import {
    ADD_FAVOR,
    LOADING_FAVORS,
    GET_FAVORS,
    FAVOR_ERROR,
    // DELETE_FAVOR,
} from "./types"

const ROOT_URL = "http://localhost:3001/api/v1/favors"

export function addFavor ({ posted_by, volunteer, poster_is_offering_favor, description, category, cost, is_completed, minimum_rep, due_date, image }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/new`,
            { posted_by, volunteer, poster_is_offering_favor, description, category, cost, is_completed, minimum_rep, due_date, image },
            {headers: {'Authorization': localStorage.token}})
            .then(
                dispatch({
                    type: ADD_FAVOR,
                    payload: { posted_by, volunteer, poster_is_offering_favor, description, category, cost, is_completed, minimum_rep, due_date, image }
                })
            )
            .catch(response => {
                console.log(response.type, response.message, "POO")
            })
    }
}

export function getFavors () {
    return function (dispatch) {
        dispatch({type: LOADING_FAVORS})
        return axios.get(ROOT_URL, {headers: {'Authorization': localStorage.token}})
            .then(favors => dispatch({
                type: GET_FAVORS,
                payload: favors.data
                }))
            .catch(res => {
                dispatch(favorError(res.error))
                }
            )
    }
}

export function favorError (error) {

    return {
        type: FAVOR_ERROR,
        payload: error
    }
}