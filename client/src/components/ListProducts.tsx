import { useEffect, useState } from "react";
import { api } from "../data/api";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";

import { DataProductType } from "../types/dataProductType";
import { User } from "../pages/User";

export const ListProducts = () => {
  const color = "#3b82f6"
  const desc = "Users List";
 


  const [data, setData] = useState<DataProductType[]>();
  const [url , setUrl] = useState('');

  const apiData = async () => {
    await api.getProducts().then((response) =>{
        if (!response.products){
          <p>carregando</p>;
        }
        return setData(response.products), setUrl(response.url);
    }).catch((error) => {
      console.log(error.response);
    });   

  };

  useEffect(() => {
    apiData();
  }, []);


  return (
    <section className="flex ">
      <Menu />
      <div className="w-full">
        <NavBar color ={color} desc={desc} />
        <div className="flex flex-col bg-grayBG min-h-screen w-full p-12">
            <div className="flex flex-col justify-center p-2">
            {data &&
              data.map((data, index) => (               
                <div className="mb-3 bg-white rounded p-2 drop-shadow-md" key={index}>                 
                  {data.name}
                  <br />
                  <img className="w-36 " src={url + data.image} alt="imagem" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
