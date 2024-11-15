// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white p-2 rounded mt-2"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
