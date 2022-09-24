import { MapPin } from "phosphor-react";
import Payment from "../Payment";

export default function Form() {
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg font-extrabold">Complete seu pedido</p>
      <div className="w-full bg-[#F3F2F2] p-8 rounded-lg mt-4">
        <div className="flex">
          <MapPin size={22} color="#C47F17" />
          <div className="flex flex-col ml-2">
            <p className="text-sm font-extrabold">Endereço de Entrega</p>
            <p className="text-sm">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <form className="flex flex-col mt-8 gap-2">
          <input
            type="text"
            placeholder="CEP"
            className="bg-[#EDEDED] w-48 rounded-md p-2 placeholder:p-2 text-sm outline-none text-[#8D8686]"
          />
          <input
            type="text"
            placeholder="Rua"
            className="bg-[#EDEDED] rounded-md p-2 placeholder:p-2 text-sm outline-none text-[#8D8686]"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Número"
              className="bg-[#EDEDED] w-48 rounded-md p-2 placeholder:p-2 text-sm outline-none text-[#8D8686]"
            />
            <input
              type="text"
              placeholder="Complemento"
              className="bg-[#EDEDED] flex-1 rounded-md p-2 placeholder:p-2 text-sm outline-none text-[#8D8686]"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Bairro"
              className="bg-[#EDEDED] w-48 rounded-md p-2 placeholder:p-2 text-sm outline-none text-[#8D8686]"
            />
            <input
              type="text"
              placeholder="Cidade"
              className="bg-[#EDEDED] flex-1 rounded-md p-2 placeholder:p-2 text-sm outline-none text-[#8D8686]"
            />
            <input
              type="text"
              placeholder="UF"
              className="bg-[#EDEDED] w-20 rounded-md p-2 placeholder:p-2 text-sm outline-none text-[#8D8686]"
            />
          </div>
        </form>
      </div>
      <Payment />
    </div>
  );
}
