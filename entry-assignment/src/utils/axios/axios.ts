import axios from "axios";

const instanse = axios.create({
    baseURL:" http://3.36.82.24:8080"
})

export default instanse;