import axios from "axios"
import {
    AUTH_USER,
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
                dispatch({ type: AUTH_USER })
                // - Save the JWT token
                localStorage.setItem("token", response.data.token)
            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError("Bad Login Info"))
            })
    }
}

export function signupUser ({ email, password, firstName, lastName, zipCode }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password, firstName, lastName, zipCode })
            .then(response => {
                dispatch({ type: AUTH_USER })
                localStorage.setItem("token", response.data.token)
            })
            .catch(response => {
                console.log(response.type, response.message, "POO")
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