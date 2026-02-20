import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    //const definition = response.data.meanings[0].definition;
    //console.log(definition);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword} definition...`);

    let apiKey = "224f23t3b08b6cab3df63781o3c48aaf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
