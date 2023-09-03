import { useCartContext } from "./CartProvider";
import { Cart } from "./components/Cart";
import { HowToPay } from "./components/HowToPay";
import { Products } from "./components/Products";
import { SearchAndFilter } from "./components/SearchAndFilter";
import { type Product } from "./utils/zod";

type Props = { products: Product[] };

export const Snack = ({ products }: Props) => {
  const { total, amountOfItemsInCart } = useCartContext();

  return (
    <>
      <SearchAndFilter />
      <HowToPay total={total} />
      <Products products={products} />
      {amountOfItemsInCart > 0 && <div className="py-6" />}
      <Cart />
    </>
  );
};