import axios from "axios"
import {
    AUTH_USER,
    GET_CURRENT_USER_INFO,
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
                // error is not an object (see below)
                // If request is bad...
                // - Show an error to the user
                dispatch(authError("Bad Login Info"))
            })
    }
}

export function getUserInfoOnAuth(uid) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/users/${uid}`, {headers: {'Authorization': localStorage.token}})
            .then(user => dispatch({
                type: GET_CURRENT_USER_INFO,
                payload: user.data
        }))
            .catch(() => {
                // works here because we are not getting the error as an object
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
                if (response.data.errors) {
                    dispatch(authError(response.data.errors.msg))
                } else {
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("uid", response.data.user_id)
                    return dispatch({ type: AUTH_USER })
                }
            })
            // axios is not fetching a error object, known issue on the github issues.
            // axios/node not sending back an error status will handle it above in the promise, to see what I mean try console.log(new Error()) in browser console
            // .catch(response => {
            //     console.log(response.type, response.message, "POO", response)
            // })
            // .catch(response => {
            //     // If request is bad...
            //     // - Show an error to the user
            //     dispatch(authError(response.data.error))
            // })
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