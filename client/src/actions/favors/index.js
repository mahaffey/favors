import axios from "axios"
import {
    ADD_FAVOR,
    LOADING_FAVORS,
    GET_FAVORS,
    FAVOR_ERROR,
    CLICK_PIC,
    SAVE_FAVOR_FORM,
    MODAL_STATE,
    FAVOR_PENDING_VOLUNTEER,
    //FAVOR_ACCEPT_VOLUNTEER,
    //FAVOR_DENY_VOLUNTEER,
    // DELETE_FAVOR,
} from "./types"

const ROOT_URL = "http://localhost:3001/api/v1/favors"

export function addFavor ({ posted_by, volunteer, poster_is_offering_favor, description, description_long, category, cost, is_completed, minimum_rep, due_date, image }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/new`,
            { posted_by, volunteer, poster_is_offering_favor, description, description_long,  category, cost, is_completed, minimum_rep, due_date, image },
            {headers: {'Authorization': localStorage.token}})
            .then( res =>
                dispatch({
                    type: ADD_FAVOR,
                    payload: { posted_by, volunteer, poster_is_offering_favor, description, description_long, category, cost, is_completed, minimum_rep, due_date, image }
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
            .then(res => dispatch({
                type: GET_FAVORS,
                payload: res.data
                }))
            .catch(res => {
                dispatch(favorError(res.error))
                }
            )
    }
}

// add a button on new favor test and check server console.log
// add new info to favor on backend
// create reducer fucntion for front-end
//then add accepting favor on the favor asker end
export function volunteerForFavor ({favor_id}) {
    let data = {
        favor_id: favor_id,
        volunteer_id: localStorage.uid
    }

    return function (dispatch) {
        axios.patch(ROOT_URL + '/' + favor_id + '/pending', data, {headers: {'Authorization': localStorage.token}})
            .then(res => dispatch({
                type: FAVOR_PENDING_VOLUNTEER,
                payload: res.data
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

export function clickPic (event) {
    const pic = event.target.src
    return function (dispatch) {
        dispatch({
            type: CLICK_PIC,
            payload: pic
        })
    }
}

export function saveForm (state) {
    return function (dispatch) {
        dispatch({
            type: SAVE_FAVOR_FORM,
            payload: state
        })
    }
}

export function modalState () {
    return function (dispatch) {
        dispatch({
            type: MODAL_STATE,
        })
    }
}