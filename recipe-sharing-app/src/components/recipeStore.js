import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => {
      const filtered = state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase()) // Filtering by title or description
      );
      return { filteredRecipes: filtered };
    }),
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  favorites: [], // List of favorite recipe IDs
  addFavorite: (recipeId) =>
    set((state) => {
      // Add a recipe to favorites if not already in the list
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return state;
    }),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  recommendations: [], // List of recommended recipes
  generateRecommendations: () =>
    set((state) => {
      // Simple mock logic for recommendations (based on favorites)
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
  setRecipes: (recipes) => set({ recipes }),
}));
