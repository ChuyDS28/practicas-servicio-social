import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import Fila from "../../eacuerdos/Reportes/Fila";
import Footer from "../../Footer";
import ba21 from "../../../assets/images/ba21.png";
import parteba15 from"../../../assets/images/parteba15.png";
import { PDFDownloadLink, BlobProvider, PDFViewer } from "@react-pdf/renderer";
import Servicios from "../../../components/Documents/ServiciosExtracurricularesRegistrados/ServiciosExtracurricularesRegistrados";
const style = {
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
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
  fon7: {
    height: "91%",
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
    width: "85px",
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
    height: "105%",
    width: "60%",
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
  tit: {
    left: "0px",
    position: "absolute",
  },
};
const Reportes = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);
  const ModalEscoger = () => {
    return (
      <div id="modal2" className="modal">
        <div className="modal-content  ">
          <h5>Buscar un reporte</h5>

          <div className="input-field col s12">
            <p className="  light ">Ingresar los datos solicitados</p>
         {/*    <div className="teal lighten-5 " style={style.infoContainer}>
              <span className="small material-icons blue-text ">error</span>
              <span className="new badge blue darken-2" data-badge-caption="">
                Nota
              </span>
              <p>
                Verificar nombre del curso, el nombre del registro no se podra
                modificar ni eliminar.
                <br /> · Indicaciones.........
              </p>
            </div> */}
            <div className="input-field col s12">
              <input id="nombreCurso" type="text" required />
              <label htmlFor="nombreCurso">Nombre del reporte</label>
            </div>
            <div className="row">
            <div className="  col s4 m3 xl3">
          <label>Trimestre:</label>
          <select className="browser-default" defaultValue="Normal" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Primero</option>
            <option value="2">Segundo</option>
            <option value="2">Tercero</option>
          </select>
          </div>
          <div className="  col s4 m3 xl3">
          <label>Año:</label>
          <select className="browser-default" defaultValue="2021" type="date" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">2021</option>
            <option value="2">2022</option>
            <option value="3">2023</option>
            <option value="4">2024</option>
          </select>
       </div>
       </div>
          </div>

          <br />
          {/*   <button type="submit" className="modal-close waves-effect waves-light btn   ">
            Crear nuevo registro de programa
            <i className="material-icons right">picture_as_pdf</i>
          </button> */}
          <Link
            to="/subdirector/registroDetalle"
            className="modal-close waves-effect waves-light btn   "
          >
           Buscar
            <i className="material-icons right">picture_as_pdf</i>
          </Link>
          <button
            href="#!"
            className="modal-close waves-effect waves-green btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
    <ModalEscoger />
    
      <header className="row" style={{ position: "relative", height: "50vh" }}>
        <div
          className="col s12 m11 l10 xl8 "
          style={{
            position: "absolute",
            top: "-30px",
            height: "122%",
            left: "0px",
          }}
        >
          <img alt="" src={ba21} className="responsive-img" style={style.fon} />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">
            LISTADO DE <br/><b>REPORTES</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text ">
              <b>
                Aquí puedes consultar todos los <br />
                reportes
              </b>
            </h6>
            <p className="black-text ">
              Podrás consultarlos por trimestre
            </p>
          </blockquote>
        </div>

        <div className="col m8 l8 xl8 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba15}
            className="responsive-img"
            style={style.imag4}
          />
          </div>
       
      </header>
      
     <br/>
      <div className="container section  ">
      <div className="collection">
      <p className="white-text collection-item active  yellow darken-4">
            <b>Título</b>
            
          </p>
      
       <Fila titulo="DVDR_3T_2021"/>
       <Fila titulo="Reportes Registros Académicos trimestre actual"/>
       <Fila titulo="Estandares Compet trimestre actual"/>
       <Fila titulo="Concent Eventos trimestre actual"/>
       <Fila titulo="Event Presenciales trimestre actual"/>
       <Fila titulo="Event a Distancia trimestre actual"/>
       <Fila titulo="Event Prese Idiom Reg CELEX trimestre actual"/>
       <Fila titulo="Prog Ofert_Presenc trimestre actual"/>
       <Fila titulo="Prog Ofert_Distanc trimestre actual"/>
       <Fila titulo="Prog Ofert_Idiomas Reg CELEX trimestre actual"/>
       <Fila titulo="Prog Ofert_Idiomas trimestre actual"/>
       <Fila titulo="Prog Ofert_Unid Móviles trimestre actual"/>
       <Fila titulo="Con Órden y Acuerd trimestre actual"/>
      </div>
    </div>

















      {/* <PDFViewer width="100%" height="850px">
        <Servicios data={[]} />
      </PDFViewer> */}
    </>
  );
};

export default Reportes;
