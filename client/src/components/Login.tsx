import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'


export const Login = () => {
    return (
        <div className='bg-purple-700 flex  justify-center items-center h-screen'>
            <div className='flex flex-col justify-between items-center gap-24  w-2/3 '>   
                <div className='w-auto text-white text-center flex flex-col gap-9'>
                    <h1 className='font-bold text-2xl'>Sistema </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugit eaque quo, laboriosam sequi eos illo? Facere obcaecati cupiditate ipsa tenetur eligendi veritatis, quam nulla illo at reiciendis aut sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, perferendis iure corporis inventore quod facere, repellat modi eveniet, quo et aperiam eos optio illo voluptatibus distinctio recusandae voluptate unde laboriosam.</p>
                </div>

                <div className='flex flex-col justify-center  items-center bg-white h-64 w-[400px] gap-6 p-1 rounded-md'>
                    <h1 className='text-2xl font-bold'>LOGIN</h1>

                    <div className='flex items-center flex-col w-full gap-2'>
                    <input type="text" placeholder='E-MAIL' className='border rounded w-4/5 h-10 focus:outline-none'/>
                    <input type="text" placeholder='SENHA' className='border rounded w-4/5 h-10 focus:outline-none'/>
                    </div>

                    <button className='bg-purple-700 text-white p-1 rounded w-2/5 font-bold text-2xl hover:bg-purple-600'>Entrar</button>
                </div>

            </div>
        </div>
    );
}