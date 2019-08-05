import Axios from "axios";
// UserService.js
// service functions, to do REST calls
const BASE_URL = "http://localhost:5000";

// GET

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        Axios.get(`${BASE_URL}/users`)
            .then(resp => {
                resolve(resp.data);
            })
            .catch(resp => {
                console.error(resp);
                reject(resp);
            });
    });
};

export const getUser = id => {
    return new Promise((resolve, reject) => {
        Axios.get(`${BASE_URL}/users/${id}`)
            .then(resp => {
                resolve(resp.data);
            })
            .catch(resp => {
                console.error(resp);
                reject(resp);
            });
    });
};

// POST

// PUT

// DELETE
