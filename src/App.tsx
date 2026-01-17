import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ItemView } from "./ItemView";
import { fetchProduct, useProduct } from "./useProduct";

const PREFETCH = false;

export function App() {
  const [productId, setProductId] = useState(1);
  const { data: product } = useProduct(productId);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (PREFETCH) {
      console.log("Prefetching items...");
      for (let id = 1; id <= 10; id++) {
        queryClient
          .ensureQueryData({
            queryKey: ["product", id],
            queryFn: async () => fetchProduct(id),
            staleTime: 5 * 60 * 1000, // 5 minutes
          })
          .then((item) => {
            console.log("Prefetched item:", item.id);
            const img = new Image();
            img.src = item.image;
          });
      }
    }
  }, [queryClient]);

  return (
    <div className="h-1 grow self-stretch flex flex-col items-center gap-2">
      <div>Modern React / Tanstack-Query</div>
      <div className="flex gap-2 justify-center">
        <button
          type="button" className="button"
          onClick={() => setProductId((id) => Math.max(1, id - 1))}
        >
          Previous
        </button>
        <button type="button" className="button" onClick={() => setProductId((id) => id + 1)}>
          Next
        </button>
      </div>
      {product && <ItemView product={product} />}
    </div>
  );
}
