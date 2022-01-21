import React from "react";
import { Link, useHistory } from "react-router-dom";

const style = {
  cardImg: {
    height: "200px",
    objectFit: "cover",
    filter: "brightness(0.8)",
  },
};

const Tarjeta = (props) => {
  const { titI, titulo, subtitulo, min, imag, link } = props;
  let history = useHistory();
  return (
    <div className="card vertical">
      <div className="card-image ">
        <img style={style.cardImg} src={imag} alt="" />
        <span className="card-title">{titI}</span>
      </div>
      <div className="card-content" style={{ minHeight: "200px" }}>
        <span className="card-title" style={{ minHeight: "100px" }}>
          {titulo}
        </span>
        <p>{subtitulo}</p>
      </div>
      <div
        className="card-action teal white-text"
        style={{ cursor: "pointer" }}
        onClick={() => history.push(link)}
      >
        VER {min}
        <i className="material-icons right">east</i>
      </div>
    </div>
  );
};

export default Tarjeta;
