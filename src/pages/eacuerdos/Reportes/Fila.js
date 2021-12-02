import React from "react";
import { Link } from "react-router-dom";

const Fila = (props) => {
  return (
    <>
      <a
        href="#modal2"
        className="modal-trigger collection-item black-text"
        style={{ border: "0px" }}
      >
        <b>{props.titulo}</b>
      </a>
    </>
  );
};

export default Fila;
