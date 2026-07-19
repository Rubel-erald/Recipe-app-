function Filter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex justify-center mt-6">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-72 p-3 border rounded-lg shadow-md"
      >
        <option value="All">All Categories</option>

        {categories.map((category) => (
          <option
            key={category.idCategory}
            value={category.strCategory}
          >
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;