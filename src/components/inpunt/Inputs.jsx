import { useState } from "react";
import "./style.css";
const Search = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(inputValue);
      }}
    >
      <input
        type="text"
        value={inputValue}
        placeholder="search pictures"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
