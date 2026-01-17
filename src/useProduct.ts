/** biome-ignore-all lint/style/useTemplate: because */
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";


export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};



function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchProduct(id: number) {
  //await delay(5_000);
  const response = await fetch("https://fakestoreapi.com/products/" + encodeURIComponent(id))
  const data = await response.json()
  return data as Product
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
