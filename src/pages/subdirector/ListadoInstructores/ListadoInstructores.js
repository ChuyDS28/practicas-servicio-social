import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import RegistrarInstructor from "../../../components/RegistrarInstructor";
import parteba6 from "../../../assets/images/parteba6.png";
import ba6 from "../../../assets/images/ba6.png";
import Footer from "../../../pages/Footer";
import "./ListadoInstructores.css";
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
  useEffect(() => {
    var modales = document.querySelectorAll(".modal");
    M.Modal.init(modales, {});
    var textNeedCount = document.querySelectorAll("#input_text, #textarea1");
    M.CharacterCounter.init(textNeedCount);
  }, []);

  const ModalAgregarInstructor = () => {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content  ">
          <RegistrarInstructor />
        </div>
      </div>
    );
  };
  const ModalActualizarInstructor = () => {
    return (
      <div id="modal2" className="modal">
        <div className="modal-content  ">
          <h5>Actualizar Instructor</h5>
          <p>
            <strong>Nombre del Instructor:</strong> Antonio Ayola
            <br />
            <strong>RFC con Homoclave:</strong> VECJ880326 XXX
            <br />
            <strong>Área:</strong> TICS
          </p>

          <div className="file-field input-field col s12">
            <p className="  light ">
              Adjuntar CV actualizado del Instructor en formato PDF
            </p>
            <div className="btn">
              <span>Subir CV</span>
              <input type="file" accept="application/pdf" required />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Adjuntar CV del Instructor en formato PDF"
              />
            </div>
          </div>
          <div className="input-field col s12">
            <p className="  light ">
              Adjuntar documentos académicos y probatorios del Instructor en
              formato PDF, recuerda nombrarlos de acuerdo a la nomenclatura
              especificada.
            </p>
            <div className="teal lighten-5" style={style.infoContainer}>
              <span className="small material-icons blue-text ">error</span>
              <span className="new badge blue darken-2" data-badge-caption="">
                Nota
              </span>
              <p>
                Documentos probatorios:
                <br /> · Título · Certificado · Cédula · Constancias · Diplomas
                o documentos que avalen su experiencia
                <br />
                <strong>Subir solo un pdf con todos los documentos.</strong>
              </p>
            </div>
            <div className="file-field input-field col s12">
              <div className="btn">
                <span>Cargar archivo</span>
                <input type="file" accept="application/pdf" required />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Documentos probatorios"
                />
              </div>
            </div>
          </div>

          <br />
          <button type="submit" className="waves-effect waves-light btn   ">
            Actualizar Instructor
            <i className="material-icons right">picture_as_pdf</i>
          </button>
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
      <ModalAgregarInstructor />
      <ModalActualizarInstructor />

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
          <img alt="" src={ba6} className="responsive-img" style={style.fon} />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">
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

      <div className="container  ">
        <Link
          to="/subdirector/menu"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>
        <a
          href="#modal1"
          className="modal-trigger waves-effect waves-light btn right  pink accent-1"
        >
          Agregar nuevo Instructor
          <i className="material-icons right">add</i>
        </a>
        <br />
        <div className="row ">
          <div className="input-field  col s12 l6 m12 xl6 ">
            <input id="input_text" type="text" data-length="13" required />
            <label htmlFor="nombreCurso">RFC con Homoclave</label>
          </div>

          <div className="input-field col s12 l6 m12 xl6">
            <center>
              <button
                type="submit"
                className="waves-effect waves-light btn outlined teal-text text-accent-4 show-on-smal "
                style={{ borderColor: "#00bfa5", borderWidth: "2px" }}
              >
                Buscar
                <i className="material-icons right">search</i>
              </button>
            </center>
          </div>
        </div>

        <table className="striped responsive-table">
          <thead className="red accent-1 white-text ">
            <tr className="red accent-1 ">
              <th className="red accent-1"> Nombre</th>
              <th className="red accent-1"> RFC</th>
              <th className="red accent-1"> Area</th>
              <th className="red accent-1"> CV</th>
              <th className="red accent-1"> Doc. Probatorios </th>
              <th className="red accent-1"> Actualizar</th>
              {/*  <th className="red accent-1"> Status</th> */}
            </tr>
          </thead>

          <tbody>
            <tr className="red lighten-4">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td>
                <b>VECJ880326 XXX</b>
              </td>
              <td>
                <b>TICs</b>
              </td>
              <td>
                <button className="waves-effect waves-light btn  pink accent-1">
                  CV
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-10px",
                  marginBottom: "0px",
                }}
              >
                <button
                  className="waves-effect waves-light btn  pink-text text-accent-2  outlined"
                  style={{
                    borderColor: "#FF72D2",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-12px",
                  marginBottom: "0px",
                }}
              >
                <a
                  href="#modal2"
                  className="modal-trigger waves-light btn-flat  red accent-3 white-text "
                >
                  Actualizar
                </a>
              </td>
              {/* <td
                style={{
                  position: "relative",
                  marginBottom: "0px",
                  marginTop: "-20px",
                }}
              >
                <span className="new badge green" data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
            </tr>
            <tr className=" ">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td>
                <b>VECJ880326 XXX</b>
              </td>
              <td>
                <b>TICs</b>
              </td>
              <td>
                <button className="waves-effect waves-light btn  pink accent-1">
                  CV
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-10px",
                  marginBottom: "0px",
                }}
              >
                <button
                  className="waves-effect waves-light btn  pink-text text-accent-2  outlined"
                  style={{
                    borderColor: "#FF72D2",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-12px",
                  marginBottom: "0px",
                }}
              >
                <a
                  href="#modal2"
                  className="modal-trigger waves-light btn-flat  red accent-3 white-text "
                >
                  Actualizar
                </a>
              </td>
              {/* <td
                style={{
                  position: "relative",
                  marginBottom: "0px",
                  marginTop: "-20px",
                }}
              >
                <span className="new badge green" data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
            </tr>
            <tr className="red lighten-4">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td>
                <b>VECJ880326 XXX</b>
              </td>
              <td>
                <b>TICs</b>
              </td>
              <td>
                <button className="waves-effect waves-light btn  pink accent-1">
                  CV
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-10px",
                  marginBottom: "0px",
                }}
              >
                <button
                  className="waves-effect waves-light btn  pink-text text-accent-2  outlined"
                  style={{
                    borderColor: "#FF72D2",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-12px",
                  marginBottom: "0px",
                }}
              >
                <a
                  href="#modal2"
                  className="modal-trigger waves-light btn-flat  red accent-3 white-text "
                >
                  Actualizar
                </a>
              </td>
              {/* <td
                style={{
                  position: "relative",
                  marginBottom: "0px",
                  marginTop: "-20px",
                }}
              >
                <span className="new badge green" data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
            </tr>
            <tr className=" ">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td>
                <b>VECJ880326 XXX</b>
              </td>
              <td>
                <b>TICs</b>
              </td>
              <td>
                <button className="waves-effect waves-light btn  pink accent-1">
                  CV
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-10px",
                  marginBottom: "0px",
                }}
              >
                <button
                  className="waves-effect waves-light btn  pink-text text-accent-2  outlined"
                  style={{
                    borderColor: "#FF72D2",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-12px",
                  marginBottom: "0px",
                }}
              >
                <a
                  href="#modal2"
                  className="modal-trigger waves-light btn-flat  red accent-3 white-text "
                >
                  Actualizar
                </a>
              </td>
              {/* <td
                style={{
                  position: "relative",
                  marginBottom: "0px",
                  marginTop: "-20px",
                }}
              >
                <span className="new badge green" data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
            </tr><tr className="red lighten-4">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td>
                <b>VECJ880326 XXX</b>
              </td>
              <td>
                <b>TICs</b>
              </td>
              <td>
                <button className="waves-effect waves-light btn  pink accent-1">
                  CV
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-10px",
                  marginBottom: "0px",
                }}
              >
                <button
                  className="waves-effect waves-light btn  pink-text text-accent-2  outlined"
                  style={{
                    borderColor: "#FF72D2",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-12px",
                  marginBottom: "0px",
                }}
              >
                <a
                  href="#modal2"
                  className="modal-trigger waves-light btn-flat  red accent-3 white-text "
                >
                  Actualizar
                </a>
              </td>
              {/* <td
                style={{
                  position: "relative",
                  marginBottom: "0px",
                  marginTop: "-20px",
                }}
              >
                <span className="new badge green" data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
            </tr>
            <tr className=" ">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td>
                <b>VECJ880326 XXX</b>
              </td>
              <td>
                <b>TICs</b>
              </td>
              <td>
                <button className="waves-effect waves-light btn  pink accent-1">
                  CV
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-10px",
                  marginBottom: "0px",
                }}
              >
                <button
                  className="waves-effect waves-light btn  pink-text text-accent-2  outlined"
                  style={{
                    borderColor: "#FF72D2",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
              <td
                style={{
                  position: "relative",
                  marginTop: "-12px",
                  marginBottom: "0px",
                }}
              >
                <a
                  href="#modal2"
                  className="modal-trigger waves-light btn-flat  red accent-3 white-text "
                >
                  Actualizar
                </a>
              </td>
              {/* <td
                style={{
                  position: "relative",
                  marginBottom: "0px",
                  marginTop: "-20px",
                }}
              >
                <span className="new badge green" data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};
export default ListadoInstructores;
