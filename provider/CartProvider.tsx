import { CartContextProvider } from "@/hooks/UseCart";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CartContextProvider>{children}</CartContextProvider>
    </div>
  );
};

export default CartProvider;
