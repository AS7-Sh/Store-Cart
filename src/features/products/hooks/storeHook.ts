import { useEffect, useState } from "react";
import { URLs } from "../../../config/urls";

/**
 * The store hook works as a logic repository for both products and cart
 * to manage the cart and product state
 * in addition to fetching the data from the backend
 * and the handlers for managing the state changing for both cart and products
 *
 * Splitting the view from the logic by using a custom hook ensures preserving
 * the single responsibility pattern and avoid code duplication and make our code
 * much easier to read.
 */

// Product interface
export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  status: string;
}

// Hook response interface
interface UseStoreResponse {
  loading: boolean;
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

// The hook returns an object with the shape of the specified interface
export const useStore: () => UseStoreResponse = () => {
  // products state
  const [products, setProducts] = useState<Product[]>([]);

  // page state
  const [page, setPage] = useState(0);

  // loading indicator
  const [loading, setLoading] = useState(true);

  // cart state
  const [cart, setCart] = useState<Product[]>([]);

  // Effect to fetch the products when the components is mounted
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetch(`${URLs.GET_PRODUCTS}?offset=0&limit=10`);
        setProducts((await data.json()) as Product[]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // handling adding item to the cart by adding it to the cart and also update the products status
  const handleAddToCart = (product: Product) => {
    const addedProduct = { ...product, quantity: 1, status: "added" };
    setProducts(
      products.map((item) => (item.id === product.id ? addedProduct : item))
    );
    setCart([...cart, addedProduct]);
  };

  // handle increasing a specific product quantity
  const handleIncreaseQuantity = (productId: number) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === productId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  // handle decreasing a specific product quantity
  const handleDecreaseQuantity = (productId: number) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === productId && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  // handle purchase the cart by changing the product state and make the cart empty
  const handlePurchaseCart = async () => {
    setProducts(
      products.map((product) =>
        cart.findIndex((cartItem) => product.id === cartItem.id) !== -1
          ? { ...product, status: "bought" }
          : product
      )
    );
    setCart([]);
  };

  // handle remove a specific item from the cart
  const handleRemoveItem = (productId: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, status: "normal" } : product
      )
    );
    setCart(cart.filter((cartItem) => cartItem.id !== productId));
  };

  // helper function in order to mimize code repetition
  const fetchFromPage = async (pageNumber: number) => {
    setLoading(true);
    try {
      const data = await fetch(
        `${URLs.GET_PRODUCTS}?offset=${pageNumber * 10}&limit=10`
      );
      setProducts((await data.json()) as Product[]);
      setLoading(false);
      setPage(pageNumber);
    } catch (err) {
      setLoading(false);
    }
  };

  // handle getting data from the previous page
  const handlePrev = async () => {
    if (page === 0) return;
    await fetchFromPage(page - 1);
  };

  // handle getting data from the next page
  const handleNext = async () => {
    await fetchFromPage(page + 1);
  };

  // returning the data and handlers object
  return {
    loading,
    products,
    cart,
    handleAddToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem,
    handlePurchaseCart,
    handlePrev,
    handleNext,
  };
};
