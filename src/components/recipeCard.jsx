import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition cursor-pointer">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-52 object-cover rounded-lg"
        />

        <h2 className="text-xl font-bold mt-4">{recipe.strMeal}</h2>

        <p className="text-gray-600 mt-2">Category : {recipe.strCategory}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
