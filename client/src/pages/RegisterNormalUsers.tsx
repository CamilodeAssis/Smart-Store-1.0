import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

import img from "../../public/images/default-user.png";

import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer";

import uploadapi from "../data/api";

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

export const RegisterNormalUsers = () => {
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
        <div className="w-full">
          <NavBar />
          <div className="flex flex-col bg-white  items-center h-screen  w-full ">
            <div className="flex w-2/6 flex-col items-center justify-center rounded-md mt-10">
              <h1 className="text-2xl font-bold mb-10 text-black">
                CRIAR CONTA
              </h1>
              <form
                className="flex flex-col w-4/5 text-black"
                onSubmit={handleSubmit(handleClickSubimit)}
              >
                <input
                  placeholder="Nome Completo"
                  type="text"
                  className=" rounded-md drop-shadow h-8 focus:outline-none mb-3 "
                  {...register("name")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.name?.message}</>
                </span>

                <input
                  placeholder="Nome de usuário"
                  type="text"
                  className=" rounded-md drop-shadow h-8 focus:outline-none mb-3 "
                  {...register("username")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.username?.message}</>
                </span>

                <input
                  placeholder="Email"
                  type="email"
                  className=" rounded-md drop-shadow h-8 focus:outline-none mb-3 b"
                  {...register("email")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.email?.message}</>
                </span>

                <input
                  placeholder="Senha"
                  type="password"
                  {...register("password")}
                  autoComplete="current-password"
                  className=" rounded-md drop-shadow h-8 focus:outline-none mb-3 "
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.password?.message}</>
                </span>

                <input
                  placeholder="Confirme sua senha"
                  type="password"
                  autoComplete="current-password"
                  className=" rounded-md drop-shadow h-8 focus:outline-none mb-6 "
                  {...register("confirmPassword")}
                />
                <span className="text-red-500 my-1 text-xs">
                  <>{errors?.confirmPassword?.message}</>
                </span>

                <label className="text-center mb-2 text-black ">
                  Escolha uma foto para seu perfil
                </label>
                <input
                  type="file"
                  className="bg-white border rounded-md drop-shadow h-8 focus:outline-none mb-6 "
                  name="image"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!e.target.files) return;

                    setImage(e.target.files[0]);
                  }}
                />
                {image ? (
                  <div className="flex justify-center items-center mb-6  ">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="image"
                      width="150"
                      height="150"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center items-center mb-6 ">
                    <img
                      className=""
                      src={img}
                      alt="image"
                      width="150"
                      height="150"
                    />
                  </div>
                )}
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="text-white text-2xl font-bold bg-orange-500 hover:bg-orange-400  drop-shadow   rounded   w-4/5 p-2"
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
