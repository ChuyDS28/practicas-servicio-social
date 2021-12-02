import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import parteba10 from "../../../assets/images/parteba10.png";
import ba13 from "../../../assets/images/ba13.png";
import FilaU from "./FilaU";
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
const AdministrarUsuarios = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);
  const ModalInfo = () => {
    return (
      <div id="modal3" className="modal">
        <div className="modal-content  ">
          <div className="light-blue lighten-2 white-text section center">
            <h5 className="center ">Datos</h5>
          </div>
          <br />
          <div className="row">
            <div className="col s12 m12 l12 xl7">
              <p>
                <strong>Nombre:&nbsp;&nbsp;</strong>Pedro Díaz Coronel
              </p>
            </div>

            <div className="col s12 m12 l12 xl4">
              <p>
                <strong>Tipo de usuario:&nbsp;&nbsp;</strong>Subdirector
              </p>
            </div>

            <div className="col s12 xl7">
              <p>
                <strong>Escuela, unidad o centro:&nbsp;&nbsp;</strong>
                Juan de Dios Bátiz
              </p>
            </div>
            <div className="col s12 m4 xl5">
              <p>
                <strong>Cargo:&nbsp;&nbsp;</strong>Principal
              </p>
            </div>
            <div className="col s12 m4 xl7">
              <p>
                <strong>Fecha de registro:&nbsp;&nbsp;</strong>16/11/2021
              </p>
            </div>
            <div className="col s12 m4 xl5">
              <p>
                <strong>Fecha de inactividad:&nbsp;&nbsp;</strong>17/11/2021
              </p>
            </div>
            <div className="col s12 m4 xl7">
              <p>
                <strong>Número de telefono:&nbsp;&nbsp;</strong>5570293846
              </p>
            </div>
            <div className="col s12 m4 xl5">
              <p>
                <strong>Extensión:&nbsp;&nbsp;</strong>551728
              </p>
            </div>
          </div>
          <button className="light-blue lighten-2 white-text modal-close waves-effect waves-green btn-flat right">
            Cerrar
          </button>
          <br />
        </div>
      </div>
    );
  };

  return (
    <>
      <ModalInfo />
      <header className="row" style={{ position: "relative", height: "50vh" }}>
        <div
          className="col s12 m11 l10 xl8 "
          style={{
            position: "absolute",
            top: "-60px",
            height: "122%",
            left: "0px",
          }}
        >
          <img alt="" src={ba13} className="responsive-img" style={style.fon} />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">
            LISTADO DE <b>USUARIOS</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text ">
              <b>
                Aquí puedes consultar las personas <br />
                que quieren registrarse
              </b>
            </h6>
          </blockquote>
        </div>

        <div className="col m8 l8 xl8 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba10}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
      <div className="container  ">
        <table className="striped responsive-table ">
          <thead className="teal accent-4">
            <tr>
              <th className="teal accent-4 white-text">Nombre</th>
              <th className="teal accent-4 white-text">Tipo de usuario</th>
              <th className="teal accent-4 white-text">Núm. Empleado </th>
              <th className="teal accent-4 white-text">Status</th>
              <th className="teal accent-4 white-text">Acciones</th>
              <th className="teal accent-4 white-text">Datos</th>
            </tr>
          </thead>

          <tbody>
            <FilaU
              color1=" green lighten-5"
              nombre="Antonio Ayola"
              cargo="Subdirector Académico"
              num="121312"
              status="Cuenta activada"          
              link="#modal1"
              link2="#modal3"
            />
            <FilaU
              color1="white"
              nombre="Antonio Ayola"
              cargo="Subdirector Académico"
              num="45456"
              status="Cuenta desactivada"
              boton="Activar cuenta"
              link="#modal1"
              link2="#modal3"
            />
            <FilaU
              color1="green lighten-5"
              nombre="Antonio Ayola"
              cargo="Revisor"
              num="-"
              status="Cuenta sin activar"
              link="#modal1"
              link2="#modal3"
            />
            <FilaU
              color1="white"
              nombre="Antonio Ayola"
              cargo="Subdirector Académico"
              num="456456"
              status="Cuenta activada"
              link1="#modal1"
              link2="#modal3"
            />
            <FilaU
              color1="green lighten-5"
              nombre="Antonio Ayola"
              cargo="Revisor"
              num="-"
              status="Cuenta activada"
              link1="#modal1"
              link2="#modal3"
            />
            <FilaU
              color1="white"
              nombre="Antonio Ayola"
              cargo="Director"
              num="sds"
              status="Cuenta activada"
              link="#modal1"
              link2="#modal3"
            />
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdministrarUsuarios;
