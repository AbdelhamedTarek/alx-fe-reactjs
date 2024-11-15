import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Edit and delete buttons */}
      <div className="mt-4">
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      {/* Link to go back to the recipe list */}
      <Link to="/" className="text-blue-500">
        Back to Recipe List
      </Link>
    </div>
  );
};

export default RecipeDetails;
