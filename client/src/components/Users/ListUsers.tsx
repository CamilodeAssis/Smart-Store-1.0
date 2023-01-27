import { useEffect, useState } from "react";
import { api } from "../../data/api";
import { Menu } from "../Menu";
import { NavBar } from "../NavBar/NavBar";

import { DataType } from "../../types/dataType";


export const ListUsers = () => {
  const color = "#3b82f6"
  const desc = "Users List";

  const [data, setData] = useState<DataType[]>();

  const apiData = async () => {
    const data = await api.getUsers();
    if (!data) {
      <p>carregando</p>;
    }
    return setData(data);
  };

  useEffect(() => {
    apiData();
  }, []);

 

  return (
    <section className="flex ">
      <Menu />
      <div className="w-full">
        <NavBar />
        <div className="flex flex-col bg-grayBG min-h-screen w-full p-12">
            <div className="flex flex-col justify-center p-2">
            {data &&
              data.map((data, index) => (
                <div className="mb-3 bg-white rounded p-2 drop-shadow-md" key={index}>
                  <ul>
                    <li>
                      <span className="font-bold">Name:</span> {data.name}
                    </li>
                    <li>
                      <span className="font-bold">Username:</span>{" "}
                      {data.username}
                    </li>
                    <li>
                      <span className="font-bold">Email:</span> {data.email}
                    </li>
                  </ul>
                  
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
