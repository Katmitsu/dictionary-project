import React from "react";
import Meaning from "./Meaning";
import Phonethic from "./Phonetic";
import "./Results.css";
import "./Phonetic.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h3 className="Phonetic">
            <Phonethic phonetic={props.results.phonetic} />
          </h3>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section>
              <div key={index} className="Meanings">
                <Meaning meaning={meaning} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
