/** biome-ignore-all lint/style/useTemplate: because */
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod";

const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
});

export type Product = z.infer<typeof ProductSchema>;



function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchProduct(id: number) {
  //await delay(5_000);
  const response = await fetch("https://fakestoreapi.com/products/" + encodeURIComponent(id))
  const data = await response.json()
  //data.price = false;
  return ProductSchema.parse(data)
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => fetchProduct(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    placeholderData: (previousData) => previousData,
  })
}

export function useSuspenseProduct(id: number) {
  return useSuspenseQuery({
    queryKey: ['product', id],
    queryFn: async () => fetchProduct(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
