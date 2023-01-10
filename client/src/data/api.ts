import axios from 'axios'
import Cookies from 'js-cookie'
const BASE = 'http://localhost:3333'
import { DataType } from '../types/dataType'
import { DataProductType} from '../types/dataProductType'
import { BodyTypes } from '../types/bodyType'

export default axios.create({
    baseURL: 'http://localhost:3333'
});


const apiFetchPost = async (endpoint: string, body: BodyTypes) => {

    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }


    const res = await fetch(BASE + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/login';
        return;
    }

    return json
}



export const api = {
    getUsers: async () => {
        let response = await axios.get(`${BASE}/users`);
        return response.data;
    },

    postUsers: async ({ name, username, email, password }: DataType) => {
        let response = await axios.post(`${BASE}/users`, {
            name,
            username,
            email,
            password
        });

    },
    

    login: async ({ email, password }: BodyTypes) => {
        let json = await apiFetchPost(`/login`, {
            email,
            password
        });

        return json;


    }

}
