import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID
    const selectedRecipe = recipeData.find((item) => item.id === parseInt(id));
    if (!selectedRecipe) {
      navigate("/"); // Redirect to Home Page if recipe not found
    } else {
      setRecipe(selectedRecipe);
    }
  }, [id, navigate]);

  if (!recipe) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions:</h2>
        <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
