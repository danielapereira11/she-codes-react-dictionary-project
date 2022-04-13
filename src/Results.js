/* eslint-disable no-unused-vars */
import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Dictionary.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h3>{props.results.word} </h3>
        <Phonetics phonetics={props.results.phonetics} />
        <br />
        <br />
        <h4>Definition</h4>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h5>{meaning.partOfSpeech}</h5>
              <Meaning meaning={meaning} />
              <br />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
