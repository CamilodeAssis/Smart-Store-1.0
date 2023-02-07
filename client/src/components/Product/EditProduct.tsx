import { useState, useContext, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mixed, number, object, ref, string, date } from "yup";

import { api } from "../../data/api";

import { DataProductType } from "../../types/dataProductType";

import { FaFileInvoice } from "react-icons/fa";

import { NavBar } from "../NavBar/NavBar";
import { Menu } from "../Menu";
import uploadapi from "../../data/api";

import { AuthContext } from "../../contexts/auth";
import { Footer } from "../Footer";


const schema = object({
  invoice_number: string()
    .required("Campo obrigatório")
    .min(3, "Nome deve conter 3 letras ou mais"),
  cnpj: string()
    .required("Campo obrigatório")
    .min(3, "Nome deve conter 3 letras ou mais"),
  date: date()
    .default(() => new Date())
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
  name: string().typeError("Campo obrigatório"),
  quantity: number()
    .min(1.0, "O valor deve ser maior que 0")
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
  value: string()
    .min(1.0, "O valor deve ser maior que 0")
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
});

export const EditProduct = () => {
  const { user } = useContext(AuthContext);

  const [userId] = useState(user.logged_in_user_id as number);
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState<DataProductType[]>();
  const [selectedValue, setSelectedValue] = useState("");

  const [url, setUrl] = useState("");

  const [image, setImage] = useState<any>("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
    error: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickSubimit = async (data: any) => {
    const response = await api.registerProducts({
      userId,
      invoice_number: data.invoice_number,
      cnpj: data.cnpj,
      date: data.date,
      name: selectedValue,
      quantity: data.quantity,
      value: data.value,
      username: user.logged_in_user_name,
    });

    if (response) {
      setStatus({
        type: "success",
        message: response.message,
        error: response.error,
      });
    } else {
      setStatus({
        type: "error",
        message: "Problema com o servidor, tente novamente mais tarde",
        error: true,
      });
    }
    reset();
  };

  const loadProduct = async () => {
    const response = await api.getProductByQuery(`?name=${searchTerm}`);
    if (!response) {
      <p>carregando</p>;
    }
    return (
      setData(response.products), setSelectedValue(response.products[0].name)
    );
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <section className="flex  ">
        <Menu />
        <div className="flex flex-col items-center w-screen ">
          <NavBar />
          <div className="flex  justify-center items-center h-screen  bg-grayBG w-4/5 my-2 p-2 sm:p-6 md:p-10">
            <div className="flex bg-white w-full sm:w-3/5  flex-col items-center h-auto rounded-md p-6">
              <div className="mb-6 w-full">
                <div className="flex justify-center items-center flex-col gap-3">
                  <FaFileInvoice className=" text-orange-500 w-10 h-10  lg:w-14 lg:h-14 " />
                  <h1 className="font-bold text-sm sm:text-xl md:text-2xl text-center">
                    Cadastre uma nota
                  </h1>
                </div>
              </div>

              <form
                className="flex flex-col w-full lg:w-4/5 text-xs lg:text-base "
                encType="multipart/form-data"
                onSubmit={handleSubmit(handleClickSubimit)}
              >
                <label className="">Numero da nota fiscal</label>
                <input
                  type="text"
                  className=" border rounded-md drop-shadow h-8 focus:outline-none mb-3 w-full "
                  {...register("invoice_number")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.invoiceNumber?.message}</>
                </span>

                <label>CNPJ</label>
                <input
                  type="text"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3 w-full"
                  {...register("cnpj")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.cnpj?.message}</>
                </span>

                <label>Data</label>
                <input
                  type="date"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3 w-full"
                  {...register("date")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.date?.message}</>
                </span>
                <label>Produto </label>
                <select
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3 w-full"
                  value={selectedValue}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectedValue(e.target.value)
                  }
                >
                  {data &&
                    data.map((produto, index) => (
                      <option
                        className="bg-gray-100 cursor-pointer"
                        key={index}
                        value={produto.name}
                      >
                        {" "}
                        {produto.name}{" "}
                      </option>
                    ))}
                </select>

                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.name?.message}</>
                </span>
                <label>Quantidade</label>
                <input
                  type="number"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3 w-full"
                  {...register("quantity")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.quantity?.message}</>
                </span>

                <label>Valor total da nota</label>
                <input
                  type="string"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3 w-full"
                  {...register("value")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.value?.message}</>
                </span>

                <label>Usuario</label>
                <input
                  type="string"
                  value={user.logged_in_user_name}
                  disabled={true}
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-6 w-full"
                  {...register("username")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.username?.message}</>
                </span>

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className=" border text-white font-bold text-xs lg:text-xl rounded-md drop-shadow bg-orange-500 hover:bg-orange-400 w-4/5 lg:w-1/2 p-2"
                  >
                    Cadastrar
                  </button>
                  <br />
                </div>
              </form>
              {status.type === "success" ? (
                <p className=" text-green-500 mt-3 text-center">
                  {status.message}
                </p>
              ) : (
                ""
              )}
              {status.type === "success" && status.error === true ? (
                <p className=" text-red-500 mt-3 text-center">
                  {status.message}
                </p>
              ) : (
                ""
              )}
              {status.type === "error" ? (
                <p className="text-red-500 mt-3 text-center">
                  {status.message}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
       
      </section>
     <Footer/>
    </>
  );
};
