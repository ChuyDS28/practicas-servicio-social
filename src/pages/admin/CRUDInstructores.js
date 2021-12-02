import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import RegistrarInstructor from "../../components/RegistrarInstructor";
import ba18 from "../../assets/images/ba18.png";
const style = {
  blockquote:{
    borderColor: "#ffffff",/* Just change the color value and that's it*/
  },
  headerImg: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
  },
  headerFilter: {
    position: "absolute",
    width: "100%",
    maxHeight: "100%",
    top: "0",
    height: "100%",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50% , -50%)",
    color: "#fff",
  },
  subtitleContainer: {
    width: "fit-content",
    border: "2px solid #fff",
    margin: "auto",
    padding: "0 1rem",
  },
};
const CRUDInstructores = () => {
  useEffect(() => {
    var modales = document.querySelectorAll(".modal");
    M.Modal.init(modales, {});
    var textNeedCount = document.querySelectorAll("#input_text, #textarea1");
    M.CharacterCounter.init(textNeedCount);
  }, []);

  const ModalAgregarInstructor = () => {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content  row">
          <RegistrarInstructor />
        </div>
      </div>
    );
  };

  return (
    <>
      <ModalAgregarInstructor />
      <header className="" style={{ position: "relative", height: "50vh" }}>
        <img style={style.headerImg} className="responsive-img" src={ba18} alt="" />
        <div className="" style={style.headerFilter}></div>
        <div className="" style={style.headerTitle}>
          <h2 className="white-text center" style={{ fontSize: "3rem" }}>
            <b>INSTRUCTORES</b>
          </h2>
          
          <div className="">
            <center>
             <blockquote>
                <h5 className="black-text ">
               <b><i> Aquí puedes consultar, agregar, editar o eliminar instructores.</i></b>
                </h5>
          </blockquote>
           
            </center>
          </div>
        </div>
      </header>
      <br/>
      <br/>
      <div className="container  ">
        <Link
          to="/admin/listadoCatalogos"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>
        <a
          href="#modal1"
          className="modal-trigger waves-effect waves-light btn right"
        >
          Agregar nuevo Instructor
        </a>

       
        <div className="row ">
          <div className="input-field col s8 m4 l4 xl4  ">
            <input id="input_text" type="text" data-length="13" required />
            <label htmlFor="nombreCurso">RFC con Homoclave</label>
          </div>

          <div className="input-field col s2">
            <button
              type="submit"
              className="waves-effect waves-light btn outlined  "
            >
              Buscar
              <i className="material-icons right">search</i>
            </button>
          </div>
        </div>
        <table className="striped responsive-table ">
          <thead className="yellow lighten-2">
            <tr className="yellow lighten-2">
              <th className="yellow lighten-2">Nombre</th>
              <th className="yellow lighten-2"> RFC</th>
              <th className="yellow lighten-2"> Area</th>
              <th className= "yellow lighten-2"> CV</th> <th> Doc. Probatorios </th>
              {/* <th> Status</th> */}
              <th className= "yellow lighten-2">Editar</th>
              <th className= "yellow lighten-2">Borrar</th>
            </tr>
          </thead>

          <tbody>
            <tr className="white">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td><b>VECJ880326 XXX</b></td>
              <td><b>TICs</b></td>

              <td>
                <button className="waves-effect waves-light btn yellow darken-3 ">CV</button>
              </td>
              <td>
                <button
                  className="waves-effect waves-light btn deep-orange-text text-accent-2  outlined"
                  style={{
                    borderColor: "#ffeb3b",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
              </td>
            </tr>
            <tr className="lime lighten-5">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td><b>VECJ880326 XXX</b></td>
              <td><b>TICs</b></td>

              <td>
                <button className="waves-effect waves-light btn yellow darken-3 ">CV</button>
              </td>
              <td>
              <button
                  className="waves-effect waves-light btn deep-orange-text text-accent-2  outlined"
                  style={{
                    borderColor: "#ffeb3b",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
              </td>
            </tr>   <tr className="white">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td><b>VECJ880326 XXX</b></td>
              <td><b>TICs</b></td>

              <td>
                <button className="waves-effect waves-light btn yellow darken-3  ">CV</button>
              </td>
              <td>
              <button
                  className="waves-effect waves-light btn deep-orange-text text-accent-2  outlined"
                  style={{
                    borderColor: "#ffeb3b",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
              </td>
            </tr>   <tr className="lime lighten-5">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td><b>VECJ880326 XXX</b></td>
              <td><b>TICs</b></td>

              <td>
                <button className="waves-effect waves-light btn yellow darken-3 ">CV</button>
              </td>
              <td>
              <button
                  className="waves-effect waves-light btn deep-orange-text text-accent-2  outlined"
                  style={{
                    borderColor: "#ffeb3b",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                 <b> Documentación</b>
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
              </td>
            </tr>   <tr className="white">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>Antonio Ayola</b>
              </td>
              <td><b>VECJ880326 XXX</b></td>
              <td><b>TICs</b></td>

              <td>
                <button className="waves-effect waves-light btn 5 yellow darken-3 ">CV</button>
              </td>
              <td>
              <button
                  className="waves-effect waves-light btn deep-orange-text text-accent-2  outlined"
                  style={{
                    borderColor: "#ffeb3b",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CRUDInstructores;
