
export const Footer = () => {
    return(
        <div className="w-screen ">
        <div className="bg-slate-400 w-full h-4 flex justify-center items-center "></div>
        <div className="bg-orange-500 w-full h-4 flex justify-center items-center "></div>
        <div className="bg-slate-800 w-full h-auto flex justify-center items-center flex-col p-5 gap-2 ">
            <div className="text-white font-bold text-base lg:text-3xl">SMART STORE</div>
            <span className="text-white text-center text-[10px] lg:text-base">2023-2023 - Todos os direitos reservados - <a href="https://github.com/CamilodeAssis" target="_blank">Camilo de Assis</a></span>
        </div>
        
        </div>
    );
}
