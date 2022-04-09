import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    console.log(`searching for ${keyword}...`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h2>What word do you want to look up?</h2>
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder=" Look me up..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
