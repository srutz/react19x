/** biome-ignore-all lint/style/useTemplate: because */
import { useSuspenseQuery } from "@tanstack/react-query";

export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};


export async function fetchRecipe(id: number) {
  const response = await fetch("https://dummyjson.com/recipes/" + encodeURIComponent(id))
  const data = await response.json()
  return data as Recipe
}

export function useRecipe(id: number) {
  return useSuspenseQuery({
    queryKey: ['recipe', id],
    queryFn: async () => fetchRecipe(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
