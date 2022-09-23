import { MapPin, Timer, CurrencyDollar } from "phosphor-react";

export default function Delivery() {
  return (
    <div className="flex justify-between gap-4 mt-48">
      <div className="flex flex-1 flex-col">
        <strong className="text-[#C47F17] font-black text-xl">
          Uhu! Pedido confirmado
        </strong>
        <p className="text-sm">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="flex flex-col p-10 border-2 rounded-tr-[36px] rounded-bl-[36px] rounded-tl-lg rounded-br-lg mt-10 gap-6">
          <div className="flex">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8047F8] mr-3">
              <MapPin size={16} color="#fff" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[#574F4D]">
                Entrega em Rua João Daniel Martinelli, 102
              </p>
              <p className="text-xs font-semibold">
                Farrapos - Porto Alegre, RS
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#DBAC2C] mr-3">
              <Timer size={16} color="#fff" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[#574F4D]">Previsão de entrega</p>
              <p className="text-xs font-semibold">20 min - 30 min</p>
            </div>
          </div>
          <div className="flex">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C47F17] mr-3">
              <CurrencyDollar size={16} color="#fff" weight="fill" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[#574F4D]">Pagamento na entrega</p>
              <strong className="font-black text-sm ">Cartão de Crédito</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-end">
        <div>
          <img src="./imgs/moto.png" />
        </div>
      </div>
    </div>
  );
}
