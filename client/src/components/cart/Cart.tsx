import { Menu } from "../Menu"
import { NavBar } from "../NavBar/NavBar"

export const Cart = () => {
    return(
        <section className="flex ">
      <Menu />
      <div className="w-full">
        <NavBar  />
        <div className="flex flex-col bg-grayBG min-h-screen w-full p-12">
            <div className="flex flex-col justify-center p-2">
            
          </div>
        </div>
      </div>
    </section>
    );
    
}
