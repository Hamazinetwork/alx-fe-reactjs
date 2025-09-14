// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from "react";
import { useRecipeStore } from "../recipeStore";
import { useNavigate } from "react-router-dom";

function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    ingredientsText: "",
    stepsText: ""
  });

  useEffect(() => {
    if (recipe) {
      setForm({
        title: recipe.title || "",
        description: recipe.description || "",
        // store ingredients/steps as newline-separated strings for easy editing
        ingredientsText: (recipe.ingredients || []).join("\n"),
        stepsText: (recipe.steps || []).join("\n")
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updates = {
      title: form.title.trim(),
      description: form.description.trim(),
      ingredients: form.ingredientsText
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      steps: form.stepsText
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean)
    };

    updateRecipe(recipe.id, updates);

    // naive feedback: navigate back to recipe details (staying on same URL)
    // or display a small message — keep it simple:
    alert("Recipe updated");
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "16px" }}>
      <h3>Edit Recipe</h3>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        style={{ display: "block", width: "100%", padding: "8px", margin: "8px 0" }}
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Short description"
        style={{ display: "block", width: "100%", padding: "8px", margin: "8px 0" }}
        rows={3}
      />

      <label style={{ fontWeight: "600" }}>Ingredients (one per line)</label>
      <textarea
        name="ingredientsText"
        value={form.ingredientsText}
        onChange={handleChange}
        rows={4}
        style={{ display: "block", width: "100%", padding: "8px", margin: "8px 0" }}
      />

      <label style={{ fontWeight: "600" }}>Steps (one per line)</label>
      <textarea
        name="stepsText"
        value={form.stepsText}
        onChange={handleChange}
        rows={5}
        style={{ display: "block", width: "100%", padding: "8px", margin: "8px 0" }}
      />

      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <button type="submit" style={{ padding: "8px 12px" }}>
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{ padding: "8px 12px" }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditRecipeForm;
