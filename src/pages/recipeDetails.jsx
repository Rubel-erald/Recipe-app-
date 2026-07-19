import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipeDetails() {
      try {
        const response = await api.get(`/lookup.php?i=${id}`);
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <h2 className="text-center text-2xl mt-10">Loading...</h2>;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(recipe[`strIngredient${i}`]);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link to="/" className="text-blue-600 font-semibold">
        ← Back to Recipes
      </Link>

      <h1 className="text-4xl font-bold mt-5">{recipe.strMeal}</h1>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full max-w-md rounded-lg mt-5"
      />

      <h2 className="text-2xl font-semibold mt-6">Category</h2>

      <p>{recipe.strCategory}</p>

      <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>

      <ul className="list-disc ml-6 mt-3">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Instructions</h2>

      <p className="leading-8 whitespace-pre-line">{recipe.strInstructions}</p>

      <h2 className="text-2xl font-semibold mt-6">YouTube Video</h2>

      <a
        href={recipe.strYoutube}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline"
      >
        Watch Recipe Video
      </a>
    </div>
  );
}

export default RecipeDetails;
