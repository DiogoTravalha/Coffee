import { ShoppingCart, Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { ContextRouter } from "../../../context/context";

interface CoffeeItemProps {
  data: CoffeeItem;
}

interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  type: string[];
}

export default function CardCoffee({ data }: CoffeeItemProps) {
  const { cart, setCart } = ContextRouter();
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(1);

  function handleAddToCart() {
    setLoading(true);
    const verifyExistToCart = cart.find((c) => c.id === data.id);

    const newCoffee = {
      ...data,
      qty,
      total: data.price * qty,
    };

    if (verifyExistToCart) {
      setCart(
        cart.map((c) => {
          if (c.id === verifyExistToCart.id) {
            return { ...c, qty: c.qty + qty, total: (c.qty + qty) * c.price };
          } else {
            return c;
          }
        })
      );
    } else {
      setCart([...cart, newCoffee]);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="bg-[#F3F2F2] h-80  flex flex-col justify-between items-center rounded-tr-[36px] rounded-bl-[36px] px-6">
      <img
        src={data.img}
        alt="Expresso Tradicional"
        className="mt-[-20px] h-32 w-32"
      />
      <div className="flex gap-2">
        {data.type.map((doc, i) => {
          return (
            <span
              key={i}
              className="bg-[#F1E9C9] p-2 rounded-3xl text-[#C47F17] text-xs font-bold"
            >
              {doc}
            </span>
          );
        })}
      </div>
      <p className="font-extrabold text-base text-[#574F4D]">{data.name}</p>
      <p className="text-xs text-center text-[#574F4D]">{data.description}</p>
      <div className="flex h-10 w-full justify-between mb-5">
        <div className="flex items-center p-2 gap-1 w-1/2">
          <p className="text-xl font-black text-[#574F4D] ">
            {(data.price * qty).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="flex items-center justify-center bg-[#E6E5E5] p-2 rounded-md gap-3">
          <button onClick={() => (qty === 1 ? "" : setQty(qty - 1))}>
            <Minus size={16} color="#8047F8" weight="bold" />
          </button>
          <p className="text-sm font-bold text-[#574F4D] w-8 text-center">
            {qty}
          </p>
          <button onClick={() => setQty(qty + 1)}>
            <Plus size={16} color="#8047F8" weight="bold" />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-[#4B2995] p-2 rounded-md disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-2 text-gray-500">
              <span className="h-5 w-5 block rounded-full border-4 border-t-blue-500 animate-spin" />
            </div>
          ) : (
            <ShoppingCart size={22} color="#fff" weight="fill" />
          )}
        </button>
      </div>
    </div>
  );
}
