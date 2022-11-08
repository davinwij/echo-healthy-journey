import axios from "axios";
import { userJourney } from "../Interfaces/userJourney.interfaces";


const API_URL = process.env.REACT_APP_ENDPOINT

const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers':'*',
    'Access-Control-Allow-Methods': 'GET, POST',
};

export const submitJourney = (data: userJourney) => {
    return axios.post(`${API_URL}user-journey/submit`, data, {
        headers: {
            ...header
        }
    })
    .then(response => {
        return response.data
    })
}

export const getAllJourney = (key: string) => {
    return axios.post(`${API_URL}user-journey/all-journey`, {key}, {
        headers: {
            ...header
        }
    })
    .then(response => {
        return response.data
    })
}