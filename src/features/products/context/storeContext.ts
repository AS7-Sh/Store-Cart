import { createContext } from "react";
import { Product } from "../hooks/storeHook";

interface StoreContext {
  products: Product[];
  cart: Product[];
  handleAddToCart: (product: Product) => void;
  handleIncreaseQuantity: (productId: number) => void;
  handleDecreaseQuantity: (productId: number) => void;
  handleRemoveItem: (productId: number) => void;
  handlePurchaseCart: () => void;
  handlePrev: () => void;
  handleNext: () => void;
}

export default createContext<StoreContext>({
  products: [],
  cart: [],
  handleAddToCart: () => {},
  handleIncreaseQuantity: () => {},
  handleDecreaseQuantity: () => {},
  handlePurchaseCart: () => {},
  handleRemoveItem: () => {},
  handlePrev: () => {},
  handleNext: () => {},
});
