import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getScheduleData = () =>
    axios.get(BASE_URL)
.then(responce => responce.data)
.catch(error => {
    console.error(error);
    throw error;
})
