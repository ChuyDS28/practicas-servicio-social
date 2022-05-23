import React from "react";
import { Link, useNavigate } from "react-router-dom";

const style = {
  cardImg: {
    height: "200px",
    objectFit: "cover",
    filter: "brightness(0.8)",
  },
};

const Tarjeta = (props) => {
  const { titI, titulo, subtitulo, min, imag, link } = props;
  let navigate = useNavigate();
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
        className="card-action teal darken-1 white-text"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(link)}
      >
        VER {min}
        <i className="material-icons right">east</i>
      </div>
    </div>
  );
};

export default Tarjeta;
