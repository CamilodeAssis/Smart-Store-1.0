

import { NavBar } from "../components/NavBar";
import { Menu } from "../components/Menu";
import { Calendar } from "../components/Calendar";
import { Weather } from "../components/Weather";
import {MdSupportAgent} from 'react-icons/md'


const color = "#3B82F6";
const desc = "Home";



export const Home = () => {

    return (
        <section className="flex ">
        <Menu />
        <div className="w-full">
          <NavBar color={color} desc={desc} />
          <div className="flex flex-col bg-grayBG min-h-screen w-full p-10 gap-12">
            
           
          </div>
        </div>
      </section>
    );
}
