import React from "react";

export default function Phonetic({ phonetic }) {
  if (!phonetic || phonetic.length === 0) {
    return null; // don't render anything if phonetic is null or empty
  }

  return <div className="Phonetic">{phonetic}</div>;
}
