import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Recipe Sharing App
        </h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </div>
  );
};

export default App;
