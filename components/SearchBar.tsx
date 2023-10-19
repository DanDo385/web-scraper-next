const handleSubmit = (e) => {
  e.preventDefault();
  // handle form submission logic here
};

const SearchBar = () => {
  return (
    <form
      className="flex flex-wrap gap-4 mt-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for stuff you cannot find..."
        className="searchbar-input"
      />
      
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
}

export default SearchBar; 