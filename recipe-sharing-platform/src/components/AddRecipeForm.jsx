import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");  // ✅ use steps instead of instructions
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Title is required";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required";
    } else {
      const ingList = ingredients.split("\n").filter((i) => i.trim() !== "");
      if (ingList.length < 2) {
        formErrors.ingredients = "Please enter at least 2 ingredients";
      }
    }
    if (!steps.trim()) formErrors.steps = "Steps are required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split("\n"),
        steps: steps.split("\n"),   // ✅ use steps
      };
      console.log("✅ Recipe submitted:", newRecipe);
      setSubmitted(true);

      // reset form
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="container mx-auto max-w-xl p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">➕ Add a New Recipe</h1>

      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          🎉 Recipe submitted successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            className={`w-full border rounded p-2 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Chocolate Cake"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients</label>
          <textarea
            rows="4"
            className={`w-full border rounded p-2 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter each ingredient on a new line"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-medium mb-1">Steps</label>
          <textarea
            rows="5"
            className={`w-full border rounded p-2 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter each instruction step on a new line"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
