import  { Link } from 'react-router-dom' 


export const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-grayBG w-full">

            <div className="flex w-[auto] h-[300px] flex-col mt-24 items-center bg-white rounded p-2" >

                <div>
                    <h1 className="font-bold mb-2">Página de Login</h1>
                </div>


                <form action="post" className="flex flex-col" >
                    Email 
                    <input type="text" autoComplete="current-email" className="border mb-2" />
                    Senha 
                    <input type="password" autoComplete="current-password" className="border mb-2" />
                    <button type="submit"  className="border mb-2">Login</button>
                </form>

                <div className=' text-center text-xs'>Não possui uma conta? <Link className='text-red-600' to="/register">Registre-se</Link> agora mesmo</div>
            </div>


        </div>
    );
}