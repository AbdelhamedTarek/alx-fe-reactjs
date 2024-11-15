import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Recipe Sharing App
        </h1>
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
