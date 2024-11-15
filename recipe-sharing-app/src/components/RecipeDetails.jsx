import React from "react";
import { useParams } from "react-router-dom"; // To access the dynamic ID from the URL
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams(); // Get the ID of the recipe from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-details p-6 mb-4 border rounded-md shadow-md bg-white">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <p className="text-lg mt-2">{recipe.description}</p>
      <h3 className="text-xl mt-4">Ingredients:</h3>
      <ul className="list-disc pl-6 mt-2">
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>
      <h3 className="text-xl mt-4">Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
