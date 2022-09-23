import { ShoppingCart, Minus, Plus } from "phosphor-react";

interface CoffeeItemProps {
  data: CoffeeItem;
}

interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  img: string;
  type: string[];
}

export default function CardCoffee({ data }: CoffeeItemProps) {
  return (
    <div className="bg-[#F3F2F2] h-80  flex flex-col justify-between items-center rounded-tr-[36px] rounded-bl-[36px] px-6">
      <img
        src={data.img}
        alt="Expresso Tradicional"
        className="mt-[-20px] h-32 w-32"
      />
      <div className="flex gap-2">
        {data.type.map((doc) => {
          return (
            <span className="bg-[#F1E9C9] p-2 rounded-3xl text-[#C47F17] text-xs font-bold">
              {doc}
            </span>
          );
        })}
      </div>
      <p className="font-extrabold text-base text-[#574F4D]">
        Expresso Tradicional
      </p>
      <p className="text-xs text-center text-[#574F4D]">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="flex h-10 w-full justify-between mb-5">
        <div className="flex items-center p-2 gap-1">
          <p className="text-sm text-end text-[#574F4D]">R$</p>
          <p className="text-xl font-black text-[#574F4D]">9,90</p>
        </div>
        <div className="flex items-center justify-center bg-[#E6E5E5] p-2 rounded-md gap-3">
          <button>
            <Minus size={16} color="#8047F8" weight="bold" />
          </button>
          <p className="text-sm font-bold text-[#574F4D]">1</p>
          <button>
            <Plus size={16} color="#8047F8" weight="bold" />
          </button>
        </div>
        <button className="bg-[#4B2995] p-2 rounded-md">
          <ShoppingCart size={22} color="#fff" weight="fill" />
        </button>
      </div>
    </div>
  );
}
