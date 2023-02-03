import { NavBar } from "../components/NavBar/NavBar";
import { Menu } from "../components/Menu";
import { Calendar } from "../components/Calendar";
import { Weather } from "../components/Weather";
import { MdSupportAgent } from "react-icons/md";
import { Footer } from "../components/Footer";
import { ItemDashboard } from "../components/dashboard/CashValue";
import { useEffect, useState } from "react";
import { DataProductType } from "../types/dataProductType";
import { DataPurchaseType } from "../types/dataPurchaseType";


export const Dashboard = () => {
 



  return (
    <>
      <section className="flex ">
        <Menu />
        <div className="flex flex-col  items-center w-full">
          <NavBar />
          <div className="flex flex-col bg-grayBG min-h-screen w-4/5 p-10 gap-12 my-2">
            <div className=" flex justify-between gap-12 ">
              <div className="w-full">
              <ItemDashboard />
                
              </div>
            
              <div className="flex flex-col gap-12">
                <div className="flex gap-12">
                  <div className=" w-44 h-40  drop-shadow ">
                    <Weather />
                  </div>
                  <div className="bg-gradient-to-b from-red-500 to-yellow-400 hover:from-pink-500 hover:to-yellow-500  w-44 h-40 rounded drop-shadow flex  flex-col justify-center items-center gap-2">
                    <MdSupportAgent className="text-white w-10 h-10" />
                    <span className="text-white text-center font-bold">
                      Canais de ajuda
                    </span>
                  </div>
                </div>
                <div className=" flex w-[400px] drop-shadow ">
                  <Calendar />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className=" grid grid-flow-col gap-12 ">
                <div className="w-auto h-80 bg-white drop-shadow rounded-b">
                  <div className=" bg-slate-800 flex justify-center items-center text-white">
                    LOREM
                  </div>
                </div>
                <div className="w-auto h-80 bg-white drop-shadow rounded-b">
                  <div className="bg-slate-800  flex justify-center items-center text-white">
                    LOREM
                  </div>
                </div>
                <div className="w-auto h-80 bg-white drop-shadow rounded-b">
                  <div className="bg-slate-800  flex justify-center items-center text-white">
                    LOREM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
