import { useState } from "react";

type SearchProps = {
  onSearch: (word: string) => void;
};

function Search({ onSearch }: SearchProps) {
  const [word, setWord] = useState("");

  const handleSearch = () => {
    onSearch(word);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;