import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
