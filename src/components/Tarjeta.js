import React from 'react'
import { Link } from "react-router-dom";

const style = {
  cardImg: {
    objectFit: "cover",
    filter: "brightness(0.8)",
  },

};

const Tarjeta = (props) => {
  const {titI, titulo, subtitulo, min, imag, link} = props;
    return ( 
          <div className="col s12 m6 l4 center">
            <div className="card vertical"
            >
              <div className="card-image ">
                <img
                  style={style.cardImg}
                  src={imag}
                  alt=""
                />
                <span className="card-title">{titI}</span>
              </div>
              <div className="card-content" style={{minHeight:"220px"}}>
                <span className="card-title" style={{minHeight:"100px"}}>
                  {titulo}
                </span>
                <p>{subtitulo}</p>
              </div>
              <div className="card-action teal">
                <Link to={link} className=" white-text ">
                  Ver {min}
                  <i className="material-icons right">east</i>
                </Link>
              </div>
            </div>
          </div>
     );
}
 
export default Tarjeta;