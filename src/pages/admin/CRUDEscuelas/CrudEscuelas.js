import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ba17 from "../../../assets/images/ba17.png";
const style = {
  blockquote:{
    borderColor: "#ffffff",/* Just change the color value and that's it*/
  },
  headerImg: {
    position: "relative",
    width: "100%",
    height: "110%",
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
const CrudEscuelas = () => {
  useEffect(() => {
    var modales = document.querySelectorAll(".modal");
    M.Modal.init(modales, {});
    var textNeedCount = document.querySelectorAll("#input_text, #textarea1");
    M.CharacterCounter.init(textNeedCount);
  }, []);

  const ModalAgregarEscuela = () => {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content row ">
          <h5>Registrar Escuela, Centro o Unidad </h5>
          <div className="input-field col s8">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Nombre del centro</label>
          </div>
          <div className="input-field col s4">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Siglas</label>
          </div>
          <div className="input-field col s12">
            <blockquote>
              <p>Datos del Coordinador Académico (CA) o Jefe de Educación Continua - (Opcional)</p>
            </blockquote>
          </div>
          <div className="input-field col s12">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Nombre completo del CA</label>
          </div>
          <div className="input-field col s4">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Número telefónico del CA</label>
          </div>
          <div className="input-field col s3">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Extensión del CA</label>
          </div>
          <div className="input-field col s5">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Correo electrónico del CA</label>
          </div>
          <div className="input-field col s12">
            <blockquote>
              <p>Datos del Director - (Opcional)</p>
            </blockquote>
          </div>
          <div className="input-field col s12">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Nombre completo del Director</label>
          </div>
          <div className="input-field col s4">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Número telefónico del Director</label>
          </div>
          <div className="input-field col s3">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Extensión del Director</label>
          </div>
          <div className="input-field col s5">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Correo electrónico del Director</label>
          </div>
          <div className="input-field col s12">
            <blockquote>
              <p>Datos del Subdirector - (Opcional)</p>
            </blockquote>
          </div>
          <div className="input-field col s12">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Nombre completo del Subdirector</label>
          </div>
          <div className="input-field col s6">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">
              Número telefónico del Subdirector
            </label>
          </div>
          <div className="input-field col s6">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Extensión del Subdirector</label>
          </div>
          <div className="input-field col s12">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">
              Correo electrónico del Subdirector
            </label>
          </div>

          <br />
          <button type="submit" className="waves-effect waves-light btn   ">
            Registrar Escuela
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
  const ModalDetalleEscuela = () => {
    return (
      <div id="modal2" className="modal">
        <div className="modal-content row ">
          <h5>
           <b> CIC - Centro de Investigación en Computación </b><br />
            <br />
          </h5>
          <h6>
            <i className="tiny material-icons white-text text-darken-2  left circle  teal ">
              school
            </i>
            Coordinador Académico
          </h6>
          <p>
            <strong>Nombre:</strong> Antonio Ayola
            <span className="right">
              <strong>&nbsp;&nbsp;Correo :</strong> antonio@ipn.gob
            </span>
            <br />
            <strong>Número telefónico:</strong> 7711825959
            <span className="right">
              <strong>&nbsp;&nbsp;Extensión:</strong> 7711825959
            </span>
          </p>
          <div className="divider teal"></div>
          <h6>
          <i className="tiny material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
              local_library
            </i>
            Director
          </h6>
          <p>
            <strong>Nombre:</strong> Antonio Ayola
            <span className="right">
              <strong>&nbsp;&nbsp;Correo :</strong> antonio@ipn.gob
            </span>
            <br />
            <strong>Número telefónico:</strong> 7711825959
            <span className="right">
              <strong>&nbsp;&nbsp;Extensión:</strong> 7711825959
            </span>
          </p>
          <div className="divider teal"></div> <h6>
            <i className="tiny material-icons white-text text-darken-2  left circle  ipn ">
              school
            </i>
            Subdirector
          </h6>
          <p>
            <strong>Nombre:</strong> Antonio Ayola
            <span className="right">
              <strong>&nbsp;&nbsp;Correo :</strong> antonio@ipn.gob
            </span>
            <br />
            <strong>Número telefónico:</strong> 7711825959
            <span className="right">
              <strong>&nbsp;&nbsp;Extensión:</strong> 7711825959
            </span>
          </p>
          
          <br />
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
      <ModalAgregarEscuela />
      <ModalDetalleEscuela />
      <header className="" style={{ position: "relative", height: "50vh" }}>
        <img style={style.headerImg} className="responsive-img" src={ba17} alt="" />
        <div className="" style={style.headerFilter}></div>
        <div className="" style={style.headerTitle}>
          <h3 className="white-text center" style={{ fontSize: "3rem" }}>
            <b>UNIDADES ACADÉMICAS CENTROS Y ESCUELAS</b>
          </h3>
          
          <div className="">
            <center>
             
                <h5 className="black-text ">
               <blockquote><b><i> Aquí puedes consultar, agregar, editar o eliminar escuelas.</i></b></blockquote>
                </h5>
          
           
            </center>
          </div>
        </div>
      </header>
      <br/><br/>
      
      <div className="container">
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
          Agregar Escuela
        </a>
       
        <div className="row ">
          <div className="input-field col s8 xl5 m5 l5   ">
            <input id="input_text" type="text" data-length="13" required />
            <label htmlFor="nombreCurso">Escuela</label>
          </div>

          <div className="input-field col s2   ">
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
        <thead className=" light-blue lighten-4">
          <tr className=" ">
            <th className=" ">Escuela</th>
           {/*  <th> Coordinador Academico (CA)</th>
            <th> Director</th>
            <th> Subdirector </th> */}
            <th> Detalles</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>

        <tbody>
          <tr className="white">
            <td>
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
              <b>CIC - Centro de Investigación en Computación</b>
            </td>
           {/*  <td>
              <i className="material-icons  white-text text-darken-2  left circle  teal ">
                school
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>
              <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                local_library
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>Juan Francisco Islas Austria</td> */}
            <td>
              <a
                href="#modal2"
                className="modal-trigger waves-effect waves-light cyan-text text-darken-3 btn outlined"
                  style={{
                    borderColor: "#0091ea",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
              
              >
                <b>Ver Detalles</b>
              </a>
            </td>
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
          <tr className=" light-blue lighten-5">
            <td>
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
              <b>CIC - Centro de Investigación en Computación</b>
            </td>
           {/*  <td>
              <i className="material-icons  white-text text-darken-2  left circle  teal ">
                school
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>
              <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                local_library
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>Juan Francisco Islas Austria</td> */}
            <td>
              <a
                href="#modal2"
                className="modal-trigger waves-effect waves-light cyan-text text-darken-3 btn outlined"
               
                  style={{
                    borderColor: "#0091ea",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
              
              >
                <b>Ver Detalles</b>
              </a>
            </td>
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
          </tr><tr className= "white">
            <td>
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
              <b>CIC - Centro de Investigación en Computación</b>
            </td>
           {/*  <td>
              <i className="material-icons  white-text text-darken-2  left circle  teal ">
                school
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>
              <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                local_library
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>Juan Francisco Islas Austria</td> */}
            <td>
            <a href="#modal2"
                className="modal-trigger waves-effect waves-light cyan-text text-darken-3 btn outlined"
               
                  style={{
                    borderColor: "#0091ea",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
              
              >
                <b>Ver Detalles</b>
              </a>
            </td>
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
          </tr><tr className="light-blue lighten-5">
            <td>
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
              <b>CIC - Centro de Investigación en Computación</b>
            </td>
           {/*  <td>
              <i className="material-icons  white-text text-darken-2  left circle  teal ">
                school
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>
              <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                local_library
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>Juan Francisco Islas Austria</td> */}
            <td>
            <a href="#modal2"
                className="modal-trigger waves-effect waves-light cyan-text text-darken-3 btn outlined"
               
                  style={{
                    borderColor: "#0091ea",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
              
              >
                <b>Ver Detalles</b>
              </a>
            </td>
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
          </tr><tr>
            <td>
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
             <b> CIC - Centro de Investigación en Computación </b>
            </td>
           {/*  <td>
              <i className="material-icons  white-text text-darken-2  left circle  teal ">
                school
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>
              <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                local_library
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>Juan Francisco Islas Austria</td> */}
            <td>
            <a href="#modal2"
                className="modal-trigger waves-effect waves-light cyan-text text-darken-3 btn outlined"
               
                  style={{
                    borderColor: "#0091ea",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
              
              >
                <b>Ver Detalles</b>
              </a>
            </td>
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

export default CrudEscuelas;
