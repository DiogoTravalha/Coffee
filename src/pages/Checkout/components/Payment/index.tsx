import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";

export default function Payment() {
  return (
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
          <p className="w-full font-black text-[#574F4D] text-sm">Dinheiro</p>
        </button>
      </div>
    </div>
  );
}
