import { Link } from "react-router-dom";

export const  NotFound =  () => {
    return(

        <div className="w-screen h-screen bg-slate-800 flex justify-center items-center">

                    <div className="flex flex-col justify-center items-center gap-6 text-white">
                        <h1 className="text-2xl font-bold">Error404. Página não encontrada...</h1>
                        <div className="flex gap-4 items-center justify-center">
                            <span className="hover:text-orange-500"><Link to="/"> Voltar á página principal</Link></span>
                            <span className="hover:text-orange-500" ><Link to="/login">Fazer Login</Link></span>
                        </div>
                    </div>

        </div>
    );
}
