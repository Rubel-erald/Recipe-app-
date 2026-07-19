import { useState, useEffect } from "react";
import api from "../services/api";
import RecipeList from "../components/recipeList";
import SearchBar from "../components/searchBar";
import Filter from "../components/filter";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await api.get("/search.php?s=");
        setRecipes(response.data.meals);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRecipes();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get("/categories.php");
        setCategories(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategories();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.strMeal
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || recipe.strCategory === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mt-6">Recipe App</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default HomePage;
