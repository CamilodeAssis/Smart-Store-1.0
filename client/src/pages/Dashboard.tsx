

import { NavBar } from "../components/NavBar";
import { Menu } from "../components/Menu";
import { Calendar } from "../components/Calendar";
import { Weather } from "../components/Weather";
import {MdSupportAgent} from 'react-icons/md'


export const Dashboard = () => {
 

  const color = "#1E40AF";
  const desc = "Dashboard";

  return (
    <>
      <section className="flex ">
        <Menu />
        <div className="w-full">
          <NavBar color={color} desc={desc} />
          <div className="flex flex-col bg-grayBG min-h-screen w-full p-10 gap-12">
            <div className=" flex justify-between gap-12 ">
              <div className="w-full">
                <div className=" grid grid-cols-2 grid-flow-row gap-12 ">
                  <div className="w-auto h-32 bg-white drop-shadow rounded">
                    CONTEUDO
                  </div>
                  <div className="w-auto h-32 bg-white drop-shadow rounded">
                    CONTEUDO
                  </div>
                  <div className="w-auto h-32 bg-white drop-shadow rounded">
                    CONTEUDO
                  </div>
                  <div className="w-auto h-32 bg-white drop-shadow rounded">
                    CONTEUDO
                  </div>
                  <div className="w-auto h-32 bg-white drop-shadow rounded">
                    CONTEUDO
                  </div>
                  <div className="w-auto h-32 bg-white drop-shadow rounded">
                    CONTEUDO
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-12">
                <div className="flex gap-12">
                  <div className="bg-violet-500 w-44 h-32 rounded drop-shadow">
                    <Weather/>
                  </div>
                  <div className="bg-red-500 w-44 h-32 rounded drop-shadow flex  flex-col justify-center items-center gap-2">
                    
                    <MdSupportAgent className="text-white w-10 h-10"/>
                    <span className="text-white text-center font-bold">Canais de ajuda</span>
                    
                  </div>
                </div>
                <div className=" flex w-[400px]">
                <Calendar />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className=" grid grid-flow-col gap-12 ">
                <div className="w-auto h-80 bg-white drop-shadow rounded-b">
                  <div className="bg-blue-800 flex justify-center items-center text-white">
                    LOREM
                  </div>
                </div>
                <div className="w-auto h-80 bg-white drop-shadow rounded-b">
                  <div className="bg-blue-800 flex justify-center items-center text-white">
                    LOREM
                  </div>
                </div>
                <div className="w-auto h-80 bg-white drop-shadow rounded-b">
                  <div className="bg-blue-800 flex justify-center items-center text-white">
                    LOREM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
