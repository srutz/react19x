import type { Product } from "./useProduct";

const nf = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2, currency: "EUR", style: "currency" });

function formatPrice(value: number) {
  return nf.format(value);
}

export function ItemView({ product }: { product: Product }) {
  return (
    <div className="w-[400px] h-[600px] p-4 rounded-lg shadow-lg bg-black flex flex-col gap-2">
      <h2 className="text-lg font-bold">{product.title} ({product.id}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="h-1 grow w-full object-cover rounded-md"
      />
      <div className="self-stretch text-sm text-muted-300 flex justify-between">
        <div>
          Category: {product.category}
        </div>
        <div>
          Price: {formatPrice(product.price)}
        </div>
      </div>
    </div>
  );
}
