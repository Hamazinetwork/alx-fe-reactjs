// src/components/RecipeDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  if (!recipe) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Recipe not found</h2>
        <Link to="/">Back to recipes</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>

      <hr style={{ margin: "20px 0" }} />

      {/* Inline edit form */}
      <EditRecipeForm recipe={recipe} />

      <div style={{ marginTop: "12px" }}>
        <DeleteRecipeButton recipeId={recipe.id} />
        <Link to="/" style={{ marginLeft: "12px" }}>
          Back to recipes
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetails;
