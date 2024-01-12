import { getRecentIds } from "../utils/recent";
import { type Product } from "../utils/zod";
import { ProductRow } from "./Products";

type Props = { products: Product[] };

export const RecentProducts = ({ products }: Props) => {
  const recentIds = getRecentIds();

  console.log(recentIds);

  const recentProducts = products.filter((p) => recentIds.includes(p._id));

  return (
    <div className="pb-8">
      <p className="text-sm text-muted-foreground">Recent</p>
      <div className="divide-y">
        {recentProducts.map((p) => (
          <ProductRow key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};
