/* eslint-disable no-unused-vars */
import React from "react";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return "Hello from Results";
  } else return null;
}
