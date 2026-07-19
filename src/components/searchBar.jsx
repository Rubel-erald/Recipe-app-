function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-96 p-3 border rounded-lg shadow"
      />
    </div>
  );
}

export default SearchBar;