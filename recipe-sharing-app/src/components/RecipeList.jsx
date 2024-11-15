// src/components/RecipeList.jsx
import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  useEffect(() => {
    // Initial call to filter recipes (if there's already a search term)
    useRecipeStore.getState().filterRecipes();
  }, []);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
