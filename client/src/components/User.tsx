import { useState } from "react";

import { useForm } from 'react-hook-form'


export const User = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [singupInfo, setSingupInfo] = useState({});



    return (
        <div className="flex justify-center items-center h-screen bg-grayBG">

            <div className="flex w-auto h-auto flex-col mt-24 items-center bg-white rounded p-3" >

                <div>
                    <h1 className="font-bold mb-2">Página de Cadastro</h1>
                </div>

                {/* AQUI VAI SER CRIADO COM HEACK HOOK FORM E YUP */}
                <form className="flex flex-col"   >
                    <label>Nome Completo</label>
                    <input type="text" name="name" className="border mb-2" />
                    <label>Mátricula</label>
                    <input type="text" name="entry" className="border mb-2" />
                    <label>Email</label>
                    <input type="text" name="email" autoComplete="current-email" className="border mb-2" />
                    <label>Nome de usuário</label>
                    <input type="text" name="user" autoComplete="current-user" className="border mb-2" />
                    <label>Senha</label>
                    <input type="password" name="passoword" autoComplete="current-password" className="border mb-2" />
                    <label>Confirme sua senha</label>
                    <input type="password" autoComplete="current-password" className="border mb-2" />
                    <button type="submit" className="border mb-2">Cadastrar</button>
                </form>


            </div>


        </div>
    );
}