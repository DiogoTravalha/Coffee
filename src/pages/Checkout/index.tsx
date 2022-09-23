import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
  Minus,
  Plus,
} from "phosphor-react";

export default function Checkout() {
  return (
    <div className="flex justify-between gap-4 mt-36">
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
        <div className="w-full bg-[#F3F2F2] p-8 rounded-lg mt-4">
          <div className="flex">
            <CurrencyDollar size={22} color="#8047F8" />
            <div className="flex flex-col ml-2">
              <p className="text-sm font-extrabold">Pagamento</p>
              <p className="text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          {/* bg-[#8047F8]/30 */}
          <div className="flex justify-between gap-3 mt-8">
            <button className="bg-[#E6E5E5] flex-1 flex items-center justify-between p-4 rounded-lg">
              <CreditCard size={22} color="#8047F8" />
              <p className="w-full font-black text-[#574F4D] text-sm">Cartão</p>
            </button>
            <button className="bg-[#E6E5E5] flex-1 flex items-center justify-between p-4 rounded-lg">
              <Bank size={22} color="#8047F8" />
              <p className="w-full font-black text-[#574F4D] text-sm">Pix</p>
            </button>
            <button className="bg-[#E6E5E5] flex-1 flex items-center justify-between p-4 rounded-lg">
              <Money size={22} color="#8047F8" />
              <p className="w-full font-black text-[#574F4D] text-sm">
                Dinheiro
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-2/3 ">
        <p className="text-lg font-extrabold">Cafés selecionados</p>
        <div className="w-full bg-[#F3F2F2] p-6 mt-4 rounded-tr-[36px] rounded-bl-[36px] rounded-tl-lg rounded-br-lg">
          <div className="flex gap-4 justify-between px-2 py-8 border-b-[1px]">
            <img src="./imgs/tradicional.png" width={64} height={64} />
            <div className="flex flex-col">
              <p>Expresso Tradicional</p>
              <div className="flex gap-2 mt-2">
                <div className="flex items-center justify-center bg-[#E6E5E5] p-2 rounded-md gap-3">
                  <button>
                    <Minus size={16} color="#8047F8" weight="bold" />
                  </button>
                  <p className="text-sm font-bold text-[#574F4D]">1</p>
                  <button>
                    <Plus size={16} color="#8047F8" weight="bold" />
                  </button>
                </div>
                <button className="flex items-center justify-center bg-[#E6E5E5] p-2 rounded-md gap-1">
                  <Trash size={22} color="#8047F8" />
                  <p className="text-sm font-bold text-[#574F4D]">Remover</p>
                </button>
              </div>
            </div>
            <p className="text-lg font-black text-[#574F4D]">R$ 9,90</p>
          </div>
          <div className="flex flex-col gap-2 py-8">
            <span className="flex justify-between">
              <p className="text-[#574F4D] font-extralight">Total de itens</p>
              <p className="text-[#574F4D] font-extralight">R$ 9,90</p>
            </span>
            <span className="flex justify-between">
              <p className="text-[#574F4D] font-extralight">Entrega</p>
              <p className="text-[#574F4D] font-extralight">R$ 3,00</p>
            </span>
            <span className="flex justify-between">
              <strong className="text-[#574F4D] font-black">Total</strong>
              <strong className="text-[#574F4D] font-black">R$ 12,90</strong>
            </span>
          </div>
          <button className="bg-[#DBAC2C] w-full py-3 rounded-lg mb-4 text-white font-black">
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
