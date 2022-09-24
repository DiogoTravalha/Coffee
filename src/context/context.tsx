import { createContext, ReactNode, useContext, useState } from "react";
import { Cart } from "../@types/cart";

interface ContextType {
  cart: Cart[];
  setCart(cart: Cart[]): void;
}

export const ContextApi = createContext({} as ContextType);

interface ContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([]);
  return (
    <ContextApi.Provider value={{ cart, setCart }}>
      {children}
    </ContextApi.Provider>
  );
}

export const ContextRouter = () => useContext(ContextApi);
