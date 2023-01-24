

import { NavBar } from "../components/NavBar";
import { Menu } from "../components/Menu";
import { Calendar } from "../components/Calendar";
import { Weather } from "../components/Weather";
import {MdSupportAgent} from 'react-icons/md'
import { Carousel } from "../components/Carousel";


const color = "#1D4ED8";
const desc = "Home";



export const Home = () => {

    return (
        <section className="flex ">
        <Menu />
        <div className="w-full">
          <NavBar  />
          <div className="flex flex-col items-center  bg-grayBG min-h-screen w-full py-10 px-10">
            
            <Carousel />
           
          </div>
        </div>
      </section>
    );
}
