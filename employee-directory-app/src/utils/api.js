import axios from "axios";

const getUser = axios.get("https://randomuser.me/api/?results=200&nat=us");

export default getUser; 