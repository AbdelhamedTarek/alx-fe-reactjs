// src/components/SearchBar.jsx
import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Trigger filtering when the search term changes
  useEffect(() => {
    filterRecipes();
  }, [setSearchTerm, filterRecipes]);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search recipes..."
        className="p-2 border rounded-md w-full"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
