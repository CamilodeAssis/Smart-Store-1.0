import { useState, useContext, useEffect } from 'react';

import { AuthContext } from '../contexts/auth';


export const Login = () => {

    const { authenticated, doLogin, error} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
      
    const handleSubmit = async () => {
       
        setDisabled(true);
        doLogin(email, password);
        setDisabled(false);
    }

    
    
    // useEffect( () => {
    //     document.addEventListener('keydown', enterSubmit, true);
    // }, [])

    // const enterSubmit = (e: KeyboardEvent) => {
        
    //     if (e.key === 'Enter'){
    //         handleSubmit();
    //     } 
    // }

    
    return (
        <div className='bg-blue-800 flex  justify-center items-center h-screen'>
            <div className='flex flex-col justify-between items-center gap-24  w-2/3 '>
                <div className='w-auto text-white text-center flex flex-col gap-9'>
                    <h1 className='font-bold text-2xl'>Sistema </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugit eaque quo, laboriosam sequi eos illo? Facere obcaecati cupiditate ipsa tenetur eligendi veritatis, quam nulla illo at reiciendis aut sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, perferendis iure corporis inventore quod facere, repellat modi eveniet, quo et aperiam eos optio illo voluptatibus distinctio recusandae voluptate unde laboriosam.</p>
                </div>

                <div className='flex flex-col justify-center  items-center bg-white h-64 w-[400px] gap-6 p-1 rounded-md'>
                    <h1 className='text-2xl font-bold'>LOGIN</h1>

                    <div className='flex items-center flex-col w-full gap-2'>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={disabled}
                            type="text"
                            placeholder='E-MAIL'
                            className='border rounded w-4/5 h-10 focus:outline-none' />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={disabled}
                            type="password"
                            placeholder='SENHA'
                            className='border rounded w-4/5 h-10 focus:outline-none' />
                    </div>

                    <button  onClick={handleSubmit} disabled={disabled} className='bg-blue-800 text-white p-1 rounded w-2/5 font-bold text-2xl hover:bg-blue-600'>Entrar</button>
                </div>

                <p>{error}</p>

            </div>
        </div>
    );
}
