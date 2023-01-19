import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mixed, number, object, ref, string } from "yup";

import img from "../../../public/images/default-product.jpg";
import { ImBoxAdd } from "react-icons/im";

import { NavBar } from "../NavBar";
import { Menu } from "../Menu";
import uploadapi from "../../data/api";



const schema = object({
  name: string()
    .required("Campo obrigatório")
    .min(3, "Nome deve conter 3 letras ou mais"),
  description: string().required("Campo obrigatório"),
  value: string()
    .min(1.0, "O valor deve ser maior que 0")
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),

});

export const RegisterProducts = () => {
  const [image, setImage] = useState<any>("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
    error: false,
  });

  const desc = "Register Products";
  const color = "#22C55E";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickSubimit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("value", data.value);
    formData.append("quantity", data.quantity);
    formData.append("image", image);

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
      setImage('')
  };

  return (
    <>
      <section className="flex ">
        <Menu />
        <div className="w-full">
          <NavBar color={color} desc={desc} />
          <div className="flex  justify-center items-center h-auto  bg-grayBG w-full p-12">
            <div className="flex bg-white w-2/6 flex-col items-center h-auto rounded-md p-6">
              <div className="mb-6">
                <div className="flex justify-center items-center flex-col gap-3">
                  <ImBoxAdd size={60} className=" text-green-500" />
                  <h1 className="font-bold text-2xl">Registre um Produto</h1>
                </div>
              </div>

              <form
                className="flex flex-col w-4/5 "
                encType="multipart/form-data"
                onSubmit={handleSubmit(handleClickSubimit)}
              >
                <label className=" ">Nome</label>
                <input
                  type="text"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3 "
                  {...register("name")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.name?.message}</>
                </span>

                <label>Descrição</label>
                <input
                  type="text"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                  {...register("description")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.description?.message}</>
                </span>

                <label>Valor da unidade</label>
                <input
                  type="string"
                  // defaultValue={1}
                  autoComplete="current-email"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                  {...register("value")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.value?.message}</>
                </span>

                <label>Imagem do produto</label>

                <input
                  type="file"
                  className="border rounded-md drop-shadow h-8 focus:outline-none mb-6"
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
                    className=" border text-white font-bold text-xl rounded-md drop-shadow bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-400 hover:to-yellow-500 w-4/5 p-2"
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
    </>
  );
};
