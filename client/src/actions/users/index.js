import axios from "axios"

import {
    GET_USER_INFO,
    GET_ALL_USERS,
} from "./types"

import { authError } from '../userAuthentication/index'

const ROOT_URL = "http://localhost:3001/api/v1/users"

export function getUserInfo(uid) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/${uid}`, {headers: {'Authorization': localStorage.token}})
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

export function getAllUsers() {
    return function (dispatch) {
        axios.get(`${ROOT_URL}`, {headers: {'Authorization': localStorage.token}})
            .then(users => dispatch({
                type: GET_ALL_USERS,
                payload: users.data
            }))
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError("Bad User Info"))
            })
    }
}