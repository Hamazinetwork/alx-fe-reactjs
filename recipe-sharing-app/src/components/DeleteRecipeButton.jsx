// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useRecipeStore } from "../recipeStore";
import { useNavigate } from "react-router-dom";

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm("Are you sure you want to delete this recipe?");
    if (!ok) return;

    deleteRecipe(recipeId);
    // after delete, go to recipe list / home
    navigate("/");
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: "8px 12px",
        background: "#c62828",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}
    >
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
