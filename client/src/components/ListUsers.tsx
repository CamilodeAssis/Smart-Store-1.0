import { useEffect, useState } from 'react';
import { api} from '../data/api'
import { Menu } from '../components/Menu'
import { NavBar } from '../components/NavBar'

import {DataType } from '../types/dataType'
import { User } from './User';

export const ListUsers = () => {

    const [data, setData] = useState<DataType[]>()

    const apiData = async () => {
        const data = await api.getUsers()
        if(!data){
            <p>carregando</p>
        }
        return setData(data)
        
    }

    useEffect(() => {
        apiData();
    }, [])

    console.log(data);

    return (
        <section className="flex ">
            <Menu />
            <div className='w-full'>
                <NavBar />
                {data && data.map((data, index) => (
                    <div 
                    className='mb-7 border'
                    key={index}>
                        <ul>
                            <li>{data.name}</li>
                            <li>{data.username}</li>
                            <li>{data.email}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}