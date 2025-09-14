// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipesList from "./components/RecipesList"; // optional list page (see below)
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* put your navbar here if you have one */}
        <Routes>
          <Route path="/" element={<RecipesList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          {/* if you want a separate edit page:
              <Route path="/recipes/:id/edit" element={<EditRecipePage />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
