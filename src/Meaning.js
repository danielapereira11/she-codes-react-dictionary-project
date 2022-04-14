import React from "react";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <span className="example">{definition.example}</span>
            </p>
          </div>
        );
      })}

      <Antonyms antonyms={props.meaning.antonyms} />

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
