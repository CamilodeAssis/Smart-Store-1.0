

import { NavBar } from "../components/NavBar/NavBar";
import { Menu } from "../components/Menu";
import { Calendar } from "../components/Calendar";
import { Weather } from "../components/Weather";
import {MdSupportAgent} from 'react-icons/md'
import { Carousel } from "../components/Carousel";



const color = "#1D4ED8";
const desc = "Home";



export const Home = () => {

    return (
      <div className="flex">
      <Menu/>
        <section className="flex flex-col w-full">
          <NavBar  />
        
        <div className="w-full flex justify-center ">
          
          <div className="  bg-grayBG min-h-screen w-4/5 mt-2  ">
            
            <Carousel />
          
          </div>
        </div>
      </section>
      </div>
    );
}
