import type { Recipe } from "./useRecipe";

export function RecipeView({ recipe }: { recipe: Recipe }) {
  return (
    <div className="w-[400px] h-[400px] p-4 rounded-lg shadow-lg bg-black flex flex-col gap-2">
      <h2 className="text-xl font-bold">{recipe.name} ({recipe.id}</h2>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="text-sm text-muted-300">
        Cuisine: {recipe.cuisine}<br />
        Difficulty: {recipe.difficulty}<br />
        Prep Time: {recipe.prepTimeMinutes} mins<br />
        Cook Time: {recipe.cookTimeMinutes} mins
      </div>
    </div>
  );
}
