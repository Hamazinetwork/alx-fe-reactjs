// src/recipeStore.js
import create from "zustand";

export const useRecipeStore = create((set) => ({
  // sample initial recipes — replace with your real data source
  recipes: [
    {
      id: "1",
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta with eggs, cheese and pancetta.",
      ingredients: ["spaghetti", "eggs", "pecorino cheese", "pancetta", "pepper"],
      steps: ["Boil pasta", "Fry pancetta", "Mix eggs & cheese", "Combine everything"]
    },
    {
      id: "2",
      title: "Avocado Toast",
      description: "Simple and delicious avocado toast.",
      ingredients: ["bread", "avocado", "salt", "pepper", "lemon"],
      steps: ["Toast bread", "Mash avocado", "Spread and season"]
    }
  ],

  // Add a recipe. If recipe.id is not provided, we create a simple unique id.
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { ...recipe, id: recipe.id ?? Date.now().toString() }
      ]
    })),

  // Update a recipe by id with partial updates.
  // Usage: updateRecipe(id, { title: 'new', description: '...' })
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r))
    })),

  // Delete a recipe by id.
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id)
    }))
}));
