import axios from "axios";

const base_url = "http://localhost:3001/persons/";

const getAllData = function () {
    return axios
            .get(base_url);
}

const addNew = function (entry) {
    return axios
            .post(base_url, entry);
}

export {getAllData, addNew};