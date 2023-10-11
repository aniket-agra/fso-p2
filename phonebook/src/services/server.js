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

const deleteEntry = function (person) {
    return axios 
            .delete(base_url + person["id"]);
}

const updateEntry = function (id, newEntry) {
    return axios
            .put(base_url + id, newEntry);
}

export default {getAllData, addNew, deleteEntry, updateEntry};