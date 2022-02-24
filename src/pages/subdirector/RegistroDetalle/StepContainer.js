import React from "react";
import { Link } from "react-router-dom";

const style = {
  buttonContainer: {
    margin: "35px 0",
    padding: "25px 15px",
    borderRadius: "5px",
    border: "1px solid #9e9e9e",
  },
  orderCircle: {
    fontSize: "15px",
    fontWeight: 700,
    background: "#821752",
    color: "#fff",
    padding: "4px 9px",
    borderRadius: "50%",
  },
  comentariosContainer: {
    marginTop: "25px",
    padding: "25px 15px",
    borderRadius: " 5px",
  },
};
const statusConfig = [
  {
    icon: "error",
    iconColor: "small material-icons blue-text",
    containerColor: "col s12 blue lighten-3",
    badgeColor: "new badge blue",
    coment: "Falta por subir formato",
  },
  {
    icon: "done_all",
    iconColor: "small material-icons amber-text",
    containerColor: "col s12 amber lighten-3",
    badgeColor: "new badge amber",
    coment: "Pendiente por ser revisado",
  },
  {
    icon: "warning",
    iconColor: "small material-icons red-text",
    containerColor: "col s12 red lighten-3",
    badgeColor: "new badge red",
    coment: "Documentación rechazada, Observaciones: ",
  },
  {
    icon: "check",
    iconColor: "small material-icons green-text",
    containerColor: "col s12 green lighten-3",
    badgeColor: "new badge green",
    coment: "Formato validado de forma satisfactoria",
  },
];
const StepContainer = (props) => {
  const { step, title, status, btnTitle, observaciones, callback } = props;
  return (
    <div className="row grey lighten-4" style={style.buttonContainer}>
      <div className="col s12">
        <span style={style.orderCircle}>{step}</span>

        <span>
          <strong>&nbsp;&nbsp; {title}&nbsp;</strong>
        </span>
        <span className={statusConfig[status].iconColor}>
          {statusConfig[status].icon}
        </span>
        {status !== 1 && (
          <button
            onClick={callback}
            className="waves-effect waves-light btn right blue-grey darken-3"
          >
            {status === 3 ? "Descargar " : "Subir "} {btnTitle}
            <i className="material-icons right">picture_as_pdf</i>
          </button>
        )}
      </div>
      <div
        className={statusConfig[status].containerColor}
        style={style.comentariosContainer}
      >
        <span className={statusConfig[status].badgeColor} data-badge-caption="">
          Comentarios
        </span>
        <p>{statusConfig[status].coment}</p>
        <p>{observaciones && observaciones}</p>
      </div>
    </div>
  );
};

export default StepContainer;
