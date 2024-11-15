import { useRecipeStore } from "../store/recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet. Add some!</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="mb-4 p-4 border rounded-md shadow-md">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
