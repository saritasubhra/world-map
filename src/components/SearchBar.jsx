function SearchBar({ input, setInput }) {
  return (
    <form className="text-center p-5">
      <input
        type="text"
        placeholder="Search country"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-black p-2 w-72"
      />
    </form>
  );
}

export default SearchBar;
