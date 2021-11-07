import React from 'react'
import { Link } from "react-router-dom";

const style = {
  cardImg: {
    objectFit: "cover",
    filter: "brightness(0.8)",
  },

};

const Tarjeta = (props) => {
    return ( 
          <div className="col s12 m6 l4 center" style={style.cardsize}>
            <div className="card vertical"
            >
              <div className="card-image ">
                <img
                  style={style.cardImg}
                  src={props.imag}
                  alt=""
                />
                <span className="card-title">{props.titI}</span>
              </div>
              <div className="card-content" style={{minHeight:"220px"}}>
                <span className="card-title" style={{minHeight:"100px"}}>
                  {props.titulo}
                </span>
                <p>{props.subtitulo}</p>
              </div>
              <div className="card-action teal">
                <Link to={props.link} className=" white-text ">
                  Ver {props.min}
                  <i className="material-icons right">east</i>
                </Link>
              </div>
            </div>
          </div>
     );
}
 
export default Tarjeta;