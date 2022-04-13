import React from "react";

export default function Antonyms(props) {
  if (props.antonyms.length > 0) {
    return (
      <div>
        <h6>Antonyms:</h6>|{" "}
        {props.antonyms.map(function (antonym, index) {
          return <span key={index}>{antonym} | </span>;
        })}
      </div>
    );
  } else return null;
}
