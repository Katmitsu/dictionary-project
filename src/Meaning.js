import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  if (!meaning) return null;

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p>{meaning.definition}</p>
      <Synonyms synonyms={meaning.synonyms} />
      <em> {meaning.example}</em>
    </div>
  );
}
