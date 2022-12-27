import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { NavBar } from './NavBar'
import { Menu } from './Menu'
import { api } from '../data/api'


export const RegisterUsers = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [singupInfo, setSingupInfo] = useState({});

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
        const handleClickSubimit = async () => {
            const post = await api.postUsers(
                {
                    name: name,
                    username: user,
                    email: email,
                    password: password
                }
            );
            console.log(post);
            setName('');
            setUser('');
            setEmail('');
            setPassword('');
        }

    return (
        <>
            <section className="flex ">
                <Menu />
                <div className='w-full'>
                    <NavBar />
                    <div className="flex justify-center items-center h-screen bg-grayBG w-full">

                        <div className="flex w-auto h-auto flex-col mt-24 items-center bg-white rounded p-3" >

                            <div>
                                <h1 className="font-bold mb-2">Página de Cadastro</h1>
                            </div>

                            {/* AQUI VAI SER CRIADO COM react HOOK FORM E YUP */}
                            <form className="flex flex-col"   >
                                <label>Nome Completo</label>
                                <input type="text" name="name" className="border mb-2" onChange={(e) => setName(e.target.value)} />
                                <label>Nome de usuário</label>
                                <input type="text" name="entry" className="border mb-2" onChange={(e) => setUser(e.target.value)} />
                                <label>Email</label>
                                <input type="email" name="email" autoComplete="current-email" className="border mb-2" onChange={(e) => setEmail(e.target.value)} />
                                <label>Senha</label>
                                <input type="password" name="passoword" autoComplete="current-password" className="border mb-2" />
                                <label>Confirme sua senha</label>
                                <input type="password" autoComplete="current-password" className="border mb-2" onChange={(e) => setPassword(e.target.value)} />
                                <button
                                    onClick={handleClickSubimit}
                                    type="submit"
                                    className="border mb-2">
                                    Cadastrar
                                </button>
                            </form>
                        </div>
                    </div>


                </div>
            </section>

        </>
    );
}