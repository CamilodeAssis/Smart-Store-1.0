import axios from 'axios'
import Cookies from 'js-cookie'
const BASE = "http://18.231.50.132:3333"//'http://15.229.118.131:3333'

import { DataType } from '../types/dataType'
import { DataProductType } from '../types/dataProductType'
import { BodyTypes } from '../types/bodyType'
import { DataInvoiceType } from '../types/dataInvoiceType'

export default axios.create({
    baseURL: "http://18.231.50.132:3333" //'http://15.229.118.131:3333'
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

    getProductByQuery: async (query: string) => {
        let response = await axios.get(`${BASE}/products${query}`);
        return response.data;
    },

    registerProducts: async ({ userId, invoice_number, cnpj, date, name, quantity, value, username }: DataInvoiceType) => {
        let response = await axios.post(`${BASE}/users/${userId}/invoices`, {
            invoice_number,
            cnpj,
            date,
            name,
            quantity,
            value,
            username
        });
        return response.data;
    },



    login: async ({ email, password }: BodyTypes) => {
        let json = await apiFetchPost(`/login`, {
            email,
            password
        });

        return json;


    }

}
