import axios from "axios";

export const api = axios.create({    
    baseURL: "localhost:4000",
    timeout: 7000
    }
)