import axios from "axios";
const httpAuth = axios.create({
    // baseURL: 'http://localhost:5000/listing/propertyid',
    baseURL: `http://localhost:6000`,
    headers: {
        "Content-Type": "application/json",
    },
});


export default httpAuth;