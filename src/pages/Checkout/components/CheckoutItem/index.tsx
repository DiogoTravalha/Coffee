import { ContextRouter } from "../../../../context/context";
import { Trash, Minus, Plus } from "phosphor-react";

export default function CheckoutItem() {
  const { cart, setCart } = ContextRouter();

  function handleRemoveCoffeeToCart(id: number) {
    setCart(cart.filter((c) => c.id !== id));
  }

  function handleAddQtyCoffeeToCart(id: number) {
    setCart(
      cart.map((c) => {
        if (c.id === id) {
          return { ...c, qty: c.qty + 1, total: (c.qty + 1) * c.price };
        } else {
          return c;
        }
      })
    );
  }

  function handleRemoveQtyCoffeeToCart(id: number) {
    const coffeeQty = cart.filter((c) => c.id === id && c.qty === 1);
    if (coffeeQty.length > 0) {
      setCart(cart.filter((c) => c.id !== id));
    } else {
      setCart(
        cart.map((c) => {
          if (c.id === id) {
            return { ...c, qty: c.qty - 1, total: (c.qty - 1) * c.price };
          } else {
            return c;
          }
        })
      );
    }
  }

  return (
    <div className="flex flex-col w-2/3 ">
      <p className="text-lg font-extrabold">Cafés selecionados</p>
      <div className="w-full bg-[#F3F2F2] p-6 mt-4 rounded-tr-[36px] rounded-bl-[36px] rounded-tl-lg rounded-br-lg">
        {cart
          .sort((a, b) => a.id - b.id)
          .map((item) => (
            <div
              key={item.id}
              className="flex gap-4 justify-between px-2 py-8 border-b-[1px]"
            >
              <img src={item.img} width={64} height={64} />
              <div className="flex flex-col">
                <p>{item.name}</p>
                <div className="flex gap-2 mt-2">
                  <div className="flex items-center justify-center bg-[#E6E5E5] p-2 rounded-md gap-3">
                    <button
                      onClick={() => handleRemoveQtyCoffeeToCart(item.id)}
                    >
                      <Minus size={16} color="#8047F8" weight="bold" />
                    </button>
                    <p className="text-sm font-bold text-[#574F4D]">
                      {item.qty}
                    </p>
                    <button onClick={() => handleAddQtyCoffeeToCart(item.id)}>
                      <Plus size={16} color="#8047F8" weight="bold" />
                    </button>
                  </div>
                  <button
                    className="flex items-center justify-center bg-[#E6E5E5] p-2 rounded-md gap-1"
                    onClick={() => handleRemoveCoffeeToCart(item.id)}
                  >
                    <Trash size={22} color="#8047F8" />
                    <p className="text-sm font-bold text-[#574F4D]">Remover</p>
                  </button>
                </div>
              </div>
              <p className="text-lg font-black text-[#574F4D]">
                {item.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          ))}

        <div className="flex flex-col gap-2 py-8">
          <span className="flex justify-between">
            <p className="text-[#574F4D] font-extralight">Total de itens</p>
            <p className="text-[#574F4D] font-extralight">
              {cart
                .reduce((a, b) => a + b.total, 0)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </p>
          </span>
          <span className="flex justify-between">
            <p className="text-[#574F4D] font-extralight">Entrega</p>
            <p className="text-[#574F4D] font-extralight">
              R$ {cart.length > 0 ? "3,00" : "0,00"}
            </p>
          </span>
          <span className="flex justify-between">
            <strong className="text-[#574F4D] font-black">Total</strong>
            <strong className="text-[#574F4D] font-black">
              {cart
                .reduce((a, b) => a + b.total, cart.length > 0 ? 3 : 0)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </strong>
          </span>
        </div>
        <button className="bg-[#DBAC2C] w-full py-3 rounded-lg mb-4 text-white font-black">
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
}
