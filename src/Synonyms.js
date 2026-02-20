import React from "react";

export default function Synonyms({ synonyms }) {
  if (!synonyms || synonyms.length === 0) {
    return null; // don't render anything if synonyms is null or empty
  }

  return (
    <ul className="Synonyms">
      {synonyms.map((synonym, index) => (
        <li key={index}>{synonym}</li>
      ))}
    </ul>
  );
}
