import Axios from "axios";

// ProjectService.js
// service functions, to do REST calls

const BASE_URL = "http://localhost:5000";

// GET

export const getProjects = () => {
    return new Promise((resolve, reject) => {
        Axios.get(`${BASE_URL}/projects`)
            .then(resp => {
                resolve(resp.data);
            })
            .catch(resp => {
                console.error(resp);
                reject(resp);
            });
    });
};

export const getProject = id => {
    return new Promise((resolve, reject) => {
        Axios.get(`${BASE_URL}/projects/${id}`)
            .then(resp => {
                resolve(resp.data);
            })
            .catch(resp => {
                console.error(resp);
                reject(resp);
            });
    });
};

export const queryProjects = q => {
    return new Promise((resolve, reject) => {
        Axios.get(`${BASE_URL}/projects?q=${q}`)
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

