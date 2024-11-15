// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useEffect } from "react";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  useEffect(() => {
    useRecipeStore.getState().filterRecipes();
  }, []);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className="mb-4 p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:text-blue-700 mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes added yet.</p>
      )}
    </div>
  );
};

export default RecipeList;
