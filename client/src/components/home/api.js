import axios  from "axios";
import { API_URL } from "../../../config";


export const getMonthlyAttendance = async (date) => {
    try {
        const token = sessionStorage.getItem('token');
        const headers = {'authorization': `Bearer ${token}`}
        const response = await axios.get(`${API_URL}/monthlyAttendance?date=${date}`, { headers });
        console.log(response.data);
        let res = {}
        for (let i = 0; i < response.data?.length; i++) {
            const data = response.data[i];
            res[data.date] = data;
        }
        return res;
    } catch (error) {
        console.error(error);
        return {}
    }
}

export const getDailyAttendance = async (date) => {
    try {
        const token = sessionStorage.getItem('token');
        const headers = {'authorization': `Bearer ${token}`}
        const response = await axios.get(`${API_URL}/getUserAttendance?date=${date}`, { headers });
        console.log(response.data);
        let res = []
        for (let i = 0; i < response.data?.length; i++) {
            const data = response.data[i];
            data['key'] = data.id;
            res.push(data)
        }
        return res
    } catch (error) {
        console.error(error);
        return []
    }
}
export const getTotalAttendance = async (date) => {
    try {
        const token = sessionStorage.getItem('token');
        const headers = {'authorization': `Bearer ${token}`}
        const response = await axios.get(`${API_URL}/getTotalUserAttendance?date=${date}`, { headers});
        console.log(response.data);
        // let res = []
        // for (let i = 0; i < response.data?.length; i++) {
        //     const data = response.data[i];
        //     data['key'] = data.id;
        //     res.push(data)
        // }
        return response.data.total_users
    } catch (error) {
        console.error(error);
        return 0
    }
}



export const updateAttendance = async (body) => {
    try {
        const token = sessionStorage.getItem('token');
        const headers = {'authorization': `Bearer ${token}`}
        const response = await axios.post(`${API_URL}/addUserAttendance`,body, { headers });
        console.log(response.data);
        // let res = []
        // for (let i = 0; i < response.data?.length; i++) {
        //     const data = response.data[i];
        //     data['key'] = data.id;
        //     res.push(data)
        // }
        // return res

    } catch (error) {
        console.error(error);
        return []
    }
}

export const getAllUsers = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const createNewUser = async (data) => {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getPresentUsers = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const takeAttendance = async (data) => {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}