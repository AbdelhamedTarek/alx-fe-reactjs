import { useRecipeStore } from "../store/recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>
          No recommendations available. Add some favorites to get
          recommendations!
        </p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="mb-4 p-4 border rounded-md shadow-md">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
