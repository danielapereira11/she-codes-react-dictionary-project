import React from "react";
import "./Dictionary.css";

export default function AudioPhonetic(props) {
  if (props.phonetic.audio !== "") {
    return (
      <a
        className="audioPhonetic"
        href={props.phonetic.audio}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        🔈{" "}
      </a>
    );
  } else return null;
}
