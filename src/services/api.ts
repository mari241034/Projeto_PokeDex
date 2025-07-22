import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/", //consome a api
    timeout: 5000, //tempo limite de 5 segundos
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api; 