import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary 📖</h1>
      <h2>What word do you want to look up?</h2>
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder=" Look me up..."
          onChange={handleChange}
        />
        <button type="submit">🔎</button>
      </form>
      <br />
      <Results results={results} />
    </div>
  );
}
