import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

import img from "../../public/images/default-user.png";

import { NavBar } from "./NavBar";
import { Menu } from "./Menu";
import { api } from "../data/api";
import uploadapi from "../data/api";

import { GiArchiveRegister } from "react-icons/gi";

const schema = object({
  name: string()
    .required("Campo obrigatório")
    .min(3, "Nome deve conter 3 letras ou mais"),
  username: string().required("Campo obrigatório"),
  email: string().required("Campo obrigatório"),
  password: string()
    .required("Campo obrigatório")
    .min(8, "A senha deve ter no minimo 8 caracteres"),
  confirmPassword: string()
    .required("Campo obrigatório")
    .oneOf([ref("password"), null], "As senhas devem ser iguais"),
});

export const RegisterUsers = () => {
  const [image, setImage] = useState<any>("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
    error: false,
  });

  const desc = "Register users";
  const color = "#22C55E";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickSubimit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("image", image);

    
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data; boundary=MyBoundary",
      },
    };
    await uploadapi
      .post("/users", formData, headers)
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
  };

  return (

    <>
      <section className="flex ">
        <Menu />
        <div className="w-full">
          <NavBar color={color} desc={desc} />
          <div className="flex  justify-center items-center h-auto bg-grayBG w-full p-12">
            <div className="flex bg-white w-2/6 flex-col items-center  rounded-md p-6">
              <div className="mb-6">
                <div className="flex justify-center items-center flex-col gap-3">
                  <GiArchiveRegister size={60} className="text-green-500" />
                  <h1 className="font-bold text-2xl">Registre um usuário</h1>
                </div>
              </div>

              <form
                className="flex flex-col w-4/5 "
                onSubmit={handleSubmit(handleClickSubimit)}
              >
                <>
                  <label className=" ">Nome Completo</label>
                  <input
                    type="text"
                    className="border rounded-md drop-shadow h-8 focus:outline-none mb-3 "
                    {...register("name")}
                  />
                  <span className="text-red-500 my-1 text-xs">
                    <>{errors?.name?.message}</>
                  </span>
                </>
                <>
                  <label>Nome de usuário</label>
                  <input
                    type="text"
                    className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                    {...register("username")}
                  />
                  <span className="text-red-500 my-1 text-xs">
                    <>{errors?.username?.message}</>
                  </span>
                </>
                <>
                  <label>Email</label>
                  <input
                    type="email"
                    autoComplete="current-email"
                    className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                    {...register("email")}
                  />
                  <span className="text-red-500 my-1 text-xs">
                    <>{errors?.email?.message}</>
                  </span>
                </>
                <>
                  <label>Senha</label>
                  <input
                    type="password"
                    {...register("password")}
                    autoComplete="current-password"
                    className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                  />
                  <span className="text-red-500 my-1 text-xs">
                    <>{errors?.password?.message}</>
                  </span>
                </>
                <>
                  <label>Confirme a senha</label>
                  <input
                    type="password"
                    autoComplete="current-password"
                    className="border rounded-md drop-shadow h-8 focus:outline-none mb-6"
                    {...register("confirmPassword")}
                  />
                  <span className="text-red-500 my-1 text-xs">
                    <>{errors?.confirmPassword?.message}</>
                  </span>
                </>
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
                    <img src={img} alt="image" width="150" height="150" />
                  </div>
                )}
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className=" border text-white text-xl rounded-md drop-shadow bg-green-500 hover:bg-green-300 w-4/5 p-2"
                  >
                    Cadastrar
                  </button>
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
