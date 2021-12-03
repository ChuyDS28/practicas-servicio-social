import React from "react";
import { Link, useHistory } from "react-router-dom";
const FilaS = (props) => {
  let estilo=""
  let revisor = ""
  let color2=""
  let colour=""
  if (props.status=="Pendiente - Asignar Revisor"){
    revisor="Asignar revisor"
    color2="new badge red"
    estilo="modal-trigger waves-effect waves-light btn"
  }
  else if (props.status=="Asignado"){
    revisor=props.texto2
    estilo="black-text"
    color2="new badge green"
  }
  else{
    revisor=props.status2
    estilo="black-text"
    color2="new badge yellow darken-4"
  }
  if(props.status2=="En proceso"){
    colour="new badge yellow darken-4"
  }else if(props.status2=="Asignado"){
    colour="new badge green"
  }
 else if(props.status2=="Pendiente - Asignar Revisor"){
   colour="new badge red"
 }
 
  return (
    <tr
      className={props.color1}
      onClick={() => {
        //  history.push("/admin/DetallesRegistro");
      }}
    >
      <td>
        <b>{props.solicitud}</b>
      </td>
      <td>
        <span className={color2} data-badge-caption="">
          {props.status}
        </span>
        <span className={colour}  data-badge-caption="">
          {props.status2}
        </span>
      </td>
      <td>
        <a className={estilo} href={props.link}>
          {revisor}
        </a>
      </td>
      <td>
        <Link
          to="/admin/DetallesRegistro"
          className="waves-effect waves-light btn outlined"
        >
          Ver
        </Link>
      </td>
    </tr>
  );
};

export default FilaS;