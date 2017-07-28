import axios from "axios"
import {
    AUTH_USER,
    GET_USER_INFO,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from "./types"

const ROOT_URL = "http://localhost:3001/api/v1"

export function signinUser ({ email, password }) {
    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // If request is good...
                // - Update state to indicate user is authenticated
                console.log("from server on login", response)
                // - Save the JWT token
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("uid", response.data.user_id)
                return dispatch({ type: AUTH_USER })
            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError("Bad Login Info"))
            })
    }
}

export function getUserInfo(uid) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/users/${uid}`, {headers: {'Authorization': localStorage.token}})
            .then(user => dispatch({
                type: GET_USER_INFO,
                payload: user.data
        }))
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError("Bad User Info"))
            })
    }
}

export function signupUser ({ email, password, firstName, lastName, zipCode }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password, firstName, lastName, zipCode })
            .then(response => {
                console.log('here', response)
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("uid", response.data.user_id)
                dispatch({ type: AUTH_USER })

            })
            .catch(response => {
                console.log(response.type, response.message, "POO", response)
            })
    }
}

export function authError (error) {

    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser () {
    localStorage.removeItem("token")
    localStorage.removeItem("uid")
    return { type: UNAUTH_USER }
}

export function fetchMessage () {
    return function (dispatch) {
        axios.get("http://localhost:3001/", {
            headers: { authorization: localStorage.getItem("token") }
        })
            .then(response => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                })
            })
    }
}