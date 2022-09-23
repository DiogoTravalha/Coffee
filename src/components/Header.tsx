import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed left-0 w-full flex h-28 justify-between items-center px-40 bg-[#FAFAFA]">
      <NavLink to="/">
        <img src="./imgs/Logo.png" alt="Logo" className="h-10" />
      </NavLink>

      <div className="flex h-10 items-center justify-center gap-3">
        <div className="flex items-center justify-center h-8 bg-[#EBE5F9] p-2 rounded-lg">
          <MapPin size={20} color="#8047F8" weight="fill" />
          <span className="text-[#4B2995] ml-1 font-bold text-sm h-5 items-center leading-6">
            Rio dos Cedros, SC
          </span>
        </div>

        <NavLink to="/checkout" className="flex">
          <div className="flex items-center h-8 bg-[#F1E9C9] p-2 rounded-lg z-0">
            <img src="./imgs/cart.svg" alt="Cart" className="h-5 w-5 z-0" />
          </div>
          {/* <div className="-ml-[10px] -mt-[10px] w-5 h-5 rounded-full flex items-center justify-center bg-[#C47F17] text-xs text-white font-extrabold z-40">
            1
          </div> */}
        </NavLink>
      </div>
    </div>
  );
}
