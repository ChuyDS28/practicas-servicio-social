import React from "react";
import { Link, useHistory } from "react-router-dom";
const Filas = (props) => {
  let estilo = "";
  let color2 = "";
  let icon = "";
  let accion = "";
  if (props.cargo == "Revisor") {
    icon = "rate_review";
  } else if (props.cargo == "Subdirector Académico") {
    icon = "local_library";
  } else {
    icon = "book";
  }
  if (props.status == "Cuenta activada") {
    accion = "Desactivar cuenta";
    color2 = "new badge green";
    estilo = "modal-trigger waves-effect waves-light btn outlined";
  } else if (props.status == "Cuenta desactivada") {
    accion = "Activar cuenta";
    color2 = "new badge grey";
    estilo = "teal accent-4 modal-trigger waves-effect waves-light btn";
  } else {
    accion = "Activar cuenta";
    color2 = "new badge amber";
    estilo = "teal accent-4 modal-trigger waves-effect waves-light btn";
  }

  return (
    <tr className={props.color1}>
      <td>
        <b>{props.nombre}</b>
      </td>
      <td>
        <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
          {icon}
          {/* { props.cargo=="Revisor" ? "rate_review" :"local_library"} */}
        </i>
        <b>{props.cargo}</b>
      </td>
      <td>
        <b>{props.num}</b>
      </td>
      <td>
        <span className={color2} data-badge-caption="">
          {props.status}
        </span>
      </td>
      <td>
        <button className={estilo} href={props.link}>
          {accion}
        </button>
      </td>
      <td>
        <button
          className="waves-effect waves-light btn outlined"
          style={{ margin: "15px 0" }}
          onClick={() => props.fn()}
        >
          Ver
        </button>
      </td>
    </tr>
  );
};

export default Filas;
