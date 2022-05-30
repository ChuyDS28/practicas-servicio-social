import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import parteba7 from "../../../assets/images/parteba7.png";
import ba9 from "../../../assets/images/ba9.png";
import {programasAsignados} from "../../../api/services/revisor/programas";
import FilaR from "./FilaR";
import "./ListadoRegistrosP.css"
import Footer from "../../Footer";
const style = {
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "30%",
    height: "100%",
    transform: " translate(-50% , -50%)",
    width: "50%",
  },
  fon: {
    height: "100%",
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    objectFit: "cover",
  },
  fon2: {
    position: "absolute",
    objectFit: "cover",
    height: "100%",
    width: "100%",
    top: "0px",
    left: "0px",
  },
  imag: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
  },
  imag2: {
    position: "absolute",
    right: "60px",
    top: "0%",
    height: "80%",
    width: "92px",
  },
  imag3: {
    position: "absolute",
    right: "180px",
    top: "0px",
    height: "100%",
    width: "92%",
  },
  imag4: {
    position: "absolute",
    right: "0px",
    top: "0px",
    height: "100%",
    width: "100%",
  },
  botones: {
    borderRadius: "20px",
  },
  cards: {
    width: "600px",
    position: "relative",
    left: "6%",
  },
  div: {
    height: "100%",
    position: "absolute",
    top: "0%",
    right: "0%",
  },
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },

};


const ListadoRegistrosP = () => {
  useEffect(() => {
    getRegistros();
  }, []);
  const [loading, setLoading] = useState(false);
  const [registros, setRegistros] = useState([]);
  const [numPag, setNumPag] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [idSolicitud, setIdSolicitud] = useState();
  const [idRevisor, setIdRevisor] = useState();  
 
 
  async function getRegistros() {
    
    if (numPag === 0) setLoading(true);
    console.log("funcion getSolicitudes");
    try {
      const dataU = await programasAsignados(131);
      console.log(dataU);
      if (dataU.data.length === 0) {
        setHasMore(false);
        //setLoading(false);
        return;
      }
      setHasMore(true);
      setRegistros([...registros, ...dataU.data]);
      setNumPag((newPage) => newPage + 1);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  return (
    <>
    
    <header className="row" style={{ position: "relative", height: "50vh" }}>
        <div
          className="col s12 m11 l9 xl8 "
          style={{
            position: "absolute",
            top: "-10px",
            height: "110%",
            left: "0px",
          }}
        >
          <img
            alt=""
            src={ba9}
            className="responsive-image"
            style={style.fon}
          />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">
            LISTADO DE <b>PROGRAMAS</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text">
              <b>
                Aquí puedes consultar el historial <br />de todos tus
                registros,  pendientes <br />y revisados
              </b>
            </h6>
          </blockquote>
        </div>

        <div className="col m6 l6 xl5 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba7}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
      <br /> 
    {/* <div className="container section  ">
      <div className="collection">
      <p className="white-text collection-item active  purple darken-2 ">
            <b>Nombre</b>
            <a className=" modal-trigger right white-text" href="#modal1">
              <b>Status</b>&nbsp;
            </a>
          </p> */}
        {/*   <Link to="/user/registroDetalle" className="collection-item">
            <span className="new badge grey darken-2" data-badge-caption="">
              Deprecado
            </span>
            Curso de Informatica
          </Link>
          <Link to="/user/registroDetalle" className="collection-item">
            <span className="new badge grey darken-2" data-badge-caption="">
              Deprecado
            </span>
            Curso de Informatica
          </Link>
          <Link to="/user/registroDetalle" className="collection-item">
            <span className="new badge blue " data-badge-caption="">
              Vigente
            </span>
            Curso de Informatica
          </Link>
          <Link to="/user/registroDetalle" className="collection-item">
            <span className="new badge blue " data-badge-caption="">
              Vigente
            </span>
            Curso de Informatica
          </Link> */}
          
        {/* <Link to="/revisor/revisarRegistro" className="collection-item black-text" style={{ border: "0px" }}>
          <span className="new badge blue  " data-badge-caption="">
            En proceso
          </span>
          <b>Curso de Informática</b>
        </Link>
        <Link to="/revisor/revisarRegistro" className="collection-item black-text purple lighten-5 " style={{ border: "0px" }}>
          <span className="new badge yellow darken-4" data-badge-caption="">
            Pendiente por revisar
          </span>
          <b>Curso de Informática</b>
        </Link>
        <Link to="/revisor/revisarRegistro"className="collection-item black-text" style={{ border: "0px" }}>
          <span className="new badge yellow darken-4" data-badge-caption="">
            Pendiente por revisar
          </span>
          <b>Curso de Informática</b>
        </Link>
        <Link to="/revisor/revisarRegistro" style={{ border: "0px" }} className="collection-item black-text purple lighten-5">
          <span className="new badge yellow darken-4 " data-badge-caption="">
            Pendiente por revisar
          </span>
          <b>Curso de Informática</b>
        </Link>
        
      </div>
    </div> */}

    <div className="container section  ">
    <table>
          <thead className="white-text collection-item active  purple darken-2 ">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Status</th>
              <th>Botón</th>
            </tr>
          </thead>
          <tbody className="collection-item black-text" style={{ border: "0px" }}>
            
            {registros.map((registro) => (
              <FilaR
                key={registro.id}
                registro={registro}
                link={"/revisor/revisarRegistro"}
                getRegistros={getRegistros}
              />
            ))}
          </tbody>
        </table>
      </div>

  </>
  
  );
};

export default ListadoRegistrosP;
