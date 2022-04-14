/* eslint-disable no-unused-vars */
import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h3>{props.results.word} </h3>
          <Phonetics phonetics={props.results.phonetics} />
        </section>
        <Photos photos={props.photos} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else return null;
}
