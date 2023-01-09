import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mixed, number, object, ref, string } from "yup";

import { NavBar } from "./NavBar";
import { Menu } from "./Menu";
import { api } from "../data/api";

import { ImBoxAdd } from "react-icons/im";

const schema = object({
  name: string()
    .required("Campo obrigatório")
    .min(3, "Nome deve conter 3 letras ou mais"),
  description: string().required("Campo obrigatório"),
  value: number().min(1, "O valor deve ser maior que 0").required('Campo obrigatório').typeError('Campo obrigatório'),
  quantity: number().min(1, "O valor deve ser maior que 0").required('Campo obrigatório').typeError('Campo obrigatório'),
  image: mixed().required("Arquivo obrigatório")   
});

export const RegisterProducts = () => {
  const desc = "Register Products";
  const color = '#22C55E'

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  

  const handleClickSubimit = async (data: any) => {
    const post = await api.postProducts({
      name: data.name,
      description: data.description,
      value: data.value,
      quantity: data.quantity,
      image: data.image
    });
  };

  return (
    <>
      <section className="flex ">
        <Menu />
        <div className="w-full">
          <NavBar color={color} desc={desc} />
          <div className="flex  justify-center items-center h-screen bg-grayBG w-full p-12">
            <div className="flex bg-white w-2/6 flex-col items-center  rounded-md p-6">
              
                <div className="mb-6">
                  <div className="flex justify-center items-center flex-col gap-3">
                    <ImBoxAdd size={60} className="text-green-500" />
                    <h1 className="font-bold text-2xl">Registre um Produto</h1>
                  </div>
                </div>

                <form
                  className="flex flex-col w-4/5 "
                  onSubmit={handleSubmit(handleClickSubimit)}
                >
                  <>
                    <label className=" ">Nome</label>
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
                    <label>Descrição</label>
                    <input
                      type="text"
                      className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                      {...register("description")}
                    />
                    <span className="text-red-500 my-1 text-xs">
                      <>{errors?.description?.message}</>
                    </span>
                  </>
                  <>
                    <label>Valor</label>
                    <input
                      type="number"
                      defaultValue={1}
                      autoComplete="current-email"
                      className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                      {...register("value")}
                    />
                    <span className="text-red-500 my-1 text-xs">
                      <>{errors?.value?.message}</>
                    </span>
                  </>
                  <>
                    <label>Quantidade</label>
                    <input
                      type="number"
                      defaultValue={1}
                      {...register("quantity")}
                      autoComplete="current-password"
                      className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
                    />
                    <span className="text-red-500 my-1 text-xs">
                      <>{errors?.quantity?.message}</>
                    </span>
                  </>
                  <>
                    <label>Imagem</label>
                    <input
                      type="file"
                      autoComplete="current-password"
                      className="border rounded-md drop-shadow h-8 focus:outline-none mb-6"
                      {...register("image")}
                    />
                    <span className="text-red-500 my-1 text-xs">
                      <>{errors?.image?.message}</>
                    </span>
                  </>
                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      className=" border text-white text-xl rounded-md drop-shadow bg-green-500 hover:bg-green-300 w-4/5 p-2"
                    >
                      Cadastrar
                    </button>
                  </div>
                </form>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
