import { Menu } from "../components/Menu";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBox } from "react-icons/fa";
import { FaSearch} from 'react-icons/fa'
import { FaFileInvoice } from 'react-icons/fa'


  const color = "#d97706";
  const desc = "Caixa";


export const Sales = () => {
    return(
        <section className="flex ">
      <Menu />
      <div className="w-full">
        <NavBar color={color} desc={desc} />
        <div className="flex flex-col  bg-grayBG min-h-screen w-full p-10 gap-6">
          
        </div>
      </div>
    </section>
    );
}
