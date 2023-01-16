import { useState, useContext, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mixed, number, object, ref, string, date } from "yup";

import { api } from "../../data/api";

import { DataProductType } from "../../types/dataProductType";

import { FaFileInvoice } from "react-icons/fa";

import { NavBar } from "../../components/NavBar";
import { Menu } from "../../components/Menu";
import uploadapi from "../../data/api";

import { AuthContext } from "../../contexts/auth";

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

  const desc = "Entrada no estoque";
  const color = "#f97316";

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
      <section className="flex ">
        <Menu />
        <div className="w-full">
          <NavBar color={color} desc={desc} />
          <div className="flex  justify-center items-center h-full  bg-grayBG w-full p-12">
            <div className="flex bg-white w-2/6 flex-col items-center h-auto rounded-md p-6">
              <div className="mb-6">
                <div className="flex justify-center items-center flex-col gap-3">
                  <FaFileInvoice size={60} className="text-orange-500" />
                  <h1 className="font-bold text-2xl">Cadastro de nota</h1>
                </div>
              </div>

              <form
                className="flex flex-col w-4/5 "
                encType="multipart/form-data"
                onSubmit={handleSubmit(handleClickSubimit)}
              >
                <label className="">Numero da nota fiscal</label>
                <input
                  type="text"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3 "
                  {...register("invoice_number")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.invoiceNumber?.message}</>
                </span>

                <label>CNPJ</label>
                <input
                  type="text"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                  {...register("cnpj")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.cnpj?.message}</>
                </span>

                <label>Data</label>
                <input
                  type="date"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                  {...register("date")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.date?.message}</>
                </span>
                <label>Produto </label>
                <select
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
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
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                  {...register("quantity")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.quantity?.message}</>
                </span>

                <label>Valor total da nota</label>
                <input
                  type="string"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
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
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-6"
                  {...register("username")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.username?.message}</>
                </span>

                
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className=" border text-white text-xl rounded-md drop-shadow bg-orange-500 hover:bg-green-300 w-4/5 p-2"
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
    </>
  );
};
