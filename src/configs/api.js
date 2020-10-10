import axios from 'axios'

// export const HOST = "http://45.76.146.176:3001"
export const HOST = "http://64.120.114.208:8006"
export const HOST_IMAGE = HOST + "/images/products/"

const instance = axios.create({
    headers: {
        "Content-Type": "application/json",
        // "Authenticate": "Token",
    },
    timeout: 2000,
    baseURL: `${HOST}/api`
})

export default instance