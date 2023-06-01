import axios from "axios";

const BASE_URL ="https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyD2AWAvNlkbu1ZhV4D5D2uMtUvpIhPYKpw',
    cx:'866ab3ab07a414dc4'
};

export const fetchDataFromApi = async (payload) => {
    const {data} =await axios.get(BASE_URL, { params: { ...params, ...payload}})
    return data;
};
 