import axios from 'axios'

export const axiosAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        // baseURL: 'http://localhost:3000/'
    })
}