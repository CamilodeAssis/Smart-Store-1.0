import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mixed, number, object, ref, string } from "yup";

import img from "../../../public/images/default-product.jpg";
import { ImBoxAdd } from "react-icons/im";

import { NavBar } from "../NavBar/NavBar";
import { Menu } from "../Menu";
import uploadapi from "../../data/api";
import { Footer } from "../Footer";

const schema = object({
  name: string()
    .required("Campo obrigatório")
    .min(3, "Nome deve conter 3 letras ou mais"),
  description: string().required("Campo obrigatório"),
  value: string()
    .min(1.0, "O valor deve ser maior que 0")
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
    sale_value: string()
    .min(1.0, "O valor deve ser maior que 0")
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
});

const options = ["hardware", "accessory", "console", "games"];

export const RegisterProducts = () => {
  const [image, setImage] = useState<any>("");
  const [selectedValue, setSelectedValue] = useState(options[0]);
 
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
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("value", data.value);
    formData.append("quantity", data.quantity);
    formData.append("image", image);
    formData.append("department", selectedValue);
    console.log(data.sale_value);
    formData.append("sale_value", data.sale_value);

    const headers = {
      headers: {
        "Content-Type": "multipart/form-data; boundary=MyBoundary",
      },
    };
    await uploadapi
      .post("/products", formData, headers)
      .then((response) => {
        setStatus({
          type: "success",
          message: response.data.message,
          error: response.data.error,
        });
      })
      .catch((error) => {
        if (error.response) {
          setStatus({
            type: "error",
            message: error.response.data.message,
            error: error.response.data.error,
          });
        } else {
          setStatus({
            type: "error",
            message: "Problema com o servidor, tente novamente mais tarde",
            error: true,
          });
        }
      });

    reset();
    setImage("");
  };

  return (
    <>
      <section className="flex ">
        <Menu />
        <div className="w-full flex flex-col items-center">
          <NavBar />
          <div className="flex  justify-center items-center h-screen  bg-grayBG w-4/5 my-2 p-2 sm:p-6 md:p-12">
            <div className="flex bg-white w-full sm:w-3/5  flex-col items-center h-auto rounded p-6">
              <div className="mb-6">
                <div className="flex justify-center items-center flex-col gap-3">
                  <ImBoxAdd  className=" text-orange-500 w-10 h-10  lg:w-14 lg:h-14 " />
                  <h1 className="font-bold text-sm sm:text-xl md:text-2xl text-center">Registre um Produto</h1>
                </div>
              </div>

              <form
                className="flex flex-col w-full lg:w-4/5 text-xs lg:text-base "
                encType="multipart/form-data"
                onSubmit={handleSubmit(handleClickSubimit)}
              >
                <label className=" ">Nome</label>
                <input
                  type="text"
                  className="border rounded-md drop-shadow h-8 focus:outline-none  "
                  {...register("name")}
                />
                <span className="text-red-500 my-1 text-xs mb-3">
                  <>{errors?.name?.message}</>
                </span>

                <label>Descrição</label>
                <input
                  type="text"
                  className="border rounded-md drop-shadow h-8 focus:outline-none "
                  {...register("description")}
                />
                <span className="text-red-500 my-1 text-xs mb-3">
                  <>{errors?.description?.message}</>
                </span>

                <label>Valor de compra</label>
                <input
                  type="string"
                  // defaultValue={1}
                  autoComplete="current-email"
                  className="border rounded-md drop-shadow h-8 focus:outline-none "
                  {...register("value")}
                />
                <span className="text-red-500 my-1 text-xs mb-6">
                  <>{errors?.value?.message}</>
                </span>

                <label>Valor de venda</label>
                <input
                  type="string"
                  // defaultValue={1}
                  autoComplete="current-email"
                  className="border rounded-md drop-shadow h-8 focus:outline-none "
                  {...register("sale_value")}
                />
                <span className="text-red-500 my-1 text-xs mb-6">
                  <>{errors?.sale_value?.message}</>
                </span>

                <select
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-6 cursor-pointer"
                  value={selectedValue}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectedValue(e.target.value)
                  }
                >
                  {options &&
                    options.map((options, index: any) => (
                      <option
                        className="bg-gray-100 cursor-pointer"
                        key={index}
                        value={options}
                      >
                        {options}
                      </option>
                    ))}
                </select>

                <label className="text-center mb-1">Imagem do produto</label>

                <input
                  type="file"
                  className="block w-full text-sm border rounded drop-shadow focus:outline-none mb-6  file:py-1 file:px-0.5 lg:file:mr-4 lg:file:py-2 lg:file:px-4
                  file:rounded file:border-0
                  file:px-4file:text-sm file:text-xs file:font-semibold
                  file:bg-orange-500 file:text-white
                  hover:file:bg-orange-400
                  file:cursor-pointer 
                  "
                  name="image"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!e.target.files) return;

                    setImage(e.target.files[0]);
                  }}
                />
                {image ? (
                  <div className="flex justify-center items-center mb-6">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="image"
                      width="200"
                      height="200"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center items-center mb-6">
                    <img src={img} alt="image" width="200" height="200" />
                  </div>
                )}

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
              {status.type === "success" && status.error === false ? (
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
