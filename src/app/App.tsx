import Products from "../features/products/page/Products";
import "./App.css";
import Header from "../features/structure/components/Header";
import { useStore } from "../features/products/hooks/storeHook";
import StoreContext from "../features/products/context/storeContext";
import Loader from "../common/components/Loader";

const App = () => {
  // getting data from the custom hook
  const {
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
  } = useStore();

  // returning a loader while data fetching
  if (loading) return <Loader />;

  // encapsulate the app within context provider in order to share data between componenets
  return (
    <StoreContext.Provider
      value={{
        products: products,
        cart: cart,
        handleAddToCart: handleAddToCart,
        handleIncreaseQuantity: handleIncreaseQuantity,
        handleDecreaseQuantity: handleDecreaseQuantity,
        handlePurchaseCart: handlePurchaseCart,
        handleRemoveItem: handleRemoveItem,
        handlePrev: handlePrev,
        handleNext: handleNext,
      }}
    >
      <Header />
      <Products />
    </StoreContext.Provider>
  );
};

export default App;
