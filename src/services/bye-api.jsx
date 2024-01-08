import axios from "axios";

export const API_URL = 'http://62.217.187.236/API';


// const checkResponse = <T>(res: Response): Promise<T> => {
//     return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
// };

export const getInfo = (params) => {
    return axios.get(API_URL, {params})
}

