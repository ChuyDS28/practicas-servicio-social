import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import RegistrarInstructor from "../../../components/RegistrarInstructor";
import parteba6 from "../../../assets/images/parteba6.png";
import ba6 from "../../../assets/images/ba6.png";
import "./ListadoInstructores.css";
import { obtenerInstructores } from "../../../api/services/instructores.js";
import { getUserData } from "../../../utils/userData";
import Modal from "../../../components/Modal.js";
import FilasInstructor from "./FilasInstructor.js";

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
    height: "100%",
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
const ListadoInstructores = () => {
  const [modalAgregarInstructorr, setModalAgregarInstructorr] = useState(false);
  const [instructores, setInstructores] = useState([]);

  function capitalize(word) {
    return word.length > 0
      ? word[0].toUpperCase() + word.slice(1).toLowerCase()
      : word;
  }

  function capitalizeName(name) {
    try {
      const words = name.split(" ");
      const capitalizeArray = words.map((str) => capitalize(str));
      return capitalizeArray.join(" ");
    } catch (error) {
      return name;
    }
  }

  useEffect(() => {
    getInstructores();
  }, []);

  console.log(instructores);
  async function getInstructores() {
    try {
      const dataU = await obtenerInstructores(0);
      setInstructores(dataU.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  return (
    <>
      <Modal
        open={modalAgregarInstructorr}
        fnCloseModal={() => setModalAgregarInstructorr(false)}
      >
        <div className="modal-content">
          <RegistrarInstructor
            getInstructores={getInstructores}
            ModalRegistro={setModalAgregarInstructorr}
          />
        </div>
      </Modal>

      <header
        className="row"
        style={{ position: "relative", height: "50vh", marginBottom: "50px" }}
      >
        <div
          className="col s12 m11 l10 xl8 "
          style={{
            position: "absolute",
            top: "-30px",
            height: "122%",
            left: "0px",
          }}
        >
          <img alt="" src={ba6} className="responsive-img" style={style.fon} />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 className="titulo">
            LISTADO DE <b>INSTRUCTORES</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text ">
              <b>
                Aquí puedes consultar y registrar <br />
                instructores
              </b>
            </h6>
            <p className="black-text ">
              Solo podrás actualizar los vinculados a tu centro
            </p>
          </blockquote>
        </div>

        <div className="col m8 l8 xl8 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba6}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>

      <div className="bigContainer">
        <div className="row ">
          <div className="  col s12 l6 m12 xl6 ">
            <Link
              to="/subdirector/menu"
              className="waves-effect waves-light btn-flat left"
            >
              Regresar
            </Link>
          </div>

          <div className="col s12 l6 m12 xl6">
            <button
              className="modal-trigger waves-effect waves-light btn right"
              onClick={() => setModalAgregarInstructorr(true)}
            >
              Agregar nuevo Instructor
              <i className="material-icons right">add</i>
            </button>
            <button
              type="submit"
              className="waves-effect waves-light btn outlined right"
            >
              Buscar
              <i className="material-icons right">search</i>
            </button>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #d3d3d3",
            overflow: "auto",
            margin: "25px 0",
          }}
        >
          <table
          /* className="striped  responsive-table " */
          >
            <thead className="grey lighten-3   grey-text text-darken-3">
              <tr className="">
                <th style={{ minWidth: "190px" }}> Nombre</th>
                <th> RFC</th>
                <th> Area</th>
                <th> Unidad Academica</th>
                <th> CV</th>
                <th> Doc. Probatorios </th>
                <th style={{ maxWidth: "60px" }}> Actualizar</th>
                {/*  <th className="red accent-1"> Status</th> */}
              </tr>
            </thead>
            <tbody>
              {instructores.map((instructor) => {
                let Area;
                Area = capitalizeName(instructor.area.replace(/_/g, " "));
                return (
                  <FilasInstructor
                    key={instructor.id}
                    nombre={instructor.nombreCompleto}
                    rfc={instructor.rfc}
                    area={Area}
                    unidad={instructor.unidadAcademica.nombre}
                    id={instructor.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ListadoInstructores;
