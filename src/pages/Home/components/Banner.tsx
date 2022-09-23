import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

export default function Banner() {
  return (
    <div className="flex gap-14 py-20">
      <div className="flex flex-col flex-1 gap-4">
        <strong className="text-3xl max-w-lg">
          Encontre o café perfeito para qualquer hora do dia
        </strong>
        <p className="text-base max-w-lg">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="grid grid-cols-2 gap-4 mt-16 ">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C47F17] mr-3">
              <ShoppingCart size={16} color="#fff" weight="fill" />
            </span>
            <p className="text-xs font-semibold">Compra simples e segura</p>
          </div>
          <div className="flex items-center">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#574F4D] mr-3">
              <Package size={16} color="#fff" weight="fill" />
            </span>
            <p className="text-xs font-semibold">
              Embalagem mantém o café intacto
            </p>
          </div>
          <div className="flex items-center">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#DBAC2C] mr-3">
              <Timer size={16} color="#fff" weight="fill" />
            </span>
            <p className="text-xs font-semibold">Entrega rápida e rastreada</p>
          </div>
          <div className="flex items-center">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8047F8] mr-3">
              <Coffee size={16} color="#fff" weight="fill" />
            </span>
            <p className="text-xs font-semibold">
              O café chega fresquinho até você
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="./imgs/coffeImg.png" alt="café" />
      </div>
    </div>
  );
}
