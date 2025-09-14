// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipesList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm"

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* put your navbar here if you have one */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id" element={<AddRecipeForm />} />
          {/* if you want a separate edit page:
              <Route path="/recipes/:id/edit" element={<EditRecipePage />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
