import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

import img from "../../../public/images/default-user.png";

import { NavBar } from "../NavBar/NavBar";
import { Menu } from "../Menu";
import { api } from "../../data/api";
import uploadapi from "../../data/api";

import { GiArchiveRegister } from "react-icons/gi";
import { Footer } from "../Footer";

const schema = object({
  name: string()
    .required("Campo obrigatório")
    .min(3, "Nome deve conter 3 letras ou mais"),
  username: string().required("Campo obrigatório"),
  usertype: string()
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
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
    formData.append("usertype", data.usertype);
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

  useEffect(() => {}, [image]);

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
                  <GiArchiveRegister className="text-orange-500 w-10 h-10  lg:w-14 lg:h-14 " />
                  <h1 className="font-bold text-2xl">Registre um usuário</h1>
                </div>
              </div>

              <form
                className="flex flex-col w-full lg:w-4/5 text-xs lg:text-base  "
                onSubmit={handleSubmit(handleClickSubimit)}
              >
                <label className=" ">Nome Completo</label>
                <input
                  type="text"
                  className="border rounded-md drop-shadow h-8 focus:outline-none  "
                  {...register("name")}
                />
                <span className="text-red-500 my-1 text-xs mb-3">
                  <>{errors?.name?.message}</>
                </span>

                <label>Nome de usuário</label>
                <input
                  type="text"
                  className="border rounded-md drop-shadow h-8 focus:outline-none "
                  {...register("username")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.username?.message}</>
                </span>

                <div className="flex flex-col sm:flex-row items-center gap-2 my-3 ">
                  <div className="flex  gap-1">
                    <input
                      type="radio"
                      value="admin"
                      {...register("usertype")}
                    />
                    Administrador
                    <span className="text-red-500 my-1 text-xs">
                      <>{errors?.usertype?.message}</>
                    </span>
                  </div>

                  <div className="flex  gap-1">
                    <input
                      type="radio"
                      value="user"
                      {...register("usertype")}
                    />
                    Usuário comum
                    <span className="text-red-500 my-1 text-xs">
                      <>{errors?.usertype?.message}</>
                    </span>
                  </div>
                </div>
                <label>Email</label>
                <input
                  type="email"
                  autoComplete="current-email"
                  className="border rounded-md drop-shadow h-8 focus:outline-none "
                  {...register("email")}
                />
                <span className="text-red-500 my-1 text-xs mb-3">
                  <>{errors?.email?.message}</>
                </span>

                <label>Senha</label>
                <input
                  type="password"
                  {...register("password")}
                  autoComplete="current-password"
                  className="border rounded-md drop-shadow h-8 focus:outline-none "
                />
                <span className="text-red-500 my-1 text-xs mb-3">
                  <>{errors?.password?.message}</>
                </span>

                <label>Confirme a senha</label>
                <input
                  type="password"
                  autoComplete="current-password"
                  className="border rounded-md drop-shadow h-8 focus:outline-none "
                  {...register("confirmPassword")}
                />
                <span className="text-red-500 my-1 text-xs mb-6">
                  <>{errors?.confirmPassword?.message}</>
                </span>

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
                    <img src={img} alt="image" width="150" height="150" />
                  </div>
                )}
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className=" border text-white font-bold text-xs lg:text-xl rounded-md drop-shadow bg-orange-500 hover:bg-orange-400 w-4/5 lg:w-1/2 p-2"
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
      <Footer />
    </>
  );
};
