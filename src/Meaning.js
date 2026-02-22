import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning({ meaning }) {
  if (!meaning) return null;

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <div className="Definition">
        <p>{meaning.definition}</p>
      </div>
      <Synonyms synonyms={meaning.synonyms} />
      <div className="Example">
        <em> {meaning.example}</em>
      </div>
    </div>
  );
}
