import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
        />
      ))}
    </div>
  );
}

export default RecipeList;