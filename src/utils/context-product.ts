import { createContext } from "react";

export type ContextCounterProductType = {
    contextProductCount: number,
    setContextProductCount: (productCount: number) => void;
}

export const ContextCounterProduct = createContext<ContextCounterProductType>({
   contextProductCount: 0,
   setContextProductCount: () => {}
})