import React from "react";

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
    </div>
  );
}
