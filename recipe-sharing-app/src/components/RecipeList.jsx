import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p className="no-results">No recipes found. Add some!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card p-4 mb-4 border rounded-md shadow-md bg-white"
          >
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Link to individual recipe details */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:text-blue-700 mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
