import { NavBar } from "../components/NavBar/NavBar";
import { Menu } from "../components/Menu";
import { Calendar } from "../components/Calendar";
import { Weather } from "../components/Weather";

import { MdSupportAgent } from "react-icons/md";
import { GoAlert } from "react-icons/go";

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
          <div className="flex flex-col bg-grayBG min-h-screen w-4/5 p-10 gap-6 lg:gap-12 my-2">
            <h1 className="text-center sm:text-3xl font-bold text-slate-800 w-full">
              DASHBOARD
              <hr />
            </h1>
            <div className=" flex flex-col md:flex-row justify-center  md:justify-between  gap-6 lg:gap-12 ">
              <div className="w-full  ">
                <ItemDashboard />
              </div>

              <div className="hidden sm:flex flex-col w-[100px] sm:[280px] md:w-[460px]  gap-12">
                <div className="flex  xl:flex-row flex-col gap-12">
                  <div className=" w-full  h-44  drop-shadow cursor-pointer ">
                    <Weather />
                  </div>
                  <div className="h-44  cursor-pointer bg-gradient-to-b from-red-500 to-yellow-400 hover:from-pink-500 hover:to-yellow-500  w-full  rounded drop-shadow flex  flex-col justify-center items-center gap-2">
                    <MdSupportAgent className="text-white w-10 h-10" />
                    <span className="text-white text-center font-bold">
                      Canais de ajuda
                    </span>
                  </div>
                </div>
                <div className=" flex  drop-shadow ">
                  <Calendar />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row xl:hidden justify-center items-center w-full gap-6 rounded mt-12">
              <div className="bg-red-200 text-red-500 text-center font-bold flex justify-center items-center gap-2 h-32 lg:h-16 w-full rounded drop-shadow uppercase p-2 cursor-pointer hover:bg-red-100">
                {" "}
                <GoAlert className="w-16 h-16 lg:w-10 lg:h-10" />{" "}
                <h1>Atenção! itens com numero baixo no estoque.</h1>
              </div>
              <div className="bg-slate-300 text-slate-800  font-bold flex justify-center items-center gap-2  h-32 lg:h-16 w-full rounded drop-shadow uppercase p-2 cursor-pointer hover:bg-slate-100">
                LOREM
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row w-full gap-12 ">
                <div className="  h-80 bg-white drop-shadow rounded-b">
                  <div className=" bg-slate-800 w-full  flex justify-center items-center text-white p-1 text-center">
                    LINKS ÚTEIS
                  </div>
                </div>
                <div className=" h-80 bg-white drop-shadow rounded-b">
                  <div className="bg-slate-800  w-full  flex justify-center items-center text-white p-1 text-center">
                    NOTÍCIAS
                  </div>
                </div>
                <div className=" flex flex-col items-center gap-6  h-80 bg-white drop-shadow rounded-b">
                  <div className="bg-slate-800 w-full  flex justify-center items-center text-white p-1 text-center">
                    USUÁRIOS ONLINE
                  </div>

                  <ul></ul>
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
