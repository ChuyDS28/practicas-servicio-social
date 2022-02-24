import React, { useEffect, useState } from "react";
import { PDFDownloadLink, BlobProvider, PDFViewer } from "@react-pdf/renderer";
import { Link } from "react-router-dom";
import Fila from "../Reportes/Fila";
//Reportes
import RegistrosAcademicos from "../../../components/Documents/ReporteRegistrosAcademicosss/RegistrosAcademicos";
import Servicios from "../../../components/Documents/ServiciosExtracurricularesRegistrados/ServiciosExtracurricularesRegistrados";
//Imgs
import ba21 from "../../../assets/images/ba21.png";
import parteba15 from "../../../assets/images/parteba15.png";
//data
import registrosTotal from "../../../data/registrosTotal.json";
import Reporte from "./Reporte";

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

const reportes = {
  13: {
    id: "13",
    name: "Con Órden y Acuerd trimestre actual",
    document: RegistrosAcademicos,
  },
  12: {
    id: "12",
    name: "Prog Ofert_Unid Móviles trimestre actual",
    document: Servicios,
  },
  11: {
    id: "11",
    name: "Prog Ofert_Idiomas trimestre actual",
    document: Servicios,
  },
  10: {
    id: "10",
    name: "Prog Ofert_Idiomas Reg CELEX trimestre actual",
    document: Servicios,
  },
  9: {
    id: "9",
    name: "Prog Ofert_Distanc trimestre actual",
    document: Servicios,
  },
  8: {
    id: "8",
    name: "Prog Ofert_Presenc trimestre actual",
    document: Servicios,
  },
  7: {
    id: "7",
    name: "Event Prese Idiom Reg CELEX trimestre actual",
    document: Servicios,
  },
  6: {
    id: "6",
    name: "Event a Distancia trimestre actual",
    document: Servicios,
  },
  5: {
    id: "5",
    name: "Event Presenciales trimestre actual",
    document: Servicios,
  },
  4: {
    id: "4",
    name: "Concent Eventos trimestre actual",
    document: Servicios,
  },
  3: {
    id: "3",
    name: "Estandares Compet trimestre actual",
    document: Servicios,
  },
  2: {
    id: "2",
    name: "Reportes Registros Académicos trimestre actual",
    document: Servicios,
  },
  1: {
    id: "1",
    name: "DVDR_3T_2021",
    document: Servicios,
  },
};
const BuscarReportes = () => {
  const [formValues, setFormValues] = useState({
    reporte: "0",
    trimestre: "",
    año: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [reporteSeleccionado, setReporteSeleccionado] = useState("0");
  const [data, setData] = useState([]);
  //const [DocumentoSeleccionado, setDocumentoSeleccionado] = useState(Servicios);

  const handleChange = (e) => {
    setReporteSeleccionado("0");
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  function search() {
    //setDocumentoSeleccionado(reportes[formValues.reporte].document);
    setReporteSeleccionado(formValues.reporte);
    setData(registrosTotal);
  }
  return (
    <div>
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
            LISTADO DE <br />
            <b>REPORTES</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text ">
              <b>
                Aquí puedes consultar todos los <br />
                reportes
              </b>
            </h6>
            <p className="black-text ">Podrás consultarlos por trimestre</p>
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
      <div className="container row" style={{ marginTop: "55px" }}>
        <p className="  light ">Ingresar los datos solicitados</p>
        <p>Reportes hechos:</p>
        <ol >
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
        </ol>
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

        <div className="row">
          <div className="  col s4 m5 xl5">
            <label>Reporte:</label>
            <select
              className="browser-default"
              defaultValue="0"
              name="reporte"
              value={formValues.reporte}
              onChange={handleChange}
              required
            >
              <option value="0" disabled>
                Selecciona una opción
              </option>
              {Object.values(reportes).map((report) => (
                <option value={report.id}>
                  {report.id}.{report.name}
                </option>
              ))}
            </select>
          </div>
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
            <select
              className="browser-default"
              defaultValue="2021"
              type="date"
              required
            >
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
        <button
          className="waves-effect waves-light btn col s12"
          onClick={search}
        >
          Buscar
          <i className="material-icons right">picture_as_pdf</i>
        </button>
        <hr />
        {data.length > 0 && reporteSeleccionado !== "0" && (
          <Reporte id={reporteSeleccionado} data={data} />
        )}
      </div>
    </div>
  );
};

export default BuscarReportes;
