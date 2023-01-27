import { NavBar } from "../components/NavBar/NavBar";
import { Menu } from "../components/Menu";
import { Calendar } from "../components/Calendar";
import { Weather } from "../components/Weather";
import { MdSupportAgent } from "react-icons/md";
import { Carousel } from "../components/Carousel";
import { GridProducts } from "../components/Product/GridProducts";
import { Footer } from "../components/Footer";

const color = "#1D4ED8";
const desc = "Home";

export const Home = () => {
  return (
    <>
    <div className="flex">
      <Menu />
      <section className="flex flex-col w-full">
        <NavBar />

        <div className="w-full flex justify-center ">
          <div className="  bg-grayBG min-h-screen w-4/5 my-2 flex flex-col   ">
              <Carousel />
              <GridProducts searchTerm={"hardware"} />
              <GridProducts searchTerm={"accessory"} />
              
           
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};
