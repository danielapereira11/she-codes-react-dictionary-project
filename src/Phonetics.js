import React from "react";
import AudioPhonetic from "./AudioPhonetic";
import "./Dictionary.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            {phonetic.text} <AudioPhonetic phonetic={phonetic} />{" "}
          </div>
        );
      })}
    </div>
  );
}
