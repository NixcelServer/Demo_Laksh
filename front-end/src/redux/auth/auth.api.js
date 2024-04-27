import axios from 'axios'
import { baseURL } from "../../utils/variables";

export const signAPI =async (payload)=>{
    const res = await axios.post(`${baseURL}users/register`,payload)
    return res.data
}

export const loginAPI =async (payload)=>{
    debugger
    const res = await axios.post(`http://127.0.0.1:8000/api/logsin`, payload);
    console.log("Response:", res);
        return res.data
}

export const aLoginAPI =async (payload)=>{
    const res = await axios.post(`http://127.0.0.1:8000/api/login`, payload);
    console.log("Response:", res);
        return res.data
}