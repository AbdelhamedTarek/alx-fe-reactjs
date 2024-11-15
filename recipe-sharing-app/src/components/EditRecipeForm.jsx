// src/components/EditRecipeForm.jsx
import { useState, useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]);

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        className="p-2 mb-2 w-full border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        className="p-2 mb-2 w-full border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
