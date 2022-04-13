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
            <ul>
              <li>
                {definition.definition} <br />
                <i>
                  <small>{definition.example}</small>
                </i>
              </li>
            </ul>
          </div>
        );
      })}

      <Antonyms antonyms={props.meaning.antonyms} />
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
