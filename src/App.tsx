import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { RecipeView } from "./RecipeView";
import { fetchRecipe, useRecipe } from "./useRecipe";

const PREFETCH = false;

export function App() {
  const [recipeId, setRecipeId] = useState(1);
  const { data: recipe } = useRecipe(recipeId);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (PREFETCH) {
      console.log("Prefetching recipes...");
      for (let id = 1; id <= 10; id++) {
        queryClient.prefetchQuery({
          queryKey: ["recipe", id],
          queryFn: async () => fetchRecipe(id),
          staleTime: 5 * 60 * 1000, // 5 minutes
        });
      }
    }
  }, [queryClient]);

  return (
    <div className="h-1 grow self-stretch flex flex-col items-center justify-center gap-2">
      <div>Modern React / Tanstack-Query</div>
      <div className="flex gap-2 justify-center">
        <button
          type="button"
          onClick={() => setRecipeId((id) => Math.max(1, id - 1))}
        >
          Previous
        </button>
        <button type="button" onClick={() => setRecipeId((id) => id + 1)}>
          Next
        </button>
      </div>
      <RecipeView recipe={recipe} />
    </div>
  );
}
